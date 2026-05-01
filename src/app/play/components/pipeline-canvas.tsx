'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow, Background, Controls, BackgroundVariant,
  useNodesState, useEdgesState, useReactFlow, addEdge,
  type Node, type Edge, type Connection,
} from '@xyflow/react';
import { PipelineNode } from './pipeline-node';
import { GameOverlay, type ResultState } from './game-overlay';
import { BLOCK_CONFIGS, type BlockType, type BlockConfig } from '../block-configs';
import { validatePipeline } from '../validate-pipeline';

const nodeTypes = { pipeline: PipelineNode };

const initialNodes: Node<BlockConfig>[] = [
  { id: '1', type: 'pipeline', position: { x: 200, y: 200 }, data: BLOCK_CONFIGS.source },
];

const SUCCESS_MESSAGES = [
  "Pipeline shipped! You're a 10x engineer! 🎉",
  "Code deployed. Jenkins is jealous.",
  "All green! Your on-call rotation just got boring.",
  "Shipped to prod. Nothing exploded... yet. 🤞",
];

const FAILURE_MESSAGES = [
  "Pipeline misconfigured. Have you tried turning it off and on again?",
  "Deploy failed. Did you even test this? 👀",
  "Error 418: I'm a teapot. And your pipeline is broken.",
  "The build team has left the chat. 💀",
  "Stack Overflow is down. You're on your own.",
];

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const TITLES = [
  { min: 0,   label: 'INTERN 👶' },
  { min: 200, label: 'JUNIOR DEV 💻' },
  { min: 500, label: 'SENIOR DEV 🧑‍💻' },
  { min: 900, label: '10x ENGINEER ⚡' },
];

const getTitle = (score: number) =>
  [...TITLES].reverse().find((t) => score >= t.min)!.label;

export function PipelineCanvas() {
  const [nodes, , onNodesChange] = useNodesState<Node<BlockConfig>>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition, addNodes } = useReactFlow();

  // Load score from localStorage on mount (client-only)
  const [score, setScore] = useState(() =>
    typeof window !== 'undefined' ? Number(localStorage.getItem('pipeline-score') ?? 0) : 0
  );
  const [result, setResult] = useState<ResultState>('idle');
  const [message, setMessage] = useState('');

  // Persist score whenever it changes
  useEffect(() => {
    localStorage.setItem('pipeline-score', String(score));
  }, [score]);

  const onConnect = useCallback((connection: Connection) => {
    setEdges((prev) => addEdge(connection, prev));
  }, [setEdges]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const blockType = event.dataTransfer.getData('blockType') as BlockType;
    if (!BLOCK_CONFIGS[blockType]) return;
    const position = screenToFlowPosition({ x: event.clientX, y: event.clientY });
    addNodes({ id: crypto.randomUUID(), type: 'pipeline', position, data: BLOCK_CONFIGS[blockType] });
  }, [screenToFlowPosition, addNodes]);

  const onDeploy = useCallback(() => {
    const valid = validatePipeline(nodes, edges);
    if (valid) {
      setScore((s) => s + 100);
      setMessage(pick(SUCCESS_MESSAGES));
      setResult('success');
    } else {
      setMessage(pick(FAILURE_MESSAGES));
      setResult('failure');
    }
  }, [nodes, edges]);

  return (
    <div className="flex-1 h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onConnect={onConnect}
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: true,
          style: { stroke: '#a78bfa', strokeWidth: 2 },
        }}
        colorMode="dark"
        fitView
      >
        <Background variant={BackgroundVariant.Dots} color="#3f3f46" gap={24} size={1.5} />
        <Controls />
      </ReactFlow>

      <GameOverlay
        score={score}
        title={getTitle(score)}
        result={result}
        message={message}
        onDeploy={onDeploy}
        onDismiss={() => setResult('idle')}
      />
    </div>
  );
}

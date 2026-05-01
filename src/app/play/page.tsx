'use client';

import { ReactFlow, Background, Controls, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Empty starting state — nodes and edges get added in Phase 3+
const initialNodes = [] as const;
const initialEdges = [] as const;

export function PlayPage() {
  return (
    <div className="w-screen h-screen bg-zinc-950">
      <ReactFlow
        defaultNodes={[...initialNodes]}
        defaultEdges={[...initialEdges]}
        colorMode="dark"
        fitView
      >
        {/* Dot grid background */}
        <Background variant={BackgroundVariant.Dots} color="#3f3f46" gap={24} size={1.5} />
        {/* Zoom + fit controls, bottom-left */}
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default PlayPage;

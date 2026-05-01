'use client';

import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Sidebar } from './components/sidebar';
import { PipelineCanvas } from './components/pipeline-canvas';

export function PlayPage() {
  return (
    // ReactFlowProvider makes the ReactFlow context available to all children,
    // which is required for useReactFlow() to work inside PipelineCanvas.
    <ReactFlowProvider>
      <div className="flex w-screen h-screen bg-zinc-950">
        <Sidebar />
        <PipelineCanvas />
      </div>
    </ReactFlowProvider>
  );
}

export default PlayPage;

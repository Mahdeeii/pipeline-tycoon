'use client';

import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import type { BlockConfig } from '../block-configs';

type PipelineNodeType = Node<BlockConfig, 'pipeline'>;

export function PipelineNode({ data }: NodeProps<PipelineNodeType>) {
  return (
    <div className={`${data.colorClass} ${data.borderClass} ${data.shadowClass} rounded-lg px-5 py-3 flex flex-col items-center gap-1 min-w-[90px] shadow-lg border`}>
      {data.hasInput && (
        <Handle type="target" position={Position.Left} className="!bg-zinc-300 !w-3 !h-3" />
      )}
      <span className="text-2xl">{data.icon}</span>
      <span className="text-white text-xs font-bold tracking-wide">{data.label.toUpperCase()}</span>
      {data.hasOutput && (
        <Handle type="source" position={Position.Right} className="!bg-zinc-300 !w-3 !h-3" />
      )}
    </div>
  );
}

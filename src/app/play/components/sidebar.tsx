'use client';

import { BLOCK_CONFIGS, type BlockType } from '../block-configs';

export function Sidebar() {
  const onDragStart = (event: React.DragEvent, blockType: BlockType) => {
    event.dataTransfer.setData('blockType', blockType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-20 h-full bg-zinc-900 border-r border-zinc-800 flex flex-col items-center gap-4 py-6 shrink-0">
      <span className="text-zinc-500 text-[10px] font-mono tracking-widest">BLOCKS</span>
      {(Object.keys(BLOCK_CONFIGS) as BlockType[]).map((type) => {
        const config = BLOCK_CONFIGS[type];
        return (
          <div
            key={type}
            draggable
            onDragStart={(e) => onDragStart(e, type)}
            className={`${config.colorClass} ${config.borderClass} rounded-lg p-2 flex flex-col items-center gap-1 w-14 cursor-grab active:cursor-grabbing shadow-lg border select-none`}
          >
            <span className="text-xl">{config.icon}</span>
            <span className="text-white text-[9px] font-bold tracking-wide">{config.label.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
}

export type BlockType = 'source' | 'build' | 'test' | 'deploy';

export type BlockConfig = {
  label: string;
  icon: string;
  colorClass: string;
  borderClass: string;
  shadowClass: string;
  hasInput: boolean;
  hasOutput: boolean;
};

export const BLOCK_CONFIGS: Record<BlockType, BlockConfig> = {
  source: { label: 'Source', icon: '📦', colorClass: 'bg-blue-500',   borderClass: 'border-blue-400',   shadowClass: 'shadow-blue-900/50',   hasInput: false, hasOutput: true  },
  build:  { label: 'Build',  icon: '🔨', colorClass: 'bg-orange-500', borderClass: 'border-orange-400', shadowClass: 'shadow-orange-900/50', hasInput: true,  hasOutput: true  },
  test:   { label: 'Test',   icon: '🧪', colorClass: 'bg-purple-500', borderClass: 'border-purple-400', shadowClass: 'shadow-purple-900/50', hasInput: true,  hasOutput: true  },
  deploy: { label: 'Deploy', icon: '🚀', colorClass: 'bg-green-500',  borderClass: 'border-green-400',  shadowClass: 'shadow-green-900/50',  hasInput: true,  hasOutput: false },
};

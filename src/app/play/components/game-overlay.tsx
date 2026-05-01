'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Confetti } from './confetti';

export type ResultState = 'idle' | 'success' | 'failure';

type Props = {
  score: number;
  title: string;
  result: ResultState;
  message: string;
  onDeploy: () => void;
  onDismiss: () => void;
};

const successVariant: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } },
  exit: { scale: 0.8, opacity: 0 },
};

const failureVariant: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1, opacity: 1,
    x: [0, -12, 12, -10, 10, -6, 6, 0],
    transition: { duration: 0.5 },
  },
  exit: { scale: 0.8, opacity: 0 },
};

export function GameOverlay({ score, title, result, message, onDeploy, onDismiss }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = `I scored ${score} pts on Pipeline Tycoon! Can you build a better CI/CD pipeline? 🚀`;
    const url = window.location.origin;
    if (navigator.share) {
      await navigator.share({ title: 'Pipeline Tycoon', text, url });
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-6 pointer-events-none">
        <div className="flex flex-col items-end">
          <span className="text-zinc-500 font-mono text-[10px] tracking-widest">{title}</span>
          <span className="text-zinc-400 font-mono text-sm">
            score: <span className="text-white font-bold">{score}</span>
          </span>
        </div>
        <button
          onClick={onDeploy}
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-2 rounded-lg font-mono text-sm tracking-wide transition-colors shadow-lg shadow-green-900/50 pointer-events-auto"
        >
          🚀 Deploy
        </button>
      </div>

      {/* Result modal */}
      <AnimatePresence>
        {result !== 'idle' && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
            {result === 'success' && <Confetti />}
            <motion.div
              variants={result === 'success' ? successVariant : failureVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`rounded-xl border px-10 py-8 flex flex-col items-center gap-4 shadow-2xl max-w-sm text-center z-40 ${
                result === 'success'
                  ? 'bg-zinc-900 border-green-500 shadow-green-900/50'
                  : 'bg-zinc-900 border-red-500 shadow-red-900/50'
              }`}
            >
              <span className="text-5xl">{result === 'success' ? '✅' : '💥'}</span>
              <p className="text-white font-mono text-sm leading-relaxed">{message}</p>
              {result === 'success' && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-green-400 font-mono text-xs">+100 pts</span>
                  <button
                    onClick={handleShare}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs px-4 py-2 rounded-lg transition-colors border border-zinc-700"
                  >
                    {copied ? '✅ copied!' : '🔗 share score'}
                  </button>
                </div>
              )}
              <button
                onClick={onDismiss}
                className="mt-2 text-zinc-400 hover:text-white font-mono text-xs underline transition-colors"
              >
                dismiss
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

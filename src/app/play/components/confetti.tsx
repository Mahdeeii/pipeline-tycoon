'use client';

import { motion } from 'framer-motion';

const COLORS = ['#60a5fa', '#f97316', '#a78bfa', '#22c55e', '#facc15', '#f43f5e'];

// Pre-generate particle data so values are stable across renders
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  color: COLORS[i % COLORS.length],
  left: `${(i * 2.1) % 100}%`,
  delay: (i * 0.03) % 0.8,
  duration: 1.4 + (i % 5) * 0.2,
  rotate: (i * 37) % 720 - 360,
  width: (i % 2 === 0) ? 'w-2 h-2' : 'w-3 h-1',
}));

export function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.width} rounded-sm`}
          style={{ backgroundColor: p.color, left: p.left, top: '-10px' }}
          animate={{ y: '110vh', rotate: p.rotate, opacity: [1, 1, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  );
}

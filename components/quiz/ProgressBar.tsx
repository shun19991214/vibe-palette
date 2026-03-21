"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
}

export function ProgressBar({ current, total, progress }: ProgressBarProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-neutral-500 font-medium tracking-wide">
          {current} / {total}
        </span>
        <span className="text-xs text-neutral-500 tabular-nums">{progress}%</span>
      </div>
      <div className="h-1.5 bg-neutral-800/60 rounded-full overflow-hidden glass">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-pink-400 to-amber-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

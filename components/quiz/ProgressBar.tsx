"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
}

export function ProgressBar({ current, total, progress }: ProgressBarProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-neutral-500 font-medium">
          {current} / {total}
        </span>
        <span className="text-xs text-neutral-500">{progress}%</span>
      </div>
      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-pink-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

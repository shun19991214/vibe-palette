"use client";

import { useState } from "react";
import type { Question } from "@/data/questions";

interface QuizCardProps {
  question: Question;
  onAnswer: (choiceId: string) => void;
  questionNumber: number;
}

export function QuizCard({ question, onAnswer, questionNumber }: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(choiceId: string) {
    if (selected) return;
    setSelected(choiceId);
    setTimeout(() => {
      onAnswer(choiceId);
      setSelected(null);
    }, 300);
  }

  return (
    <div className="w-full max-w-lg mx-auto animate-slide-up">
      {/* Question */}
      <div className="mb-8 text-center">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">
          Question {questionNumber}
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-white leading-snug">
          {question.text}
        </h2>
        {question.subtext && (
          <p className="mt-2 text-neutral-400 text-sm">{question.subtext}</p>
        )}
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 gap-3">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id)}
            disabled={selected !== null}
            className={`
              group flex items-center gap-4 p-4 rounded-2xl border text-left
              transition-all duration-200
              ${
                selected === choice.id
                  ? "border-white bg-white text-neutral-950 scale-[0.98]"
                  : selected !== null
                  ? "border-neutral-800 bg-neutral-900/50 text-neutral-600 cursor-not-allowed"
                  : "border-neutral-800 bg-neutral-900/50 text-white hover:border-neutral-600 hover:bg-neutral-800/80 hover:scale-[1.01] active:scale-[0.99]"
              }
            `}
          >
            <span className="text-2xl flex-shrink-0 w-10 text-center">
              {choice.emoji}
            </span>
            <span className="text-sm md:text-base font-medium leading-snug">
              {choice.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

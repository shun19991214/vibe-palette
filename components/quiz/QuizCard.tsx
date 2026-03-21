"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    }, 400);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg mx-auto"
      >
        {/* Question */}
        <div className="mb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs text-neutral-500 uppercase tracking-[0.3em] mb-4"
          >
            Q{questionNumber}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-2xl md:text-3xl font-medium text-white leading-snug"
          >
            {question.text}
          </motion.h2>
          {question.subtext && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-3 text-neutral-500 text-sm"
            >
              {question.subtext}
            </motion.p>
          )}
        </div>

        {/* Choices */}
        <div className="grid grid-cols-1 gap-3">
          {question.choices.map((choice, i) => (
            <motion.button
              key={choice.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleSelect(choice.id)}
              disabled={selected !== null}
              whileHover={selected === null ? { scale: 1.02 } : undefined}
              whileTap={selected === null ? { scale: 0.98 } : undefined}
              className={`
                group flex items-center gap-4 p-4 md:p-5 rounded-2xl text-left
                transition-all duration-300
                ${
                  selected === choice.id
                    ? "glass-strong border-white/30 text-white ring-2 ring-white/20 scale-[0.98]"
                    : selected !== null
                    ? "glass border-white/5 text-neutral-600 cursor-not-allowed opacity-40"
                    : "glass glass-hover border-white/10 text-white cursor-pointer"
                }
              `}
            >
              <span className="text-2xl flex-shrink-0 w-10 text-center">
                {choice.emoji}
              </span>
              <span className="text-sm md:text-base font-medium leading-snug">
                {choice.text}
              </span>
              {selected === choice.id && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto text-white/80"
                >
                  ✓
                </motion.span>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

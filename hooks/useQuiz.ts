"use client";

import { useState, useCallback } from "react";
import { QUESTIONS, type AxisScores } from "@/data/questions";
import { calculateResult, getTopThree } from "@/data/scoring";
import type { AestheticId } from "@/data/aesthetics";

const INITIAL_SCORES: AxisScores = {
  darkLight: 0,
  naturalArtificial: 0,
  pastFuture: 0,
  quietBold: 0,
};

export interface QuizState {
  currentIndex: number;
  answers: Record<number, string>;
  scores: AxisScores;
  isComplete: boolean;
  result: AestheticId | null;
  topThree: AestheticId[];
  progress: number;
}

export function useQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<AxisScores>({ ...INITIAL_SCORES });

  const totalQuestions = QUESTIONS.length;
  const isComplete = currentIndex >= totalQuestions;
  const progress = Math.round((currentIndex / totalQuestions) * 100);

  const result: AestheticId | null = isComplete ? calculateResult(scores) : null;
  const topThree: AestheticId[] = isComplete ? getTopThree(scores) : [];

  const answer = useCallback(
    (choiceId: string) => {
      const question = QUESTIONS[currentIndex];
      if (!question) return;

      const choice = question.choices.find((c) => c.id === choiceId);
      if (!choice) return;

      setAnswers((prev) => ({ ...prev, [question.id]: choiceId }));
      setScores((prev) => ({
        darkLight: prev.darkLight + choice.scores.darkLight,
        naturalArtificial: prev.naturalArtificial + choice.scores.naturalArtificial,
        pastFuture: prev.pastFuture + choice.scores.pastFuture,
        quietBold: prev.quietBold + choice.scores.quietBold,
      }));
      setCurrentIndex((prev) => prev + 1);
    },
    [currentIndex]
  );

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setScores({ ...INITIAL_SCORES });
  }, []);

  return {
    currentIndex,
    currentQuestion: QUESTIONS[currentIndex] ?? null,
    answers,
    scores,
    isComplete,
    result,
    topThree,
    progress,
    totalQuestions,
    answer,
    reset,
  };
}

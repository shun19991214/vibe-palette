"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useQuiz } from "@/hooks/useQuiz";
import { QuizCard } from "@/components/quiz/QuizCard";
import { ProgressBar } from "@/components/quiz/ProgressBar";

export default function QuizPage() {
  const router = useRouter();
  const {
    currentQuestion,
    currentIndex,
    isComplete,
    result,
    progress,
    totalQuestions,
    answer,
  } = useQuiz();

  useEffect(() => {
    if (isComplete && result) {
      router.push(`/result/${result}`);
    }
  }, [isComplete, result, router]);

  if (isComplete) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-950">
        <div className="text-center animate-fade-in">
          <div className="text-4xl mb-4">✨</div>
          <p className="text-neutral-400">結果を計算中...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors flex items-center gap-1"
        >
          ← 戻る
        </Link>
        <span className="font-serif text-neutral-300 text-sm font-medium italic">
          Vibe Palette
        </span>
      </header>

      {/* Progress */}
      <div className="px-6 mb-8 max-w-2xl mx-auto w-full">
        <ProgressBar
          current={currentIndex}
          total={totalQuestions}
          progress={progress}
        />
      </div>

      {/* Quiz content */}
      <div className="flex-1 flex items-start justify-center px-6 pb-12">
        {currentQuestion && (
          <QuizCard
            question={currentQuestion}
            onAnswer={answer}
            questionNumber={currentIndex + 1}
          />
        )}
      </div>
    </main>
  );
}

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
    goBack,
    canGoBack,
  } = useQuiz();

  useEffect(() => {
    if (isComplete && result) {
      router.push(`/result/${result}`);
    }
  }, [isComplete, result, router]);

  if (isComplete) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050508]">
        <div className="text-center animate-fade-in">
          <div className="text-5xl mb-4 animate-float">✨</div>
          <p className="text-neutral-400">結果を計算中...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050508] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
        <button
          onClick={canGoBack ? goBack : undefined}
          disabled={!canGoBack}
          className={`text-sm transition-colors flex items-center gap-1 ${
            canGoBack
              ? "text-neutral-400 hover:text-white cursor-pointer"
              : "text-neutral-700 cursor-not-allowed"
          }`}
        >
          ← 前の質問
        </button>
        <Link href="/" className="font-serif text-neutral-300 text-sm font-medium italic">
          Vibe Palette
        </Link>
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

"use client";

import * as React from "react";
import Link from "next/link";
import {
  Clock,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Flag,
  RotateCcw,
  Calculator,
  FileText,
  ChevronLeft,
  ChevronRight,
  Send,
  Award,
  BarChart3,
  Bookmark,
  Share2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { sampleMockQuestions } from "@/data/examsData";

export function ExamSimulator({ examCode = "NISM Series V-A", testTitle = "Mutual Fund Distributors - Diagnostic Mock Test" }) {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState({}); // { [questionId]: selectedOptionIndex }
  const [markedForReview, setMarkedForReview] = React.useState({}); // { [questionId]: boolean }
  const [visited, setVisited] = React.useState({ 1: true }); // question 1 visited
  const [secondsRemaining, setSecondsRemaining] = React.useState(1800); // 30 minutes for demo
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [confirmSubmitOpen, setConfirmSubmitOpen] = React.useState(false);
  const [calculatorOpen, setCalculatorOpen] = React.useState(false);
  const [instructionsOpen, setInstructionsOpen] = React.useState(false);
  const [calcInput, setCalcInput] = React.useState("");
  const [reviewFilter, setReviewFilter] = React.useState("all");

  const questions = sampleMockQuestions;
  const currentQ = questions[currentIdx];

  // Timer countdown
  React.useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const handleAutoSubmit = () => {
    setIsSubmitted(true);
    triggerConfetti();
  };

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const markVisited = (idx) => {
    const qId = questions[idx].id;
    setVisited((prev) => ({ ...prev, [qId]: true }));
  };

  const handleSelectOption = (optIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIndex,
    }));
  };

  const handleClearResponse = () => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
    // Also advance to next if available
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      markVisited(currentIdx + 1);
    }
  };

  const handleSaveAndNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      markVisited(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
      markVisited(currentIdx - 1);
    }
  };

  const jumpToQuestion = (idx) => {
    setCurrentIdx(idx);
    markVisited(idx);
  };

  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      import("canvas-confetti").then((confetti) => {
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }).catch(() => {});
    }
  };

  const handleSubmitTest = () => {
    setConfirmSubmitOpen(false);
    setIsSubmitted(true);
    triggerConfetti();
  };

  const handleRetake = () => {
    setAnswers({});
    setMarkedForReview({});
    setVisited({ 1: true });
    setCurrentIdx(0);
    setSecondsRemaining(1800);
    setIsSubmitted(false);
  };

  // Calculator logic
  const handleCalcBtn = (char) => {
    if (char === "C") {
      setCalcInput("");
    } else if (char === "=") {
      try {
        // Safe evaluation of basic math
        const sanitized = calcInput.replace(/[^0-9+\-*/.]/g, "");
        const result = Function(`"use strict"; return (${sanitized})`)();
        setCalcInput(String(result));
      } catch (e) {
        setCalcInput("Error");
      }
    } else {
      setCalcInput((prev) => prev + char);
    }
  };

  // Scoring computation
  const stats = React.useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    questions.forEach((q) => {
      const selected = answers[q.id];
      if (selected === undefined) {
        unattempted++;
      } else if (selected === q.correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const totalMarks = correct * 1.0 - incorrect * 0.25;
    const maxMarks = questions.length * 1.0;
    const scorePercent = ((totalMarks / maxMarks) * 100).toFixed(1);
    const isPass = totalMarks >= maxMarks * 0.5; // 50% passing threshold for V-A

    return {
      correct,
      incorrect,
      unattempted,
      totalMarks: Math.max(0, totalMarks).toFixed(2),
      maxMarks,
      scorePercent,
      isPass,
      accuracy: attemptedCount(answers) > 0 ? ((correct / attemptedCount(answers)) * 100).toFixed(1) : 0,
    };
  }, [answers, questions]);

  function attemptedCount(ans) {
    return Object.keys(ans).length;
  }

  // Question status helpers
  const getQuestionStatus = (qId) => {
    const isAnswered = answers[qId] !== undefined;
    const isMarked = !!markedForReview[qId];
    const isSeen = !!visited[qId];

    if (isAnswered && isMarked) return "answered-review";
    if (isMarked) return "marked";
    if (isAnswered) return "answered";
    if (isSeen) return "not-answered";
    return "not-visited";
  };

  const answeredCount = Object.keys(answers).length;
  const markedCount = Object.values(markedForReview).filter(Boolean).length;
  const notAnsweredCount = questions.filter(
    (q) => visited[q.id] && answers[q.id] === undefined
  ).length;
  const notVisitedCount = questions.filter((q) => !visited[q.id]).length;

  // -------------------------------------------------------------
  // RENDER TEST REPORT VIEW (WHEN SUBMITTED)
  // -------------------------------------------------------------
  if (isSubmitted) {
    const filteredQuestions = questions.filter((q) => {
      const selected = answers[q.id];
      if (reviewFilter === "incorrect") return selected !== undefined && selected !== q.correctIndex;
      if (reviewFilter === "correct") return selected === q.correctIndex;
      if (reviewFilter === "unattempted") return selected === undefined;
      return true;
    });

    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="brand">{examCode}</Badge>
                <span className="text-xs text-slate-500 font-medium">Diagnostic Test Analysis</span>
              </div>
              <h1 className="text-xl font-bold text-slate-900 mt-1">{testTitle}</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={handleRetake} variant="outline" size="sm" className="gap-1.5">
                <RotateCcw className="h-4 w-4" />
                <span>Re-take Test</span>
              </Button>
              <Link href="/exams">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-1.5">
                  <span>Explore Full 10-Mock Pack</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Result Banner Card */}
          <div
            className={`p-6 rounded-2xl border ${
              stats.isPass
                ? "bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border-emerald-500/40 text-white"
                : "bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 border-red-500/40 text-white"
            } shadow-lg relative overflow-hidden`}
          >
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                      stats.isPass
                        ? "bg-emerald-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {stats.isPass ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                    {stats.isPass ? "OFFICIAL STATUS: PASSED" : "STATUS: NEEDS IMPROVEMENT"}
                  </span>
                  <span className="text-xs text-slate-300">Passing Cutoff: 50.0%</span>
                </div>

                <h2 className="text-3xl font-extrabold mt-3 tracking-tight">
                  Your Score: <span className="text-emerald-400">{stats.totalMarks}</span> / {stats.maxMarks}
                </h2>
                <p className="text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                  {stats.isPass
                    ? "Congratulations! You have demonstrated strong competency in Mutual Fund operational regulations and NAV calculations. With our full 10 mock series, you are projected to score 85%+ on the real exam."
                    : "You fell just short of the 50% passing threshold. Review the detailed explanations below to identify concepts in taxation and scheme categorization that need reinforcement."}
                </p>
              </div>

              {/* Score Badges */}
              <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0">
                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10 text-center">
                  <div className="text-xs text-slate-300 font-medium">Accuracy</div>
                  <div className="text-2xl font-bold text-white mt-0.5">{stats.accuracy}%</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10 text-center">
                  <div className="text-xs text-slate-300 font-medium">Percentile</div>
                  <div className="text-2xl font-bold text-amber-300 mt-0.5">89th</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card className="p-4 border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Correct (+1.0)</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-emerald-600 mt-2">{stats.correct}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">+{stats.correct}.00 Marks</div>
            </Card>

            <Card className="p-4 border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Incorrect (-0.25)</span>
                <XCircle className="h-4 w-4 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-600 mt-2">{stats.incorrect}</div>
              <div className="text-[11px] text-red-600 mt-0.5">-{(stats.incorrect * 0.25).toFixed(2)} Negative Deduction</div>
            </Card>

            <Card className="p-4 border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Unattempted (0)</span>
                <HelpCircle className="h-4 w-4 text-slate-400" />
              </div>
              <div className="text-2xl font-bold text-slate-700 mt-2">{stats.unattempted}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">0.00 Marks lost</div>
            </Card>

            <Card className="p-4 border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Time Taken</span>
                <Clock className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mt-2">
                {formatTimer(1800 - secondsRemaining)}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Avg: 45s / question</div>
            </Card>
          </div>

          {/* Question Explanations Section */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Detailed Solutions &amp; Explanations</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Review every question with official NISM workbook chapter citations.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setReviewFilter("all")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    reviewFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600"
                  }`}
                >
                  All ({questions.length})
                </button>
                <button
                  onClick={() => setReviewFilter("incorrect")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    reviewFilter === "incorrect" ? "bg-white text-red-600 shadow-xs" : "text-slate-600"
                  }`}
                >
                  Incorrect ({stats.incorrect})
                </button>
                <button
                  onClick={() => setReviewFilter("correct")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    reviewFilter === "correct" ? "bg-white text-emerald-600 shadow-xs" : "text-slate-600"
                  }`}
                >
                  Correct ({stats.correct})
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="mt-6 space-y-6">
              {filteredQuestions.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctIndex;
                const isSkipped = userAns === undefined;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-xl border border-slate-200/90 hover:border-slate-300 transition-colors bg-white space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-md bg-slate-100 font-bold text-slate-700 text-xs flex items-center justify-center">
                          {q.id}
                        </span>
                        <Badge variant="outline" className="text-[11px] font-normal text-slate-600">
                          {q.chapter}
                        </Badge>
                      </div>

                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Correct (+1.00)
                        </span>
                      ) : isSkipped ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          Skipped (0.00)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                          <XCircle className="h-3.5 w-3.5" /> Incorrect (-0.25)
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                      {q.question}
                    </p>

                    {/* Options status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correctIndex;
                        const isThisSelected = optIdx === userAns;

                        let style = "border-slate-200 bg-slate-50 text-slate-700";
                        if (isThisCorrect) {
                          style = "border-emerald-300 bg-emerald-50 text-emerald-900 font-medium ring-1 ring-emerald-300";
                        } else if (isThisSelected && !isThisCorrect) {
                          style = "border-red-300 bg-red-50 text-red-900 font-medium ring-1 ring-red-300";
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-lg border flex items-center justify-between ${style}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-400">
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              <span>{opt}</span>
                            </div>
                            {isThisCorrect && (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {isThisSelected && !isThisCorrect && (
                              <XCircle className="h-4 w-4 text-red-600 shrink-0 ml-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-100/80 text-xs text-slate-700 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-blue-900">
                        <Sparkles className="h-3.5 w-3.5 text-blue-700" />
                        <span>Explanation &amp; Concept Note:</span>
                      </div>
                      <p className="whitespace-pre-line leading-relaxed text-slate-700">
                        {q.explanation}
                      </p>
                      <div className="pt-1 text-[11px] text-blue-800 font-medium">
                        Reference: {q.reference}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ACTIVE EXAM SIMULATOR CBT INTERFACE
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none">
      {/* Top Prometric / CBT Test Bar */}
      <header className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between shadow-md border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            NISM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight">{examCode}</span>
              <span className="text-slate-400 text-xs">|</span>
              <span className="text-slate-300 text-xs hidden md:inline">{testTitle}</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Candidate: <strong>Aaditya Sharma</strong> • Roll: <strong>CAE-2026-9812</strong>
            </div>
          </div>
        </div>

        {/* Right Tools & Timer */}
        <div className="flex items-center gap-4">
          {/* Scientific Calculator Tool */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCalculatorOpen(true)}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 h-8 text-xs gap-1"
          >
            <Calculator className="h-3.5 w-3.5 text-blue-400" />
            <span className="hidden sm:inline">Calculator</span>
          </Button>

          {/* Instructions Tool */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInstructionsOpen(true)}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 h-8 text-xs gap-1"
          >
            <FileText className="h-3.5 w-3.5 text-slate-400" />
            <span className="hidden sm:inline">Instructions</span>
          </Button>

          {/* Official Clock */}
          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${
              secondsRemaining < 300
                ? "bg-red-950/80 border-red-500/50 text-red-300 timer-warning"
                : "bg-slate-800/90 border-slate-700 text-slate-100"
            }`}
          >
            <Clock className="h-4 w-4 text-blue-400" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-slate-400 font-mono leading-none">TIME LEFT</span>
              <span className="font-mono font-bold text-sm leading-tight text-white">
                {formatTimer(secondsRemaining)}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Examination Split Screen */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Question Pane */}
        <main className="flex-1 flex flex-col justify-between bg-white border-r border-slate-200 overflow-y-auto">
          {/* Question Sub-Header */}
          <div>
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-800 text-sm">
                  Question No. {currentIdx + 1} of {questions.length}
                </span>
                <span className="text-xs text-slate-500 font-normal">|</span>
                <span className="text-xs font-medium text-slate-600 truncate max-w-md">
                  {currentQ.chapter}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200/50">
                  +{currentQ.marks}.00 Marks
                </span>
                <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded font-semibold border border-red-200/50">
                  -{currentQ.negativeMarks} Negative
                </span>
              </div>
            </div>

            {/* Question Text & Options */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="text-base text-slate-900 font-medium leading-relaxed">
                {currentQ.question}
              </div>

              {/* Multiple Choice Radio List */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = answers[currentQ.id] === optIdx;
                  return (
                    <label
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/60 shadow-xs ring-1 ring-blue-600"
                          : "border-slate-200 hover:bg-slate-50/80 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        checked={isSelected}
                        onChange={() => handleSelectOption(optIdx)}
                        className="mt-1 h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <div className="text-sm leading-snug">
                        <span className="font-bold text-slate-700 mr-2">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span className={isSelected ? "font-semibold text-slate-900" : "text-slate-800"}>
                          {option}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Action Control Bar */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="gap-1 text-xs"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearResponse}
                disabled={answers[currentQ.id] === undefined}
                className="text-xs text-slate-600 hover:text-red-600"
              >
                Clear Response
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleToggleReview}
                className="gap-1.5 text-xs text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200"
              >
                <Flag className="h-3.5 w-3.5 text-purple-600" />
                <span>
                  {markedForReview[currentQ.id] ? "Unmark Review" : "Mark for Review & Next"}
                </span>
              </Button>

              <Button
                size="sm"
                onClick={handleSaveAndNext}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs gap-1 font-semibold"
              >
                <span>{currentIdx === questions.length - 1 ? "Save" : "Save & Next"}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>

        {/* Right Side: Palette & Status Sidebar */}
        <aside className="w-full lg:w-80 bg-slate-50 border-t lg:border-t-0 border-slate-200 flex flex-col justify-between shrink-0">
          <div>
            {/* Candidate Summary Box */}
            <div className="p-4 bg-white border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                    alt="Aaditya Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Aaditya Sharma</h4>
                  <p className="text-[11px] text-slate-500">Roll: CAE-2026-9812</p>
                  <span className="inline-block px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
                    Live Session Active
                  </span>
                </div>
              </div>
            </div>

            {/* Official NISM Legend Counters */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 text-xs space-y-2">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Question Palette Legend
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">
                    {answeredCount}
                  </span>
                  <span className="text-slate-700">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-red-600 text-white font-bold flex items-center justify-center text-[10px]">
                    {notAnsweredCount}
                  </span>
                  <span className="text-slate-700">Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-[10px]">
                    {markedCount}
                  </span>
                  <span className="text-slate-700">Marked Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[10px]">
                    {notVisitedCount}
                  </span>
                  <span className="text-slate-700">Not Visited</span>
                </div>
              </div>
            </div>

            {/* Question Numbers Matrix Grid */}
            <div className="p-4">
              <div className="text-xs font-bold text-slate-700 mb-3 flex items-center justify-between">
                <span>Select a Question:</span>
                <span className="text-[11px] font-normal text-slate-500">
                  {currentIdx + 1} of {questions.length}
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-2">
                {questions.map((q, idx) => {
                  const status = getQuestionStatus(q.id);
                  const isCurrent = idx === currentIdx;

                  let colorClass = "bg-slate-200 text-slate-700 border-slate-300"; // not-visited
                  if (status === "answered") {
                    colorClass = "bg-emerald-600 text-white border-emerald-700";
                  } else if (status === "not-answered") {
                    colorClass = "bg-red-500 text-white border-red-600";
                  } else if (status === "marked") {
                    colorClass = "bg-purple-600 text-white border-purple-700";
                  } else if (status === "answered-review") {
                    colorClass = "bg-purple-600 text-white border-purple-700 ring-2 ring-emerald-400";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => jumpToQuestion(idx)}
                      className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center border transition-all cursor-pointer ${colorClass} ${
                        isCurrent ? "ring-2 ring-blue-600 ring-offset-2 scale-105" : ""
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Submit Test Button */}
          <div className="p-4 bg-white border-t border-slate-200">
            <Button
              onClick={() => setConfirmSubmitOpen(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 text-sm shadow-sm gap-2"
            >
              <Send className="h-4 w-4" />
              <span>Submit Examination</span>
            </Button>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Instant evaluation with detailed explanations
            </p>
          </div>
        </aside>
      </div>

      {/* Confirmation Submit Dialog */}
      <Dialog open={confirmSubmitOpen} onOpenChange={setConfirmSubmitOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-slate-900 font-bold">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <span>Submit Test Confirmation</span>
            </DialogTitle>
            <DialogDescription className="text-slate-600 text-xs">
              Are you sure you want to conclude this examination? Review your response summary before final submission:
            </DialogDescription>
          </DialogHeader>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Total Questions:</span>
              <span className="font-bold text-slate-900">{questions.length}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-emerald-700 font-medium">Attempted / Answered:</span>
              <span className="font-bold text-emerald-700">{answeredCount}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-purple-700 font-medium">Marked for Review:</span>
              <span className="font-bold text-purple-700">{markedCount}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-red-700 font-medium">Not Answered / Unvisited:</span>
              <span className="font-bold text-red-700">{questions.length - answeredCount}</span>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" size="sm" onClick={() => setConfirmSubmitOpen(false)}>
              Resume Exam
            </Button>
            <Button
              size="sm"
              onClick={handleSubmitTest}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
            >
              Yes, Submit &amp; View Result
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Financial Calculator Dialog */}
      <Dialog open={calculatorOpen} onOpenChange={setCalculatorOpen}>
        <DialogContent className="max-w-xs p-4">
          <DialogHeader>
            <DialogTitle className="text-sm font-bold flex items-center gap-2">
              <Calculator className="h-4 w-4 text-blue-600" />
              <span>NISM Virtual Calculator</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <div className="bg-slate-900 text-white font-mono text-xl p-3 rounded-lg text-right overflow-x-auto min-h-[48px] flex items-center justify-end">
              {calcInput || "0"}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {["C", "/", "*", "-"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcBtn(btn)}
                  className="p-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold text-xs"
                >
                  {btn}
                </button>
              ))}
              {["7", "8", "9", "+"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcBtn(btn)}
                  className={`p-2.5 rounded-lg font-bold text-xs ${
                    btn === "+" ? "bg-slate-200 hover:bg-slate-300" : "bg-white border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {btn}
                </button>
              ))}
              {["4", "5", "6", "="].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcBtn(btn)}
                  className={`p-2.5 rounded-lg font-bold text-xs ${
                    btn === "=" ? "bg-blue-600 text-white hover:bg-blue-700 row-span-2" : "bg-white border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {btn}
                </button>
              ))}
              {["1", "2", "3", "0"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcBtn(btn)}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 font-bold text-xs"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Instructions Dialog */}
      <Dialog open={instructionsOpen} onOpenChange={setInstructionsOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-bold text-base">Examination Instructions</DialogTitle>
          </DialogHeader>
          <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed max-h-80 overflow-y-auto pr-2">
            <p><strong>1. Examination Structure:</strong> This diagnostic test consists of multiple choice questions based on the latest NISM curriculum.</p>
            <p><strong>2. Scoring Scheme:</strong> Each correct response carries 1.00 mark. Negative marking of 25% (0.25 marks) applies to incorrect attempts.</p>
            <p><strong>3. Navigation:</strong> Use the Question Palette on the right to navigate directly to any question. Click &quot;Save &amp; Next&quot; to save answers.</p>
            <p><strong>4. Review Flag:</strong> Use &quot;Mark for Review&quot; if you wish to revisit a question before final submission.</p>
            <p><strong>5. Virtual Calculator:</strong> You may use the built-in calculator on the top bar for NAV, expense ratio, or compounded return calculations.</p>
          </div>
          <DialogFooter>
            <Button size="sm" onClick={() => setInstructionsOpen(false)}>
              Close Instructions
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

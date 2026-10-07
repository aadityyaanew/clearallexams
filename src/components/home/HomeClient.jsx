"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileText,
  Video,
  Sparkles,
  ArrowRight,
  Star,
  Play,
  RotateCcw,
  Zap,
  Check,
  Building,
  GraduationCap,
  Layers,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ExamCard } from "@/components/shared/ExamCard";
import {
  examsList,
  examCategories,
  testimonials,
  freeStudyMaterials,
  liveClassesSchedule,
} from "@/data/examsData";

export function HomeClient() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [quickExamId, setQuickExamId] = React.useState("nism-series-v-a-mutual-fund");

  const displayedExams = React.useMemo(() => {
    if (selectedCategory === "all") return examsList.slice(0, 6);
    return examsList
      .filter((e) => e.category === selectedCategory)
      .slice(0, 6);
  }, [selectedCategory]);

  const handleQuickLaunch = () => {
    router.push(`/mock-test/${quickExamId}`);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION (Clean, Modern, Aligned with Logo & Brand) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-18 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 7 Cols: Value Proposition */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-xs text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-slate-900">2026 NISM Editions</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-600 font-semibold">98.4% First-Attempt Pass Rate</span>
              </div>

              {/* Punchy Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl/tight font-extrabold tracking-tight text-slate-900">
                Smart Practice for Confident Exams.{" "}
                <span className="text-blue-600">Crack NISM</span> on Your First Attempt.
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Train on real Prometric CBT test simulators with chapter quizzes, -0.25 negative marking calculations, and our 100% Pass Assurance Guarantee.
              </p>

              {/* Quick Exam Launch Selector Bar */}
              <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-2 max-w-lg mx-auto lg:mx-0">
                <select
                  value={quickExamId}
                  onChange={(e) => setQuickExamId(e.target.value)}
                  className="w-full sm:flex-1 h-10 px-3 rounded-lg border-0 bg-slate-50 text-xs font-semibold text-slate-800 outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {examsList.map((exam) => (
                    <option key={exam.id} value={exam.id}>
                      {exam.code}: {exam.title}
                    </option>
                  ))}
                </select>

                <Button
                  onClick={handleQuickLaunch}
                  size="sm"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 px-5 text-xs shrink-0 gap-1.5 shadow-xs"
                >
                  <Play className="h-3.5 w-3.5 fill-white" />
                  <span>Start Free Mock</span>
                </Button>
              </div>

              {/* Secondary Links & Trust */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>100% Money-Back Pass Assurance</span>
                </span>
                <span>•</span>
                <Link href="/exams" className="text-blue-600 font-semibold hover:underline">
                  Browse All 24+ Certifications →
                </Link>
              </div>

              {/* Trust Metric Counters */}
              <div className="pt-4 grid grid-cols-3 gap-4 text-center lg:text-left border-t border-slate-200/80">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900">52,000+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Certified Aspirants</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600">98.4%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Pass Rate</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-orange-600">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Fee Refund Guarantee</div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Interactive Visual CBT Exam Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-5 space-y-4">
                {/* Header bar of CBT Card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono font-bold text-slate-700 ml-1.5">
                      NISM CBT Simulator
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded-md font-bold">
                    <Clock className="h-3 w-3 text-amber-400" />
                    <span>118:42</span>
                  </div>
                </div>

                {/* Simulated Question */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-500 font-medium">
                    <span>Question 6 of 100</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">
                      +1.00 / -0.25
                    </span>
                  </div>

                  <p className="font-bold text-slate-900 leading-snug">
                    Under SEBI (Mutual Funds) Regulations, who holds scheme securities in safe custody for unitholders?
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200 flex items-center justify-between">
                      <span>A. Asset Management Company (AMC)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-400 font-bold flex items-center justify-between ring-1 ring-emerald-300">
                      <span>B. Custodian (SEBI Registered)</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
                      <span>C. Registrar &amp; Transfer Agent (RTA)</span>
                    </div>
                  </div>
                </div>

                {/* Question Status Palette */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Question Palette Status:</span>
                    <span className="text-emerald-700 font-bold">5 Answered • 1 Active</span>
                  </div>
                  <div className="grid grid-cols-8 gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className="h-6 rounded bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shadow-2xs"
                      >
                        {n}
                      </span>
                    ))}
                    <span className="h-6 rounded bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-blue-400">
                      6
                    </span>
                    {[7, 8].map((n) => (
                      <span
                        key={n}
                        className="h-6 rounded bg-slate-100 text-slate-600 font-bold text-[10px] flex items-center justify-center"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <Link href="/mock-test/nism-va-demo" className="block pt-1">
                  <Button
                    size="sm"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs"
                  >
                    <Play className="h-3.5 w-3.5 fill-white" />
                    <span>Launch Live Interactive Simulator</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-auto" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ALUMNI RECOGNITION ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Trusted by aspirants &amp; teams across top BFSI institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "HDFC Bank",
              "ICICI Prudential",
              "Motilal Oswal",
              "Zerodha Partners",
              "Kotak Securities",
              "Axis Bank",
              "SBI Mutual Fund",
            ].map((bank, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXAM CATALOG ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Featured Certification Test Series
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Updated for 2026 syllabus with full mocks and chapter quizzes
            </p>
          </div>

          <Link href="/exams">
            <Button variant="outline" size="sm" className="text-xs font-semibold">
              <span>View All 24+ Series</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {examCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </section>

      {/* ---------------- 4-STEP WORKFLOW ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-slate-900">4 Steps to Clear Your Exam</h3>
            <p className="text-xs text-slate-500">Structured approach for first-attempt success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-blue-600">Step 1</span>
              <h4 className="font-bold text-sm text-slate-900">Diagnostic Mock</h4>
              <p className="text-xs text-slate-500">Benchmark current score.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-blue-600">Step 2</span>
              <h4 className="font-bold text-sm text-slate-900">Chapter Drills</h4>
              <p className="text-xs text-slate-500">Solve topic quizzes until 85%+.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-xs font-bold text-blue-600">Step 3</span>
              <h4 className="font-bold text-sm text-slate-900">CBT Simulation</h4>
              <p className="text-xs text-slate-500">Timed 120-minute practice.</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
              <span className="text-xs font-bold text-emerald-700">Step 4</span>
              <h4 className="font-bold text-sm text-emerald-950">Pass Guarantee</h4>
              <p className="text-xs text-emerald-800">Clear exam or 100% refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FORMULA SHEETS & LIVE CLASSES ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Notes */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-base">Free Formula Sheets</h3>
              </div>
              <p className="text-xs text-slate-500">
                Download PDF cheat sheets for NAV, Option Greeks, and DCF formulas.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              {freeStudyMaterials.slice(0, 2).map((m) => (
                <div key={m.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex justify-between items-center">
                  <span className="font-medium text-slate-800 truncate mr-2">{m.title}</span>
                  <Link href="/study-material" className="text-blue-600 font-bold shrink-0">
                    PDF →
                  </Link>
                </div>
              ))}
            </div>

            <Link href="/study-material">
              <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
                View All Free Sheets
              </Button>
            </Link>
          </div>

          {/* Masterclasses */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-purple-600" />
                <h3 className="font-bold text-slate-900 text-base">Weekend Live Batches</h3>
              </div>
              <p className="text-xs text-slate-500">
                Interactive masterclasses with ex-fund managers on difficult numericals.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              {liveClassesSchedule.slice(0, 2).map((c) => (
                <div key={c.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-slate-900">{c.title}</div>
                    <div className="text-[11px] text-slate-500">{c.date}</div>
                  </div>
                  <Link href="/live-classes" className="text-purple-600 font-bold shrink-0 ml-2">
                    RSVP →
                  </Link>
                </div>
              ))}
            </div>

            <Link href="/live-classes">
              <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
                Explore Live Classes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Candidate Results</h2>
            <p className="text-xs text-slate-500">Verified first-attempt scores</p>
          </div>
          <Link href="/testimonials">
            <Button variant="ghost" size="sm" className="text-xs font-semibold text-blue-600">
              View All Scorecards →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t) => (
            <Card key={t.id} className="p-4 bg-white border-slate-200 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {t.score}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic line-clamp-3 leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center gap-2">
                <img src={t.avatar} alt={t.name} className="w-7 h-7 rounded-full object-cover" />
                <div className="truncate">
                  <div className="font-bold text-slate-900 text-xs truncate">{t.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- CRISP FAQ ---------------- */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="bg-white rounded-xl border border-slate-200 p-4">
          <AccordionItem value="q1">
            <AccordionTrigger className="text-xs sm:text-sm font-semibold text-slate-900">
              Are these mock tests updated for the 2026 NISM curriculum?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-slate-600">
              Yes, all questions and formulas are updated for the newest 2026 NISM workbooks and SEBI guidelines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger className="text-xs sm:text-sm font-semibold text-slate-900">
              Does the simulator include 0.25 negative marking?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-slate-600">
              Yes. The test engine deducts 0.25 marks for every incorrect question, identical to the real exam center.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger className="text-xs sm:text-sm font-semibold text-slate-900">
              How does the 100% Pass Assurance Guarantee work?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-slate-600">
              Complete at least 85% of our mocks. If you don&apos;t clear the official exam, you receive a full 100% refund.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white text-center space-y-4 border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Clear Your NISM Certification?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Try a diagnostic mock test right now and see where you stand.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link href="/mock-test/nism-va-demo">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-6 text-xs gap-2">
                <span>Start Free Diagnostic Test</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/exams">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-slate-800 text-white border-slate-700 font-semibold h-11 px-5 text-xs">
                View All Exams
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

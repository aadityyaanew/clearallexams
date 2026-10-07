import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Clock,
  HelpCircle,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Percent,
  FileText,
  UserCheck,
  BookOpen,
  Calendar,
  AlertCircle,
  Download,
  Share2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { examsList, testimonials, sampleMockQuestions } from "@/data/examsData";
import { ExamCard } from "@/components/shared/ExamCard";
import { ExamPricingEnrollment } from "@/components/shared/ExamPricingEnrollment";

export function generateStaticParams() {
  return examsList.map((exam) => ({
    slug: exam.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const exam = examsList.find((e) => e.id === resolvedParams.slug);
  if (!exam) return { title: "Exam Not Found | Crack All Exams" };

  return {
    title: `${exam.code}: ${exam.title} Mock Tests & Prep Course | Crack All Exams`,
    description: `Crack ${exam.code} in first attempt. ${exam.questionsCount}+ practice questions, ${exam.fullMocksCount} full length mocks with negative marking, chapter tests, formula sheets and pass guarantee.`,
  };
}

export default async function ExamDetailPage({ params }) {
  const resolvedParams = await params;
  const exam = examsList.find((e) => e.id === resolvedParams.slug);

  if (!exam) {
    notFound();
  }

  const relatedExams = examsList
    .filter((e) => e.id !== exam.id && (e.category === exam.category || e.isBestSeller))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Breadcrumb & Subnav */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/exams" className="hover:text-blue-600 transition-colors">
            Certifications
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate">{exam.code}</span>
        </div>
      </div>

      {/* Main Course Hero Banner */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                <Badge variant="brand" className="bg-blue-600 text-white border-blue-500 font-semibold px-2.5 py-0.5">
                  {exam.code}
                </Badge>
                {exam.isBestSeller && (
                  <Badge variant="warning" className="text-xs">
                    ★ Best Seller
                  </Badge>
                )}
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck className="h-3.5 w-3.5" /> 100% Pass Assurance
                </span>
                <span className="text-xs text-slate-400">
                  Updated for 2026 Workbook Edition
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {exam.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {exam.description}
              </p>

              {/* Social proof & Rating */}
              <div className="flex items-center gap-4 flex-wrap text-xs pt-1">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <span>{exam.rating} / 5.0</span>
                  <span className="text-slate-400 font-normal">({exam.reviewsCount} candidate reviews)</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="text-slate-300">
                  <strong className="text-white font-semibold">{exam.enrolledCount.toLocaleString()}</strong> Aspirants Enrolled
                </div>
                <span className="text-slate-600">•</span>
                <div className="text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>{exam.passRate} First-Attempt Pass Rate</span>
                </div>
              </div>

              {/* Key Exam Blueprint Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Total Questions</div>
                  <div className="text-lg font-bold text-white mt-0.5">{exam.questionsCount}+ MCQs</div>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Full Mock Exams</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">{exam.fullMocksCount} Tests</div>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Duration &amp; Passing</div>
                  <div className="text-lg font-bold text-white mt-0.5">{exam.durationMinutes}m • {exam.passingMarks}% Pass</div>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Negative Marking</div>
                  <div className="text-lg font-bold text-amber-400 mt-0.5">{exam.negativeMarking}</div>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Dynamic Pricing & Enrollment Widget */}
            <div className="lg:col-span-1">
              <ExamPricingEnrollment exam={exam} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabs Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Comprehensive Curriculum & Resources */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-slate-100 border border-slate-200">
                <TabsTrigger value="overview" className="text-xs sm:text-sm py-2">
                  Exam Overview
                </TabsTrigger>
                <TabsTrigger value="syllabus" className="text-xs sm:text-sm py-2">
                  Syllabus ({exam.syllabus.length} Chapters)
                </TabsTrigger>
                <TabsTrigger value="features" className="text-xs sm:text-sm py-2">
                  Mock Package
                </TabsTrigger>
                <TabsTrigger value="sample" className="text-xs sm:text-sm py-2">
                  Sample Question
                </TabsTrigger>
                <TabsTrigger value="faculty" className="text-xs sm:text-sm py-2">
                  Faculty
                </TabsTrigger>
              </TabsList>

              {/* TAB 1: OVERVIEW */}
              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    About the {exam.code} Examination
                  </h3>
                  <div className="prose prose-sm text-slate-600 leading-relaxed space-y-3">
                    <p>{exam.description}</p>
                    <p>
                      The examination tests practical working knowledge of the Indian securities market, regulatory compliances, risk profiling, operational nuances, and investor servicing guidelines. Candidates must complete 100 multiple choice questions within 120 minutes with negative marking of 25%.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 mb-2">
                      Who is this certification for?
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                      {exam.targetAudience}
                    </p>
                  </div>
                </Card>

                {/* Preparation Methodology Card */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    The Crack All Exams 4-Step Prep Strategy
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          1
                        </span>
                        <h4 className="font-bold text-sm text-slate-900">Chapter-Wise Drills</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Solve topic-specific tests for each chapter until you hit 85%+ accuracy.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          2
                        </span>
                        <h4 className="font-bold text-sm text-slate-900">Numerical Masterclass</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Dedicated practice for NAV, Expense Ratio, Capital Gains, and Payoff math.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          3
                        </span>
                        <h4 className="font-bold text-sm text-slate-900">Timed Exam Simulation</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Experience exact 120-minute timed mock tests on the official CBT interface.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                          4
                        </span>
                        <h4 className="font-bold text-sm text-slate-900">Pass Guarantee Cleared</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Clear official exam with 80%+ scores backed by our 100% money-back guarantee.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 2: SYLLABUS & WEIGHTAGE */}
              <TabsContent value="syllabus" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Official Syllabus &amp; Marks Distribution
                      </h3>
                      <p className="text-xs text-slate-500">
                        Mapped to official NISM workbook chapter guidelines (2026 Edition)
                      </p>
                    </div>
                    <Badge variant="brand" className="text-xs">
                      100 Total Marks
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {exam.syllabus.map((item) => (
                      <div
                        key={item.chapter}
                        className="flex items-center justify-between p-3.5 rounded-lg border border-slate-200/80 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                            {item.chapter}
                          </span>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm">
                              {item.title}
                            </h4>
                            <span className="text-[11px] text-slate-500">
                              Estimated questions: ~{item.questions} MCQs
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-bold text-blue-600 text-sm">
                            {item.weightage}
                          </span>
                          <span className="text-[10px] text-slate-400 block">Weightage</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 3: PACKAGE FEATURES */}
              <TabsContent value="features" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Everything Included in This Mock Test Series
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exam.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-blue-950">
                        Try the Free Diagnostic Test First
                      </h4>
                      <p className="text-xs text-blue-800">
                        Experience 8 real NISM examination questions with timer and calculator.
                      </p>
                    </div>
                    <Link href={`/mock-test/${exam.id}`}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">
                        Launch Free Test Simulator
                      </Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 4: SAMPLE QUESTION */}
              <TabsContent value="sample" className="mt-6">
                <Card className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="brand">Interactive Question Sample</Badge>
                    <span className="text-xs text-slate-500">Marks: +1.00 / -0.25</span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                    {sampleMockQuestions[0].question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {sampleMockQuestions[0].options.map((opt, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border ${
                          i === 0
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                        <span>{opt}</span>
                        {i === 0 && <span className="ml-2 text-emerald-600 font-bold">(Correct)</span>}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <strong className="text-slate-900 block">Explanation:</strong>
                    <p className="whitespace-pre-line">{sampleMockQuestions[0].explanation}</p>
                  </div>
                </Card>
              </TabsContent>

              {/* TAB 5: FACULTY */}
              <TabsContent value="faculty" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-700 font-bold text-xl flex items-center justify-center shrink-0">
                      {exam.faculty.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900">{exam.faculty.name}</h3>
                      <p className="text-xs font-semibold text-blue-600">{exam.faculty.role}</p>
                      <p className="text-xs text-slate-500">Experience: {exam.faculty.experience}</p>
                      <p className="text-xs text-slate-500">Mentored: {exam.faculty.studentsTrained} certified candidates</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Testimonials for this course */}
            <div className="pt-4 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Verified Candidate Feedback for {exam.code}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {testimonials.slice(0, 2).map((t) => (
                  <Card key={t.id} className="p-4 bg-white border-slate-200 flex flex-col justify-between">
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      &ldquo;{t.comment}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-3 mt-3 border-t border-slate-100">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-slate-900 text-xs">{t.name}</div>
                        <div className="text-[11px] text-emerald-600 font-medium">Scored {t.score}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right 1 Col: Quick Links & Pass Guarantee */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-5 border-emerald-200 bg-emerald-50/40">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span>100% Pass Guarantee Promise</span>
              </div>
              <p className="text-xs text-emerald-950 mt-2 leading-relaxed">
                Complete at least 85% of mock tests and score 70%+ in our platform drills. If you still don&apos;t pass the official examination, we will issue a full 100% refund of your course fee—no questions asked.
              </p>
            </Card>

            {/* Related Certifications */}
            <Card className="p-5">
              <h4 className="font-bold text-sm text-slate-900 mb-3">
                Students Also Prepared For
              </h4>
              <div className="space-y-3">
                {relatedExams.map((r) => (
                  <Link
                    key={r.id}
                    href={`/exams/${r.id}`}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100 group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 text-xs group-hover:text-blue-600">
                        {r.code}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[180px]">
                        {r.title}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">
                      ₹{r.discountedPrice}
                    </span>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

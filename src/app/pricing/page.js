import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
  ArrowRight,
  HelpCircle,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Pricing & Pass Assurance Guarantee | ClearAllExams",
  description: "Affordable NISM and financial certification test packages. Transparent pricing with 100% money-back pass assurance guarantee.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Single Certification Pass",
      badge: "Targeted Prep",
      price: 499,
      originalPrice: 1299,
      discount: "62% OFF",
      validity: "30 Days Access",
      description: "Ideal for candidates appearing for an upcoming specific NISM test date within 4 weeks.",
      features: [
        "Full access to chosen 1 NISM Certification",
        "8 to 12 Full-length timed mock tests",
        "Chapter-wise diagnostic quizzes",
        "Exact NISM CBT test interface with timer",
        "Negative marking analytics (-0.25)",
        "Downloadable formula cheat sheet PDF",
        "Unlimited mock test re-attempts",
        "Pass Assurance Guarantee"
      ],
      popular: false,
      cta: "Choose Any Single Exam",
      link: "/exams"
    },
    {
      name: "BFSI Duo Combo",
      badge: "Most Popular",
      price: 899,
      originalPrice: 2499,
      discount: "64% OFF",
      validity: "90 Days Access",
      description: "Best for relationship managers and dealers completing both Mutual Funds (V-A) and Derivatives (VIII).",
      features: [
        "Access to any 2 NISM Certifications of your choice",
        "Over 20+ Full-length timed simulation mocks",
        "All chapter-wise diagnostic tests",
        "Advanced Option Greeks and NAV numerical drills",
        "Priority WhatsApp faculty doubt solving",
        "Memory-based questions from recent 2026 sessions",
        "Unlimited re-attempts for 90 days",
        "100% Money-Back Pass Assurance"
      ],
      popular: true,
      cta: "Get Duo Combo Pass",
      link: "/exams"
    },
    {
      name: "All-Access Pro Pass",
      badge: "Best Value",
      price: 1499,
      originalPrice: 4999,
      discount: "70% OFF",
      validity: "365 Days Access",
      description: "Complete library access for career growth, wealth managers, RIAs, and equity analysts.",
      features: [
        "Unrestricted access to ALL 24+ Certifications",
        "Includes Series V-A, VIII, XV, X-A, XXI-A, IRDAI",
        "Over 150+ Full-length examination mocks",
        "All downloadable PDF formula guides & notes",
        "Weekend live masterclass seats included",
        "Performance diagnostic tracker across all exams",
        "1 Year validity with all future 2026 syllabus updates",
        "Comprehensive 100% Pass Assurance"
      ],
      popular: false,
      cta: "Unlock All 24+ Exams",
      link: "/exams"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-600/20 text-blue-400 font-semibold px-3 py-1 rounded-full text-xs border border-blue-500/30">
            <Sparkles className="h-3.5 w-3.5" /> Transparent Pricing • Zero Hidden Fees
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Invest in Your Financial Career
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Every test series is backed by our unconditional 100% Pass Assurance Guarantee. Pass on your first attempt or receive a full fee refund.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-7 flex flex-col justify-between bg-white transition-all relative ${
                plan.popular
                  ? "border-blue-600 ring-2 ring-blue-600 shadow-xl"
                  : "border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                  ★ MOST POPULAR CHOICE
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900 text-lg">{plan.name}</span>
                  <Badge variant={plan.popular ? "default" : "secondary"} className="text-xs">
                    {plan.badge}
                  </Badge>
                </div>

                <p className="text-xs text-slate-500 mb-4">{plan.description}</p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ₹{plan.price}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      ₹{plan.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {plan.discount}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 block mt-1 font-medium">
                    {plan.validity} • GST Included
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link href={plan.link}>
                  <Button
                    className={`w-full font-bold h-11 text-sm ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Pass Guarantee Policy Breakdown */}
        <div id="pass-guarantee" className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                The ClearAllExams 100% Pass Assurance Commitment
              </h2>
              <p className="text-xs text-slate-500">
                Transparent terms designed to guarantee your peace of mind and success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <strong className="text-slate-900 block text-sm font-semibold">1. Complete Mock Drills</strong>
              <p>
                Attempt at least 85% of the full-length practice tests provided in your package and achieve an average drill score of 70% or higher.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <strong className="text-slate-900 block text-sm font-semibold">2. Appear for NISM Test</strong>
              <p>
                Appear for your scheduled official examination at an authorized NISM / Prometric test center within your active portal subscription period.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <strong className="text-slate-900 block text-sm font-semibold">3. 100% Fee Refund or Renewal</strong>
              <p>
                In the rare case that you do not clear, email your score receipt to support@clearallexams.in. Receive a 100% full refund within 48 hours or free extended access.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

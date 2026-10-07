import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  Target,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "About Us | ClearAllExams EdTech Platform",
  description: "Learn about ClearAllExams, India's leading fintech exam preparation portal. Our mission, faculty council, and student-first philosophy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-600/20 text-blue-400 font-semibold px-3 py-1 rounded-full text-xs border border-blue-500/30">
            <GraduationCap className="h-4 w-4" /> Empowering BFSI Professionals
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built by Financial Professionals, for Financial Professionals
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ClearAllExams was established with a singular mission: to eliminate the ambiguity and anxiety surrounding NISM and financial regulatory examinations in India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1 space-y-12">
        {/* Story Section */}
        <Card className="p-8 space-y-4 bg-white border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Why ClearAllExams?</h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              In India&apos;s rapidly evolving financial ecosystem, regulatory certifications mandated by SEBI and IRDAI are not merely credentials—they are mandatory licenses to practice. Yet, thousands of capable banking executives, distributors, and students fail on their initial attempts due to negative marking, time-pressure panic, and confusing test center interfaces.
            </p>
            <p>
              At ClearAllExams, we realized that reading static 400-page workbooks is insufficient. Candidates need to build muscular intuition through identical Computer-Based Test (CBT) engines, negative marking calculations, and analytical explanations.
            </p>
          </div>
        </Card>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white border-slate-200 space-y-2">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Unmatched Accuracy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every single question in our bank is rigorously peer-reviewed by ex-fund managers and SEBI registered professionals for syllabus compliance.
            </p>
          </Card>

          <Card className="p-6 bg-white border-slate-200 space-y-2">
            <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">100% Pass Assurance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We stand behind our preparation packages with an unconditional money-back guarantee. If you complete our drills and do not pass, we refund your fees.
            </p>
          </Card>

          <Card className="p-6 bg-white border-slate-200 space-y-2">
            <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">52,000+ Alumni Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our candidates work across India&apos;s leading financial institutions including HDFC Bank, ICICI Prudential, Zerodha, and Motilal Oswal.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

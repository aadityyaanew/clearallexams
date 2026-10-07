import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExamsClient } from "./ExamsClient";
import { ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "All NISM & Financial Certifications Mock Test Series | Crack All Exams",
  description: "Browse 24+ NISM, NCFM, and IRDAI certification mock test series. Chapter tests, negative marking simulators, formula sheets, and 100% pass guarantee.",
};

export default function ExamsCatalogPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="brand" className="bg-blue-600 text-white font-semibold">
              Certification Directory
            </Badge>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> 2026 Updated Syllabus
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            NISM &amp; Financial Certifications Catalog
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Select your target examination below to access full-length timed mock tests, chapter-wise diagnostic drills, memory-based question archives, and numerical formula sheets.
          </p>
        </div>
      </section>

      {/* Main Filterable Listing Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <ExamsClient />
      </main>

      <Footer />
    </div>
  );
}

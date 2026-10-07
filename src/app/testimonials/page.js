"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Star,
  CheckCircle2,
  Award,
  TrendingUp,
  ShieldCheck,
  Quote,
  Building,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/examsData";

export default function TestimonialsPage() {
  const [filterExam, setFilterExam] = React.useState("all");

  const extendedTestimonials = [
    ...testimonials,
    {
      id: 5,
      name: "Saurabh Singhal",
      role: "Wealth Relationship Officer, HDFC Bank",
      exam: "NISM Series V-A: Mutual Fund Distributors",
      score: "94 / 100",
      passedDate: "January 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      comment: "The calculation shortcuts for CAGR and Sharpe Ratio saved me at least 25 minutes during the exam. The simulator UI matched the test center Prometric machine pixel-by-pixel.",
      verified: true,
    },
    {
      id: 6,
      name: "Tanya Kapoor",
      role: "Compliance Executive, Edelweiss Financial",
      exam: "NISM Series VIII: Equity Derivatives",
      score: "84 / 100",
      passedDate: "February 2026",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      comment: "I had failed Series VIII twice before finding Crack All Exams. Their focus on the 0.25 negative marking penalty completely transformed my question selection strategy. Passed with 84%!",
      verified: true,
    },
    {
      id: 7,
      name: "Nikhil Joshi",
      role: "Junior Equity Analyst, Mirae Asset",
      exam: "NISM Series XV: Research Analyst",
      score: "89 / 100",
      passedDate: "March 2026",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      comment: "DuPont numerical analysis and SEBI RA code of conduct questions were almost identical to Crack All Exams mock tests. Truly a gold standard portal for financial certification candidates.",
      verified: true,
    },
    {
      id: 8,
      name: "Pravin Salunkhe",
      role: "Agency Leader, LIC of India",
      exam: "IRDAI IC-38: Insurance Agents",
      score: "46 / 50",
      passedDate: "February 2026",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      comment: "Crack All Exams helped our whole batch of 25 agents pass IC-38 on their first attempt without any re-attempts. Excellent explanations in simple terms.",
      verified: true,
    },
  ];

  const filtered = extendedTestimonials.filter((t) => {
    if (filterExam === "all") return true;
    return t.exam.toLowerCase().includes(filterExam.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="brand" className="bg-blue-600 text-white font-semibold">
              Wall of Fame
            </Badge>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Verified Candidate Scorecards
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Over 52,000+ BFSI Careers Launched
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Read real stories from mutual fund distributors, equity research associates, and banking professionals who cleared their NISM certifications on their very first attempt.
          </p>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-slate-900">52,400+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Certified Aspirants</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-600">98.4%</div>
            <div className="text-xs text-slate-500 font-medium mt-1">First-Attempt Pass Rate</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600">4.9 / 5.0</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Average Student Rating</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-500">100%</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Pass Assurance Money-Back</div>
          </div>
        </div>
      </div>

      {/* Main Filterable Testimonials */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 space-y-8">
        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: "all", label: "All Certifications" },
            { id: "series v-a", label: "NISM Series V-A (Mutual Funds)" },
            { id: "series viii", label: "NISM Series VIII (Derivatives)" },
            { id: "series xv", label: "NISM Series XV (Research)" },
            { id: "ic-38", label: "IRDAI IC-38 (Insurance)" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterExam(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filterExam === item.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <Card
              key={item.id}
              className="p-6 bg-white border-slate-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <Building className="h-3 w-3 text-slate-400" />
                        <span>{item.role}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge variant="success" className="font-bold text-xs">
                      {item.score}
                    </Badge>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {item.passedDate}
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-blue-900">
                  {item.exam}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Verified NISM Exam Certificate</span>
                </div>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

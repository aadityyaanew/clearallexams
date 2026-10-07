"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Play,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function VideoLecturesPage() {
  const [activeVideo, setActiveVideo] = React.useState(null);

  const videoModules = [
    {
      id: 1,
      title: "Mastering Mutual Fund NAV & Expense Ratio (TER) Numericals",
      exam: "NISM Series V-A",
      duration: "42 Mins",
      faculty: "Rajeshwar Sengupta (Ex-VP HDFC AMC)",
      lessons: 5,
      isFreePreview: true,
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80",
      description: "Step-by-step breakdown of Asset Valuation, Accrued Expenses, Direct vs Regular Plan NAV divergence, and cut-off timing rules.",
    },
    {
      id: 2,
      title: "Option Greeks Demystified: Delta, Gamma, Theta & Vega",
      exam: "NISM Series VIII",
      duration: "58 Mins",
      faculty: "Vivek Kulkarni, CFA",
      lessons: 6,
      isFreePreview: true,
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
      description: "Visual analysis of Options Greeks sensitivity. Understand how time decay (Theta) and implied volatility affect call & put option premiums.",
    },
    {
      id: 3,
      title: "DCF Valuation & Relative Multiples for Research Analysts",
      exam: "NISM Series XV",
      duration: "51 Mins",
      faculty: "Dr. Ananya Mathur",
      lessons: 4,
      isFreePreview: false,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      description: "Detailed financial model walkthrough on Free Cash Flow to Firm (FCFF), Weighted Average Cost of Capital (WACC), and terminal value calculation.",
    },
    {
      id: 4,
      title: "Time Value of Money (TVM) Math for Investment Advisers",
      exam: "NISM Series X-A",
      duration: "47 Mins",
      faculty: "Rohit Bansal, CFP",
      lessons: 5,
      isFreePreview: false,
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
      description: "Present Value, Future Value, Annuity Due, and Real Rate of Return calculations for personal financial planning and retirement corpus.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="brand" className="bg-blue-600 text-white font-semibold">
              HD Video Learning
            </Badge>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Concept Masterclasses
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            NISM Video Lectures &amp; Concept Modules
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Concise, chapter-by-chapter video masterclasses focused heavily on difficult mathematical calculations, financial formulas, and tricky regulatory case studies.
          </p>
        </div>
      </section>

      {/* Main Video List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoModules.map((vid) => (
            <Card
              key={vid.id}
              className="bg-white border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail container */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden group">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideo(vid)}
                      className="h-14 w-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:scale-110 transition-all cursor-pointer"
                    >
                      <Play className="h-6 w-6 ml-1 fill-white" />
                    </button>
                  </div>

                  <div className="absolute top-3 left-3">
                    <Badge variant="brand" className="bg-slate-900/80 backdrop-blur-xs text-white">
                      {vid.exam}
                    </Badge>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-[11px] font-mono px-2 py-0.5 rounded">
                    {vid.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {vid.description}
                  </p>
                  <div className="text-xs text-slate-500 font-medium">
                    Instructor: <strong className="text-slate-800">{vid.faculty}</strong>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-5 pt-0 flex items-center justify-between">
                {vid.isFreePreview ? (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Free Sample Lecture
                  </span>
                ) : (
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Lock className="h-3 w-3" /> Included with Pro Pass
                  </span>
                )}

                <Button
                  size="sm"
                  onClick={() => setActiveVideo(vid)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs gap-1"
                >
                  <Play className="h-3 w-3 fill-white" />
                  <span>Watch Lecture</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Video Player Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-slate-950 text-white border-slate-800">
          <DialogHeader className="p-4 bg-slate-900 border-b border-slate-800">
            <DialogTitle className="text-sm font-bold text-white flex items-center gap-2">
              <Video className="h-4 w-4 text-blue-400" />
              <span>{activeVideo?.title}</span>
            </DialogTitle>
          </DialogHeader>

          {/* Simulated Video Player */}
          <div className="aspect-video bg-black flex flex-col items-center justify-center p-6 text-center space-y-3 relative">
            <div className="h-16 w-16 rounded-full bg-blue-600/30 border border-blue-500 flex items-center justify-center text-blue-400">
              <Play className="h-8 w-8 ml-1 fill-blue-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{activeVideo?.title}</h4>
              <p className="text-xs text-slate-400 mt-1">
                Faculty: {activeVideo?.faculty} • Duration: {activeVideo?.duration}
              </p>
            </div>
            <div className="p-3 bg-white/10 rounded-xl text-xs text-slate-300 max-w-md">
              ▶ Streaming High-Definition Lecture. Full chapters and numerical companion worksheets available in your student portal.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

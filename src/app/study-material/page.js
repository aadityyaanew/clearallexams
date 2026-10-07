"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { freeStudyMaterials } from "@/data/examsData";

export default function StudyMaterialPage() {
  const [selectedDoc, setSelectedDoc] = React.useState(null);
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  const handleDownload = (doc) => {
    setSelectedDoc(doc);
    setDownloadSuccess(false);
  };

  const triggerDownloadAction = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setSelectedDoc(null);
      setDownloadSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="brand" className="bg-blue-600 text-white font-semibold">
              Free Revision Vault
            </Badge>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> PDF Cheat Sheets &amp; Formulas
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            NISM Study Material &amp; Formula Cheat Sheets
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Free high-yield summary capsules, formula sheets, memory-based question archives, and regulatory timelines curated by certified financial trainers.
          </p>
        </div>
      </section>

      {/* Main Material Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freeStudyMaterials.map((doc) => (
            <Card
              key={doc.id}
              className="p-6 bg-white border-slate-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="default" className="bg-blue-50 text-blue-700 border-blue-200">
                    {doc.exam}
                  </Badge>
                  <Badge variant="warning" className="text-xs">
                    {doc.badge}
                  </Badge>
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span>📄 {doc.pages}</span>
                  <span>•</span>
                  <span>⬇️ {doc.downloads} Downloads</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-medium">Free Access</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedDoc(doc)}
                  className="gap-1.5 text-xs font-semibold"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Preview Index</span>
                </Button>

                <Button
                  size="sm"
                  onClick={() => handleDownload(doc)}
                  className="bg-blue-600 hover:bg-blue-700 text-white gap-1.5 text-xs font-semibold"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Free PDF</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Need Full-Length Simulation Tests with Timer?</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              While formula sheets build recall, real test simulation builds confidence. Experience the authentic Prometric/CBT interface with negative marking.
            </p>
          </div>
          <Link href="/mock-test/nism-va-demo" className="shrink-0">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5">
              <span>Launch Free Test Simulator</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>

      {/* PDF Download Preview Dialog */}
      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>{selectedDoc?.title}</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Verified 2026 Examination Resource • {selectedDoc?.pages}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 space-y-2">
              <div className="font-semibold text-slate-900">What is inside this document:</div>
              <ul className="space-y-1 list-disc list-inside text-slate-600">
                <li>Consolidated formulas with step-by-step numerical application</li>
                <li>Key regulatory timelines &amp; compliance penalties</li>
                <li>High-frequency tricky definitions highlighted</li>
                <li>Quick revision matrix for last-minute exam day revision</li>
              </ul>
            </div>

            {downloadSuccess ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-center font-semibold">
                ✓ Download initiated successfully! Happy preparation.
              </div>
            ) : (
              <Button
                onClick={triggerDownloadAction}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF Capsule Now (Free)</span>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

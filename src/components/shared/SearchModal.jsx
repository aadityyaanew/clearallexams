"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, BookOpen, CheckCircle, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { examsList } from "@/data/examsData";

export function SearchModal({ open, onOpenChange }) {
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  const filteredExams = React.useMemo(() => {
    if (!query.trim()) return examsList.slice(0, 5);
    const q = query.toLowerCase();
    return examsList.filter(
      (e) =>
        e.code.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.shortSummary.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (id) => {
    onOpenChange(false);
    router.push(`/exams/${id}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-xl border-slate-200">
        <DialogHeader className="p-4 border-b border-slate-100 pb-3">
          <DialogTitle className="sr-only">Search Certifications</DialogTitle>
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by exam code (e.g. 'Series V-A', 'Derivatives', 'Research')..."
              className="w-full text-base bg-transparent border-0 outline-none placeholder:text-slate-400 text-slate-900 focus:ring-0"
              autoFocus
            />
          </div>
        </DialogHeader>

        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
            {query.trim() ? "Search Results" : "Popular Certifications"}
          </div>

          {filteredExams.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm">No certifications matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &apos;Mutual Fund&apos;, &apos;Equity&apos;, or &apos;Series VIII&apos;</p>
            </div>
          ) : (
            filteredExams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => handleSelect(exam.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0">
                    {exam.code.split(" ").slice(-1)[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                        {exam.code}: {exam.title}
                      </span>
                      {exam.isBestSeller && (
                        <Badge variant="warning" className="text-[10px] py-0 px-1.5">
                          Top Rated
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                      <span>{exam.questionsCount}+ Questions</span>
                      <span>•</span>
                      <span>{exam.fullMocksCount} Full Mocks</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-medium">₹{exam.discountedPrice}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Updated with 2026 Curriculum & Negative Marking rules</span>
          </div>
          <Link
            href="/exams"
            onClick={() => onOpenChange(false)}
            className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
            View all 24+ exams <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

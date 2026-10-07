"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  LayoutGrid,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExamCard } from "@/components/shared/ExamCard";
import { examsList, examCategories } from "@/data/examsData";

export function ExamsClient() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState("popular");
  const [onlyBestSellers, setOnlyBestSellers] = React.useState(false);

  const filteredExams = React.useMemo(() => {
    return examsList.filter((exam) => {
      const matchesCat =
        selectedCategory === "all" || exam.category === selectedCategory;
      const matchesSearch =
        exam.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBestSeller = onlyBestSellers ? exam.isBestSeller : true;

      return matchesCat && matchesSearch && matchesBestSeller;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.discountedPrice - b.discountedPrice;
      if (sortBy === "pass-rate") return parseFloat(b.passRate) - parseFloat(a.passRate);
      if (sortBy === "questions") return b.questionsCount - a.questionsCount;
      return b.rating - a.rating; // default popular
    });
  }, [selectedCategory, searchQuery, sortBy, onlyBestSellers]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by certification name (e.g. 'Series V-A', 'Derivatives', 'Investment Adviser')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 text-sm bg-slate-50 border-slate-200 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 whitespace-nowrap">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-11 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Most Popular &amp; Top Rated</option>
              <option value="pass-rate">Highest Pass Rate</option>
              <option value="questions">Question Count (High to Low)</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {examCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {cat.name}
              </button>
            );
          })}

          <button
            onClick={() => setOnlyBestSellers((prev) => !prev)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ml-auto border ${
              onlyBestSellers
                ? "bg-amber-100 border-amber-300 text-amber-900 font-bold"
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            ★ Best Sellers Only
          </button>
        </div>
      </div>

      {/* Results Header Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div>
          Showing <strong className="text-slate-900">{filteredExams.length}</strong> certification packages
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>All packages include 100% Pass Assurance Guarantee</span>
        </div>
      </div>

      {/* Grid of Exam Cards */}
      {filteredExams.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">No Certifications Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            We couldn&apos;t find any exams matching your current filters. Try resetting the search or category filter.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setOnlyBestSellers(false);
            }}
          >
            Reset All Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      )}
    </div>
  );
}

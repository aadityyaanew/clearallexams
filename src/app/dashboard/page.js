"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileText,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  BarChart3,
  Bookmark,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function StudentDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Student Welcome Header */}
      <section className="bg-slate-950 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 border-2 border-white/20 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Aaditya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-white">
                    Welcome back, Aaditya Sharma
                  </h1>
                  <Badge variant="brand" className="bg-emerald-500 text-slate-950 font-bold text-[10px]">
                    EXAM READY
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Candidate ID: <strong>CAE-2026-9812</strong> • NISM Portal Synchronized
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/mock-test/nism-va-demo">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-1 text-xs">
                  <Play className="h-3.5 w-3.5 fill-white" />
                  <span>Resume Next Mock Test</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 space-y-8">
        {/* Performance Overview KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-white border-slate-200">
            <div className="text-xs font-medium text-slate-500">Enrolled Certifications</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">2 Active</div>
            <div className="text-[11px] text-emerald-600 font-medium mt-1">Series V-A &amp; Series VIII</div>
          </Card>

          <Card className="p-4 bg-white border-slate-200">
            <div className="text-xs font-medium text-slate-500">Mocks Attempted</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">12 Tests</div>
            <div className="text-[11px] text-slate-500 mt-1">Across chapter &amp; full simulations</div>
          </Card>

          <Card className="p-4 bg-white border-slate-200">
            <div className="text-xs font-medium text-slate-500">Average Score</div>
            <div className="text-2xl font-bold text-emerald-600 mt-1">84.5%</div>
            <div className="text-[11px] text-emerald-600 font-medium mt-1">Well above 50% cutoff</div>
          </Card>

          <Card className="p-4 bg-white border-slate-200">
            <div className="text-xs font-medium text-slate-500">Pass Guarantee Status</div>
            <div className="text-2xl font-bold text-blue-600 mt-1">Eligible ✓</div>
            <div className="text-[11px] text-slate-500 mt-1">85%+ mock criteria satisfied</div>
          </Card>
        </div>

        {/* Active Enrolled Courses */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Your Enrolled Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course 1 */}
            <Card className="p-6 bg-white border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="brand" className="mb-1 text-xs">
                    NISM Series V-A
                  </Badge>
                  <h3 className="font-bold text-slate-900 text-base">
                    Mutual Fund Distributors Certification
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  80% Completed
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Full-Length Mocks: 8 of 10 done</span>
                  <span className="font-semibold text-slate-900">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-lg text-xs">
                <div>
                  <span className="text-slate-500">Latest Score:</span>
                  <strong className="block text-slate-900 font-bold">88 / 100</strong>
                </div>
                <div>
                  <span className="text-slate-500">Subscription Validity:</span>
                  <strong className="block text-slate-900 font-bold">78 Days Remaining</strong>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <Link href="/mock-test/nism-va-demo" className="flex-1">
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold">
                    Launch Mock Test 9
                  </Button>
                </Link>
                <Link href="/study-material">
                  <Button variant="outline" size="sm" className="text-xs">
                    Formula Sheets
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Course 2 */}
            <Card className="p-6 bg-white border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="default" className="mb-1 text-xs bg-purple-50 text-purple-700 border-purple-200">
                    NISM Series VIII
                  </Badge>
                  <h3 className="font-bold text-slate-900 text-base">
                    Equity Derivatives Certification
                  </h3>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  42% Completed
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Full-Length Mocks: 5 of 12 done</span>
                  <span className="font-semibold text-slate-900">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-lg text-xs">
                <div>
                  <span className="text-slate-500">Latest Score:</span>
                  <strong className="block text-slate-900 font-bold">76 / 100</strong>
                </div>
                <div>
                  <span className="text-slate-500">Subscription Validity:</span>
                  <strong className="block text-slate-900 font-bold">84 Days Remaining</strong>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <Link href="/exams/nism-series-viii-equity-derivatives" className="flex-1">
                  <Button size="sm" className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold">
                    Continue Chapter Drills
                  </Button>
                </Link>
                <Link href="/study-material">
                  <Button variant="outline" size="sm" className="text-xs">
                    Payoff Matrix
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Mock Test History Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Mock Test Attempts</h2>
            <Link href="/mock-test/nism-va-demo" className="text-xs font-semibold text-blue-600 hover:underline">
              Take New Diagnostic Test →
            </Link>
          </div>

          <Card className="overflow-hidden border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-semibold uppercase text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Test Title</th>
                    <th className="p-3.5">Date Attempted</th>
                    <th className="p-3.5">Score</th>
                    <th className="p-3.5">Accuracy</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Review</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">
                      NISM Series V-A Mock Test 8
                    </td>
                    <td className="p-3.5">Yesterday, 4:15 PM</td>
                    <td className="p-3.5 font-bold text-emerald-600">88.00 / 100</td>
                    <td className="p-3.5">91.4%</td>
                    <td className="p-3.5">
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                        PASSED
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <Link href="/mock-test/nism-va-demo">
                        <Button variant="outline" size="sm" className="h-7 text-[11px]">
                          Review Solutions
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">
                      NISM Series V-A Mock Test 7
                    </td>
                    <td className="p-3.5">3 Oct 2026</td>
                    <td className="p-3.5 font-bold text-emerald-600">84.25 / 100</td>
                    <td className="p-3.5">88.0%</td>
                    <td className="p-3.5">
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                        PASSED
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <Link href="/mock-test/nism-va-demo">
                        <Button variant="outline" size="sm" className="h-7 text-[11px]">
                          Review Solutions
                        </Button>
                      </Link>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">
                      NISM Series VIII Options Strategy Drill
                    </td>
                    <td className="p-3.5">1 Oct 2026</td>
                    <td className="p-3.5 font-bold text-amber-600">72.50 / 100</td>
                    <td className="p-3.5">78.5%</td>
                    <td className="p-3.5">
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                        PASSED
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <Link href="/mock-test/nism-va-demo">
                        <Button variant="outline" size="sm" className="h-7 text-[11px]">
                          Review Solutions
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Weak Topic Diagnostics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">
              Chapter-Wise Strength &amp; Diagnostics (Series V-A)
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700">NAV, Expense Ratio &amp; Valuation (Ch. 6)</span>
                  <span className="font-bold text-emerald-600">92% (Mastered)</span>
                </div>
                <Progress value={92} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700">Scheme Categorization &amp; Selection (Ch. 10)</span>
                  <span className="font-bold text-emerald-600">88% (Strong)</span>
                </div>
                <Progress value={88} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700">Legal &amp; Regulatory Framework (Ch. 3)</span>
                  <span className="font-bold text-amber-600">68% (Needs Drill)</span>
                </div>
                <Progress value={68} className="h-1.5" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">
              Upcoming Live Doubt Clearing Session
            </h3>
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-2">
              <div className="font-bold text-blue-950 text-sm">
                Weekend Numericals &amp; Formula Marathon
              </div>
              <p className="text-slate-700">
                Saturday, 10:00 AM IST • Conducted by Rajeshwar Sengupta (Ex-VP HDFC AMC)
              </p>
              <div className="pt-1">
                <Link href="/live-classes">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                    Join Zoom Classroom
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

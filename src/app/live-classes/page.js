"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Video,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
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
import { liveClassesSchedule } from "@/data/examsData";

export default function LiveClassesPage() {
  const [selectedBatch, setSelectedBatch] = React.useState(null);
  const [reserved, setReserved] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="brand" className="bg-blue-600 text-white font-semibold">
              Weekend Masterclasses
            </Badge>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Interactive Batches
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            NISM Live Weekend Masterclasses
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Attend live interactive weekend crash courses conducted by ex-fund managers, senior derivatives strategists, and SEBI registered professionals. Clear difficult numericals and doubts in real time.
          </p>
        </div>
      </section>

      {/* Main Schedule Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              Upcoming Live Batches &amp; Crash Courses
            </h2>
            <span className="text-xs text-slate-500">
              Recordings provided for all enrolled students
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveClassesSchedule.map((cls) => (
              <Card
                key={cls.id}
                className="p-6 bg-white border-slate-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {cls.totalHours}
                    </span>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Only {cls.seatsLeft} Seats Left
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {cls.title}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-slate-400 shrink-0" />
                      <span>{cls.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
                      <span>{cls.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-400 shrink-0" />
                      <span>{cls.enrolledCount} Students Registered</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {cls.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Button
                    onClick={() => {
                      setSelectedBatch(cls);
                      setReserved(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs h-10"
                  >
                    Reserve Seat (Free for Subscribers)
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Reservation Dialog */}
      <Dialog open={!!selectedBatch} onOpenChange={() => setSelectedBatch(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-slate-900">
              Live Masterclass Seat Reservation
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              {selectedBatch?.title}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 space-y-1.5">
              <div className="font-semibold text-slate-900">Faculty: {selectedBatch?.instructor}</div>
              <div>Schedule: {selectedBatch?.date}</div>
              <div className="text-emerald-700 font-medium">✓ Includes live audio Q&amp;A and session recording download</div>
            </div>

            {reserved ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-center font-semibold">
                ✓ Seat confirmed! The Zoom invitation link has been dispatched to your email and WhatsApp.
              </div>
            ) : (
              <Button
                onClick={() => setReserved(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-10"
              >
                Confirm My Seat
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

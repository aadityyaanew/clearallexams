"use client";

import * as React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  CreditCard,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ExamPricingEnrollment({ exam }) {
  const [selectedPlan, setSelectedPlan] = React.useState(
    exam.validityOptions.find((p) => p.popular) || exam.validityOptions[0]
  );
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [coupon, setCoupon] = React.useState("PASS2026");
  const [couponApplied, setCouponApplied] = React.useState(true);

  const finalPrice = couponApplied
    ? Math.round(selectedPlan.price * 0.8)
    : selectedPlan.price;

  return (
    <>
      <Card className="p-6 bg-white border-slate-200 shadow-md sticky top-24">
        <div className="space-y-4">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Enroll in Test Package
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-slate-900">
                ₹{finalPrice}
              </span>
              <span className="text-sm text-slate-400 line-through">
                ₹{selectedPlan.originalPrice}
              </span>
              {couponApplied && (
                <Badge variant="success" className="text-xs">
                  20% Promo Applied
                </Badge>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Instant activation • No hidden charges • GST included
            </p>
          </div>

          {/* Validity duration selector tabs */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-slate-700">
              Select Access Validity Period:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {exam.validityOptions.map((opt) => {
                const isSelected = selectedPlan.days === opt.days;
                return (
                  <button
                    key={opt.days}
                    type="button"
                    onClick={() => setSelectedPlan(opt)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? "border-blue-600 bg-blue-50/70 shadow-xs ring-1 ring-blue-600 text-blue-950"
                        : "border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {opt.popular && (
                      <span className="absolute -top-2 right-2 bg-amber-500 text-slate-950 font-bold text-[9px] px-1.5 py-0.2 rounded-full shadow-xs">
                        Popular
                      </span>
                    )}
                    <div className="font-bold text-xs">{opt.days} Days</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">₹{opt.price}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-2 pt-2 text-xs border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{exam.fullMocksCount} Full-length Timed Simulation Mocks</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{exam.chapterTestsCount} Chapter-wise Practice Quizzes</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Full Step-by-Step Numerical Explanations</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>2026 Workbook Edition Summary PDF</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Unlimited Test Re-attempts</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-semibold">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>100% Pass Assurance or Full Refund</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-2 pt-2">
            <Button
              onClick={() => setCheckoutOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 text-sm shadow-sm gap-2"
            >
              <Zap className="h-4 w-4" />
              <span>Enroll Now for ₹{finalPrice}</span>
            </Button>

            <Link href={`/mock-test/${exam.id}`} className="w-full block">
              <Button
                variant="outline"
                className="w-full text-xs font-semibold h-9 border-slate-300"
              >
                Try Free Diagnostic Demo
              </Button>
            </Link>
          </div>

          {/* Trust Guarantee note */}
          <div className="pt-2 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
            <Lock className="h-3 w-3 text-slate-400" />
            <span>Secure 256-Bit SSL Checkout • UPI / Cards</span>
          </div>
        </div>
      </Card>

      {/* Checkout Mock Dialog */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-slate-900">
              Complete Your Enrollment
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Get immediate access to {exam.code} Mock Tests &amp; Study Notes.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-xs">
            {/* Summary Box */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between font-medium text-slate-800">
                <span>{exam.code} ({selectedPlan.days} Days Access)</span>
                <span>₹{selectedPlan.price}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Special Coupon &apos;PASS2026&apos; (20% Off)</span>
                  <span>-₹{Math.round(selectedPlan.price * 0.2)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900 text-sm">
                <span>Total Payable:</span>
                <span className="text-blue-600">₹{finalPrice}</span>
              </div>
            </div>

            {/* Student Info Inputs */}
            <div className="space-y-3">
              <div>
                <Label htmlFor="fullname">Full Name (As on NISM Admit Card)</Label>
                <Input id="fullname" placeholder="e.g. Aaditya Sharma" className="mt-1" defaultValue="Aaditya Sharma" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@domain.com" className="mt-1" defaultValue="aaditya@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">WhatsApp Mobile Number</Label>
                <Input id="phone" placeholder="+91 98765 43210" className="mt-1" defaultValue="+91 98200 12345" />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 space-y-2">
              <Label>Payment Options (Zero Convenience Fee):</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 border rounded-lg text-center font-bold text-slate-700 bg-slate-50 border-blue-500 ring-1 ring-blue-500">
                  UPI / GPay / PhonePe
                </div>
                <div className="p-2 border rounded-lg text-center font-bold text-slate-600 bg-slate-50">
                  Credit / Debit Card
                </div>
                <div className="p-2 border rounded-lg text-center font-bold text-slate-600 bg-slate-50">
                  Net Banking
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 text-sm mt-3"
              onClick={() => {
                alert(`Enrollment confirmed! Welcome to Crack All Exams ${exam.code}. Redirecting to your mock test dashboard...`);
                setCheckoutOpen(false);
              }}
            >
              Pay ₹{finalPrice} &amp; Start Preparation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

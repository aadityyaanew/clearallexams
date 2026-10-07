"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            ClearAll<span className="text-blue-600">Exams</span>
          </span>
        </Link>
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          Create Student Account
        </h2>
        <p className="text-xs text-slate-500">
          Start your free diagnostic mock tests and download formula capsules
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm space-y-4">
          <form onSubmit={handleRegister} className="space-y-4 text-xs">
            <div>
              <Label htmlFor="reg-name">Full Name (As on Government ID)</Label>
              <Input
                id="reg-name"
                required
                placeholder="e.g. Aaditya Sharma"
                className="mt-1"
                defaultValue="Aaditya Sharma"
              />
            </div>

            <div>
              <Label htmlFor="reg-email">Email Address</Label>
              <Input
                id="reg-email"
                type="email"
                required
                placeholder="you@domain.com"
                className="mt-1"
                defaultValue="aaditya@example.com"
              />
            </div>

            <div>
              <Label htmlFor="reg-phone">WhatsApp Mobile Number</Label>
              <Input
                id="reg-phone"
                type="tel"
                required
                placeholder="+91 98200 12345"
                className="mt-1"
                defaultValue="+91 98200 12345"
              />
            </div>

            <div>
              <Label htmlFor="reg-target">Primary Target Examination</Label>
              <select
                id="reg-target"
                className="w-full mt-1 h-10 px-3 rounded-lg border border-slate-300 text-sm bg-white"
              >
                <option>NISM Series V-A: Mutual Fund Distributors</option>
                <option>NISM Series VIII: Equity Derivatives</option>
                <option>NISM Series XV: Research Analyst</option>
                <option>NISM Series X-A: Investment Adviser</option>
                <option>IRDAI IC-38: Insurance Agents</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 text-xs mt-2"
            >
              Create Account &amp; Start Free Test
            </Button>
          </form>

          <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Already registered?{" "}
            <Link href="/login" className="font-semibold text-blue-600 hover:underline">
              Sign in to portal
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

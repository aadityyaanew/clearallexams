"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  ShieldCheck,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function LoginPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = React.useState("otp");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleDemoLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-block py-1">
          <img
            src="/mainlogo.jpeg"
            alt="Crack All Exams"
            className="h-12 w-auto mx-auto object-contain"
          />
        </Link>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 mt-2">
          Sign In to Student Portal
        </h2>
        <p className="text-xs text-slate-500">
          Access your mock tests, performance analytics, and study notes
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm space-y-6">
          <Tabs defaultValue="otp" className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-4">
              <TabsTrigger value="otp" className="text-xs font-semibold">
                Fast Mobile OTP
              </TabsTrigger>
              <TabsTrigger value="password" className="text-xs font-semibold">
                Email &amp; Password
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: FAST OTP */}
            <TabsContent value="otp">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4 text-xs">
                  <div>
                    <Label htmlFor="mobile">Mobile Number (WhatsApp Enabled)</Label>
                    <div className="flex gap-2 mt-1">
                      <span className="h-10 px-3 flex items-center justify-center bg-slate-100 border border-slate-200 rounded-lg text-slate-600 font-medium">
                        +91
                      </span>
                      <Input
                        id="mobile"
                        type="tel"
                        required
                        placeholder="98200 12345"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 text-xs"
                  >
                    Send 4-Digit Login OTP
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4 text-xs">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-900 text-xs">
                    OTP sent to +91 {mobileNumber || "98200 12345"}.
                  </div>

                  <div>
                    <Label htmlFor="otp">Enter 4-Digit Verification Code</Label>
                    <Input
                      id="otp"
                      maxLength={4}
                      required
                      placeholder="e.g. 4028"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="mt-1 text-center font-mono text-lg tracking-widest"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 text-xs"
                  >
                    Verify &amp; Enter Dashboard
                  </Button>
                </form>
              )}
            </TabsContent>

            {/* TAB 2: EMAIL & PASSWORD */}
            <TabsContent value="password">
              <form onSubmit={handleVerifyOtp} className="space-y-4 text-xs">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="student@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="pass">Password</Label>
                    <a href="#" className="text-[11px] text-blue-600 hover:underline">
                      Forgot?
                    </a>
                  </div>
                  <Input
                    id="pass"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 text-xs"
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Quick Demo Access Button */}
          <div className="pt-2 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              onClick={handleDemoLogin}
              className="w-full border-blue-200 bg-blue-50/60 hover:bg-blue-100/70 text-blue-800 font-semibold text-xs h-10 gap-2"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Instant One-Click Demo Login</span>
              <ArrowRight className="h-3.5 w-3.5 ml-auto" />
            </Button>
          </div>

          <div className="text-center text-xs text-slate-500">
            Don&apos;t have an account yet?{" "}
            <Link href="/register" className="font-semibold text-blue-600 hover:underline">
              Register here
            </Link>
          </div>
        </Card>

        {/* Security Trust Note */}
        <div className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <Lock className="h-3.5 w-3.5" />
          <span>256-Bit SSL Encrypted Portal • Crack All Exams EdTech</span>
        </div>
      </div>
    </div>
  );
}

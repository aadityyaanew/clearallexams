"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="brand" className="bg-blue-600 text-white font-semibold">
            Support Desk
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            We&apos;re Here to Help You Pass
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Have questions regarding syllabus updates, mock test access, billing, or corporate team licensing? Our student support counselors are available 6 days a week.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Card */}
          <div className="space-y-6">
            <Card className="p-6 bg-white border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Quick Contact Lines</h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Student Helpline:</div>
                    <a href="tel:+919820012345" className="hover:text-blue-600">
                      +91 98200 12345
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">WhatsApp Doubts:</div>
                    <span>+91 98200 12346 (Instant Query Assistance)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Official Email:</div>
                    <a href="mailto:support@clearallexams.in" className="hover:text-blue-600">
                      support@clearallexams.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Operating Hours:</div>
                    <span>Monday - Saturday: 9:30 AM to 7:30 PM IST</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base">Registered Office</h3>
              <div className="text-xs text-slate-600 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Level 7, Maker Maxity, Bandra Kurla Complex (BKC), Mumbai, Maharashtra - 400051
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send an Inquiry or Request a Callback
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our academic counselors typically reply within 2 hours during working hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-950 text-base">Inquiry Received!</h4>
                  <p className="text-xs text-emerald-800">
                    Thank you for reaching out. One of our NISM preparation mentors will contact you shortly via phone or WhatsApp.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs"
                  >
                    Send another query
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="c-name">Your Full Name</Label>
                      <Input id="c-name" required placeholder="e.g. Priyanshu Sharma" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="c-phone">Mobile / WhatsApp Number</Label>
                      <Input id="c-phone" required placeholder="+91 98765 43210" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="c-email">Email Address</Label>
                      <Input id="c-email" type="email" required placeholder="priyanshu@gmail.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="c-exam">Exam You Are Preparing For</Label>
                      <Input id="c-exam" placeholder="e.g. NISM Series V-A Mutual Funds" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="c-message">How can we assist you?</Label>
                    <textarea
                      id="c-message"
                      rows={4}
                      required
                      placeholder="Tell us about your target exam date, doubts, or package inquiry..."
                      className="w-full mt-1 rounded-lg border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-8 text-xs gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Query</span>
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

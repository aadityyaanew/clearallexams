"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Search,
  ShieldCheck,
  Award,
  Sparkles,
  Menu,
  ChevronDown,
  Phone,
  FileText,
  Video,
  Users,
  CheckCircle2,
  Lock,
  ArrowRight,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchModal } from "@/components/shared/SearchModal";
import { examsList } from "@/data/examsData";

export function Header() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Keyboard shortcut for search
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Sleek Announcement Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded text-[10px] border border-amber-500/30">
              ⚡ 2026 EDITION
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Updated for latest NISM &amp; SEBI syllabus • Flat 20% Off:
              <strong className="text-white ml-1 font-mono bg-slate-800 px-1 py-0.5 rounded border border-slate-700">
                PASS2026
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Pass Assurance
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href="tel:+919820012345"
              className="hidden md:flex items-center gap-1 hover:text-white transition-colors text-slate-400"
            >
              <Phone className="h-3 w-3" />
              <span>+91 98200 12345</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Main Logo from /mainlogo.jpeg */}
          <Link href="/" className="flex items-center shrink-0 py-1 group">
            <img
              src="/mainlogo.jpeg"
              alt="Crack All Exams - Smart Practice for Confident Exams"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
            {/* Certifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer outline-none">
                  <span>Exams</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-2">
                <DropdownMenuLabel className="text-[11px] font-bold uppercase text-slate-400">
                  Popular NISM Certifications
                </DropdownMenuLabel>
                {examsList.slice(0, 5).map((exam) => (
                  <DropdownMenuItem key={exam.id} asChild>
                    <Link
                      href={`/exams/${exam.id}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold text-slate-900 text-xs">
                          {exam.code}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate max-w-[170px]">
                          {exam.title}
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-600">
                        {exam.passRate}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/exams"
                    className="flex items-center justify-between p-2 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Browse All 24+ Certifications</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/exams"
              className={`px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors ${
                pathname === "/exams" ? "text-blue-600 font-semibold bg-slate-50" : ""
              }`}
            >
              Mock Tests
            </Link>

            <Link
              href="/mock-test/nism-va-demo"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>CBT Simulator</span>
            </Link>

            <Link
              href="/study-material"
              className={`px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors ${
                pathname === "/study-material" ? "text-blue-600 font-semibold bg-slate-50" : ""
              }`}
            >
              Formula Notes
            </Link>

            <Link
              href="/pricing"
              className={`px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors ${
                pathname === "/pricing" ? "text-blue-600 font-semibold bg-slate-50" : ""
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/testimonials"
              className={`px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors ${
                pathname === "/testimonials" ? "text-blue-600 font-semibold bg-slate-50" : ""
              }`}
            >
              Results
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Quick Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-500 text-xs transition-colors border border-slate-200/60"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search exam...</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 rounded bg-white text-[10px] text-slate-500 font-mono border border-slate-200">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              className="flex md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Login Link */}
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-slate-700 text-xs font-semibold">
                Login
              </Button>
            </Link>

            {/* Free Demo CTA */}
            <Link href="/mock-test/nism-va-demo">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs h-9 px-3.5 shadow-xs gap-1.5">
                <Play className="h-3 w-3 fill-white" />
                <span>Free Mock Test</span>
              </Button>
            </Link>

            {/* Mobile Menu (Sheet) */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0 flex flex-col justify-between">
                <div>
                  <SheetHeader className="p-4 border-b border-slate-100 text-left">
                    <SheetTitle>
                      <img
                        src="/mainlogo.jpeg"
                        alt="Crack All Exams"
                        className="h-9 w-auto object-contain"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="p-4 space-y-1 text-sm font-medium">
                    <Link
                      href="/exams"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50"
                    >
                      <span>All Certifications</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </Link>

                    <Link
                      href="/mock-test/nism-va-demo"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50 bg-blue-50/50"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span>CBT Simulator</span>
                      </div>
                      <Badge variant="success" className="text-[10px]">Free</Badge>
                    </Link>

                    <Link
                      href="/study-material"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50"
                    >
                      <span>Formula Notes &amp; PDFs</span>
                    </Link>

                    <Link
                      href="/live-classes"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50"
                    >
                      <span>Live Masterclasses</span>
                    </Link>

                    <Link
                      href="/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50"
                    >
                      <span>Pricing &amp; Guarantee</span>
                    </Link>

                    <Link
                      href="/testimonials"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50"
                    >
                      <span>Student Results</span>
                    </Link>

                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-slate-800 hover:bg-slate-50"
                    >
                      <span>Student Portal</span>
                    </Link>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full justify-center text-xs h-9">
                      Student Login
                    </Button>
                  </Link>
                  <Link href="/mock-test/nism-va-demo" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-xs h-9">
                      Start Free Mock Test
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Global Search Dialog */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}

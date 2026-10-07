import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  Lock,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Value Ribbon */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300 font-medium">100% Pass Assurance</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
            <span className="text-slate-300 font-medium">2026 NISM Workbooks</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Lock className="h-4 w-4 text-purple-400 shrink-0" />
            <span className="text-slate-300 font-medium">Exact CBT Simulator</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 text-amber-400 shrink-0" />
            <span className="text-slate-300 font-medium">+91 98200 12345 Support</span>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-3">
            <Link href="/" className="inline-block py-1">
              <img
                src="/mainlogo.jpeg"
                alt="Crack All Exams - Smart Practice for Confident Exams"
                className="h-10 w-auto object-contain rounded"
              />
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-[11px]">
              India&apos;s premier test preparation platform for NISM, NCFM, and IRDAI certifications.
            </p>
            <div className="pt-1 text-[11px] text-slate-500 space-y-1">
              <div>BKC, Mumbai - 400051</div>
              <div>support@crackallexams.in • Mon-Sat 9:30 AM - 7:30 PM</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold uppercase text-[11px] tracking-wider">
              NISM Exams
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><Link href="/exams/nism-series-v-a-mutual-fund" className="hover:text-white">Series V-A Mutual Fund</Link></li>
              <li><Link href="/exams/nism-series-viii-equity-derivatives" className="hover:text-white">Series VIII Derivatives</Link></li>
              <li><Link href="/exams/nism-series-xv-research-analyst" className="hover:text-white">Series XV Research</Link></li>
              <li><Link href="/exams/nism-series-x-a-investment-adviser-level-1" className="hover:text-white">Series X-A Adviser</Link></li>
              <li><Link href="/exams" className="text-blue-400 hover:underline">All Certifications →</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold uppercase text-[11px] tracking-wider">
              Resources
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><Link href="/mock-test/nism-va-demo" className="hover:text-white">Free Test Simulator</Link></li>
              <li><Link href="/study-material" className="hover:text-white">Formula Sheets</Link></li>
              <li><Link href="/live-classes" className="hover:text-white">Live Masterclasses</Link></li>
              <li><Link href="/video-lectures" className="hover:text-white">Video Lectures</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pass Guarantee</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold uppercase text-[11px] tracking-wider">
              Company
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Hall of Fame</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact &amp; Helpline</Link></li>
              <li><Link href="/login" className="hover:text-white">Student Login</Link></li>
            </ul>
          </div>
        </div>

        {/* Short Legal Note */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-[10px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 Crack All Exams EdTech Pvt. Ltd. Independent preparation platform. NISM, SEBI, and IRDAI trademarks belong to their respective authorities.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-slate-300">Privacy</Link>
            <Link href="/about" className="hover:text-slate-300">Terms</Link>
            <Link href="/pricing" className="hover:text-slate-300">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

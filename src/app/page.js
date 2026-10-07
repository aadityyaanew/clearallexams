import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeClient } from "@/components/home/HomeClient";

export const metadata = {
  title: "ClearAllExams - Premier NISM & Financial Certification Prep Platform",
  description:
    "Crack NISM Series V-A, Series VIII, Series XV, and financial regulatory certifications on your first attempt. Experience real Prometric CBT exam simulators, chapter tests, negative marking calculators, formula sheets, and 100% Pass Assurance.",
  keywords: [
    "NISM mock test",
    "NISM Series V-A Mutual Fund",
    "NISM Series VIII Equity Derivatives",
    "NISM Series XV Research Analyst",
    "NISM exam simulator",
    "financial certifications India",
    "SEBI certification exam",
    "IRDAI IC38 mock test",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <HomeClient />
      </main>
      <Footer />
    </div>
  );
}

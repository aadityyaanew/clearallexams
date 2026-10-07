import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Crack All Exams",
    default: "Crack All Exams - Smart Practice for Confident Exams",
  },
  description:
    "India's premier EdTech portal for NISM, NCFM, and IRDAI certification examinations. Master mutual funds, equity derivatives, research analyst, and investment adviser exams with realistic CBT simulators and 100% Pass Assurance.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";
import {
  Star,
  Clock,
  HelpCircle,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Percent,
} from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ExamCard({ exam }) {
  const discountPercent = Math.round(
    ((exam.regularPrice - exam.discountedPrice) / exam.regularPrice) * 100
  );

  return (
    <Card className="flex flex-col justify-between hover:shadow-md transition-all duration-200 border-slate-200/90 group overflow-hidden bg-white">
      <div>
        {/* Card Header Top */}
        <div className="p-5 pb-3">
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <Badge
              variant="default"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60 font-semibold"
            >
              {exam.code}
            </Badge>

            {exam.isBestSeller ? (
              <Badge variant="warning" className="text-[11px] font-medium">
                ★ Best Seller
              </Badge>
            ) : exam.badge ? (
              <Badge variant="secondary" className="text-[11px]">
                {exam.badge}
              </Badge>
            ) : null}
          </div>

          <Link href={`/exams/${exam.id}`}>
            <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
              {exam.title}
            </h3>
          </Link>

          {/* Ratings & Pass rate */}
          <div className="flex items-center gap-3 mt-2.5 text-xs">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{exam.rating}</span>
              <span className="text-slate-400 font-normal">({exam.reviewsCount})</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
              <TrendingUp className="h-3 w-3 text-emerald-600" />
              <span>{exam.passRate} Pass Rate</span>
            </div>
          </div>
        </div>

        {/* Card Body Features */}
        <div className="px-5 py-2">
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {exam.shortSummary}
          </p>

          {/* Exam Specs Grid */}
          <div className="grid grid-cols-2 gap-2 mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
            <div className="flex items-center gap-1.5 text-slate-700">
              <HelpCircle className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              <span><strong>{exam.questionsCount}+</strong> MCQs</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Award className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span><strong>{exam.fullMocksCount}</strong> Full Mocks</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Clock className="h-3.5 w-3.5 text-slate-500 shrink-0" />
              <span>{exam.durationMinutes} mins / 100 Marks</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Percent className="h-3.5 w-3.5 text-amber-600 shrink-0" />
              <span>Pass: {exam.passingMarks}% ({exam.negativeMarking})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Pricing & Actions */}
      <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/50 mt-2">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-slate-900">
                ₹{exam.discountedPrice}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{exam.regularPrice}
              </span>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">
                {discountPercent}% OFF
              </span>
            </div>
            <span className="text-[10px] text-slate-500">30 Days Access • Unlimited Attempts</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link href={`/mock-test/nism-va-demo`} className="w-full">
            <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
              Free Demo
            </Button>
          </Link>
          <Link href={`/exams/${exam.id}`} className="w-full">
            <Button size="sm" className="w-full text-xs font-semibold bg-blue-600 hover:bg-blue-700">
              View Syllabus
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

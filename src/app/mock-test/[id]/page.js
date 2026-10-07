import { ExamSimulator } from "@/components/test-engine/ExamSimulator";
import { examsList } from "@/data/examsData";

export function generateStaticParams() {
  return [
    { id: "nism-va-demo" },
    ...examsList.map((exam) => ({ id: exam.id })),
  ];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const exam = examsList.find((e) => e.id === resolvedParams.id);
  const code = exam ? exam.code : "NISM Series V-A";
  const title = exam ? exam.title : "Mutual Fund Distributors";

  return {
    title: `Live Mock Test Simulator: ${code} - ${title} | Crack All Exams`,
    description: `Experience the official computer-based examination interface for ${code}. Practice with realistic countdown timer, question palette, and negative marking.`,
  };
}

export default async function MockTestPage({ params }) {
  const resolvedParams = await params;
  const exam = examsList.find((e) => e.id === resolvedParams.id);
  const examCode = exam ? exam.code : "NISM Series V-A";
  const testTitle = exam
    ? `${exam.title} - Full Mock Simulation 1`
    : "Mutual Fund Distributors - Diagnostic Mock Test 1";

  return (
    <div className="min-h-screen">
      <ExamSimulator examCode={examCode} testTitle={testTitle} />
    </div>
  );
}

import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Job | wemake" },
    { name: "description", content: "새로운 채용 공고를 등록하세요" },
  ];
};

export default function SubmitJobPage() {
  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">채용 공고 등록</h1>
        <div className="space-y-6">
          {/* 채용 공고 등록 폼이 여기에 표시됩니다 */}
        </div>
      </div>
    </div>
  );
}

import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "채용 상세 | Product Hunt" },
    { name: "description", content: "채용 상세 정보를 확인하세요" },
  ];
};

export default function JobPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* 채용 상세 정보가 여기에 표시됩니다 */}
        </div>
      </div>
    </div>
  );
}

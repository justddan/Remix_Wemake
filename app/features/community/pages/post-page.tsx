import type { Route } from "./+types/post-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "게시글 | wemake" },
    { name: "description", content: "게시글 상세 페이지" },
  ];
};

export default function PostPage() {
  return (
    <div>
      <h1>게시글 상세</h1>
    </div>
  );
}

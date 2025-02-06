import type { Route } from "./+types/submit-post-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "게시글 작성 | wemake" }];
};

export default function SubmitPostPage() {
  return (
    <div>
      <h1>게시글 작성</h1>
    </div>
  );
}

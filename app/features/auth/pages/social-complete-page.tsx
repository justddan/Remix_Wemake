import type { Route } from "./+types/social-complete-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "소셜 로그인 완료" }];
};

export default function SocialCompletePage({}: Route.ComponentProps) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">소셜 로그인 완료</h1>
      <p className="text-gray-600">인증이 완료되었습니다</p>
    </div>
  );
}

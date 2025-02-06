import type { Route } from "./+types/social-start-page";

export default function SocialStartPage({}: Route.ComponentProps) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">소셜 로그인 중...</h1>
      <p className="text-gray-600">잠시만 기다려주세요</p>
    </div>
  );
}

export const meta: Route.MetaFunction = () => {
  return [{ title: "소셜 로그인" }];
};

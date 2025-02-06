import type { Route } from "./+types/otp-complete-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "인증 코드 확인" }];
};

export default function OtpCompletePage({}: Route.ComponentProps) {
  return <div className="space-y-6"></div>;
}

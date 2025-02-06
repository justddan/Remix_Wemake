import type { Route } from "./+types/otp-start-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP 인증" }];
};

export default function OtpStartPage({}: Route.ComponentProps) {
  return <div className="space-y-6"></div>;
}

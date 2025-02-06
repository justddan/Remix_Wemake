import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-start-page";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Start OTP | wemake" }];
};

export default function OtpStartPage({}: Route.ComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full gap-10 max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Log in with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send you a 4-digit code to log in to your account.
          </p>
        </div>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />

          <Button className="w-full" type="submit">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}

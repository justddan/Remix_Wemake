import { Form } from "react-router";
import type { Route } from "./+types/otp-complete-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Verify OTP | wemake" }];
};

export default function OtpCompletePage({}: Route.ComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full gap-10 max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Confirm OTP</h1>
          <p className="text-sm text-muted-foreground">
            Please enter the OTP code we sent to your email.
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
          <InputPair
            id="otp"
            label="OTP"
            description="Enter the OTP code we sent to your email"
            name="otp"
            required
            type="number"
            placeholder="i.e 1234"
          />

          <Button className="w-full" type="submit">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}

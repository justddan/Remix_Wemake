import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-start-page";
import { Form, Link, redirect, useNavigation } from "react-router";
import InputPair from "~/common/components/input-pair";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";
import { LoaderCircle } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Start OTP | wemake" }];
};

const formSchema = z.object({
  email: z.string().email(),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { data, success } = formSchema.safeParse(Object.fromEntries(formData));
  if (!success) {
    return { error: "Invalid email address" };
  }

  const { email } = data;
  const { client } = makeSSRClient(request);
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    return { error: "Failed to send OTP" };
  }

  return redirect(`/auth/otp/complete?email=${email}`);
};

export default function OtpStartPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "loading" || navigation.state === "submitting";
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full gap-10 max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Log in with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send you a 4-digit code to log in to your account.
          </p>
        </div>
        <Form className="w-full space-y-4" method="post">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />

          {actionData && "error" in actionData && (
            <p className="text-red-500">{actionData.error}</p>
          )}

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Send OTP"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}

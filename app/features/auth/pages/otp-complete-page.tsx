import { Form, redirect, useNavigation, useSearchParams } from "react-router";
import type { Route } from "./+types/otp-complete-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";
import { LoaderCircle } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Verify OTP | wemake" }];
};

const formSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(4),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { data, success, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return { fieldErrors: error.flatten().fieldErrors };
  }

  const { email, otp } = data;
  const { client, headers } = makeSSRClient(request);
  const { error: verifyError } = await client.auth.verifyOtp({
    email,
    token: otp,
    type: "email",
  });
  if (verifyError) {
    return { verifyError: verifyError.message };
  }

  return redirect("/", { headers });
};

export default function OtpCompletePage({ actionData }: Route.ComponentProps) {
  const [searchParams, _] = useSearchParams();
  const email = searchParams.get("email");
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "loading" || navigation.state === "submitting";
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
            defaultValue={email || ""}
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />
          {actionData && "fieldErrors" in actionData && (
            <p className="text-red-500">
              {actionData.fieldErrors?.email?.join(", ")}
            </p>
          )}
          <InputPair
            id="otp"
            label="OTP"
            description="Enter the OTP code we sent to your email"
            name="otp"
            required
            type="number"
            placeholder="i.e 1234"
          />
          {actionData && "fieldErrors" in actionData && (
            <p className="text-red-500">
              {actionData.fieldErrors?.otp?.join(", ")}
            </p>
          )}
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Verify OTP"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}

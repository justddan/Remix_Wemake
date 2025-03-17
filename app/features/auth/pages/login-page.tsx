import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link, redirect, useNavigation } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";
import { makeSSRClient } from "~/supa-client";
import { CircleIcon, LoaderCircle } from "lucide-react";
import { z } from "zod";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Login | wemake" },
    { name: "description", content: "Login to your account" },
  ];
};

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email should be a string",
    })
    .email("Invalid email address"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password should be a string",
    })
    .min(8, "Password must be at least 8 characters"),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) {
    return {
      formErrors: error.flatten().fieldErrors,
    };
  }

  const { email, password } = data;

  const { client, headers } = makeSSRClient(request);

  const { error: loginError } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    return {
      loginError: loginError.message,
    };
  }

  return redirect("/", { headers });
};

export default function LoginPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";
  return (
    <div className="flex flex-col items-center justify-center relative h-full">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/auth/join">Join</Link>
      </Button>
      <div className="flex flex-col items-center justify-center w-full gap-10 max-w-md">
        <h1 className="text-2xl font-bold">Log in to your account</h1>
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
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">
              {actionData.formErrors?.email?.join(", ")}
            </p>
          )}
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">
              {actionData.formErrors?.password?.join(", ")}
            </p>
          )}
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Log in"
            )}
          </Button>
          {actionData && "loginError" in actionData && (
            <p className="text-red-500">{actionData.loginError}</p>
          )}
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}

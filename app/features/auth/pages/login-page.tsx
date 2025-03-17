import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link, useNavigation } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";
import { makeSSRClient } from "~/supa-client";
import { CircleIcon, LoaderCircle } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Login | wemake" },
    { name: "description", content: "Login to your account" },
  ];
};

export const action = async ({ request }: Route.ActionArgs) => {
  const { client } = makeSSRClient(request);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  return {
    message: "Login successful",
  };
};

export default function LoginPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Log in"
            )}
          </Button>
          {actionData?.message && (
            <p className="text-red-500">{actionData.message}</p>
          )}
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}

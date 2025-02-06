import InputPair from "~/common/components/input-pair";
import type { Route } from "./+types/join-page";
import { Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function JoinPage({}: Route.ComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/auth/login">Log in</Link>
      </Button>
      <div className="flex items-center justify-center gap-10 mx-w-md">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="name"
            label="Name"
            description="Enter your name"
            name="name"
            required
            type="text"
            placeholder="Enter your name"
          />
          <InputPair
            id="username"
            label="Username"
            description="Enter your username"
            name="username"
            required
            type="text"
            placeholder="i.e wemake"
          />
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
          <Button className="w-full" type="submit">
            Create an account
          </Button>
        </Form>
      </div>
    </div>
  );
}

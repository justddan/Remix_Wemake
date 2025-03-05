import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-team-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { PRODUCT_STAGE } from "../constants";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Team | wemake" },
    { name: "description", content: "Create a team to find a team mate." },
  ];
};

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Submit Team" subtitle="Create a team to find a team mate." />
      <Form className="max-w-screen-2xl flex flex-col gap-10 mx-auto items-center">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            label="What is the name of your product?"
            description="(20 characters or less)"
            placeholder="i.e Doggy Social"
            name="name"
            maxLength={20}
            type="text"
            id="name"
            required
          />
          <SelectPair
            label="What is the stage of your product?"
            description="Select the stage of your product"
            name="stage"
            required
            placeholder="Select the stage of your product"
            options={PRODUCT_STAGE}
          />
          <InputPair
            label="What is the size of your team?"
            description="(1-100)"
            name="size"
            max={100}
            min={1}
            type="number"
            id="size"
            required
          />
          <InputPair
            label="How much equity are you willing to give?"
            description="(each)"
            name="equity"
            max={100}
            min={0}
            type="number"
            id="equity"
            required
          />
          <InputPair
            label="What roles are you looking for?"
            placeholder="i.e React Developer, Backend Developer, Product Manager"
            description="(comma separated)"
            name="roles"
            type="text"
            id="roles"
            required
          />
          <InputPair
            label="What is the description of your product?"
            description="(200 characters or less)"
            placeholder="i.e We are looking for a React Developer to join our team. We are a startup looking for a new member to join our team."
            name="description"
            maxLength={200}
            type="text"
            id="description"
            required
            textArea
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}

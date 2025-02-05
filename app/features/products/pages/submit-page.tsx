import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | WeMake" },
    { name: "description", content: "Submit your product" },
  ];
};

export default function SubmitPage() {
  return (
    <div>
      <h1>Submit Page</h1>
    </div>
  );
}

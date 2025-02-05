import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  return (
    <div>
      <h1>Promote Page</h1>
    </div>
  );
}

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  return (
    <div>
      <h1>Categories Page</h1>
    </div>
  );
}

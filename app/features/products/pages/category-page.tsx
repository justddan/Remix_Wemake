import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Category | wemake" },
    { name: "description", content: "Products in this category" },
  ];
};

export default function CategoryPage() {
  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
}

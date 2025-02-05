import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Products | WeMake" },
    { name: "description", content: "Explore products made by our community" },
  ];
};

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
}

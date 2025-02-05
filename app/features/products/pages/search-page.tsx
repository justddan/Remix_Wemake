import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

export default function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}

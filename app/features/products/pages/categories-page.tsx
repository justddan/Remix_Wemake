import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/category-page";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`categoryId-${index}`}
            id="categoryId"
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}

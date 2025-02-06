import { ProductCard } from "~/features/products/compnents/product-card";
import type { Route } from "./+types/profile-products-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Products | wemake" },
    { name: "description", content: "View your products" },
  ];
};

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <ProductCard
          key={`productId-${index}`}
          id="productId"
          name="Product Name"
          description="Product Description"
          commentsCount={12}
          viewsCount={12}
          votesCount={120}
        />
      ))}
    </div>
  );
}

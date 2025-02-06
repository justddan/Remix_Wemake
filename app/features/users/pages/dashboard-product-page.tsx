import type { Route } from "./+types/dashboard-product-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Product Dashboard | wemake",
    },
  ];
};

export default function DashboardProductPage() {
  return <div></div>;
}

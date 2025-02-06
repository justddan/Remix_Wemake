import type { Route } from "./+types/dashboard-ideas-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "My Ideas | wemake",
    },
    {
      name: "description",
      content: "We make ideas happen",
    },
  ];
};

export default function DashboardIdeasPage() {
  return <div></div>;
}

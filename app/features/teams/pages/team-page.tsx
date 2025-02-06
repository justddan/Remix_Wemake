import type { Route } from "./+types/team-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Team | wemake" },
    { name: "description", content: "Team page" },
  ];
};

export default function TeamPage() {
  return <div>Team Page</div>;
}

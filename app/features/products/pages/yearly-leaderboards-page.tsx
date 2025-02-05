import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboards | WeMake" },
    { name: "description", content: "Yearly product leaderboards" },
  ];
};

export default function YearlyLeaderboardsPage() {
  return (
    <div>
      <h1>Yearly Leaderboards Page</h1>
    </div>
  );
}

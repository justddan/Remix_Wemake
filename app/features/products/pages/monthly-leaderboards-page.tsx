import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Leaderboards | WeMake" },
    { name: "description", content: "Monthly product leaderboards" },
  ];
};

export default function MonthlyLeaderboardsPage() {
  return (
    <div>
      <h1>Monthly Leaderboards Page</h1>
    </div>
  );
}

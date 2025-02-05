import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboards | WeMake" },
    { name: "description", content: "Weekly product leaderboards" },
  ];
};

export default function WeeklyLeaderboardsPage() {
  return (
    <div>
      <h1>Weekly Leaderboards Page</h1>
    </div>
  );
}

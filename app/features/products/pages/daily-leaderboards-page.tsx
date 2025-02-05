import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboards | WeMake" },
    { name: "description", content: "Daily product leaderboards" },
  ];
};

export default function DailyLeaderboardsPage() {
  return (
    <div>
      <h1>Daily Leaderboards Page</h1>
    </div>
  );
}

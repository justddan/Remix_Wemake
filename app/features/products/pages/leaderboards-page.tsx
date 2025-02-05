import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | WeMake" },
    { name: "description", content: "Product leaderboards" },
  ];
};

export default function LeaderboardsPage() {
  return (
    <div>
      <h1>Leaderboards Page</h1>
    </div>
  );
}

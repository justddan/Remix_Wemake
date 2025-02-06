import type { Route } from "./+types/profile-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Profile | wemake",
    },
  ];
};

export default function ProfilePage() {
  return <div></div>;
}

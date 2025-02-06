import type { Route } from "./+types/notifications-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Notifications | wemake",
    },
  ];
};

export default function NotificationsPage() {
  return <div></div>;
}

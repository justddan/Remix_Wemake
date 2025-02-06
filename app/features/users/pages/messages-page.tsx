import type { Route } from "./+types/messages-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Messages | wemake",
    },
  ];
};

export default function MessagesPage() {
  return <div></div>;
}

import type { Route } from "./+types/profile-posts-page";
import { PostCard } from "~/features/community/components/post-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Posts | wemake" },
    { name: "description", content: "View your posts" },
  ];
};

export default function ProfilePostsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <PostCard
          key={`postId-${index}`}
          id="postId"
          title="What is the best productivity tool?"
          author="Nico"
          authorAvatarUrl="https://github.com/shadcn.png"
          category="Productivity"
          createdAt="12 hours ago"
          expanded
        />
      ))}
    </div>
  );
}

import { getUserPosts } from "../queries";
import type { Route } from "./+types/profile-posts-page";
import { PostCard } from "~/features/community/components/post-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Posts | wemake" },
    { name: "description", content: "View your posts" },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const posts = await getUserPosts(params.username);
  return { posts };
};

export default function ProfilePostsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.posts.map((post) => (
        <PostCard
          key={`postId-${post.post_id}`}
          id={post.post_id}
          title={post.title}
          author={post.author_username}
          authorAvatarUrl={post.author_avatar}
          category={post.topic}
          postedAt={post.created_at}
          expanded
        />
      ))}
    </div>
  );
}

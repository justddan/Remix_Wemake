import { Link, type MetaFunction } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Car, ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/compnents/product-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | WeMake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function Home() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p">
            <Link to="/products/leaderboard">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            id="postId"
            title="What is the best productivity tool?"
            author="Nico"
            authorAvatarUrl="https://github.com/shadcn.png"
            category="Productivity"
            createdAt="12 hours ago"
          />
        ))}
      </div>
    </div>
  );
}

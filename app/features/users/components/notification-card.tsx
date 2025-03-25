import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { EyeIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { Link, useFetcher } from "react-router";

interface NotificationCardProps {
  id: number;
  avatarUrl: string;
  avatarFallback: string;
  username: string;
  type: "follow" | "review" | "reply";
  productName?: string;
  postTitle?: string;
  payloadId?: number;
  timestamp: string;
  seen: boolean;
}

export function NotificationCard({
  id,
  avatarUrl,
  avatarFallback,
  username,
  type,
  productName,
  postTitle,
  payloadId,
  timestamp,
  seen,
}: NotificationCardProps) {
  const getMessage = (type: "follow" | "review" | "reply") => {
    switch (type) {
      case "follow":
        return " followed you.";
      case "review":
        return " reviewed your product: ";
      case "reply":
        return " replied to your post: ";
    }
  };
  const fetcher = useFetcher();
  const optimisticSeen = fetcher.state === "idle" ? seen : true;
  return (
    <Card
      className={cn("min-w-[450px]", optimisticSeen ? "" : "bg-yellow-500/60")}
    >
      <CardHeader className="flex flex-row gap-5 items-start">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">
            <span>{username}</span>
            <span>{getMessage(type)}</span>
            {productName && (
              <Button variant={"ghost"} asChild className="text-lg">
                <Link to={`/products/${payloadId}`}>{productName}</Link>
              </Button>
            )}
            {postTitle && (
              <Button variant={"ghost"} asChild className="text-lg">
                <Link to={`/community/${payloadId}`}>{postTitle}</Link>
              </Button>
            )}
          </CardTitle>
          <small className="text-muted-foreground text-sm">{timestamp}</small>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        {!optimisticSeen && (
          <fetcher.Form method="POST" action={`/my/notifications/${id}/see`}>
            <Button variant="outline" size="icon">
              <EyeIcon className="size-4" />
            </Button>
          </fetcher.Form>
        )}
      </CardFooter>
    </Card>
  );
}

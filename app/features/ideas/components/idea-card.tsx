import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { DateTime } from "luxon";

interface IdeaCardProps {
  id: number;
  title: string;
  viewCount?: number;
  createdAt?: string;
  likeCount?: number;
  claimed?: boolean;
  owner?: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  createdAt,
  likeCount,
  claimed,
  owner,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={claimed || owner ? "" : `/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed && !owner
                  ? "bg-muted-foreground break-all selection:bg-muted-foreground text-muted-foreground"
                  : ""
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      {owner ? null : (
        <CardContent className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="size-4" />
            <span>{viewCount}</span>
          </div>
          <DotIcon className="size-4" />
          {createdAt ? (
            <span>{DateTime.fromISO(createdAt).toRelative()}</span>
          ) : null}
        </CardContent>
      )}
      <CardFooter className="flex justify-end gap-2">
        {!claimed && !owner ? (
          <>
            <Button variant="outline">
              <HeartIcon className="size-4" />
              <span>{likeCount}</span>
            </Button>
            <Button asChild>
              <Link to={`/ideas/${id}`}>Claim idea now &rarr;</Link>
            </Button>
          </>
        ) : (
          <Button variant="outline" disabled>
            <LockIcon className="size-4" />
            claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

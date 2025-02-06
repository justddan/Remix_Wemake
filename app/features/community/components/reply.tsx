import { Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  avatarUrl: string;
  username: string;
  timestamp: string;
  content: string;
  topLevel: boolean;
}

export function Reply({
  avatarUrl,
  username,
  timestamp,
  content,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-2">
            <Link to={`/user/@${username}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-sm text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex items-start gap-5 w-3/4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/serranoarevalo.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-5 items-end w-full">
            <Textarea
              placeholder="Write a reply"
              className="w-full resize-none"
              rows={5}
            />
            <Button>Reply</Button>
          </div>
        </Form>
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            username="Nicolas"
            avatarUrl="https://github.com/serranoarevalo.png"
            timestamp="12 hours ago"
            content="I've been using Todolist for a while now and it's been great. It's simple, easy to use, and has a great community."
            topLevel
          />
        </div>
      )}
    </div>
  );
}

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface MessageBubbleProps {
  avatarSrc: string;
  message: string;
  isCurrentUser?: boolean;
}

export function MessageBubble({
  avatarSrc,
  message,
  isCurrentUser = false,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex items-end gap-4 ${
        isCurrentUser ? "flex-row-reverse" : ""
      }`}
    >
      <Avatar>
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div
        className={`rounded-md p-4 text-sm max-w-[25%] ${
          isCurrentUser
            ? "bg-accent rounded-br-none"
            : "bg-primary text-primary-foreground rounded-bl-none"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

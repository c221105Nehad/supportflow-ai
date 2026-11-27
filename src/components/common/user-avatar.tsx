
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  src?: string;
  size?: "default" | "sm" | "lg";
  className?: string;
  fallbackClassName?: string;
}

export function UserAvatar({
  name,
  src,
  size = "default",
  className,
  fallbackClassName,
}: UserAvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <Avatar size={size} className={className}>
      {src && <AvatarImage src={src} alt={name} />}

      <AvatarFallback className={fallbackClassName}>
        {initials || "?"}
      </AvatarFallback>
    </Avatar>
  );
}

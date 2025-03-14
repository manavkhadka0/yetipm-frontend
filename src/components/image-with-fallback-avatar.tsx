import React from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackAvatarProps {
  src?: string | null;
  alt: string;
  className?: string;
}

export function ImageWithFallbackAvatar({
  src,
  alt,
  className,
}: ImageWithFallbackAvatarProps) {
  // Extract initials from the name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  // Generate a deterministic background color based on the name
  const getBackgroundColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  // If image exists, render the image
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("object-cover w-full h-full", className)}
      />
    );
  }

  // Fallback avatar
  const initials = getInitials(alt);
  const backgroundColor = getBackgroundColor(alt);

  return (
    <div
      className={cn(
        "flex items-center justify-center text-white font-bold rounded-full",
        className
      )}
      style={{ backgroundColor }}
    >
      {initials}
    </div>
  );
}

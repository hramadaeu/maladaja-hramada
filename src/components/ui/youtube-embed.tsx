"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";

type YouTubeEmbedProps = {
  playlistId: string;
  title: string;
};

export function YouTubeEmbed({ playlistId, title }: YouTubeEmbedProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center aspect-video bg-muted brutal-border gap-2 p-4 text-center">
        <AlertTriangle className="size-6 text-foreground/60" />
        <p className="font-body text-body-md text-foreground/60">
          Failed to load video playlist
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full aspect-video"
      onError={() => setFailed(true)}
    />
  );
}

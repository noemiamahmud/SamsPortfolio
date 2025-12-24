import React from "react";
import { marked } from "marked";
import { Item } from "../../api/types";
import { getApiBase } from "../../api/http";

export default function MediaRenderer({ item }: { item: Item }) {
  const src = `${getApiBase()}${item.fileUrl}`;

  if (item.mediaType === "image") {
    return <img src={src} alt={item.title} className="w-full rounded-2xl object-contain" />;
  }

  if (item.mediaType === "video") {
    return <video src={src} controls className="w-full rounded-2xl" />;
  }

  if (item.mediaType === "audio") {
    return <audio src={src} controls className="w-full" />;
  }

  if (item.mediaType === "pdf") {
    return (
      <iframe
        title={item.title}
        src={src}
        className="h-[75vh] w-full rounded-2xl border border-white/10 bg-black/30"
      />
    );
  }

  return <TextViewer url={src} mime={item.mimeType} />;
}

function TextViewer({ url, mime }: { url: string; mime: string }) {
  const [content, setContent] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const isMarkdown = mime.includes("markdown") || url.toLowerCase().endsWith(".md");

  React.useEffect(() => {
    (async () => {
      try {
        const r = await fetch(url);
        const t = await r.text();
        setContent(t);
      } catch (e: any) {
        setError(e?.message || "Failed to load text");
      }
    })();
  }, [url]);

  if (error) return <div className="text-sm text-red-300">{error}</div>;

  if (isMarkdown) {
    const html = marked.parse(content || "");
    return (
      <div
        className="prose prose-invert max-w-none rounded-2xl border border-white/10 bg-black/30 p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
      {content}
    </pre>
  );
}

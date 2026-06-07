type YoutubeEmbedProps = {
  id: string;
  title: string;
};

export function YoutubeEmbed({ id, title }: YoutubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-lg border hairline bg-ink-850">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

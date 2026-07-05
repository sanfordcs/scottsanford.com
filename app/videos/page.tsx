import { songs } from "@/lib/catalog";

export const metadata = {
  title: "Videos | Scott Sanford"
};

export default function VideosPage() {
  const videos = songs.filter((song) => song.videoUrl);

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Videos</p>
        <h1>Performances, covers, and archive clips</h1>
        <p>
          Public video links from performance clips, instrumental covers, and legacy band material.
          More live clips, studio videos, and song-specific media can be added here as they are
          cleaned up.
        </p>
      </div>

      <div className="catalog-list">
        {videos.map((song) => (
          <article className="catalog-item" key={song.slug}>
            <div>
              <span className="catalog-status">Video</span>
              <h2>{song.title}</h2>
              <p>{song.summary}</p>
            </div>
            <div className="video-actions">
              {song.videoEmbedUrl ? (
                <iframe
                  className="video-widget video-preview"
                  title={`${song.title} video player`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  src={song.videoEmbedUrl}
                />
              ) : null}
              <a className="button secondary" href={song.videoUrl} target="_blank" rel="noreferrer">
                Open video
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

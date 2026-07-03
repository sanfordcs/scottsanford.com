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
        <h1>Performances and clips</h1>
        <p>
          Public video links from performance clips and legacy site material. More live clips,
          studio videos, and song-specific media can be added here as they are cleaned up.
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
            <a className="button secondary" href={song.videoUrl} target="_blank" rel="noreferrer">
              Open video
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

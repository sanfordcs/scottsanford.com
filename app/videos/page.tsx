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
          A focused video index for public fans. Add YouTube, Vimeo, live clips, gear demos, and
          performance videos here as the source links are confirmed.
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

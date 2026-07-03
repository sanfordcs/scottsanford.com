import Link from "next/link";
import { getProjects, songs } from "@/lib/catalog";

export const metadata = {
  title: "Music | Scott Sanford"
};

export default function MusicPage() {
  const projects = getProjects();

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Music catalog</p>
        <h1>Songs and recordings</h1>
        <p>
          A starter catalog for public listening. Each song can grow into its own page with audio,
          credits, lyrics, notes, and video.
        </p>
      </div>

      <div className="project-filter" aria-label="Projects represented in the catalog">
        {projects.map((project) => (
          <span key={project}>{project}</span>
        ))}
      </div>

      <div className="catalog-list">
        {songs.map((song) => (
          <article className="catalog-item" key={song.slug}>
            <div>
              <span className="catalog-status">{song.status}</span>
              <h2>{song.title}</h2>
              <p>{song.summary}</p>
              <div className="tag-row">
                {song.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <Link className="button secondary" href={`/music/${song.slug}`}>
              Song page
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

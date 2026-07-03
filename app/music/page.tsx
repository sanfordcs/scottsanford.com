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
        <h1>Songs, recordings, and active writing lanes</h1>
        <p>
          Public tracks, performance links, and the writing lanes that define where the catalog is
          going next. Some entries are listenable now; others mark active songwriting directions
          that will become full song pages as demos, lyrics, credits, and release plans are ready.
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

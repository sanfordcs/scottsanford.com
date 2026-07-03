import Link from "next/link";
import { featuredSong, songs } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Official music catalog</p>
          <h1>Progressive guitar music with sharp turns, heavy edges, and melodic release.</h1>
          <p className="hero-text">
            Scott Sanford writes and records guitar-forward music rooted in rock, metal, fusion,
            and instrumental composition. Start with the catalog, then dig into the Algebra of
            Light project notes.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/music">
              Browse music
            </Link>
            <Link className="button secondary" href="/algebra-of-light">
              Algebra of Light
            </Link>
          </div>
        </div>
        <aside className="feature-panel" aria-label="Featured song">
          <p className="eyebrow">Featured track</p>
          <h2>{featuredSong.title}</h2>
          <p>{featuredSong.summary}</p>
          <div className="tag-row">
            {featuredSong.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="text-link" href={`/music/${featuredSong.slug}`}>
            View song notes
          </Link>
        </aside>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Catalog</p>
          <h2>Start with the songs.</h2>
        </div>
        <div className="card-grid">
          {songs.slice(0, 3).map((song) => (
            <Link className="song-card" key={song.slug} href={`/music/${song.slug}`}>
              <span>{song.status}</span>
              <h3>{song.title}</h3>
              <p>{song.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

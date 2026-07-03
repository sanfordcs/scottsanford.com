import Image from "next/image";
import Link from "next/link";
import { featuredSong, songs } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-background" aria-hidden="true">
          <span className="wave wave-one" />
          <span className="wave wave-two" />
          <span className="pulse-ring" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Official music site</p>
          <h1>Electric guitar roots. Pop instincts. Faith-tinged songs in progress.</h1>
          <p className="hero-text">
            Scott Sanford writes and records across guitar-forward rock, progressive instrumentals,
            contemporary pop, and Christian-influenced compositions. The catalog is growing into a
            wider home for songs, studio notes, videos, and projects.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/music">
              Browse music
            </Link>
            <Link className="button secondary" href="/algebra-of-light">
              Algebra of Light
            </Link>
          </div>
          <div className="signal-row" aria-label="Current music directions">
            <span>Progressive rock</span>
            <span>Contemporary pop</span>
            <span>Christian elements</span>
            <span>Instrumental guitar</span>
          </div>
        </div>
        <aside className="artist-panel" aria-label="Scott Sanford in the studio">
          <div className="photo-shell">
            <Image
              src="/images/scott-studio.jpg"
              alt="Scott Sanford holding a guitar in a recording studio"
              width={720}
              height={960}
              priority
            />
          </div>
          <div className="feature-panel">
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
          </div>
        </aside>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Catalog directions</p>
          <h2>Not one lane. A working catalog with several centers of gravity.</h2>
          <p>
            The site now treats Algebra of Light as one project inside a broader artist catalog,
            leaving room for pop songs, Christian themes, guitar instrumentals, and covers.
          </p>
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

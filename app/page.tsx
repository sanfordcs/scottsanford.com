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
        <aside className="artist-panel" aria-label="Scott Sanford performance photos">
          <div className="photo-shell hero-photo">
            <Image
              src="/images/bent-tree-red-stage.jpg"
              alt="Scott Sanford playing guitar under red and white stage lights"
              width={1600}
              height={2133}
              priority
            />
          </div>
          <div className="photo-stack" aria-hidden="true">
            <Image
              src="/images/bent-tree-purple-stage.jpg"
              alt=""
              width={1136}
              height={640}
            />
            <Image
              src="/images/scott-studio.jpg"
              alt=""
              width={720}
              height={960}
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

      <section className="photo-band" aria-label="Performance and studio photos">
        <div className="photo-tile wide">
          <Image
            src="/images/bent-tree-purple-stage.jpg"
            alt="Scott Sanford playing guitar on a purple-lit stage"
            width={1136}
            height={640}
          />
        </div>
        <div className="photo-tile portrait">
          <Image
            src="/images/bent-tree-blue-closeup.jpg"
            alt="Close-up of Scott Sanford with guitar under blue stage lights"
            width={1080}
            height={1920}
          />
        </div>
        <div className="photo-tile stage">
          <Image
            src="/images/bent-tree-wide-stage.jpg"
            alt="Scott Sanford playing guitar on a wide stage with blue lighting"
            width={800}
            height={1200}
          />
        </div>
      </section>
    </>
  );
}

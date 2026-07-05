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
          <h1>Guitar-led songs moving between stage lights, studio ideas, and faith-shaped hooks.</h1>
          <p className="hero-text">
            Scott Sanford writes and records across progressive guitar work, instrumental
            arrangements, and a newer lane of contemporary pop with Christian elements. Start with
            the public tracks, then follow the catalog as the songwriting side comes forward.
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
              src="/images/studio-guitar-clean.webp"
              alt="Scott Sanford holding a guitar in a recording studio"
              width={900}
              height={1200}
              priority
            />
          </div>
          <div className="photo-stack" aria-hidden="true">
            <Image
              src="/images/bent-tree-red-stage.jpg"
              alt=""
              width={1600}
              height={2133}
            />
            <Image
              src="/images/bent-tree-purple-stage.jpg"
              alt=""
              width={1136}
              height={640}
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
          <h2>A catalog with more than one center of gravity.</h2>
          <p>
            Algebra of Light carries the progressive guitar side. Back to You shows the arrangement
            and performance side. The next chapter adds pop structure, vocal writing, and Christian
            themes without abandoning the guitar DNA.
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

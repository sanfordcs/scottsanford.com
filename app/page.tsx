import Image from "next/image";
import Link from "next/link";
import { songs } from "@/lib/catalog";

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
          <p className="eyebrow">Official music hub</p>
          <h1>Two artist names. One guitar-driven songwriter behind them.</h1>
          <p className="hero-text">
            Algebra of Light is the progressive artist identity for Kiser Gates. C. Scott Sanford
            is the separate artist name for contemporary pop songs, starting with Kimberly (My
            Secret Waterfall). This site ties the catalog together without blurring the brands.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/music">
              Browse music
            </Link>
            <Link className="button secondary" href="/algebra-of-light">
              Algebra of Light
            </Link>
            <Link className="button secondary" href="/c-scott-sanford">
              C. Scott Sanford
            </Link>
          </div>
          <div className="signal-row" aria-label="Current music directions">
            <span>Algebra of Light</span>
            <span>Kiser Gates</span>
            <span>C. Scott Sanford</span>
            <span>Kimberly</span>
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
            <p className="eyebrow">Artist split</p>
            <h2>Algebra of Light for the album world. C. Scott Sanford for the songs.</h2>
            <p>
              The site now separates the progressive artist brand from the contemporary pop artist
              name, while still making the connection clear for listeners.
            </p>
            <div className="tag-row">
              <span>Progressive artist</span>
              <span>Pop artist</span>
              <span>One catalog hub</span>
            </div>
            <Link className="text-link" href="/music">
              View catalog
            </Link>
          </div>
        </aside>
      </section>

      <section className="identity-section" aria-label="Artist identities">
        <article className="identity-card algebra-card">
          <div className="identity-media">
            <Image
              src="/images/algebra-light-logo-square.webp"
              alt="Algebra of Light artist logo"
              width={900}
              height={900}
            />
          </div>
          <div>
            <p className="eyebrow">Artist / Band</p>
            <h2>Algebra of Light</h2>
            <p>
              The progressive rock and metal artist identity. This is the name that should stand
              on its own on Spotify, with Kiser Gates positioned as the first album world.
            </p>
            <Link className="text-link" href="/algebra-of-light">
              Enter Algebra of Light
            </Link>
          </div>
        </article>

        <article className="identity-card cscott-card">
          <div className="waterfall-mark" aria-hidden="true">
            <span />
          </div>
          <div>
            <p className="eyebrow">Artist</p>
            <h2>C. Scott Sanford</h2>
            <p>
              The artist name for the more contemporary pop direction. The first song in this lane
              is Kimberly (My Secret Waterfall), with artwork still to be created.
            </p>
            <Link className="text-link" href="/c-scott-sanford">
              View C. Scott Sanford
            </Link>
          </div>
        </article>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Catalog direction</p>
          <h2>Build the public site around the artist names listeners will see.</h2>
          <p>
            Algebra of Light should feel like a standalone band/artist with Kiser Gates as its
            first album. C. Scott Sanford should feel like a different shelf for the pop,
            faith-shaped, lyric-forward songs.
          </p>
        </div>
        <div className="card-grid">
          {songs.slice(0, 4).map((song) => (
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

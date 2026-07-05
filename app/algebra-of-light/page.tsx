import Image from "next/image";
import Link from "next/link";
import { songs } from "@/lib/catalog";

export const metadata = {
  title: "Algebra of Light | Scott Sanford"
};

export default function AlgebraOfLightPage() {
  const artistSongs = songs.filter((song) => song.artist === "Algebra of Light");

  return (
    <section className="page-section">
      <div className="artist-hero algebra-hero">
        <div>
          <p className="eyebrow">Artist / Band</p>
          <h1>Algebra of Light</h1>
          <p>
            Algebra of Light is the standalone progressive rock and metal artist name. It should
            live on Spotify as its own artist, with Kiser Gates positioned as the first album.
          </p>
          <div className="tag-row">
            <span>Progressive rock</span>
            <span>Metal</span>
            <span>Instrumental guitar</span>
            <span>Kiser Gates</span>
          </div>
        </div>
        <div className="artist-logo-panel">
          <Image
            src="/images/algebra-light-logo-square.webp"
            alt="Algebra of Light logo"
            width={900}
            height={900}
            priority
          />
        </div>
      </div>

      <section className="album-feature">
        <div className="album-art">
          <Image
            src="/images/kiser-gates-cover.webp"
            alt="Kiser Gates album cover by Algebra of Light"
            width={1100}
            height={1100}
          />
        </div>
        <div>
          <p className="eyebrow">First album</p>
          <h2>Kiser Gates</h2>
          <p>
            Kiser Gates is the album identity for Algebra of Light. The artwork gives the band a
            darker cinematic world: ancient gates, geometry, light, weight, and scale.
          </p>
          <p>
            The music should be treated as a separate artist catalog from C. Scott Sanford. That
            separation matters for Spotify, metadata, branding, and listener expectations.
          </p>
        </div>
      </section>

      <div className="story-block">
        <h2>Recording background</h2>
        <p>
          The material began as home-studio writing and arranging. Scott recorded guitars, built the
          original arrangements, programmed drums, and handled parts of the bass and keyboard work
          before the music expanded with outside players and production help.
        </p>
        <p>
          Some tracks kept programmed drums, including Algebra of Light. Other tracks were reshaped
          by live studio performances, including drums by Scott Weltner and bass by Ty Weatherly.
          Rob Shrock contributed keyboard work and production perspective during the album process.
        </p>
      </div>

      <div className="card-grid">
        {artistSongs.map((song) => (
          <Link className="song-card" key={song.slug} href={`/music/${song.slug}`}>
            <span>{song.status}</span>
            <h3>{song.title}</h3>
            <p>{song.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

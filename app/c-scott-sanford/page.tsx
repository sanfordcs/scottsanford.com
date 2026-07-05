import Link from "next/link";
import { songs } from "@/lib/catalog";

export const metadata = {
  title: "C. Scott Sanford | Scott Sanford Music"
};

export default function CScottSanfordPage() {
  const artistSongs = songs.filter((song) => song.artist === "C. Scott Sanford");

  return (
    <section className="page-section">
      <div className="artist-hero cscott-hero">
        <div>
          <p className="eyebrow">Artist</p>
          <h1>C. Scott Sanford</h1>
          <p>
            C. Scott Sanford is the artist name for the more contemporary pop side of the catalog:
            lyric-forward songs, cleaner production, personal themes, and Christian elements.
          </p>
          <div className="tag-row">
            <span>Contemporary pop</span>
            <span>Christian elements</span>
            <span>Songwriting</span>
            <span>Melody-first</span>
          </div>
        </div>
        <div className="kimberly-panel">
          <p className="eyebrow">First composition</p>
          <h2>Kimberly</h2>
          <p>My Secret Waterfall</p>
        </div>
      </div>

      <div className="story-block">
        <h2>Why a separate artist name</h2>
        <p>
          Algebra of Light should carry the progressive rock and metal expectations. C. Scott
          Sanford gives the pop and Christian-influenced songs their own lane, so a listener coming
          from Spotify is not forced to reconcile two very different promises under one artist page.
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

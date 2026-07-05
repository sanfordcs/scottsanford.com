import Link from "next/link";
import { getArtists, songs } from "@/lib/catalog";

export const metadata = {
  title: "Music | Scott Sanford"
};

export default function MusicPage() {
  const artists = getArtists();

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Music catalog</p>
        <h1>Songs, recordings, and active writing lanes</h1>
        <p>
          Public tracks, performance links, and artist lanes. Algebra of Light is the progressive
          artist identity for Kiser Gates. C. Scott Sanford is the separate artist name for the
          contemporary pop and Christian-influenced songs.
        </p>
      </div>

      <div className="project-filter" aria-label="Artists represented in the catalog">
        {artists.map((artist) => (
          <span key={artist}>{artist}</span>
        ))}
      </div>

      <div className="catalog-list">
        {songs.map((song) => (
          <article className="catalog-item" key={song.slug}>
            <div>
              <span className="catalog-status">{song.artist}</span>
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

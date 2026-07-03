import Link from "next/link";
import { notFound } from "next/navigation";
import { getSong, songs } from "@/lib/catalog";

type SongPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSong(slug);

  if (!song) {
    return { title: "Song not found | Scott Sanford" };
  }

  return {
    title: `${song.title} | Scott Sanford`,
    description: song.summary
  };
}

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSong(slug);

  if (!song) {
    notFound();
  }

  return (
    <section className="page-section detail-page">
      <Link className="text-link" href="/music">
        Back to music
      </Link>

      <div className="detail-hero">
        <div>
          <p className="eyebrow">{song.project}</p>
          <h1>{song.title}</h1>
          <p>{song.summary}</p>
        </div>
        <div className="detail-meta">
          <span>{song.status}</span>
          {song.year ? <span>{song.year}</span> : <span>Year TBD</span>}
        </div>
      </div>

      <div className="detail-grid">
        <article className="detail-card">
          <h2>Listen</h2>
          {song.audioEmbedUrl ? (
            <iframe
              className="audio-widget"
              title={`${song.title} SoundCloud player`}
              allow="autoplay"
              src={song.audioEmbedUrl}
            />
          ) : (
            <p>Audio will be added when a public demo or release link is ready.</p>
          )}
          <div className="button-row compact">
            {song.audioUrl ? (
              <a className="button primary" href={song.audioUrl} target="_blank" rel="noreferrer">
                Open SoundCloud
              </a>
            ) : null}
            {song.videoUrl ? (
              <a className="button secondary" href={song.videoUrl} target="_blank" rel="noreferrer">
                Open video
              </a>
            ) : null}
          </div>
          {!song.audioUrl && !song.videoUrl ? (
            <p className="small-note">No public player is attached to this writing lane yet.</p>
          ) : null}
        </article>

        <article className="detail-card">
          <h2>Credits</h2>
          <ul>
            {song.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </article>

        <article className="detail-card wide">
          <h2>Song notes</h2>
          <p>{song.notes}</p>
          <div className="tag-row">
            {song.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

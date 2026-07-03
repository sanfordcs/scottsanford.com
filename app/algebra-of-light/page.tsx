import Link from "next/link";
import { songs } from "@/lib/catalog";

export const metadata = {
  title: "Algebra of Light | Scott Sanford"
};

export default function AlgebraOfLightPage() {
  const projectSongs = songs.filter((song) => song.project === "Algebra of Light");

  return (
    <section className="page-section">
      <div className="project-hero">
        <p className="eyebrow">Project</p>
        <h1>Algebra of Light</h1>
        <p>
          A progressive rock and metal project moving from ethereal melodic passages to heavier,
          more technical sections. The public site should make this the main home for the project
          story, recordings, credits, and future release notes.
        </p>
      </div>

      <div className="story-block">
        <h2>Project note</h2>
        <p>
          The original site describes Algebra of Light as a home-studio writing project expanded
          with studio musicians and production help. This page keeps that story separate from the
          shorter fan-facing bio so listeners can go deeper when they want the background.
        </p>
      </div>

      <div className="card-grid">
        {projectSongs.map((song) => (
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

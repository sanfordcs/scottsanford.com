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
          Algebra of Light is the progressive rock and metal side of the catalog: melodic passages,
          technical turns, heavier sections, and guitar-centered writing that moves from calm to
          collision.
        </p>
      </div>

      <div className="story-block">
        <h2>Project note</h2>
        <p>
          The material began as a home-studio writing and arranging project. Scott recorded the
          guitars, built the original arrangements, programmed drums, and handled parts of the bass
          and keyboard work before the project expanded with outside players and production help.
        </p>
        <p>
          Some songs kept programmed drums, including Algebra of Light. Other tracks were reshaped
          by live studio performances, including drums by Scott Weltner and bass by Ty Weatherly.
          Rob Shrock contributed keyboard work and production perspective during the project.
        </p>
        <p>
          The project is still a useful center point for the guitar side of Scott&apos;s music, even as
          the broader catalog now includes covers, live performance clips, and newer pop-oriented
          Christian writing.
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

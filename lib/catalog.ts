export type Song = {
  slug: string;
  title: string;
  project: string;
  status: "Original" | "Cover" | "Demo" | "Live";
  year?: string;
  summary: string;
  tags: string[];
  audioUrl?: string;
  videoUrl?: string;
  credits: string[];
  notes: string;
};

export const songs: Song[] = [
  {
    slug: "algebra-of-light",
    title: "Algebra of Light",
    project: "Algebra of Light",
    status: "Original",
    summary:
      "Progressive rock and metal built around guitar-forward writing, rhythmic turns, and melodic contrast.",
    tags: ["Progressive rock", "Metal", "Instrumental", "Guitar"],
    audioUrl: "https://soundcloud.com/scott-sanford/algebra-of-light",
    credits: ["Scott Sanford: guitars, composition, programming", "Additional studio contributors to be confirmed"],
    notes:
      "Use this page as the anchor for the larger Algebra of Light project story, credits, and track list."
  },
  {
    slug: "prayer-for-the-dying",
    title: "Prayer for the Dying",
    project: "Algebra of Light",
    status: "Original",
    summary:
      "A darker progressive track from the existing public catalog. Replace this summary with the final song note.",
    tags: ["Progressive rock", "Guitar", "Atmospheric"],
    audioUrl: "https://soundcloud.com/scott-sanford/prayer-for-the-dying",
    credits: ["Scott Sanford: guitars and composition"],
    notes:
      "Starter entry created from the current public site. Add release details, credits, and final audio links."
  },
  {
    slug: "back-to-you-instrumental",
    title: "Back to You",
    project: "Instrumental Covers",
    status: "Cover",
    summary:
      "Instrumental guitar arrangement currently represented on the legacy site through SoundCloud and Vimeo references.",
    tags: ["Instrumental", "Cover", "Guitar"],
    audioUrl: "https://soundcloud.com/scott-sanford/back-to-you-cover-instrumental",
    videoUrl: "https://vimeo.com/22886011",
    credits: ["Scott Sanford: guitar arrangement"],
    notes:
      "Confirm final rights language and whether this should remain public as a featured cover."
  }
];

export const featuredSong = songs[0];

export function getSong(slug: string) {
  return songs.find((song) => song.slug === slug);
}

export function getProjects() {
  return Array.from(new Set(songs.map((song) => song.project))).sort();
}

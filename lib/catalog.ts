export type Song = {
  slug: string;
  title: string;
  project: string;
  status: "Original" | "Cover" | "Demo" | "Live";
  year?: string;
  summary: string;
  tags: string[];
  audioUrl?: string;
  audioEmbedUrl?: string;
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
      "A public Algebra of Light track built around progressive guitar writing, shifting rhythmic ideas, and a melodic-to-heavy arc.",
    tags: ["Progressive rock", "Metal", "Instrumental", "Guitar", "Public track"],
    audioUrl: "https://soundcloud.com/scott-sanford/algebra-of-light",
    audioEmbedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-sanford/algebra-of-light&color=%2316d9ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    credits: [
      "Scott Sanford: guitars, writing, arrangement, original home-studio production",
      "Programmed drums remain on this track from the original project notes"
    ],
    notes:
      "Algebra of Light is the progressive side of the catalog: guitar-led writing, heavier sections, melodic passages, and the freedom to move between precision and atmosphere."
  },
  {
    slug: "prayer-for-the-dying",
    title: "Prayer for the Dying",
    project: "Algebra of Light",
    status: "Original",
    summary:
      "A darker public track from the Algebra of Light catalog, centered on tension, atmosphere, and guitar-forward progressive writing.",
    tags: ["Progressive rock", "Guitar", "Atmospheric", "Public track"],
    audioUrl: "https://soundcloud.com/scott-sanford/prayer-for-the-dying",
    audioEmbedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-sanford/prayer-for-the-dying&color=%2316d9ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    credits: [
      "Scott Sanford: guitars, writing, arrangement",
      "Part of the Algebra of Light public SoundCloud set"
    ],
    notes:
      "This track represents the heavier and more atmospheric edge of the existing public catalog. It should eventually get final credits, release context, and any notes on personnel."
  },
  {
    slug: "back-to-you-instrumental",
    title: "Back to You",
    project: "Instrumental Covers",
    status: "Cover",
    summary:
      "Instrumental guitar arrangement of Back to You, represented on the legacy site through SoundCloud and a Bent Tree Prelude Vimeo clip.",
    tags: ["Instrumental", "Cover", "Guitar", "Video"],
    audioUrl: "https://soundcloud.com/scott-sanford/back-to-you-cover-instrumental",
    audioEmbedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-sanford/back-to-you-cover-instrumental&color=%2316d9ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    videoUrl: "https://vimeo.com/22886011",
    credits: [
      "Scott Sanford: guitar arrangement and performance",
      "Legacy video reference: Bent Tree Prelude Back To You"
    ],
    notes:
      "This is a useful public-facing bridge between performance, arrangement, and the guitar side of the catalog. Keep it clearly labeled as a cover."
  },
  {
    slug: "contemporary-pop-christian-writing",
    title: "Contemporary Pop and Christian Writing",
    project: "New Songwriting",
    status: "Demo",
    summary:
      "A developing lane for modern pop songs with Christian elements, vocals, hooks, lyric-centered arrangements, and production-forward demos.",
    tags: ["Contemporary pop", "Christian elements", "Songwriting", "In progress", "Demos"],
    credits: ["Scott Sanford: writing, arrangement, and production direction"],
    notes:
      "This is not a single release yet. It marks the direction the site needs to support next: songs that are less about progressive guitar architecture and more about melody, message, vocals, and modern production."
  }
];

export const featuredSong = songs[0];

export function getSong(slug: string) {
  return songs.find((song) => song.slug === slug);
}

export function getProjects() {
  return Array.from(new Set(songs.map((song) => song.project))).sort();
}

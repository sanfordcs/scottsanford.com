export type Song = {
  slug: string;
  title: string;
  artist: "Algebra of Light" | "C. Scott Sanford" | "Scott Sanford";
  release?: string;
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
    artist: "Algebra of Light",
    release: "Kiser Gates",
    status: "Original",
    summary:
      "A public Algebra of Light track built around progressive guitar writing, shifting rhythmic ideas, and a melodic-to-heavy arc for the Kiser Gates album identity.",
    tags: ["Algebra of Light", "Kiser Gates", "Progressive rock", "Metal", "Instrumental"],
    audioUrl: "https://soundcloud.com/scott-sanford/algebra-of-light",
    audioEmbedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-sanford/algebra-of-light&color=%2316d9ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    credits: [
      "Scott Sanford: guitars, writing, arrangement, original home-studio production",
      "Programmed drums remain on this track from the original recording notes"
    ],
    notes:
      "Algebra of Light is the progressive side of the catalog: guitar-led writing, heavier sections, melodic passages, and the freedom to move between precision and atmosphere."
  },
  {
    slug: "prayer-for-the-dying",
    title: "Prayer for the Dying",
    artist: "Algebra of Light",
    release: "Kiser Gates",
    status: "Original",
    summary:
      "A darker Algebra of Light track centered on tension, atmosphere, and guitar-forward progressive writing for the Kiser Gates album world.",
    tags: ["Algebra of Light", "Kiser Gates", "Progressive rock", "Atmospheric"],
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
    artist: "Scott Sanford",
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
    slug: "kimberly-my-secret-waterfall",
    title: "Kimberly (My Secret Waterfall)",
    artist: "C. Scott Sanford",
    status: "Demo",
    summary:
      "The first C. Scott Sanford composition: a contemporary pop-oriented song with a more personal, melodic lane than the Algebra of Light material.",
    tags: ["C. Scott Sanford", "Contemporary pop", "Christian elements", "Songwriting", "In progress"],
    credits: ["C. Scott Sanford: writing, arrangement, and production direction"],
    notes:
      "This song does not have final public artwork attached yet. The site should treat it as the first clear marker of the C. Scott Sanford identity: melody-forward, more contemporary, and separate from the Algebra of Light artist brand."
  }
];

export const featuredSong = songs[0];

export function getSong(slug: string) {
  return songs.find((song) => song.slug === slug);
}

export function getArtists() {
  return Array.from(new Set(songs.map((song) => song.artist))).sort();
}

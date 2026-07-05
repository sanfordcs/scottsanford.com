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
  videoEmbedUrl?: string;
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
    artist: "Scott Sanford",
    status: "Cover",
    summary:
      "Instrumental guitar cover of Seal's Prayer for the Dying, focused on atmosphere, melody, and a guitar-forward reading of the song.",
    tags: ["Cover", "Seal", "Instrumental guitar", "Atmospheric"],
    audioUrl: "https://soundcloud.com/scott-sanford/prayer-for-the-dying",
    audioEmbedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-sanford/prayer-for-the-dying&color=%2316d9ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    credits: [
      "Scott Sanford: guitar arrangement and performance",
      "Original song by Seal"
    ],
    notes:
      "This belongs in the public Scott Sanford archive as an instrumental cover, not under the Algebra of Light artist identity."
  },
  {
    slug: "back-to-you-instrumental",
    title: "Back to You",
    artist: "Scott Sanford",
    status: "Cover",
    summary:
      "Instrumental guitar cover of John Mayer's Back to You, represented through the legacy SoundCloud recording and Vimeo performance clip.",
    tags: ["Instrumental", "Cover", "John Mayer", "Guitar", "Video"],
    audioUrl: "https://soundcloud.com/scott-sanford/back-to-you-cover-instrumental",
    audioEmbedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-sanford/back-to-you-cover-instrumental&color=%2316d9ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    videoUrl: "https://vimeo.com/257814114?fl=pl&fe=cm",
    videoEmbedUrl: "https://player.vimeo.com/video/257814114",
    credits: [
      "Scott Sanford: guitar arrangement and performance",
      "Original song by John Mayer"
    ],
    notes:
      "This is a useful public-facing bridge between performance, arrangement, and the guitar side of the catalog. Keep it clearly labeled as a cover."
  },
  {
    slug: "fret-job",
    title: "Fret Job",
    artist: "Scott Sanford",
    status: "Original",
    year: "Mid 1990s",
    summary:
      "Original instrumental written and played with Ritual, the band Scott performed with in the mid 1990s.",
    tags: ["Ritual", "Original instrumental", "Mid 1990s", "Archive video"],
    videoUrl: "https://www.youtube.com/watch?v=-ZlFWgOj1UQ",
    videoEmbedUrl: "https://www.youtube.com/embed/-ZlFWgOj1UQ",
    credits: [
      "Scott Sanford: writing and guitar",
      "Ritual: band performance"
    ],
    notes:
      "Fret Job documents the older instrumental writing lane from the Ritual era. It should stay separate from the Algebra of Light and C. Scott Sanford artist identities."
  },
  {
    slug: "play-that-funky-music",
    title: "Play That Funky Music",
    artist: "Scott Sanford",
    status: "Cover",
    year: "Early 1990s",
    summary:
      "Archive video from an early 1990s band performance of Play That Funky Music.",
    tags: ["Cover", "Live performance", "Early 1990s", "Archive video"],
    videoUrl: "https://www.youtube.com/watch?v=3YL42p4Jr9A",
    videoEmbedUrl: "https://www.youtube.com/embed/3YL42p4Jr9A",
    credits: [
      "Scott Sanford: guitar and performance",
      "Early 1990s band performance"
    ],
    notes:
      "This is an archive performance from a previous band era and should be presented as catalog history, not as a current artist release."
  },
  {
    slug: "kimberly-my-secret-waterfall",
    title: "Kimberly (My Secret Waterfall)",
    artist: "C. Scott Sanford",
    status: "Original",
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

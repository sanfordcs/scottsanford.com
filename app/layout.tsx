import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scott Sanford Music",
  description:
    "Official music site for Scott Sanford, featuring guitar-driven progressive rock, instrumental work, videos, and song notes.",
  metadataBase: new URL("https://scottsanford.com")
};

const navItems = [
  { href: "/music", label: "Music" },
  { href: "/algebra-of-light", label: "Algebra of Light" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Scott Sanford home">
            <span className="brand-mark">SS</span>
            <span>
              <strong>Scott Sanford</strong>
              <small>Guitar-driven progressive music</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>Scott Sanford Music</p>
          <p>Original songs, instrumental guitar, project notes, and videos.</p>
        </footer>
      </body>
    </html>
  );
}

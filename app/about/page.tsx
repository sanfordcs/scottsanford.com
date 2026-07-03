export const metadata = {
  title: "About | Scott Sanford"
};

export default function AboutPage() {
  return (
    <section className="page-section about-layout">
      <div className="page-heading">
        <p className="eyebrow">About</p>
        <h1>Guitar-first writing with room for rock, pop, faith, and studio experiments.</h1>
        <p>
          Scott Sanford is a Dallas-area guitarist, writer, and studio-minded musician. His catalog
          starts with guitar-driven rock and progressive instrumentals, then opens into contemporary
          pop compositions with Christian-influenced themes.
        </p>
      </div>

      <div className="story-block">
        <h2>Short bio</h2>
        <p>
          The guitar obsession started early with Kiss and AC/DC: power, volume, and the sense that
          a new world had opened up. From there, the path widened into progressive rock, jazz
          fusion, blues, country-influenced chicken pickin, original bands, cover bands, studio
          work, teaching, and writing.
        </p>
        <p>
          Scott&apos;s style has often been described as eccentric and rhythmically unusual. That odd
          timing sense remains part of the DNA, even as newer writing leans more into pop structure,
          vocal melody, faith-informed ideas, and cleaner production.
        </p>
      </div>

      <div className="story-block muted-block">
        <h2>For guitar listeners</h2>
        <p>
          Influences mentioned on the legacy site include Alex Lifeson, Al Di Meola, Eddie Van
          Halen, George Lynch, Randy Rhoads, Michael Schenker, Paul Gilbert, Shawn Lane, Frank
          Gambale, Joe Satriani, Danny Gatton, Albert Lee, Allan Holdsworth, Andy Timmons, and
          Steve Lukather.
        </p>
      </div>
    </section>
  );
}

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
          Scott Sanford is a Dallas-area guitarist and writer whose catalog is expanding from
          progressive instrumentals into contemporary pop compositions and Christian-influenced
          songwriting.
        </p>
      </div>

      <div className="story-block">
        <h2>Short bio</h2>
        <p>
          Scott first locked onto guitar through the power and sound of classic hard rock. Over
          time, that foundation widened into progressive rock, fusion, chicken pickin, blues, and
          more technical instrumental players. Newer writing adds pop structure, lyric-centered
          themes, and faith-informed ideas without losing the guitar identity.
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

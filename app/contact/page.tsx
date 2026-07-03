export const metadata = {
  title: "Contact | Scott Sanford"
};

export default function ContactPage() {
  return (
    <section className="page-section contact-layout">
      <div className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1>Contact Scott Sanford</h1>
        <p>
          Use this page for listener notes, music questions, booking inquiries, collaboration, and
          catalog updates. A real form can be added after the site email destination is confirmed.
        </p>
      </div>

      <div className="contact-card">
        <h2>Next setup item</h2>
        <p>
          Confirm the public contact email address. Then this page can use a protected form service
          or a Vercel server action with spam controls.
        </p>
        <a className="button primary" href="mailto:contact@scottsanford.com">
          Email placeholder
        </a>
      </div>
    </section>
  );
}

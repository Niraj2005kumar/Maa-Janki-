import { createFileRoute } from "@tanstack/react-router";
import {
  business,
  categories,
  collections,
  faqs,
  gallery,
  products,
  waLink,
} from "../site-data";

const TITLE =
  "Maa Janki Tiles & Marbles | Tiles & Marble Shop in Kharkhari, Jharkhand";
const DESC =
  "Floor tiles, wall tiles, bathroom, kitchen, parking and elevation tiles plus marble at Maa Janki Tiles & Marbles, Jhuttham, Barmishiya Main Road, Bharkatta, Jharkhand. Visit the showroom or enquire on WhatsApp.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: business.name,
  description: DESC,
  telephone: "+91 98218 47381",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Saranda",
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "IN",
  },
  areaServed: "Kharkhari, Jharkhand",
  hasMap: business.mapsLink,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "stylesheet", href: "/style.css" },
      { rel: "preload", as: "image", href: "/images/hero.jpg" },
    ],
    scripts: [
      { src: "/script.js", defer: true },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
});

const NAV = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products", "#products"],
  ["Collections", "#collections"],
  ["Gallery", "#gallery"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"],
] as const;

const generalWa = waLink(
  "Hello Maa Janki Tiles & Marbles, I want to know about your tile and marble collection.",
);

function Index() {
  const productCategories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#home" aria-label={business.name}>
            <span className="brand-mark" aria-hidden="true">
              MJ
            </span>
            <span className="brand-text">
              <strong>MAA JANKI</strong>
              <span>Tiles &amp; Marbles</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-cta">
            <a className="btn btn--ghost btn--sm" href={business.phoneLink}>
              📞 Call Now
            </a>
            <a
              className="btn btn--wa btn--sm"
              href={generalWa}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="menu-backdrop" />
      <aside className="mobile-menu" aria-label="Mobile navigation">
        {NAV.map(([label, href]) => (
          <a className="m-link" key={href} href={href}>
            {label}
          </a>
        ))}
        <div className="m-actions">
          <a className="btn btn--dark btn--block" href={business.phoneLink}>
            📞 Call {business.phoneDisplay}
          </a>
          <a
            className="btn btn--wa btn--block"
            href={generalWa}
            target="_blank"
            rel="noopener"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </aside>

      <main id="home">
        {/* ---------------- Hero ---------------- */}
        <section className="hero">
          <div className="hero-bg">
            <img
              src="/images/hero.jpg"
              alt="Living room finished with premium marble-look floor tiles"
              width={1600}
              height={1000}
              fetchPriority="high"
            />
          </div>
          <div className="wrap">
            <div className="hero-inner">
              <span className="badge-loc">📍 Jhuttham, Barmishiya Main Road, Bharkatta</span>
              <h1>Transform Your Space With Premium Tiles &amp; Marbles</h1>
              <p className="lead">
                Discover stylish floor tiles, wall tiles, bathroom tiles, kitchen
                tiles, elevation tiles and premium marble collections for your home
                and construction projects.
              </p>
              <div className="hero-actions">
                <a className="btn btn--gold" href="#collections">
                  Explore Collections
                </a>
                <a
                  className="btn btn--wa"
                  href={generalWa}
                  target="_blank"
                  rel="noopener"
                >
                  Get Quote on WhatsApp
                </a>
                <a className="btn btn--glass" href={business.phoneLink}>
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Trust ---------------- */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="trust-grid">
              {[
                ["🏛️", "Premium Tile Collections", "Tiles and marble selected for homes, shops and construction work."],
                ["🎨", "Multiple Designs", "Different sizes, finishes and shades to match your interior."],
                ["💬", "Competitive Pricing", "Ask us for the current rate — we quote honestly on WhatsApp or call."],
                ["🤝", "Local Customer Service", "A local showroom you can visit, with help before and after you buy."],
              ].map(([ico, title, text]) => (
                <article className="trust-card reveal" key={title}>
                  <div className="ico" aria-hidden="true">
                    {ico}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- About ---------------- */}
        <section className="section section--alt" id="about">
          <div className="wrap split">
            <div className="reveal">
              <span className="eyebrow">About Us</span>
              <h2>Your Trusted Local Tile &amp; Marble Store</h2>
              <p>
                Maa Janki Tiles &amp; Marbles is a tiles, marble and building
                material store in Saranda, Kharkhari. We help families, builders and
                shop owners choose the right tiles for the space they are building or
                renovating — from a single bathroom to a complete house.
              </p>
              <p>
                Come and see the designs in person, tell us the room size and budget,
                and we will guide you towards suitable sizes, finishes and quantities.
              </p>
              <ul className="tick-list">
                {["Homes", "Bathrooms", "Kitchens", "Living Rooms", "Shops", "Offices", "New Construction", "Renovation Projects"].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  ),
                )}
              </ul>
              <a
                className="btn btn--dark"
                href={generalWa}
                target="_blank"
                rel="noopener"
              >
                Ask Us Anything on WhatsApp
              </a>
            </div>
            <div className="media-frame reveal">
              <img
                src="/images/showroom.jpg"
                alt="Inside the Maa Janki Tiles & Marbles showroom"
                width={1200}
                height={900}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ---------------- Categories ---------------- */}
        <section className="section" id="collections">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Product Categories</span>
              <h2>Everything For Floors, Walls &amp; Elevation</h2>
              <p>
                Browse the categories we keep in the showroom. Availability of a
                particular design can change, so please confirm with us.
              </p>
            </div>
            <div className="cat-grid">
              {categories.map((cat) => (
                <article className="cat-card reveal" key={cat.name}>
                  <div className="cat-media">
                    <img
                      src={cat.image}
                      alt={`${cat.name} available at Maa Janki Tiles & Marbles, Kharkhari`}
                      width={1000}
                      height={750}
                      loading="lazy"
                    />
                  </div>
                  <div className="cat-body">
                    <h3>{cat.name}</h3>
                    <p>{cat.desc}</p>
                    <a className="link-gold" href="#products">
                      View Collection →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Featured collections ---------------- */}
        <section className="section section--tint">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Featured Collections</span>
              <h2>Collections In Our Showroom</h2>
              <p>
                A look at the ranges we display. Visit us to see the full shade card
                and current stock.
              </p>
            </div>
            {collections.map((col) => (
              <div className="collection reveal" key={col.title}>
                <div className="collection-head">
                  <h3>{col.title}</h3>
                  <span>{col.note}</span>
                </div>
                <div className="strip">
                  {col.images.map((src, i) => (
                    <figure key={src + i}>
                      <img
                        src={src}
                        alt={`${col.title} — design ${i + 1}`}
                        width={1000}
                        height={750}
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Products ---------------- */}
        <section className="section section--alt" id="products">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Products</span>
              <h2>Tiles &amp; Marble Available</h2>
              <p>
                Prices depend on size, finish and current stock, so we share them
                directly. Tap WhatsApp Enquiry on any product for a quick reply.
              </p>
            </div>

            <div className="filter-bar">
              <button className="chip is-active" type="button" data-filter="all">
                All
              </button>
              {productCategories.map((cat) => (
                <button className="chip" type="button" data-filter={cat} key={cat}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {products.map((p) => (
                <article className="product-card" data-category={p.category} key={p.name}>
                  <div className="product-media">
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.category} at Maa Janki Tiles & Marbles`}
                      width={1000}
                      height={750}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-body">
                    <span className="tag">{p.category}</span>
                    <h3>{p.name}</h3>
                    <div className="specs">
                      <span className="spec">Size: {p.size}</span>
                      <span className="spec">Finish: {p.finish}</span>
                    </div>
                    <p className="desc">{p.desc}</p>
                    <span className="price-note">Contact for Price</span>
                    <div className="product-actions">
                      <a className="btn btn--ghost btn--sm" href={business.phoneLink}>
                        Ask Price
                      </a>
                      <a
                        className="btn btn--wa btn--sm"
                        target="_blank"
                        rel="noopener"
                        href={waLink(
                          `Hello Maa Janki Tiles & Marbles, I am interested in ${p.name}. Please share the price and availability.`,
                        )}
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Before / After ---------------- */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Before → After</span>
              <h2>See The Difference</h2>
              <p>
                Example placeholders showing how new tiles change a space. Replace
                these with photos of your own completed work.
              </p>
            </div>
            <div className="ba-grid">
              {[
                ["Bathroom Renovation", "/images/wall-tile-01.jpg", "/images/bathroom-tile-01.jpg"],
                ["Living Room", "/images/living-tile-01.jpg", "/images/hero.jpg"],
                ["Kitchen", "/images/wall-tile-01.jpg", "/images/kitchen-tile-01.jpg"],
                ["Floor Renovation", "/images/parking-tile-01.jpg", "/images/floor-tile-01.jpg"],
              ].map(([label, before, after]) => (
                <article className="ba-card reveal" key={label}>
                  <div className="ba-pair">
                    <figure>
                      <img src={before} alt={`${label} before new tiles`} width={1000} height={750} loading="lazy" />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure className="after">
                      <img src={after} alt={`${label} after new tiles`} width={1000} height={750} loading="lazy" />
                      <figcaption>After</figcaption>
                    </figure>
                  </div>
                  <div className="ba-label">{label}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Why us ---------------- */}
        <section className="section section--alt" id="why-us">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Why Choose Us</span>
              <h2>Simple Reasons Customers Visit Us</h2>
            </div>
            <div className="why-grid">
              {[
                ["🧱", "Wide Tile Selection", "Floor, wall, bathroom, kitchen, parking, elevation tiles and marble in one shop."],
                ["✨", "Quality Products", "We stock tiles we are comfortable recommending for everyday use."],
                ["₹", "Competitive Pricing", "Tell us your requirement and we will quote you our best rate."],
                ["🧭", "Expert Guidance", "Help with sizes, quantity estimation and design combinations."],
                ["📍", "Local Service", "A nearby showroom in Kharkhari you can walk into any working day."],
                ["💬", "Easy Enquiry on WhatsApp", "Send a photo or product name and get a reply without visiting first."],
              ].map(([ico, title, text]) => (
                <article className="why-card reveal" key={title}>
                  <div className="why-ico" aria-hidden="true">
                    {ico}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Gallery ---------------- */}
        <section className="section section--tint" id="gallery">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Showroom Gallery</span>
              <h2>Inside Our Store</h2>
              <p>Tap any photo to view it larger.</p>
            </div>
            <div className="gallery">
              {gallery.map((g) => (
                <button type="button" data-lightbox key={g.image + g.alt}>
                  <img src={g.image} alt={g.alt} width={1000} height={750} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Reviews ---------------- */}
        <section className="section">
          <div className="wrap">
            <div className="panel reveal" style={{ textAlign: "center" }}>
              <span className="eyebrow">Customer Feedback</span>
              <h2>What Our Customers Say</h2>
              <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto 22px" }}>
                We only show genuine reviews. You can read what customers have written
                about us on our Google Business Profile.
              </p>
              <a
                className="btn btn--gold"
                href={business.reviewsLink}
                target="_blank"
                rel="noopener"
              >
                Read Our Google Reviews
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Local SEO ---------------- */}
        <section className="section section--alt">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Serving Our Area</span>
              <h2>Tiles &amp; Marbles in Kharkhari, Jharkhand</h2>
            </div>
            <div className="seo-cols reveal">
              <p>
                If you are looking for a tiles shop in Kharkhari, our showroom at
                Saranda keeps tiles and marbles under one roof. People from the
                surrounding area come to us for floor tiles, wall tiles and marble
                when they are building a new house or refreshing an older one.
              </p>
              <p>
                For bathrooms we keep anti-skid floor tiles with matching wall
                designs, and for kitchens we keep surfaces that are easy to wipe
                clean. If you need floor tiles near Kharkhari in a specific size, tell
                us the room measurement and we will show you the options we have.
              </p>
              <p>
                Looking for a marble shop near Kharkhari? We keep marble for flooring,
                stairs, counters and temple work, and can advise which piece suits the
                job you have planned.
              </p>
              <p>
                Whether it is tiles for home construction or tiles for renovation,
                visit us or send a WhatsApp message and we will help you decide before
                you buy.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="section">
          <div className="wrap" style={{ maxWidth: 860 }}>
            <div className="section-head center reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="panel">
              {faqs.map((f) => (
                <div className="faq-item" key={f.q}>
                  <button className="faq-q" type="button" aria-expanded="false">
                    {f.q}
                  </button>
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Visit band ---------------- */}
        <section className="section section--alt" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="visit-band reveal">
              <div>
                <h2>Visit Our Showroom</h2>
                <p>
                  {business.address} — see the tiles and marble in person before you
                  decide.
                </p>
              </div>
              <div className="actions">
                <a
                  className="btn btn--gold"
                  href={business.mapsLink}
                  target="_blank"
                  rel="noopener"
                >
                  Get Directions
                </a>
                <a className="btn btn--glass" href={business.phoneLink}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section className="section section--alt" id="contact">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Contact</span>
              <h2>Talk To Us</h2>
            </div>
            <div className="contact-grid">
              <div className="panel reveal">
                <h3>{business.name}</h3>
                <div className="info-row">
                  <span className="ico">📍</span>
                  <span>
                    <strong>Address</strong>
                    <span>{business.address}</span>
                  </span>
                </div>
                <div className="info-row">
                  <span className="ico">📞</span>
                  <span>
                    <strong>Phone</strong>
                    <a href={business.phoneLink}>{business.phoneDisplay}</a>
                  </span>
                </div>
                <div className="info-row">
                  <span className="ico">🕒</span>
                  <span>
                    <strong>Business Hours</strong>
                    <span>{business.hours}</span>
                  </span>
                </div>
                <div className="contact-actions">
                  <a className="btn btn--dark" href={business.phoneLink}>
                    Call Now
                  </a>
                  <a
                    className="btn btn--wa"
                    href={generalWa}
                    target="_blank"
                    rel="noopener"
                  >
                    WhatsApp
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={business.mapsLink}
                    target="_blank"
                    rel="noopener"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="map-frame reveal">
                <iframe
                  title={`Map showing ${business.name} location`}
                  src={business.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">MAA JANKI TILES &amp; MARBLES</div>
              <div className="footer-tag">{business.tagline}</div>
              <div className="socials">
                <a href={business.mapsLink} target="_blank" rel="noopener" aria-label="Google Maps">
                  Map
                </a>
                <a href={generalWa} target="_blank" rel="noopener" aria-label="WhatsApp">
                  WA
                </a>
                {business.facebook ? (
                  <a href={business.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                    Fb
                  </a>
                ) : null}
                {business.instagram ? (
                  <a href={business.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                    Ig
                  </a>
                ) : null}
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                {NAV.filter(([l]) => l !== "Collections" && l !== "Why Us").map(([label, href]) => (
                  <li key={href}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href={business.phoneLink}>{business.phoneDisplay}</a>
                </li>
                <li>
                  <a href={generalWa} target="_blank" rel="noopener">
                    WhatsApp Enquiry
                  </a>
                </li>
                <li>{business.address}</li>
              </ul>
            </div>
            <div>
              <h4>Business Hours</h4>
              <ul>
                <li>{business.hours}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Maa Janki Tiles &amp; Marbles. All Rights Reserved.</span>
            <span>Jhuttham, Kharkhari, Jharkhand – 825324</span>
          </div>
        </div>
      </footer>

      {/* ---------------- Floating actions ---------------- */}
      <div className="floaters">
        <a
          className="float-btn float-wa pulse"
          href={generalWa}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>
        <a
          className="float-btn float-call"
          href={business.phoneLink}
          aria-label="Call the showroom"
        >
          📞
        </a>
      </div>

      {/* ---------------- Lightbox ---------------- */}
      <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
        <button className="lb-btn lb-close" type="button" aria-label="Close">
          ✕
        </button>
        <button className="lb-btn lb-prev" type="button" aria-label="Previous photo">
          ‹
        </button>
        <img src="/images/showroom.jpg" alt="" />
        <button className="lb-btn lb-next" type="button" aria-label="Next photo">
          ›
        </button>
        <p className="lb-caption" />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

export const metadata: Metadata = {
  title: "E-commerce Solutions",
  description:
    "Professional e-commerce stores from CYBEROCO — easy buying experiences, flexible product and order management, and integrated payment and shipping, built with the same security discipline we bring to every engagement.",
  alternates: { canonical: "/services/ecommerce-solutions" },
};

const MARQUEE_ITEMS = [
  "Product Catalogue",
  "Checkout",
  "Payment Gateways",
  "Shipping & Fulfilment",
  "Inventory",
  "Reporting Dashboard",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build on a platform like Shopify, or fully custom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We'll recommend a managed platform when it fits your speed and budget, and a fully custom build when you need flexibility a template can't offer \u2014 either way, the same design and security discipline applies.",
      },
    },
    {
      "@type": "Question",
      name: "Which payment and shipping providers do you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with regional and international payment gateways and shipping carriers, chosen based on where you sell and how you fulfil orders.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate our existing store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We audit your current catalogue, orders and customer data first, then migrate without disrupting live sales.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to manage the store ourselves after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can. We include admin training and documentation so your team can manage products, orders and content independently, with support available when you need it.",
      },
    },
  ],
};

export default function EcommerceSolutionsPage() {
  return (
    <>
      <section
        className="container"
        style={{
          paddingTop: "9rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-10">E-commerce Solutions</p>
        <div className="max-w-4xl">
          <Reveal variant="lines" start="top 82%" as="h1">
            <span
              className="srv-hero-line text-display mb-1"
              style={{ display: "block", lineHeight: 1 }}
            >
              Built to sell.
            </span>
            <span
              className="srv-hero-line text-display c-gray-ccc"
              style={{ display: "block", lineHeight: 1 }}
            >
              Made to scale.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ gap: "4rem 6rem" }}>
          <div>
            <p className="text-label c-gray-999 mb-6">Overview</p>
            <Reveal variant="fadeUp" stagger={0.08}>
              <p className="text-subheading leading-relaxed c-gray-333 srv-detail-line">
                An online store that sells, grows, and expands with your business.
              </p>
            </Reveal>
          </div>
          <Reveal
            variant="fadeUp"
            stagger={0.08}
            className="flex flex-col gap-5 text-sm leading-relaxed c-gray-555"
          >
            <p className="srv-detail-line">
              We design and develop professional e-commerce stores that combine an
              easy buying experience, flexible product and order management, and
              integrated payment and shipping connections — so you can start
              selling with confidence and build a strong digital channel for your
              brand.
            </p>
            <p className="srv-detail-line">
              <strong>Ideal for:</strong> brands launching their first store,
              retailers replatforming from an off-the-shelf builder, and any team
              that wants a store designed for selling, not just displaying
              products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-8">What running your store looks like</p>
        <div className="mock-panel max-w-4xl">
          <div className="mock-topbar">
            <div className="mock-topbar-left">
              <span className="mock-dot" aria-hidden="true" />
              <span className="text-xs font-semibold">Commerce Center</span>
            </div>
            <span className="text-xs c-gray-999">Store performance overview</span>
          </div>
          <div className="mock-stats">
            <div className="mock-stat">
              <span className="text-xs c-gray-999">Total sales</span>
              <span className="mock-stat-value">EGP 284,650</span>
              <span className="mock-stat-delta">+24.8%</span>
            </div>
            <div className="mock-stat">
              <span className="text-xs c-gray-999">Orders</span>
              <span className="mock-stat-value">1,248</span>
            </div>
            <div className="mock-stat">
              <span className="text-xs c-gray-999">Products</span>
              <span className="mock-stat-value">386</span>
            </div>
            <div className="mock-stat">
              <span className="text-xs c-gray-999">Conversion</span>
              <span className="mock-stat-value">4.9%</span>
            </div>
          </div>
          <div className="divider-thin" />
          <div className="mock-orders">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">Latest orders</span>
              <span className="text-xs c-gray-999">View all</span>
            </div>
            <div className="mock-order-row">
              <span className="mock-order-id">#TS-2048</span>
              <span className="c-gray-333">EGP 2,850</span>
              <span className="mock-order-status paid">Paid</span>
            </div>
            <div className="mock-order-row">
              <span className="mock-order-id">#TS-2047</span>
              <span className="c-gray-333">EGP 1,420</span>
              <span className="mock-order-status">Preparing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-12">What's included</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeIn"
            stagger={0.04}
            start="top 87%"
            as="ul"
            className="srv-deliverables"
          >
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Product catalogue, categories, search & filtering
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Conversion-focused product pages & merchandising
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Streamlined cart & quick checkout
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Payment gateway & shipping carrier integration
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Admin dashboard for products, orders & customers
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              SSL, backups & store security hardening
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Sales & performance reporting
            </li>
            <li className="srv-deliverable">
              <span className="srv-tick" />
              Post-launch admin training & support
            </li>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} speed={24} />

      <section className="section">
        <p className="text-label c-gray-999 mb-12">The journey we design for</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.1}
            start="top 85%"
            className="flex flex-col gap-8"
          >
            <div className="process-step">
              <span className="text-label process-num">01</span>
              <p className="process-text">
                <strong>Discover products.</strong> Clear categories, fast search
                and filters help the customer find the right product quickly.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Purchase decision.</strong> A compelling product page that
                clearly displays images, features, price, stock and the details
                that build confidence.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Basket & payment.</strong> Fewer steps, organised fields,
                and convenient payment methods that reduce cart abandonment.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Shipping & tracking.</strong> Order status, shipping links
                and customer updates through to delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-light">
        <p className="text-label c-gray-999 mb-4">Why CYBEROCO</p>
        <h2 className="text-headline max-w-2xl mb-12">
          A store designed for selling — not just displaying products.
        </h2>
        <Reveal variant="fadeUp" stagger={0.06} start="top 85%" className="feat-grid">
          <div className="feat-item">
            <h3>A well-thought-out buying experience</h3>
            <p>
              A clear journey from browsing to cart, payment and order completion,
              in the fewest possible steps.
            </p>
          </div>
          <div className="feat-item">
            <h3>Safety & stability</h3>
            <p>
              SSL, backups and security hardening — the same discipline we bring to
              every build we ship.
            </p>
          </div>
          <div className="feat-item">
            <h3>Speed & performance</h3>
            <p>
              Optimised images, assets and page structure for a fast, smooth
              experience, especially on mobile.
            </p>
          </div>
          <div className="feat-item">
            <h3>Ready for expansion</h3>
            <p>
              Add payment methods, languages, currencies, warehouses or external
              systems without rebuilding the store.
            </p>
          </div>
          <div className="feat-item">
            <h3>Reports & follow-up</h3>
            <p>
              A dashboard that shows sales, orders, customers and top-performing
              products at a glance.
            </p>
          </div>
          <div className="feat-item">
            <h3>Post-launch support</h3>
            <p>
              Admin panel training and technical support to help you run products,
              orders and content independently.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <p className="text-label c-gray-999 mb-12">Our process</p>
        <div style={{ maxWidth: "40rem" }}>
          <Reveal
            variant="fadeUp"
            stagger={0.1}
            start="top 85%"
            className="flex flex-col gap-8"
          >
            <div className="process-step">
              <span className="text-label process-num">01</span>
              <p className="process-text">
                <strong>Business discovery.</strong> We define your products,
                audience, market, and required selling, inventory, payment and
                shipping capabilities.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">02</span>
              <p className="process-text">
                <strong>Commerce architecture.</strong> We map categories, product
                pages, basket, payment, customer accounts and order paths.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">03</span>
              <p className="process-text">
                <strong>Storefront design.</strong> Interfaces consistent with your
                identity, focused on easy navigation and conversion.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">04</span>
              <p className="process-text">
                <strong>Development & integration.</strong> Building the store and
                connecting payment, shipping, notifications and any other required
                systems.
              </p>
            </div>
            <div className="process-step">
              <span className="text-label process-num">05</span>
              <p className="process-text">
                <strong>Testing & launch.</strong> Full testing across devices and
                payment flows before go-live.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="container"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <p className="text-label c-gray-999 mb-12">Common questions</p>
        <Reveal variant="fadeUp" stagger={0.08} start="top 85%" className="max-w-3xl">
          <div className="faq-item">
            <p className="faq-q">Do you build on a platform like Shopify, or fully custom?</p>
            <p className="faq-a">
              Both. We'll recommend a managed platform when it fits your speed and
              budget, and a fully custom build when you need flexibility a template
              can't offer — either way, the same design and security discipline
              applies.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Which payment and shipping providers do you integrate with?</p>
            <p className="faq-a">
              We work with regional and international payment gateways and shipping
              carriers, chosen based on where you sell and how you fulfil orders.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Can you migrate our existing store?</p>
            <p className="faq-a">
              Yes. We audit your current catalogue, orders and customer data first,
              then migrate without disrupting live sales.
            </p>
          </div>
          <div className="faq-item">
            <p className="faq-q">Do we need to manage the store ourselves after launch?</p>
            <p className="faq-a">
              You can. We include admin training and documentation so your team can
              manage products, orders and content independently, with support
              available when you need it.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Ready?</p>
            <h2 className="text-headline max-w-lg">Let's build your store.</h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Enquire about E-commerce Solutions →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}
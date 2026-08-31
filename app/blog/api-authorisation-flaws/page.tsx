import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const TITLE = 'API authorisation flaws: the gap between "authenticated" and "authorised"';
const DESCRIPTION =
  "Why authentication and authorisation are different problems, the authorisation flaw patterns we see most often, and how we test for them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/api-authorisation-flaws" },
  openGraph: {
    type: "article",
    publishedTime: "2026-07-29",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  author: {
    "@type": "Organization",
    name: "CYBEROCO",
    url: "https://www.cyberoco.tech",
  },
  mainEntityOfPage: "https://www.cyberoco.tech/blog/api-authorisation-flaws",
};

export default function ApiAuthorisationFlawsPage() {
  return (
    <>
      <article className="cs-article">
        <div className="container" style={{ paddingTop: "9rem", paddingBottom: 0 }}>
          <div className="article-meta">
            <span className="text-label c-gray-999">Research</span>
            <span className="sep">·</span>
            <span className="text-xs c-gray-999">29 Jul 2026</span>
            <span className="sep">·</span>
            <span className="text-xs c-gray-999">5 min read</span>
          </div>
          <Reveal variant="fadeUp" stagger={0}>
            <h1
              className="post-hero-line text-headline max-w-3xl"
              style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.15 }}
            >
              API authorisation flaws: the gap between "authenticated" and
              "authorised"
            </h1>
          </Reveal>
        </div>

        <div
          className="container"
          style={{
            paddingTop: "3rem",
            paddingBottom: "5rem",
            borderBottom: "1px solid var(--black)",
          }}
        >
          <Reveal
            variant="fadeUp"
            stagger={0.03}
            start="top 90%"
            className="article-body max-w-3xl"
          >
            <p>
              "Our API requires authentication" is one of the most common
              reassurances we hear during scoping calls, and it's almost never
              the question that matters. Authentication tells you who someone
              is. Authorisation tells you what they're allowed to do. The two
              get conflated constantly, and the gap between them is where most
              of our high-severity API findings come from.
            </p>

            <h2>Why authentication isn't authorisation</h2>
            <p>
              A valid token or session cookie proves identity. It says nothing
              about whether that identity should be able to view invoice #4821,
              delete another team's project, or call an admin-only endpoint. An
              API can have flawless authentication — properly signed tokens,
              short expiry, MFA on login — and still leak every customer's data
              to every other customer, because nothing on the server checks
              ownership before returning the record.
            </p>

            <h2>Common patterns we see in the wild</h2>
            <p>
              The most frequent version is straightforward object-ID
              enumeration: increment a numeric ID in the URL, get back someone
              else's data. Slightly less obvious is function-level authorisation
              — a regular user calling an endpoint that was only ever meant to
              be reachable from the admin panel, because the endpoint itself
              never checks the caller's role. Both are trivial to exploit once
              found, and both routinely slip past automated scanning because the
              request looks entirely legitimate.
            </p>

            <h2>How we test for it</h2>
            <p>
              This is inherently manual work. We map out every role and tenant
              boundary the application is supposed to enforce, then
              systematically try to cross those boundaries — viewing another
              user's data, calling another role's endpoints, acting across
              tenants. A scanner can tell you an endpoint exists and returns a
              200. It can't tell you that the 200 shouldn't have happened for
              that particular user.
            </p>

            <blockquote className="article-pullquote">
              The most dangerous authorisation flaws don't look like attacks.
              They look like a normal, valid request — for the wrong resource.
            </blockquote>

            <p>
              If your last security review focused on authentication — SSO, MFA,
              token handling — and didn't specifically test authorisation
              boundaries between users, roles and tenants, there's a good chance
              this is where your next finding is waiting.
            </p>
          </Reveal>
        </div>
      </article>

      <Reveal variant="fadeUp" stagger={0}>
        <Link
          href="/blog/ransomware-incident-first-60-minutes"
          className="proj-next"
        >
          <div>
            <p className="text-label proj-next-label">Next article</p>
            <h3
              className="text-headline"
              style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)" }}
            >
              What the first 60 minutes of a ransomware incident actually look
              like
            </h3>
            <p className="proj-next-meta">Incident Response · 5 Aug 2026</p>
          </div>
          <span className="proj-next-arrow">→</span>
        </Link>
      </Reveal>

      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="flex flex-col md-flex-row items-end justify-between gap-8">
          <div>
            <p className="text-label c-gray-999 mb-4">Ready?</p>
            <h2 className="text-headline max-w-lg">
              Let's talk about your risk posture.
            </h2>
          </div>
          <Link href="/contact" className="btn-fill shrink-0">
            Get in touch →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
    </>
  );
}
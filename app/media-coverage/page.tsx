import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Media Coverage",
  description:
    "CYBEROCO in the press — conference talks, podcast appearances and commentary on the security incidents that matter.",
  alternates: { canonical: "/media-coverage" },
};

export default function MediaCoveragePage() {
  return (
    <section
      className="container"
      style={{
        paddingTop: "9rem",
        paddingBottom: "7rem",
        borderBottom: "1px solid var(--black)",
      }}
    >
      <p className="text-label c-gray-999 mb-10">Resources</p>
      <div className="max-w-4xl">
        <Reveal variant="lines" start="top 82%" as="h1">
          <span
            className="text-display"
            style={{ display: "block", lineHeight: 1 }}
          >
            Media Coverage
          </span>
        </Reveal>
      </div>
      <Reveal variant="fadeUp" stagger={0}>
        <p
          className="text-subheading leading-relaxed c-gray-333 max-w-xl"
          style={{ marginTop: "2rem" }}
        >
          CYBEROCO in the press — conference talks, podcast appearances and
          expert commentary on the incidents shaping the industry. The coverage
          archive is being assembled.
        </p>
      </Reveal>
      <Reveal variant="fadeUp" stagger={0}>
        <div className="flex flex-wrap gap-3" style={{ marginTop: "3rem" }}>
          <Link href="/contact" className="btn-fill">
            Get in touch
          </Link>
          <Link href="/resources/sample-pentest-report" className="btn-outline">
            View a sample report
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
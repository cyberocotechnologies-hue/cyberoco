import type { Metadata } from "next";
import Maintenance from "@/components/Maintenance";

export const metadata: Metadata = {
  title: "Media Coverage",
  description:
    "CYBEROCO's media coverage archive is temporarily under maintenance while we assemble press coverage, commentary and expert sources.",
  alternates: { canonical: "/media-coverage" },
};

export default function MediaCoveragePage() {
  return (
    <Maintenance
      kicker="Media Coverage"
      title="The press kit is in production."
      message="We're assembling coverage, commentary and quotable expert sources into one place. In the meantime, our consultants are available for comment — reach out directly."
    />
  );
}

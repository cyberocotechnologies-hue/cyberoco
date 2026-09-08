import type { Metadata } from "next";
import Maintenance from "@/components/Maintenance";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "CYBEROCO's publications shelf is temporarily under maintenance while the next set of research papers and technical publications is finalised.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <Maintenance
      kicker="Publications"
      title="New volumes are in press."
      message="Our team is finalising the next set of research papers and technical publications. This shelf will be restocked shortly with work drawn directly from real engagements — no recycled conference talks."
    />
  );
}

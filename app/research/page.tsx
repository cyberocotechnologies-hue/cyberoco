import type { Metadata } from "next";
import Maintenance from "@/components/Maintenance";

export const metadata: Metadata = {
  title: "Research Lab",
  description:
    "CYBEROCO's research lab is temporarily under maintenance while we catalogue new CVEs, advisories and original vulnerability research.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <Maintenance
      kicker="Research Lab"
      title="Our lab is retooling."
      message="We're cataloguing a new wave of CVEs, advisories and original vulnerability research from our consulting engagements. The lab reopens shortly with fresh findings — and the backlog will be worth the wait."
      detail="Expected back online soon. In the meantime, our consultants are happy to walk you through recent findings on a call."
    />
  );
}

import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Research Lab",
  description:
    "The CYBEROCO Research Lab is under maintenance while we catalogue new advisories and original vulnerability research.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <MaintenanceScreen
      kicker="Research Lab"
      title="We're working on this page."
      message="Our Research Lab is under maintenance while we catalogue new advisories and original vulnerability research. It will be back shortly — meanwhile our consultants are happy to walk you through recent findings on a call."
    />
  );
}
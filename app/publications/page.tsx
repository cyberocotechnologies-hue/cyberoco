import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "CYBEROCO's Publications section is under maintenance while the next set of research papers and technical publications is finalised.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <MaintenanceScreen
      kicker="Publications"
      title="We're working on this page."
      message="Our Publications section is under maintenance while we finalise the next set of research papers and technical publications. It will be back shortly."
    />
  );
}
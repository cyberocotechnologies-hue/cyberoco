import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Media Coverage",
  description:
    "CYBEROCO's Media Coverage section is under maintenance while coverage, commentary and quotable expert sources are assembled.",
  alternates: { canonical: "/media-coverage" },
};

export default function MediaCoveragePage() {
  return (
    <MaintenanceScreen
      kicker="Media Coverage"
      title="We're working on this page."
      message="Our Media Coverage section is under maintenance while we assemble coverage, commentary and quotable expert sources. Journalists can reach us directly in the meantime."
    />
  );
}
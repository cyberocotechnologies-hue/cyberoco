import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "CYBEROCO's Case Studies are under maintenance while a new set of engagement stories is redacted and packaged.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <MaintenanceScreen
      kicker="Case Studies"
      title="We're working on this page."
      message="Our Case Studies are under maintenance while we redact and package a new set of engagement war stories. They'll be declassified shortly."
    />
  );
}
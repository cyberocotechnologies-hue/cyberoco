import type { Metadata } from "next";
import Maintenance from "@/components/Maintenance";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "CYBEROCO's case studies are temporarily under maintenance while a new set of engagement case studies is redacted and packaged for release.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <Maintenance
      kicker="Case Studies"
      title="War stories are being cleared for release."
      message="We're redacting and packaging a new set of engagement case studies — what we found, how we got in, and how it was fixed. They'll be declassified shortly."
    />
  );
}

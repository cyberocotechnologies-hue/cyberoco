import type { Metadata } from "next";
import Maintenance from "@/components/Maintenance";

export const metadata: Metadata = {
  title: "Work",
  description:
    "CYBEROCO's portfolio is temporarily under maintenance while a new selection of client work is prepared for publication.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <Maintenance
      kicker="Work"
      title="We're curating the portfolio."
      message="A new selection of client work is being prepared for publication — redacted where required, technical where it counts. The refreshed portfolio launches shortly."
    />
  );
}

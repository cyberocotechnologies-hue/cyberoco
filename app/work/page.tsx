import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Work",
  description:
    "CYBEROCO's portfolio is under maintenance while a new selection of client work is prepared for publication.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <MaintenanceScreen
      kicker="Work"
      title="We're working on this page."
      message="Our portfolio is under maintenance while we prepare a new selection of client work for publication — redacted where required, technical where it counts. It launches shortly."
    />
  );
}
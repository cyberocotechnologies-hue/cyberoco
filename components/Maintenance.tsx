import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export type MaintenanceProps = {
  kicker: string;
  title: string;
  message: string;
  detail?: string;
};

export default function Maintenance({
  kicker,
  title,
  message,
  detail,
}: MaintenanceProps) {
  return (
    <section
      className="container text-center"
      style={{
        paddingTop: "9rem",
        paddingBottom: "7rem",
        borderBottom: "1px solid var(--black)",
      }}
    >
      <div className="max-w-3xl" style={{ marginInline: "auto" }}>
        <Reveal variant="fadeUp">
          <p className="text-label c-gray-999 mb-6 flex items-center justify-center">
            <span className="maintenance-dot" aria-hidden="true" />
            {kicker}
          </p>
          <h1 className="text-headline">{title}</h1>
          <p
            className="text-subheading leading-relaxed c-gray-555"
            style={{ marginTop: "2rem" }}
          >
            {message}
          </p>
          {detail ? (
            <p
              className="text-sm c-gray-555 leading-relaxed"
              style={{ marginTop: "1rem" }}
            >
              {detail}
            </p>
          ) : null}
          <div
            className="flex flex-wrap items-center justify-center gap-3"
            style={{ marginTop: "3rem" }}
          >
            <Link href="/services" className="btn-outline">
              Explore our services
            </Link>
            <Link href="/contact" className="btn-fill">
              Talk to us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";

type MaintenanceScreenProps = {
  kicker: string;
  title: string;
  message: string;
};

export default function MaintenanceScreen({
  kicker,
  title,
  message,
}: MaintenanceScreenProps) {
  return (
    <section
      className="maintenance-screen"
      style={{
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        borderBottom: "1px solid var(--black)",
      }}
    >
      <div className="max-w-2xl text-center">
        <p className="text-label c-gray-999 flex items-center justify-center gap-3">
          <span className="maintenance-dot" aria-hidden="true" />
          {kicker}
        </p>
        <h1
          className="text-headline"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
        >
          {title}
        </h1>
        <p
          className="text-subheading leading-relaxed c-gray-555"
          style={{ marginTop: "1.5rem" }}
        >
          {message}
        </p>
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ marginTop: "2.5rem" }}
        >
          <Link href="/services" className="btn-outline">
            Explore our services
          </Link>
          <Link href="/contact" className="btn-fill">
            Talk to us
          </Link>
        </div>
        <p className="text-sm c-gray-999" style={{ marginTop: "2.5rem" }}>
          — The CYBEROCO team
        </p>
      </div>
    </section>
  );
}
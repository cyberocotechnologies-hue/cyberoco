export default function SkipLink() {
  return (
    <a
      href="#page-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-3"
    >
      Skip to content
    </a>
  );
}

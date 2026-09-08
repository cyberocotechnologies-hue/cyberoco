"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MaintenanceNotice({ pageKey }: { pageKey: string }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const storageKey = `mnt-notice-${pageKey}`;
    if (sessionStorage.getItem(storageKey)) return;
    dialog.showModal();
    const handleClose = () => sessionStorage.setItem(storageKey, "1");
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [pageKey]);

  return (
    <dialog
      ref={dialogRef}
      className="maintenance-dialog"
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <p className="text-label c-gray-999 flex items-center gap-3">
        <span className="maintenance-dot" aria-hidden="true" />
        Under maintenance
      </p>
      <h2 className="text-headline" style={{ fontSize: "1.6rem" }}>
        We&apos;re working on this page.
      </h2>
      <p
        className="text-sm c-gray-555 leading-relaxed"
        style={{ marginTop: "1rem" }}
      >
        This section is being updated right now — content may be incomplete
        or changing. You&apos;re welcome to browse what&apos;s here, or talk to
        us directly if you need something specific.
      </p>
      <div className="flex flex-wrap gap-3" style={{ marginTop: "1.5rem" }}>
        <button
          type="button"
          className="btn-fill"
          onClick={() => dialogRef.current?.close()}
        >
          Continue browsing
        </button>
        <Link
          href="/contact"
          className="btn-outline"
          onClick={() => dialogRef.current?.close()}
        >
          Contact us
        </Link>
      </div>
    </dialog>
  );
}
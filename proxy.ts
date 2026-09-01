import { NextResponse, type NextRequest } from "next/server";

/**
 * Legacy URL redirects for the old static site.
 *
 * Next.js 16 renamed the `middleware` file convention to `proxy` — this file
 * is the current convention (middleware.ts is deprecated).
 *
 * 1. `/index.html`            -> `/`
 * 2. `*.html`                 -> same path without the extension
 * 3. `/resourses/*`           -> `/resources/*`  (misspelled legacy folder)
 * 4. `/services/web-app-development-services`
 *                            -> `/services/web-application-development`
 *                               (renamed service slug; matches the path with
 *                               or without a trailing slash)
 *
 * Rules compose in a single hop: `/resourses/sample-pentest-report.html`
 * redirects straight to `/resources/sample-pentest-report`, and
 * `/services/web-app-development-services.html` straight to
 * `/services/web-application-development`.
 */

const PERMANENT = 308;

// Renamed service routes. Keyed on the path with any trailing slash stripped,
// checked AFTER `.html` stripping so both the bare path and the `.html`
// variant redirect in one hop.
const LEGACY_SERVICE_PATHS: Record<string, string> = {
  "/services/web-app-development-services": "/services/web-application-development",
};

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  let target = pathname;
  let changed = false;

  if (target === "/index.html") {
    target = "/";
    changed = true;
  } else if (target.endsWith(".html")) {
    target = target.slice(0, -".html".length);
    changed = true;
  }

  if (target === "/resourses" || target.startsWith("/resourses/")) {
    target = "/resources" + target.slice("/resourses".length);
    changed = true;
  }

  const legacyTarget = LEGACY_SERVICE_PATHS[target.replace(/\/+$/, "")];
  if (legacyTarget) {
    target = legacyTarget;
    changed = true;
  }

  if (!changed) return NextResponse.next();

  // Open-redirect guard: the redirect target must stay a same-origin path —
  // never protocol-relative ("//evil.com") or absolute ("https://…").
  if (!target.startsWith("/") || target.startsWith("//")) {
    return NextResponse.next();
  }

  const url = new URL(target, request.url);
  url.search = search;
  return NextResponse.redirect(url, PERMANENT);
}

export const config = {
  // Everything except Next internals and the API; the handler above only acts
  // on /resourses, *.html paths and renamed service slugs, all other requests
  // pass through untouched.
  matcher: ["/((?!_next|api).*)"],
};
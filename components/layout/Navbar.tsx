"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industriesNav, resourcesNav, servicesNav, topNav } from "@/content/site";
import MobileMenu from "@/components/layout/MobileMenu";

type DropdownKey = "services" | "industries" | "resources";

type NavUiState = {
  path: string;
  dropdown: DropdownKey | null;
  menuOpen: boolean;
};

const CLOSED_NAV_UI: NavUiState = { path: "", dropdown: null, menuOpen: false };

const resourceSectionPrefixes = ["/resources", ...resourcesNav.map((item) => item.href)];

function sectionActive(prefixes: string[], pathname: string): boolean {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function TopLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const active = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`nav-link${active ? " active" : ""}`}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [entered, setEntered] = useState(false);
  const [navUi, setNavUi] = useState<NavUiState>(CLOSED_NAV_UI);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpen = useRef(false);

  /* Open states are keyed by pathname: a client-side navigation (including
     back/forward) renders them closed without any state-reset effect. */
  const openDropdown = navUi.path === pathname ? navUi.dropdown : null;
  const menuOpen = navUi.path === pathname && navUi.menuOpen;

  const updateNavUi = (update: Partial<NavUiState>) =>
    setNavUi((current) => {
      const base = current.path === pathname ? current : CLOSED_NAV_UI;
      return { ...base, ...update, path: pathname };
    });

  const closeNavUi = () => setNavUi(CLOSED_NAV_UI);

  /* The ported CSS keeps .navbar at opacity 0 until something reveals it
     (the old build used GSAP). Reveal once mounted with a plain CSS
     transition; the transform is dropped after entering so it never creates
     a containing block for the fixed .mobile-menu. */
  useEffect(() => {
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocumentClick = () => closeNavUi();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNavUi();
    };
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeNavUi();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (wasMenuOpen.current && !menuOpen) {
      hamburgerRef.current?.focus();
    }
    wasMenuOpen.current = menuOpen;
  }, [menuOpen]);

  const servicesActive = sectionActive(["/services"], pathname);
  const industriesActive = sectionActive(["/industries"], pathname);
  const resourcesActive = sectionActive(resourceSectionPrefixes, pathname);

  const toggleDropdown = (key: DropdownKey) => {
    updateNavUi({ dropdown: openDropdown === key ? null : key });
  };

  return (
    <header
      id="navbar"
      className={`navbar${scrolled ? " scrolled" : ""}`}
      style={{
        ...(entered ? { opacity: "1" } : { opacity: "0", transform: "translateY(-20px)" }),
        transition:
          "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <nav className="nav-inner">
        <Link href="/" className="logo" aria-label="CYBEROCO home">
          <Image
            src="/images/logo.png"
            alt="CYBEROCO"
            width={150}
            height={38}
            className="logo-img"
            priority
            style={{ height: "auto" }}
          />
        </Link>

        <ul className="nav-links" role="list">
          <li
            className={`nav-item has-dropdown${openDropdown === "services" ? " open" : ""}`}
            onMouseEnter={() => updateNavUi({ dropdown: "services" })}
            onMouseLeave={() => {
              if (openDropdown === "services") closeNavUi();
            }}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-toggle${servicesActive ? " active" : ""}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === "services"}
              aria-current={servicesActive ? "page" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                toggleDropdown("services");
              }}
            >
              Services
            </button>
            <div className="nav-dropdown nav-dropdown-wide" onClick={closeNavUi}>
              {servicesNav.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="nav-dropdown-link nav-dropdown-link-desc"
                >
                  <span className="nav-dropdown-title">{service.label}</span>
                  <span className="nav-dropdown-desc">{service.desc}</span>
                </Link>
              ))}
            </div>
          </li>

          <li
            className={`nav-item has-dropdown${openDropdown === "industries" ? " open" : ""}`}
            onMouseEnter={() => updateNavUi({ dropdown: "industries" })}
            onMouseLeave={() => {
              if (openDropdown === "industries") closeNavUi();
            }}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-toggle${industriesActive ? " active" : ""}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === "industries"}
              aria-current={industriesActive ? "page" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                toggleDropdown("industries");
              }}
            >
              Industries
            </button>
            <div className="nav-dropdown nav-dropdown-wide" onClick={closeNavUi}>
              {industriesNav.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="nav-dropdown-link"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </li>

          {topNav.slice(0, 2).map((link) => (
            <TopLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
          ))}

          <li
            className={`nav-item has-dropdown${openDropdown === "resources" ? " open" : ""}`}
            onMouseEnter={() => updateNavUi({ dropdown: "resources" })}
            onMouseLeave={() => {
              if (openDropdown === "resources") closeNavUi();
            }}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-toggle${resourcesActive ? " active" : ""}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === "resources"}
              aria-current={resourcesActive ? "page" : undefined}
              onClick={(event) => {
                event.stopPropagation();
                toggleDropdown("resources");
              }}
            >
              Resources
            </button>
            <div className="nav-dropdown nav-dropdown-wide" onClick={closeNavUi}>
              {resourcesNav.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="nav-dropdown-link nav-dropdown-link-desc"
                >
                  <span className="nav-dropdown-title">{resource.label}</span>
                  <span className="nav-dropdown-desc">{resource.desc}</span>
                </Link>
              ))}
            </div>
          </li>

          {topNav.slice(2).map((link) => (
            <TopLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
          ))}
        </ul>

        <Link href="/contact" className="btn-outline nav-cta-desktop">
          Start a project
        </Link>

        <button
          ref={hamburgerRef}
          type="button"
          id="hamburger"
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => updateNavUi({ menuOpen: !menuOpen })}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={closeNavUi} />
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { industriesNav, megaMenu, resourcesNav, topNav } from "@/content/site";
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

/* Default mega-menu category: the one covering the current page, else the
   first (Cybersecurity â€” a security firm leads with security). */
function megaCategoryFor(pathname: string): string {
  const match = megaMenu.find(
    (category) =>
      pathname === category.href ||
      pathname.startsWith(`${category.href}/`) ||
      category.items.some(
        (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
      ),
  );
  return match?.id ?? megaMenu[0].id;
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
  /* Hovered/focused mega-menu category, keyed by pathname so a client-side
     navigation falls back to the pathname-derived default. */
  const [megaOverride, setMegaOverride] = useState<{ path: string; id: string } | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wasMenuOpen = useRef(false);

  /* Open states are keyed by pathname: a client-side navigation (including
     back/forward) renders them closed without any state-reset effect. */
  const openDropdown = navUi.path === pathname ? navUi.dropdown : null;
  const menuOpen = navUi.path === pathname && navUi.menuOpen;

  const activeMegaId =
    megaOverride && megaOverride.path === pathname
      ? megaOverride.id
      : megaCategoryFor(pathname);
  const activeMega =
    megaMenu.find((category) => category.id === activeMegaId) ?? megaMenu[0];

  const updateNavUi = (update: Partial<NavUiState>) =>
    setNavUi((current) => {
      const base = current.path === pathname ? current : CLOSED_NAV_UI;
      return { ...base, ...update, path: pathname };
    });

  const cancelDropdownClose = () => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeNavUi = () => setNavUi(CLOSED_NAV_UI);

  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    closeTimerRef.current = setTimeout(() => closeNavUi(), 280);
  };

  const closeNavUiNow = () => {
    cancelDropdownClose();
    closeNavUi();
  };

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
    const onDocumentClick = (event: MouseEvent) => {
      if (navbarRef.current?.contains(event.target as Node)) return;
      closeNavUi();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNavUi();
    };
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
      cancelDropdownClose();
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
    cancelDropdownClose();
    updateNavUi({ dropdown: openDropdown === key ? null : key });
  };

  /* Opening the mega menu always starts from the pathname-derived category,
     whether it is opened by hover or by click/keyboard. */
  const openMegaMenu = () => {
    cancelDropdownClose();
    setMegaOverride(null);
    updateNavUi({ dropdown: "services" });
  };

  const selectMegaCategory = (id: string) => {
    setMegaOverride({ path: pathname, id });
  };

  /* Arrow keys roam focus through every link in the panel, in DOM order
     (categories first, then the active category's sub-services). */
  const onMegaKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const panel = megaPanelRef.current;
    if (!panel) return;
    const links = Array.from(panel.querySelectorAll<HTMLAnchorElement>("a[href]"));
    if (links.length === 0) return;
    const currentIndex = links.findIndex((link) => link === document.activeElement);
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex =
      currentIndex < 0
        ? event.key === "ArrowDown"
          ? 0
          : links.length - 1
        : (currentIndex + delta + links.length) % links.length;
    event.preventDefault();
    links[nextIndex].focus();
  };

  return (
    <header
      ref={navbarRef}
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
          <TopLink href="/" label="Home" pathname={pathname} />

          <li
            className={`nav-item has-dropdown mega-host${openDropdown === "services" ? " open" : ""}`}
            onMouseEnter={openMegaMenu}
            onMouseLeave={() => {
              if (openDropdown === "services") scheduleDropdownClose();
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
                if (openDropdown === "services") {
                  toggleDropdown("services");
                } else {
                  openMegaMenu();
                }
              }}
            >
              Services
            </button>
            <div
              ref={megaPanelRef}
              className="nav-dropdown mega-menu"
              onClick={closeNavUiNow}
              onKeyDown={onMegaKeyDown}
            >
              <div className="mega-cats">
                {megaMenu.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className={`mega-cat${activeMegaId === category.id ? " active" : ""}`}
                    aria-current={pathname === category.href ? "page" : undefined}
                    onMouseEnter={() => selectMegaCategory(category.id)}
                    onFocus={() => selectMegaCategory(category.id)}
                  >
                    {category.label}
                  </Link>
                ))}
                <Link href="/services" className="mega-all">
                  View all services â†’
                </Link>
              </div>
              <div className="mega-items">
                {activeMega.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="mega-item"
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <span className="mega-item-label">{item.label}</span>
                    <span className="mega-item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li
            className={`nav-item has-dropdown${openDropdown === "industries" ? " open" : ""}`}
            onMouseEnter={() => {
              cancelDropdownClose();
              updateNavUi({ dropdown: "industries" });
            }}
            onMouseLeave={() => {
              if (openDropdown === "industries") scheduleDropdownClose();
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
            <div className="nav-dropdown nav-dropdown-wide" onClick={closeNavUiNow}>
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
            onMouseEnter={() => {
              cancelDropdownClose();
              updateNavUi({ dropdown: "resources" });
            }}
            onMouseLeave={() => {
              if (openDropdown === "resources") scheduleDropdownClose();
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
            <div className="nav-dropdown nav-dropdown-wide" onClick={closeNavUiNow}>
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
          onClick={(event) => {
            event.stopPropagation();
            updateNavUi({ menuOpen: !menuOpen });
          }}
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
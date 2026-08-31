"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { industriesNav, resourcesNav, servicesNav, topNav } from "@/content/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

type AccordionKey = "services" | "industries" | "resources";

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  /* Accordion state is keyed by pathname: a client-side navigation renders
     it closed without any state-reset effect. */
  const [submenuState, setSubmenuState] = useState<{
    path: string;
    key: AccordionKey | null;
  }>({ path: "", key: null });

  const openSubmenu = submenuState.path === pathname ? submenuState.key : null;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const toggleSubmenu = (key: AccordionKey) => {
    setSubmenuState({ path: pathname, key: openSubmenu === key ? null : key });
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className={`mobile-menu${open ? " open" : ""}`} id="mobile-menu">
      <ul role="list">
        <li
          className={`mobile-nav-item has-children${openSubmenu === "services" ? " open" : ""}`}
        >
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={openSubmenu === "services"}
            aria-controls="mobile-submenu-services"
            onClick={() => toggleSubmenu("services")}
          >
            <span>Services</span>
            <span className="mobile-nav-caret">+</span>
          </button>
          <ul className="mobile-submenu" id="mobile-submenu-services">
            {servicesNav.map((service) => {
              const href = `/services/${service.slug}`;
              const active = isActive(href);
              return (
                <li key={service.slug}>
                  <Link
                    href={href}
                    className={active ? "active" : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                  >
                    {service.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>

        <li
          className={`mobile-nav-item has-children${openSubmenu === "industries" ? " open" : ""}`}
        >
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={openSubmenu === "industries"}
            aria-controls="mobile-submenu-industries"
            onClick={() => toggleSubmenu("industries")}
          >
            <span>Industries</span>
            <span className="mobile-nav-caret">+</span>
          </button>
          <ul className="mobile-submenu" id="mobile-submenu-industries">
            {industriesNav.map((industry) => {
              const href = `/industries/${industry.slug}`;
              const active = isActive(href);
              return (
                <li key={industry.slug}>
                  <Link
                    href={href}
                    className={active ? "active" : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                  >
                    {industry.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>

        <li
          className={`mobile-nav-item has-children${openSubmenu === "resources" ? " open" : ""}`}
        >
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={openSubmenu === "resources"}
            aria-controls="mobile-submenu-resources"
            onClick={() => toggleSubmenu("resources")}
          >
            <span>Resources</span>
            <span className="mobile-nav-caret">+</span>
          </button>
          <ul className="mobile-submenu" id="mobile-submenu-resources">
            {resourcesNav.map((resource) => {
              const active = isActive(resource.href);
              return (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className={active ? "active" : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                  >
                    {resource.label}
                    <span className="mobile-submenu-desc">{resource.desc}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>

        {topNav.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          );
        })}

        <li>
          <Link href="/contact" className="btn-fill" onClick={onClose}>
            Start a project
          </Link>
        </li>
      </ul>
    </div>
  );
}

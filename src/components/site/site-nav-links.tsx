"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Trips", href: "/trips" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/trips") {
    return pathname === "/trips" || pathname.startsWith("/trips/");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavLinks({
  className,
  mobile = false,
}: {
  className?: string;
  mobile?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Primary navigation"} className={className}>
      {navItems.map((item) => {
        const active = isActive(item.href, pathname);

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "transition-colors hover:text-coral",
              mobile ? "shrink-0" : "",
              active ? "font-bold text-coral" : "",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

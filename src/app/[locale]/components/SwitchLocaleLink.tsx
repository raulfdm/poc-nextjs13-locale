"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "../../../infrastrcuture/contexts/Locale";

export function SwitchLocaleLink({
  nextLocale,
  children,
}: {
  nextLocale: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { country } = useLocale();
  const locale = country ? `${nextLocale}-${country}` : nextLocale;

  const [first, _currentLocale, ...restPath] = (pathname || "").split("/");
  const nextHref = [first, locale, ...restPath].join("/");

  return <Link href={nextHref}>{children}</Link>;
}

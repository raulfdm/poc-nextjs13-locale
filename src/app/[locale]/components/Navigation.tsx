"use client";

import Link from "next/link";
import { LinkWithLocale } from "../../ui/components/LinkWithLocale";
import { SwitchLocaleLink } from "./SwitchLocaleLink";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <LinkWithLocale href="/">Home</LinkWithLocale>
        </li>
        <li>
          <LinkWithLocale href="/credit">Credit</LinkWithLocale>
        </li>
      </ul>

      <ul>
        <li>
          <SwitchLocaleLink nextLocale="en">English</SwitchLocaleLink>
        </li>
        <li>
          <SwitchLocaleLink nextLocale="es">Spanish</SwitchLocaleLink>
        </li>
      </ul>
    </nav>
  );
}

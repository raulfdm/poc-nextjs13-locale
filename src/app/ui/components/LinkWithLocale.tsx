"use client";

import Link from "next/link";
import { useLocale } from "../../../infrastrcuture/contexts/Locale";

type Props = Parameters<typeof Link>[0];

export function LinkWithLocale({ href, ...rest }: Props) {
  const { fullLocale } = useLocale();
  const nextHref = ["", fullLocale, href].join("/");

  return <Link href={nextHref} {...rest} />;
}

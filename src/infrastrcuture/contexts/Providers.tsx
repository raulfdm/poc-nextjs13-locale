"use client";

import { IntlProvider } from "react-intl";
import { LocaleProvider } from "./Locale";

export function Providers({ children, locale, messages }) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    </IntlProvider>
  );
}

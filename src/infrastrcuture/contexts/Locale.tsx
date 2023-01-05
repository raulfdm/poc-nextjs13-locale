import { createContext, useContext } from "react";

const LocaleContext = createContext<null | {
  fullLocale: string;
  language: string;
  country: string | undefined;
}>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === null) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const [lang, country] = locale.split("-");

  return (
    <LocaleContext.Provider
      value={{
        fullLocale: locale,
        language: lang,
        country,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

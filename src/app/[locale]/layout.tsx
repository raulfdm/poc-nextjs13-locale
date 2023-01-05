import { Providers } from "../../infrastrcuture/contexts/Providers";
import { Navigation } from "./components/Navigation";

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const [lang, country] = params.locale.split("-");

  /**
   * EMULATING GETTING LOCALES FROM CONTENTFUL
   */
  const response = await fetch("http://localhost:3000/api/translations", {
    method: "POST",
    body: JSON.stringify({
      locale: lang,
    }),
  });

  const locales = await response.json();

  return (
    <Providers locale={params.locale} messages={locales}>
      <Navigation />
      {children}
    </Providers>
  );
}

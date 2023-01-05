// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import englishLocales from "../../infrastrcuture/i18n/en.json";
import spanishLocales from "../../infrastrcuture/i18n/es.json";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /**
   * This should be validated
   */
  const body = JSON.parse(req.body) as { locale: string };

  let locales: any;
  switch (body.locale) {
    case "en":
      locales = englishLocales;
      break;
    case "es":
      locales = spanishLocales;
      break;
    default:
      throw new Error("Locale not supported");
  }

  res.status(200).json(locales);
}

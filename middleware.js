import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: [...locales],

  // Used when no locale matches
  defaultLocale: defaultLocale,
  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales.
    "/": "/",
    "/blog": "/blog",

    // If locales use different paths, you can
    // specify each external path per locale.
    "/about": {
      en: "/about",
      de: "/ueber-uns",
      bd: "/আমার-সম্পর্কে",
    },

    // Also (optional) catch-all segments are supported
    "/news/[...slug]": {
      en: "/news/[...slug]",
      de: "/neuigkeiten/[...slug]",
      bd: "/খবর/[...slug]",
    },

    // // Dynamic params are supported via square brackets
    // "/news/[articleSlug]-[articleId]": {
    //   en: "/news/[articleSlug]-[articleId]",
    //   de: "/neuigkeiten/[articleSlug]-[articleId]",
    //   de: "/খবর/[articleSlug]-[articleId]",
    // },

    // Static pathnames that overlap with dynamic segments
    // will be prioritized over the dynamic segment
    "/static-page": {
      en: "/static-page",
      de: "/statische-pagina",
      bd: "/স্ট্যাটিক-পৃষ্ঠা",
    },
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|bd)/:path*"],
};

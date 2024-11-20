import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};

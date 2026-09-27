import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { DataBanner } from "@/components/data-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { I18nProvider } from "@/lib/i18n";
import { useBuild } from "@/lib/store";
import appCss from "../styles.css?url";

const APP_NAME = "CHECKMYPC";

function HydrateBuild() {
  const hydrate = useBuild((s) => s.hydrate);
  useEffect(() => {
    hydrate();
    const on = () => hydrate();
    window.addEventListener("cmp:build", on);
    return () => window.removeEventListener("cmp:build", on);
  }, [hydrate]);
  return null;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "CHECKMYPC.MA — Moroccan PC price comparison, builder, used inspection, assembly and cleaning. Check before you buy.",
      },
      { name: "theme-color", content: "#0a1823" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("cmp.theme.v1");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}var l=localStorage.getItem("cmp.lang.v1");document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.setAttribute("data-theme",t);if(l==="en"||l==="fr"||l==="ar"){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <I18nProvider>
            <HydrateBuild />
            <DataBanner />
            <SiteHeader />
            <Outlet />
            <SiteFooter />
            <Toaster theme="system" position="bottom-center" />
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

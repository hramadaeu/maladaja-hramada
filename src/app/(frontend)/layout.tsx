import { cookies } from "next/headers";
import { Russo_One, Inter, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/ui/theme-provider";

import "../globals.css";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["cyrillic", "latin"],
});

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value ?? "be";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${russoOne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:brutal-border"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


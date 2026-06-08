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

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${russoOne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


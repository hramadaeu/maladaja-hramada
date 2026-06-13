"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";
import { defaultLocale } from "@/config/i18n";
import { mobileMenuCopy } from "@/lib/dictionaries/header";
import { t } from "@/lib/translate";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  lang?: string;
};

export function ThemeToggle({ className, lang }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering the toggle state once mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("size-8 rounded-md bg-transparent", className)} />
    );
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex size-8 items-center justify-center rounded-md text-ink-black transition-all duration-100 hover:text-proletarian-red hover:bg-concrete-gray dark:hover:bg-white/10 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
        className
      )}
      aria-label={isDark ? t(mobileMenuCopy.themeLight, lang ?? defaultLocale) : t(mobileMenuCopy.themeDark, lang ?? defaultLocale)}
    >
      <span className="relative flex size-4 items-center justify-center">
        <Sun className={cn(
          "size-4 transition-all duration-300 absolute",
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )} />
        <Moon className={cn(
          "size-4 transition-all duration-300 absolute",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )} />
      </span>
    </button>
  );
}

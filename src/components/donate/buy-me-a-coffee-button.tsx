import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const BUY_ME_A_COFFEE_BUTTON_IMAGE =
  "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=%E2%98%95&slug=mhramada&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff";

type BuyMeACoffeeButtonProps = {
  href: string;
  className?: string;
};

export function BuyMeACoffeeButton({ href, className }: BuyMeACoffeeButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      <Image
        src={BUY_ME_A_COFFEE_BUTTON_IMAGE}
        alt="Buy me a coffee"
        width={217}
        height={60}
        className="h-auto w-full max-w-[217px]"
        unoptimized
      />
    </Link>
  );
}

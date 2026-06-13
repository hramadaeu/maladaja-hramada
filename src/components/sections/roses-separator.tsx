export function RosesSeparator() {
  return (
    <div className="w-full overflow-hidden leading-none" aria-hidden>
      <div className="relative w-full aspect-[6594/320]">
        <div
          className="absolute inset-0 bg-proletarian-red opacity-[0.12]"
          style={{
            maskImage: "url(/brand/separator-roses-red-mask.svg)",
            maskSize: "100% 100%",
            WebkitMaskImage: "url(/brand/separator-roses-red-mask.svg)",
            WebkitMaskSize: "100% 100%",
          }}
        />
        <div
          className="absolute inset-0 bg-foreground opacity-[0.12]"
          style={{
            maskImage: "url(/brand/separator-roses-black-mask.svg)",
            maskSize: "100% 100%",
            WebkitMaskImage: "url(/brand/separator-roses-black-mask.svg)",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
    </div>
  );
}

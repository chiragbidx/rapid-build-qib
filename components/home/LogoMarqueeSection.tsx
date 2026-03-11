import { LogosContent } from "../../content/home";

// Section: Company logos marquee/social proof
export function LogosMarqueeSection({ content }: { content: LogosContent }) {
  return (
    <section
      id="logos"
      className="relative flex flex-col items-center rounded-2xl border border-[#fb7232]/15 bg-[#fff9f4] px-6 py-8 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(251,114,50,0.05), rgba(255,255,255,0.96) 60%), radial-gradient(circle at 10% 90%, rgba(251,114,50,0.09), transparent 40%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 320px 320px",
        backgroundPosition: "center, left -60px bottom -80px",
      }}
    >
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">{content.title}</p>
        <h2 className="text-xl font-bold text-[#6c331a]">{content.subtitle}</h2>
      </div>

      <div className="w-full overflow-x-hidden pt-4">
        {/* Marquee row */}
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {content.logos.map((logo, idx) => (
            <span
              key={logo + idx}
              className="inline-flex items-center justify-center rounded-lg bg-white border border-[#fb7232]/10 px-5 py-2 text-base font-semibold text-[#cc5e25] shadow-sm min-w-[120px] h-12 mx-2"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
      {/* Simple overlay/fade to hint overflow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#fff9f4] via-[#fff9f4]/80 to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#fff9f4] via-[#fff9f4]/80 to-transparent"></div>
    </section>
  );
}
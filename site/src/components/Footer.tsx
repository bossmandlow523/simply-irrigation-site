import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Consultation", href: "/consultation" },
];

const serviceAreas = [
  "Bradenton",
  "Sarasota",
  "Lakewood Ranch",
  "Palmetto",
  "Manatee County",
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-surface overflow-hidden">
      {/* ─── Decorative vertical accent lines ─── */}
      <div
        className="absolute top-0 h-full w-px bg-surface/[0.06]"
        style={{ left: "25%" }}
      />
      <div
        className="absolute top-0 h-full w-px bg-surface/[0.04]"
        style={{ left: "50%" }}
      />
      <div
        className="absolute top-0 h-full w-px bg-surface/[0.06]"
        style={{ left: "75%" }}
      />

      {/* ─── Main footer content ─── */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-24">
            {/* Brand column — large, editorial */}
            <div className="col-span-2 lg:col-span-5">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px w-8 bg-surface/30" />
                <span className="font-body text-[10px] uppercase tracking-[0.35em] text-surface/40">
                  Est. Bradenton, FL
                </span>
              </div>

              <h3 className="font-heading text-5xl leading-[1.05] text-surface lg:text-6xl">
                Simply
                <br />
                Irrigation
              </h3>

              <p className="mt-8 max-w-xs font-body text-sm leading-[1.8] text-surface/50">
                Professional irrigation services built on honesty, precision,
                and a genuine respect for every property we touch.
                Owner-operated by Fernando Davila.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-surface/30">
                    verified
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-surface/30">
                    Licensed
                  </span>
                </div>
                <div className="h-3 w-px bg-surface/15" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-surface/30">
                    shield
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-surface/30">
                    Insured
                  </span>
                </div>
                <div className="h-3 w-px bg-surface/15" />
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-surface/30">
                    eco
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-surface/30">
                    Rain Bird &amp; Hunter
                  </span>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:col-span-1 lg:block" />

            {/* Navigation */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-8 font-body text-[10px] uppercase tracking-[0.35em] text-surface/35">
                Navigate
              </h4>
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 font-body text-sm text-surface/60 transition-all duration-300 hover:text-surface"
                    >
                      <span className="inline-block h-px w-0 bg-surface transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="mb-8 font-body text-[10px] uppercase tracking-[0.35em] text-surface/35">
                Service Areas
              </h4>
              <ul className="space-y-5">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="font-body text-sm text-surface/60"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="mb-8 font-body text-[10px] uppercase tracking-[0.35em] text-surface/35">
                Contact
              </h4>
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="font-body text-sm text-surface/60">
                    810 56th Ave E
                  </p>
                  <p className="font-body text-sm text-surface/60">
                    Bradenton, FL 34203
                  </p>
                </div>

                <div className="h-px w-8 bg-surface/10" />

                <div className="space-y-3">
                  <a
                    href="tel:9415382593"
                    className="block font-body text-sm text-surface/60 transition-colors duration-300 hover:text-surface"
                  >
                    941-538-2593
                  </a>
                  <a
                    href="mailto:simplyirrigationllc@gmail.com"
                    className="block font-body text-sm text-surface/60 transition-colors duration-300 hover:text-surface"
                  >
                    simplyirrigationllc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="relative border-t border-surface/[0.08]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
            <p className="font-body text-[11px] tracking-[0.1em] text-surface/30">
              &copy; 2026 Simply Irrigation LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-body text-[11px] tracking-[0.1em] text-surface/30">
                Bradenton, Florida
              </span>
              <div className="h-3 w-px bg-surface/10" />
              <span className="font-body text-[11px] tracking-[0.1em] text-surface/30">
                Owner-Operated
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

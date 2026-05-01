import Link from 'next/link';

const stats = [
  { n: '500+', l: 'Installs' },
  { n: '15yr', l: 'Experience' },
  { n: '100%', l: 'On-Site' },
];

export default function MobileHero() {
  return (
    <section
      className="relative md:hidden w-full overflow-hidden"
      style={{ height: '100svh' }}
      aria-label="Hero"
    >
      {/* ── Ken Burns background photo ── */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/AdobeStock_383312941.jpeg"
          alt="Irrigation system watering a lush Florida lawn"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'sepia(0.18) contrast(1.12) brightness(0.92)',
            transformOrigin: '60% 50%',
            animation: 'kenBurns 16s ease-out both',
          }}
        />
      </div>

      {/* ── Multi-stop gradient overlay ── dark top → reveal center → dark bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(28,49,24,0.94) 0%,
            rgba(28,49,24,0.58) 26%,
            rgba(28,49,24,0.18) 44%,
            rgba(28,49,24,0.52) 60%,
            rgba(28,49,24,0.91) 74%,
            rgba(28,49,24,0.99) 100%
          )`,
        }}
      />

      {/* ── Subtle vertical grid accent lines ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 h-full w-px"
          style={{ left: '33.33%', background: 'rgba(245,240,232,0.045)' }}
        />
        <div
          className="absolute top-0 h-full w-px"
          style={{ left: '66.66%', background: 'rgba(245,240,232,0.045)' }}
        />
      </div>

      {/* ── Small decorative diamond accent ── */}
      <div
        className="absolute"
        aria-hidden="true"
        style={{
          top: 104,
          right: 28,
          width: 7,
          height: 7,
          border: '1px solid rgba(201,185,154,0.3)',
          transform: 'rotate(45deg)',
          animation: 'fadeIn 1s ease-out 0.8s both',
        }}
      />

      {/* ── Main bottom content block ── */}
      <div
        className="absolute left-0 right-0 bottom-0 flex flex-col"
        style={{ padding: '0 24px 38px' }}
      >
        {/* Headline */}
        <h1
          className="font-heading mb-5"
          style={{
            fontWeight: 300,
            fontSize: 'clamp(52px, 14.2vw, 66px)',
            lineHeight: 0.93,
            color: '#F5F0E8',
            letterSpacing: '-0.01em',
          }}
        >
          <span className="headline-line">
            <span className="headline-inner animate-1">Water</span>
          </span>
          <span className="headline-line">
            <span className="headline-inner animate-2 italic" style={{ color: '#C9B99A' }}>
              Moves.
            </span>
          </span>
          <span className="headline-line">
            <span className="headline-inner animate-3">Growth</span>
          </span>
          <span className="headline-line">
            <span className="headline-inner animate-4">Follows.</span>
          </span>
        </h1>

        {/* Body copy */}
        <p
          className="font-body mb-7"
          style={{
            fontSize: 13,
            lineHeight: 1.8,
            color: 'rgba(245,240,232,0.52)',
            maxWidth: 310,
            animation: 'fadeInUp 0.9s ease-out 1.35s both',
          }}
        >
          Owner-operated irrigation for homes and businesses across the Gulf Coast.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col gap-4 mb-8"
          style={{ animation: 'fadeInUp 0.9s ease-out 1.55s both' }}
        >
          {/* Primary — full-width with arrow */}
          <Link
            href="/consultation"
            className="hero-btn-primary"
            style={{
              justifyContent: 'space-between',
              padding: '17px 22px',
              fontSize: '10px',
              letterSpacing: '0.2em',
            }}
          >
            Free Consultation
            <span
              className="relative inline-block"
              style={{ width: 18, height: 1, background: 'currentColor', flexShrink: 0 }}
              aria-hidden="true"
            >
              <span
                className="absolute"
                style={{
                  right: 0,
                  top: -3,
                  width: 6,
                  height: 6,
                  borderRight: '1px solid currentColor',
                  borderTop: '1px solid currentColor',
                  transform: 'rotate(45deg)',
                }}
              />
            </span>
          </Link>

          {/* Secondary — phone number */}
          <a
            href="tel:9415382593"
            className="flex items-center gap-2.5 cursor-pointer"
            style={{ textDecoration: 'none' }}
            aria-label="Call Simply Irrigation at 941-538-2593"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#C9B99A' }}>
              call
            </span>
            <span
              className="font-body uppercase"
              style={{ fontSize: '9.5px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.5)' }}
            >
              Call: 941‑538‑2593
            </span>
          </a>
        </div>

        {/* ── Bottom strip: stats + trust badges ── */}
        <div
          className="flex items-center justify-between pt-5"
          style={{
            borderTop: '1px solid rgba(245,240,232,0.1)',
            animation: 'fadeInUp 0.9s ease-out 1.75s both',
          }}
        >
          {/* Stats */}
          {stats.map(({ n, l }) => (
            <div key={l} className="flex flex-col items-center">
              <div
                className="font-heading"
                style={{ fontSize: 21, fontWeight: 300, color: '#F5F0E8', lineHeight: 1, marginBottom: 5 }}
              >
                {n}
              </div>
              <div
                className="font-body uppercase"
                style={{ fontSize: '7.5px', letterSpacing: '0.18em', color: '#C9B99A' }}
              >
                {l}
              </div>
            </div>
          ))}

          {/* Vertical divider */}
          <div
            style={{ width: 1, height: 30, background: 'rgba(245,240,232,0.1)', flexShrink: 0 }}
            aria-hidden="true"
          />

          {/* Trust badges */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: 15, color: '#C9B99A' }}>
                verified
              </span>
              <span
                className="font-body uppercase"
                style={{ fontSize: '9.5px', letterSpacing: '0.18em', color: 'rgba(245,240,232,0.55)' }}
              >
                Licensed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: 15, color: '#C9B99A' }}>
                shield
              </span>
              <span
                className="font-body uppercase"
                style={{ fontSize: '9.5px', letterSpacing: '0.18em', color: 'rgba(245,240,232,0.55)' }}
              >
                Insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

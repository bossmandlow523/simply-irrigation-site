import Link from "next/link";
import MobileHero from "@/components/MobileHero";

const services = [
  {
    icon: "engineering",
    title: "Irrigation Installation",
    description:
      "Complete system design and installation tailored to your property's unique landscape and water needs.",
    image: "/images/AdobeStock_1856037653.jpeg",
    features: [
      {
        name: "Custom Design",
        text: "Every system designed specifically for your property's layout, soil type, and plant needs.",
      },
      {
        name: "Rain Bird & Hunter",
        text: "We install only professional-grade components from trusted brands.",
      },
      {
        name: "Code Compliant",
        text: "All installations meet local building codes and water management regulations.",
      },
      {
        name: "Warranty Backed",
        text: "Full warranty on parts and labor for your peace of mind.",
      },
    ],
  },
  {
    icon: "build",
    title: "System Repair",
    description:
      "Fast diagnostics and lasting fixes for broken sprinkler heads, leaking valves, damaged pipes, and faulty controllers.",
    image: "/images/AdobeStock_368842269.jpeg",
    features: [
      {
        name: "Same-Day Service",
        text: "Emergency repairs when you need them most — broken mains, flooding zones, and electrical faults.",
      },
      {
        name: "Full Diagnostics",
        text: "We find the real problem, not just the symptom. Thorough system inspection before every repair.",
      },
      {
        name: "All Brands",
        text: "We service Rain Bird, Hunter, Toro, Orbit, and all major irrigation brands.",
      },
      {
        name: "Transparent Pricing",
        text: "Honest quotes with no hidden fees. You approve the price before we start.",
      },
    ],
  },
  {
    icon: "park",
    title: "Landscaping",
    description:
      "Professional landscaping services that complement your irrigation system for a complete outdoor solution.",
    image: "/images/AdobeStock_289926852.jpeg",
    features: [
      {
        name: "Sod Installation",
        text: "Fresh, healthy sod professionally installed and integrated with your irrigation zones.",
      },
      {
        name: "Garden Design",
        text: "Custom planting plans designed for Florida's climate and your irrigation coverage.",
      },
      {
        name: "Mulch & Beds",
        text: "Clean, professional bed preparation and mulching to retain moisture and reduce water waste.",
      },
      {
        name: "Seasonal Care",
        text: "Ongoing landscape maintenance to keep your property looking its best year-round.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* ─── SECTION 1a: Mobile Hero ─── */}
      <MobileHero />

      {/* ─── SECTION 1b: Desktop Hero — Verdant Editorial (md+ only) ─── */}
      <section className="relative hidden md:grid w-full overflow-hidden grid-cols-1 md:grid-cols-2" style={{ minHeight: '100svh' }}>

        {/* ── Mobile-only photo banner (top of stack on small screens) ── */}
        <div
          className="relative md:hidden"
          style={{ height: '42vh' }}
        >
          <img
            src="/images/AdobeStock_166031167.jpeg"
            alt="Lush irrigated lawn"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'sepia(0.15) contrast(1.08)' }}
          />
          {/* Bottom fade into dark panel below */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(28,49,24,0.1) 0%, #1C3118 100%)' }}
          />
        </div>

        {/* ── Text panel ── */}
        <div
          className="relative z-10 flex flex-col justify-end
                     px-6 pb-14 pt-10
                     md:px-[52px] md:pb-20 md:pt-[160px]"
          style={{ background: '#1C3118' }}
        >
          {/* Decorative vertical accent lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 h-full w-px" style={{ left: '25%', background: 'rgba(245,240,232,0.06)' }} />
            <div className="absolute top-0 h-full w-px" style={{ left: '50%', background: 'rgba(245,240,232,0.04)' }} />
            <div className="absolute top-0 h-full w-px" style={{ left: '75%', background: 'rgba(245,240,232,0.06)' }} />
          </div>

          {/* Eyebrow */}
          <div
            className="mb-8 md:mb-10 flex items-center gap-5"
            style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
          >
            <div style={{ width: 32, height: 1, background: '#C9B99A' }} />
            <span
              className="font-body uppercase"
              style={{ fontSize: '9px', letterSpacing: '0.28em', color: '#C9B99A' }}
            >
              Bradenton, Florida · Est. 2018
            </span>
          </div>

          {/* Staggered headline */}
          <h1
            className="font-heading"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(52px, 10vw, 100px)',
              lineHeight: 0.95,
              color: '#F5F0E8',
              marginBottom: 32,
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
            className="font-body mb-10 md:mb-[52px]"
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.55)',
              maxWidth: 400,
              animation: 'fadeInUp 1s ease-out 1.2s both',
            }}
          >
            Owner-operated irrigation for homeowners and businesses across the Gulf Coast.
            Every system custom-designed, every job personally backed by the owner.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-6 md:gap-9"
            style={{ animation: 'fadeInUp 1s ease-out 1.4s both' }}
          >
            <Link href="/consultation" className="hero-btn-primary">
              Free Consultation
              <span
                className="relative inline-block"
                style={{ width: 20, height: 1, background: 'currentColor', flexShrink: 0 }}
              >
                <span
                  className="absolute"
                  style={{
                    right: 0, top: -3,
                    width: 7, height: 7,
                    borderRight: '1px solid currentColor',
                    borderTop: '1px solid currentColor',
                    transform: 'rotate(45deg)',
                  }}
                />
              </span>
            </Link>
            <Link href="/#solutions" className="hero-btn-ghost">
              Our Services
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="flex gap-6 md:gap-12 mt-12 md:mt-20 pt-8 md:pt-10"
            style={{
              borderTop: '1px solid rgba(245,240,232,0.1)',
              animation: 'fadeInUp 1s ease-out 1.6s both',
            }}
          >
            {[
              { n: '500+', l: 'Installs' },
              { n: '15yr', l: 'Experience' },
              { n: '100%', l: 'Owner on-site' },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="font-heading"
                  style={{ fontSize: 28, fontWeight: 300, color: '#F5F0E8', lineHeight: 1, marginBottom: 5 }}
                >
                  {n}
                </div>
                <div
                  className="font-body uppercase"
                  style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#C9B99A' }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges — mobile only */}
          <div
            className="flex flex-wrap items-center gap-3 mt-6 md:hidden"
            style={{ animation: 'fadeInUp 1s ease-out 1.8s both' }}
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined" style={{ fontSize: 13, color: '#C9B99A' }}>verified</span>
              <span className="font-body uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.45)' }}>Licensed</span>
            </div>
            <div style={{ width: 1, height: 12, background: 'rgba(245,240,232,0.15)', flexShrink: 0 }} />
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined" style={{ fontSize: 13, color: '#C9B99A' }}>shield</span>
              <span className="font-body uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.45)' }}>Insured</span>
            </div>
          </div>

        </div>

        {/* ── Right panel: photography — desktop only ── */}
        <div className="relative overflow-hidden hidden md:block">
          <div
            className="absolute inset-y-0 left-0 origin-top z-10"
            style={{
              width: 1,
              background: 'rgba(245,240,232,0.12)',
              animation: 'lineGrow 1.2s ease-out 0.4s both',
            }}
          />
          <img
            src="/images/AdobeStock_166031167.jpeg"
            alt="Lush irrigated lawn"
            className="hero-v1-photo"
          />
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #1C3118 0%, rgba(28,49,24,0.28) 30%, rgba(28,49,24,0.04) 100%)',
            }}
          />
          {/* Trust badge */}
          <div
            className="absolute z-10"
            style={{
              bottom: 64, right: 52,
              border: '1px solid rgba(245,240,232,0.22)',
              padding: '24px 32px',
              background: 'rgba(28,49,24,0.72)',
              backdropFilter: 'blur(12px)',
              animation: 'fadeInUp 1s ease-out 1.8s both',
            }}
          >
            <div
              className="font-body uppercase mb-2"
              style={{ fontSize: '9px', letterSpacing: '0.25em', color: '#C9B99A' }}
            >
              Licensed &amp; Insured
            </div>
            <div
              className="font-heading"
              style={{ fontSize: 22, fontWeight: 300, color: '#F5F0E8', lineHeight: 1.25 }}
            >
              Gulf Coast<br />Trusted
            </div>
          </div>
        </div>

      </section>

      {/* ─── SECTION 2: Sustainable Mission ─── */}
      <section className="bg-background-light py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 lg:flex-row lg:gap-24">
          {/* Left column — sticky sidebar */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32">
              <span className="font-body text-sm tracking-[0.2em] uppercase text-muted">
                Our Story
              </span>
              <h2 className="mt-4 font-heading text-4xl text-text-main md:text-5xl lg:text-6xl">
                Honest Service,
                <br />
                Every Property
              </h2>
            </div>
          </div>

          {/* Right column — body copy */}
          <div className="lg:w-7/12">
            <p className="font-body text-lg leading-relaxed text-text-main first-letter:float-left first-letter:mr-1 first-letter:text-5xl first-letter:font-heading">
              Simply Irrigation was founded by Fernando Davila with a simple
              belief: every property deserves the same care and attention as his
              own. Based in Bradenton, Florida, we bring honest, reliable
              irrigation services to homeowners and businesses throughout the
              Gulf Coast.
            </p>

            <p className="mt-8 font-body text-lg leading-relaxed text-text-main">
              From complete system installations to emergency repairs, our
              hands-on approach means the owner is on every job. We don&apos;t
              cut corners, we don&apos;t overcharge, and we stand behind every
              project we complete. That&apos;s the Simply Irrigation difference.
            </p>

            <blockquote className="mt-12 border-l border-muted pl-8">
              <p className="font-heading text-2xl leading-relaxed text-text-main">
                &ldquo;We treat every yard like it&apos;s our own. That&apos;s
                not a slogan&nbsp;&mdash; it&apos;s how we built this
                business.&rdquo;
              </p>
              <cite className="mt-4 block font-body text-sm not-italic tracking-wide text-muted">
                — Fernando Davila, Owner
              </cite>
            </blockquote>

            <div className="mt-12">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 font-body text-sm tracking-[0.15em] uppercase text-primary transition-colors duration-300 hover:text-accent"
              >
                Learn About Our Solutions
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="relative">
        {/* Top wave — cream flowing into green */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative -mb-px block w-full"
          style={{ height: "40px" }}
        >
          <path
            d="M0,60 L0,25 Q180,0 360,20 T720,15 T1080,25 T1440,18 L1440,60 Z"
            fill="#2C4027"
          />
        </svg>

        {/* Green band */}
        <div className="relative overflow-hidden bg-primary py-14">
          {/* Diagonal accent stripes */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(244,241,235,1) 40px, rgba(244,241,235,1) 41px)",
            }}
          />
          <div className="relative z-10 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-background-light/30 md:w-40" />
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rotate-45 bg-background-light/50" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-background-light/60">
                Simply Irrigation
              </span>
              <div className="h-1.5 w-1.5 rotate-45 bg-background-light/50" />
            </div>
            <div className="h-px w-24 bg-background-light/30 md:w-40" />
          </div>
        </div>

        {/* Bottom wave — green flowing into cream */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative -mt-px block w-full"
          style={{ height: "40px" }}
        >
          <path
            d="M0,0 L0,35 Q240,60 480,38 T960,42 T1440,35 L1440,0 Z"
            fill="#2C4027"
          />
        </svg>
      </div>

      {/* ─── SECTION 3: Solutions ─── */}
      <section id="solutions" className="border-b border-primary/30 px-8 pb-24 pt-32 md:px-16 lg:px-24">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-10 bg-primary/40" />
          <span className="font-body text-xs uppercase tracking-[0.15em] text-muted">
            Our Solutions
          </span>
        </div>
        <h2 className="mb-8 font-heading text-5xl leading-[1.05] text-primary md:text-7xl lg:text-[96px]">
          Professional Irrigation Services
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          From new installations to emergency repairs, Simply Irrigation
          delivers expert service for every property in Bradenton, Sarasota,
          and the Gulf Coast.
        </p>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          className="flex flex-col border-b border-primary/30 md:flex-row"
        >
          {/* Left sidebar */}
          <div className="flex flex-col justify-center border-r border-primary/30 p-8 md:w-[30%] md:p-16">
            <span className="material-symbols-outlined mb-6 text-[48px] text-primary">
              {service.icon}
            </span>
            <h2 className="mb-4 font-heading text-3xl text-primary md:text-4xl">
              {service.title}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <Link
              href="#solutions"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-primary transition-colors duration-200 hover:text-accent"
            >
              View Details
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right content */}
          <div className="p-8 md:w-[70%] md:p-16">
            {/* Image with decorative frame */}
            {index === 0 ? (
              /* ── Water/Flow frame ── double border + pipe elbow corners + droplet accents */
              <div className="mb-12 relative">
                {/* Double border — like a pipe cross-section */}
                <div className="absolute -inset-2 border border-primary/12 pointer-events-none" />
                <div className="absolute -inset-3.5 border border-primary/8 pointer-events-none" />
                {/* Pipe elbow corners — top-left & bottom-right */}
                <svg className="absolute -top-[20px] -left-[20px] z-10" width="28" height="28" viewBox="0 0 28 28">
                  <path d="M4,26 L4,8 Q4,4 8,4 L26,4" stroke="#2C4027" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
                </svg>
                <svg className="absolute -bottom-[20px] -right-[20px] z-10" width="28" height="28" viewBox="0 0 28 28">
                  <path d="M24,2 L24,20 Q24,24 20,24 L2,24" stroke="#2C4027" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
                </svg>
                {/* Droplet accents — scattered along top edge */}
                <div className="absolute -top-[5px] left-[18%] z-10 h-1.5 w-1 rounded-full bg-primary/15" />
                <div className="absolute -top-[5px] left-[22%] z-10 h-1 w-1 rounded-full bg-primary/10" />
                <div className="absolute -top-[5px] left-[26%] z-10 h-1.5 w-1 rounded-full bg-primary/15" />
                <div className="relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="aspect-video w-full object-cover sepia-[0.2] contrast-[1.1]" />
                </div>
              </div>
            ) : index === 1 ? (
              /* ── Technical/Precision frame ── dashed border + crosshairs + measurement ticks */
              <div className="mb-12 relative">
                {/* Dashed outer border */}
                <div className="absolute -inset-2.5 border border-dashed border-primary/15 pointer-events-none" />
                {/* Corner crosshairs */}
                {[
                  '-top-[18px] -left-[18px]',
                  '-top-[18px] -right-[18px]',
                  '-bottom-[18px] -left-[18px]',
                  '-bottom-[18px] -right-[18px]',
                ].map((pos) => (
                  <svg key={pos} className={`absolute ${pos} z-10`} width="14" height="14" viewBox="0 0 14 14">
                    <line x1="7" y1="0" x2="7" y2="14" stroke="#2C4027" strokeWidth="0.8" opacity="0.3" />
                    <line x1="0" y1="7" x2="14" y2="7" stroke="#2C4027" strokeWidth="0.8" opacity="0.3" />
                  </svg>
                ))}
                {/* Left measurement tick */}
                <svg className="absolute top-1/2 -left-3 -translate-y-1/2 z-10" width="6" height="16" viewBox="0 0 6 16">
                  <line x1="3" y1="0" x2="3" y2="16" stroke="#2C4027" strokeWidth="0.6" opacity="0.2" />
                  <line x1="0" y1="0" x2="6" y2="0" stroke="#2C4027" strokeWidth="0.6" opacity="0.2" />
                  <line x1="0" y1="16" x2="6" y2="16" stroke="#2C4027" strokeWidth="0.6" opacity="0.2" />
                </svg>
                {/* Right measurement tick */}
                <svg className="absolute top-1/2 -right-3 -translate-y-1/2 z-10" width="6" height="16" viewBox="0 0 6 16">
                  <line x1="3" y1="0" x2="3" y2="16" stroke="#2C4027" strokeWidth="0.6" opacity="0.2" />
                  <line x1="0" y1="0" x2="6" y2="0" stroke="#2C4027" strokeWidth="0.6" opacity="0.2" />
                  <line x1="0" y1="16" x2="6" y2="16" stroke="#2C4027" strokeWidth="0.6" opacity="0.2" />
                </svg>
                {/* Small diamond center-top marker */}
                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 z-10 h-1.5 w-1.5 rotate-45 border border-primary/25" />
                <div className="relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="aspect-video w-full object-cover sepia-[0.2] contrast-[1.1]" />
                </div>
              </div>
            ) : (
              /* ── Botanical/Organic frame ── leaf accents + asymmetric corners + organic border */
              <div className="mb-12 relative">
                {/* Organic border with asymmetric radii */}
                <div className="absolute -inset-1.5 border border-primary/10 rounded-[4px_20px_4px_20px] pointer-events-none" />
                {/* Top-left leaf/vine accent */}
                <svg className="absolute -top-5 -left-5 z-10 opacity-20" width="44" height="44" viewBox="0 0 44 44">
                  <path d="M8,40 C8,18 18,8 40,8" stroke="#2C4027" strokeWidth="1.2" fill="none" />
                  <path d="M22,22 C26,14 34,10 40,8" stroke="#2C4027" strokeWidth="0.8" fill="none" />
                  <path d="M8,40 C14,32 18,24 22,22" stroke="#2C4027" strokeWidth="0.8" fill="none" />
                  <ellipse cx="34" cy="10" rx="5" ry="2.5" transform="rotate(-35 34 10)" fill="#2C4027" opacity="0.4" />
                </svg>
                {/* Bottom-right leaf/vine accent */}
                <svg className="absolute -bottom-5 -right-5 z-10 opacity-20" width="44" height="44" viewBox="0 0 44 44">
                  <path d="M36,4 C36,26 26,36 4,36" stroke="#2C4027" strokeWidth="1.2" fill="none" />
                  <path d="M22,22 C18,30 10,34 4,36" stroke="#2C4027" strokeWidth="0.8" fill="none" />
                  <path d="M36,4 C30,12 26,20 22,22" stroke="#2C4027" strokeWidth="0.8" fill="none" />
                  <ellipse cx="10" cy="34" rx="5" ry="2.5" transform="rotate(145 10 34)" fill="#2C4027" opacity="0.4" />
                </svg>
                {/* Small seed dots along top-right edge */}
                <div className="absolute -top-0.5 right-[15%] z-10 h-1 w-1 rounded-full bg-primary/15" />
                <div className="absolute -top-0.5 right-[20%] z-10 h-0.5 w-0.5 rounded-full bg-primary/10" />
                <div className="absolute -top-0.5 right-[25%] z-10 h-1 w-1 rounded-full bg-primary/15" />
                <div className="relative overflow-hidden rounded-[2px_14px_2px_14px]">
                  <img src={service.image} alt={service.title} className="aspect-video w-full object-cover sepia-[0.2] contrast-[1.1]" />
                </div>
              </div>
            )}

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              {service.features.map((feature) => (
                <div key={feature.name}>
                  <h3 className="mb-2 font-heading text-lg text-primary">
                    {feature.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── SECTION 4: Why Choose Us Interstitial ─── */}
      <section className="relative flex h-[614px] items-center justify-center overflow-hidden">
        <img
          src="/images/AdobeStock_166031167.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover sepia-[0.2] contrast-[1.1]"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(44, 64, 39, 0.7)" }}
        />
        <div
          className="relative z-10 mx-4 max-w-2xl border border-muted p-12 text-center"
          style={{
            backgroundColor: "rgba(244, 241, 235, 0.9)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-muted" />
            <span className="font-body text-xs uppercase tracking-[0.15em] text-muted">
              Why Choose Us
            </span>
            <div className="h-px w-10 bg-muted" />
          </div>
          <h2 className="mb-6 font-heading text-4xl text-primary md:text-5xl">
            Your Local Irrigation Experts
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">
            Licensed and insured, owner-operated, and committed to honest
            service. Simply Irrigation has been the trusted choice for
            Bradenton and Sarasota homeowners who want it done right.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.05em] text-background-light transition-opacity duration-200 hover:opacity-90"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}

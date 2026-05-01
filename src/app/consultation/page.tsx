"use client";

import { useState, FormEvent, useEffect } from "react";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ─── Full-bleed background image ─── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/AdobeStock_383312941.jpeg')",
          animation: "kenBurns 25s ease-in-out infinite alternate",
        }}
      />

      {/* ─── Warm gradient overlay ─── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(44,64,39,0.92) 0%, rgba(30,58,64,0.85) 40%, rgba(44,64,39,0.75) 100%)",
        }}
      />

      {/* ─── Decorative grain texture ─── */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── Geometric accent lines ─── */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/[0.07]" style={{ left: "8%" }} />
      <div className="absolute left-0 top-0 h-full w-px bg-white/[0.05]" style={{ left: "50%" }} />
      <div className="absolute left-0 top-0 h-full w-px bg-white/[0.07]" style={{ left: "92%" }} />

      {/* ─── Content layer ─── */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row lg:items-stretch">
        {/* ─── LEFT: Editorial content ─── */}
        <div className="flex flex-col justify-between px-8 pb-8 pt-28 lg:w-[45%] lg:px-16 lg:pb-12 lg:pt-36 xl:px-20">
          {/* Top content */}
          <div>
            <div
              className="mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-px bg-white/40"
                  style={{
                    width: mounted ? "40px" : "0px",
                    transition: "width 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
                  }}
                />
                <span className="font-body text-xs uppercase tracking-[0.3em] text-white/80">
                  Free Consultation
                </span>
              </div>
            </div>

            <h1
              className="font-heading text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
              }}
            >
              Let&rsquo;s Bring
              <br />
              Your Lawn
              <br />
              <span className="italic text-white/80">to Life</span>
            </h1>

            <p
              className="mt-8 max-w-sm font-body text-base leading-relaxed text-white/70 lg:text-lg"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.7s",
              }}
            >
              Owner-operated and locally trusted in Bradenton.
              Tell us about your project — we&rsquo;ll respond within 24 hours.
            </p>
          </div>

          {/* Trust signals — desktop only */}
          <div
            className="mt-16 hidden lg:block"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1.2s",
            }}
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-white/50">
                  verified
                </span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-white/50">
                  Licensed &amp; Insured
                </span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-white/50">
                  handshake
                </span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-white/50">
                  Free Estimates
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-white/[0.12] pt-6">
              <div className="flex h-12 w-12 items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-[22px] text-white/60">
                  phone_in_talk
                </span>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Prefer to talk?
                </p>
                <a
                  href="tel:9415382593"
                  className="font-heading text-xl text-white/90 transition-colors duration-300 hover:text-white"
                >
                  941-538-2593
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Form card ─── */}
        <div className="flex items-center justify-center px-6 pb-12 pt-4 lg:w-[55%] lg:px-12 lg:pb-10 lg:pt-14 xl:px-20">
          <div
            className="w-full max-w-lg"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
            }}
          >
            <div
              className="border border-white/[0.15] p-8 sm:p-10 lg:p-10"
              style={{
                background: "rgba(20, 33, 17, 0.55)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
              }}
            >
              {!submitted ? (
                <>
                  <div className="mb-7">
                    <h2 className="font-heading text-3xl text-white lg:text-4xl">
                      Get a Free Quote
                    </h2>
                    <p className="mt-3 font-body text-sm leading-relaxed text-white/60">
                      No obligation. No pressure. Just honest service.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name"
                        className="consultation-input"
                      />
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last Name"
                        className="consultation-input"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="consultation-input"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="consultation-input"
                    />

                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="consultation-input min-h-[100px] resize-none"
                    />

                    <button
                      type="submit"
                      className="group mt-2 flex w-full items-center justify-center gap-3 bg-white/[0.20] px-8 py-4 font-body text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-white hover:text-primary"
                    >
                      Request Free Quote
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                        east
                      </span>
                    </button>
                  </form>

                  {/* Mobile: call + trust */}
                  <div className="mt-8 border-t border-white/[0.08] pt-6 lg:hidden">
                    <div className="flex items-center justify-between">
                      <a
                        href="tel:9415382593"
                        className="flex items-center gap-2 font-body text-sm text-white/50 transition-colors duration-300 hover:text-white"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          phone
                        </span>
                        941-538-2593
                      </a>
                      <span className="font-body text-xs text-white/25">
                        Licensed &amp; Insured
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 font-body text-[11px] leading-relaxed text-white/20">
                    By submitting this form, you agree to our privacy policy.
                    Your information is kept strictly confidential.
                  </p>
                </>
              ) : (
                /* ─── Success state ─── */
                <div className="flex min-h-[400px] flex-col items-center justify-center py-8 text-center">
                  <div
                    className="mb-8 flex h-20 w-20 items-center justify-center border border-white/10"
                    style={{
                      animation: "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                    }}
                  >
                    <span className="material-symbols-outlined text-[36px] text-white/70">
                      check
                    </span>
                  </div>

                  <h2
                    className="font-heading text-4xl text-white"
                    style={{
                      animation: "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both",
                    }}
                  >
                    Thank You
                  </h2>

                  <p
                    className="mt-6 max-w-xs font-body text-base leading-relaxed text-white/50"
                    style={{
                      animation: "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
                    }}
                  >
                    We&rsquo;ve received your request. Expect to hear from us
                    within 24 hours.
                  </p>

                  <div
                    className="mt-10 flex flex-col items-center gap-4"
                    style={{
                      animation: "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both",
                    }}
                  >
                    <a
                      href="tel:9415382593"
                      className="group flex items-center gap-3 bg-white/[0.08] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:bg-white/[0.15] hover:text-white"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        phone
                      </span>
                      Call Now: 941-538-2593
                    </a>
                    <a
                      href="/"
                      className="font-body text-xs uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 hover:text-white/60"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

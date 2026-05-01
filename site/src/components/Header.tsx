'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Consultation', href: '/consultation' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-[52px]"
        style={{
          height: '72px',
          background: '#1C3118',
          borderBottom: '1px solid rgba(245,240,232,0.08)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4" aria-label="Simply Irrigation LLC — Home">
          <img
            src="/images/logo.png"
            alt="Simply Irrigation LLC"
            style={{ height: '46px', width: 'auto' }}
          />
          <div className="block md:hidden" style={{ width: 1, height: 28, background: 'rgba(245,240,232,0.15)', flexShrink: 0 }} aria-hidden="true" />
          <span
            className="font-body block md:hidden"
            style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', lineHeight: 1.7 }}
          >
            Bradenton, Florida<br />· Est. 2018
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body uppercase transition-colors duration-200 hover:opacity-100"
              style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.55)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/consultation"
            className="font-body uppercase transition-opacity duration-200 hover:opacity-80"
            style={{
              fontSize: '10px',
              letterSpacing: '0.18em',
              background: '#F5F0E8',
              color: '#1C3118',
              padding: '8px 18px',
            }}
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center md:hidden"
          style={{ color: '#F5F0E8' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{ background: '#1C3118' }}
        >
          <div style={{ height: '72px' }} />
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl uppercase tracking-[0.1em]"
                style={{ color: '#F5F0E8' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 font-body text-sm uppercase tracking-[0.15em]"
              style={{ background: '#F5F0E8', color: '#1C3118', padding: '14px 40px' }}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

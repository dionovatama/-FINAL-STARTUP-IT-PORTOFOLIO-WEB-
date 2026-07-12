'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Katalog', href: '/katalog' },
  { label: 'Home', href: '/' },
  { label: 'Portofolio', href: '/portofolio' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md shadow-xs border-b border-slate-800/50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16" id="top-navbar">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-bold tracking-tighter text-white cursor-pointer select-none"
          id="brand-logo"
        >
          ARCHITECT.IT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-all duration-200 cursor-pointer ${
                pathname === item.href
                  ? 'text-indigo-400 border-b-2 border-indigo-400 pb-1'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/katalog"
            className="text-sm font-sans text-gray-300 hover:opacity-80 transition-opacity active:scale-95 duration-200"
            id="btn-sign-in"
          >
            Konsultasi
          </Link>
          <Link
            href="/katalog"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-95 transition-all active:scale-95 cursor-pointer shadow-xs inline-flex items-center gap-1"
            id="btn-get-started"
          >
            Get Started <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-gray-200 hover:text-white p-1 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          id="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all absolute top-16 w-full left-0 py-6 px-6 shadow-lg z-50">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left text-base font-semibold py-2 transition-all ${
                  pathname === item.href
                    ? 'text-indigo-400 pl-2 border-l-4 border-indigo-400'
                    : 'text-gray-300 pl-2'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <hr className="border-slate-800 my-2" />

            <div className="flex flex-col gap-3">
              <Link
                href="/katalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-sm font-medium text-gray-300 py-3 rounded-lg border border-slate-800"
              >
                Konsultasi WhatsApp
              </Link>
              <Link
                href="/katalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-sm font-semibold text-white bg-indigo-600 py-3 rounded-lg shadow-sm"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
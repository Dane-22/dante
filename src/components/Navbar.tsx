'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from './MagneticButton';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '/#projects' },
    { label: 'Design', href: '/showroom' },
    { label: 'Stack', href: '/#skills' },
    { label: 'Credentials', href: '/#credentials' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image 
              src="/profile.jpeg" 
              alt={PROFILE_DATA.name} 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900 leading-none">
              {PROFILE_DATA.name}
            </span>
            <span className="text-[11px] font-mono text-slate-500 tracking-tight mt-0.5">
              Developer & Designer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/70 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-xs transition-all duration-150 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA and Availability Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-[12px] font-mono text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire</span>
          </div>

          <MagneticButton
            href={`mailto:${PROFILE_DATA.socials.email}?subject=Project%20Inquiry%20from%20Portfolio`}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm hover:shadow-indigo-500/20 transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-xs font-mono text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Q3/Q4 Projects
            </div>
            <a
              href={`mailto:${PROFILE_DATA.socials.email}`}
              className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact via Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

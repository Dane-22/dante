'use client';

import React, { useState } from 'react';
import MagneticButton from './MagneticButton';
import { ArrowUp, Copy, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '@/data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full mt-16 border-t border-slate-200/80 bg-white/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Contact Banner Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden shadow-md">
          {/* Subtle background ambient mesh */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider">
                Start a Conversation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Have a product, mobile app, or visual campaign in mind?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Currently open for select frontend, mobile, and graphic design opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href={`mailto:${PROFILE_DATA.socials.email}?subject=Project%20Inquiry`}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </MagneticButton>

              <MagneticButton
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {PROFILE_DATA.name}. All rights reserved.</span>
            <span className="text-slate-300">•</span>
            <span>Built with Next.js 16, Tailwind & GSAP</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Mail, 
  Download, 
  Award,
  Sparkles,
  Terminal,
  Cpu,
  Smartphone,
  Layers,
  Palette
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE_DATA } from '@/data/portfolioData';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Client-only mounting for the live clock to prevent Next.js hydration mismatch
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(formatted);
    };

    const initialTimer = window.setTimeout(updateClock, 0);
    const timer = setInterval(updateClock, 1000);
    return () => {
      window.clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="w-full pt-6 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Hero Card (col-span-8) */}
        <SpotlightCard className="lg:col-span-8 p-7 sm:p-9 flex flex-col justify-between border-slate-200/90 bento-card">
          <div className="space-y-6">
            {/* Top row: Status & Capabilities Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-medium text-emerald-800 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PROFILE_DATA.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-mono font-medium text-indigo-700">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Development & Graphic Design</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Building digital products and <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-4">visual stories</span> that connect.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                I blend web and mobile engineering with graphic design to create responsive products, campaign visuals, and memorable digital experiences.
              </p>
            </div>

            {/* Quick Capability Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                { label: 'Next.js App Router', icon: Layers },
                { label: 'React Native & Mobile', icon: Smartphone },
                { label: 'Distributed APIs', icon: Cpu },
                { label: 'High-Performance UI', icon: Terminal },
                { label: 'Graphic Design', icon: Palette },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200/80 text-xs font-mono text-slate-700"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar: CTAs and Metrics */}
          <div className="mt-8 pt-7 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#projects"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-sm hover:shadow-indigo-500/25 transition-all duration-200 flex items-center gap-2"
              >
                <span>View Flagship Projects</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href="/showroom"
                className="px-4 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Palette className="w-4 h-4" />
                <span>Design Showroom</span>
              </MagneticButton>

              <MagneticButton
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-mono text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </MagneticButton>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 text-slate-500 text-xs font-mono">
              <div>
                <span className="block text-base font-bold text-slate-900">{PROFILE_DATA.experienceYears}</span>
                <span className="text-slate-500">Exp. in Production</span>
              </div>
              <div className="h-7 w-[1px] bg-slate-200" />
              <div>
                <span className="block text-base font-bold text-slate-900">{PROFILE_DATA.completedProjects}</span>
                <span className="text-slate-500">Shipped Projects</span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Right Profile & Location Card (col-span-4) */}
        <SpotlightCard className="lg:col-span-4 p-7 flex flex-col justify-between border-slate-200/90 bento-card">
          <div className="space-y-6">
            {/* Profile Avatar / Editorial Monogram Visual */}
            <div className="flex items-start justify-between">
              <div className="relative group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-slate-900 p-0.5 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-white">
                    <Image 
                      src="/profile.jpeg" 
                      alt={PROFILE_DATA.name} 
                      fill 
                      className="object-cover" 
                      priority 
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs" title="Online" />
              </div>

              {/* Verified Pill */}
              <div className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Senior Dev
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-1.5">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {PROFILE_DATA.name}
              </h2>
              <p className="text-xs font-mono text-indigo-600 font-medium">
                {PROFILE_DATA.role}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Based in the Philippines, working with international engineering teams across US, EU, and APAC timezones.
              </p>
            </div>

            {/* Live Clock & Location Pill (Client-Only Safe Mounting) */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="font-medium text-slate-800">{PROFILE_DATA.location}</span>
                <span className="text-slate-400 font-mono text-[11px]">UTC+8</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Local Time</span>
                </div>
                <span className="font-mono font-medium text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                  {currentTime || 'Loading...'}
                </span>
              </div>
            </div>
            
            {/* Resume & Certificates Buttons */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <MagneticButton
                href="/resume.pdf"
                target="_blank"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors flex justify-center items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </MagneticButton>
              <MagneticButton
                href="/certificates.pdf"
                target="_blank"
                className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-medium transition-colors flex justify-center items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-slate-400" />
                <span>Certificates</span>
              </MagneticButton>
            </div>
          </div>

          {/* Social Links & Quick Contact Trigger */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 flex items-center justify-center transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              className="text-xs font-mono font-medium text-indigo-600 hover:text-indigo-700 hover:underline flex items-center gap-1"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

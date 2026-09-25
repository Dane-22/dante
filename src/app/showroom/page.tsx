import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Palette, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ShowroomGallery from '@/components/ShowroomGallery';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Graphic Design Showroom | Daniel Rillera',
  description: 'A curated collection of campaign graphics, service promotions, and visual storytelling created by Daniel Rillera.',
  openGraph: {
    title: 'Graphic Design Showroom | Daniel Rillera',
    description: 'Selected campaign design and visual storytelling for Elevate Digital Solutions.',
    type: 'website',
  },
};

export default function ShowroomPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
        <div aria-hidden="true" className="bg-grid-slate pointer-events-none fixed inset-0 z-0 opacity-60" />
        <div aria-hidden="true" className="pointer-events-none fixed -right-40 -top-40 z-0 h-[600px] w-[600px] rounded-full bg-amber-100/50 blur-[130px]" />
        <div aria-hidden="true" className="pointer-events-none fixed -left-40 top-1/2 z-0 h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-[120px]" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to portfolio
              </Link>

              <div className="mt-10 grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-mono font-semibold text-amber-800">
                    <Palette className="h-3.5 w-3.5" aria-hidden="true" />
                    Visual Design Showroom
                  </div>
                  <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                    Ideas made visible.
                    <span className="block text-indigo-600">Stories made memorable.</span>
                  </h1>
                </div>
                <div className="space-y-4">
                  <Sparkles className="h-6 w-6 text-amber-500" aria-hidden="true" />
                  <p className="text-base leading-7 text-slate-600">
                    A curated selection of campaign design, digital service promotion, and brand storytelling for Elevate Digital Solutions.
                  </p>
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
                    24 selected works / 1 client collection
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <ShowroomGallery />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

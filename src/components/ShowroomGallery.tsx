'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { Expand, X } from 'lucide-react';
import { GRAPHIC_DESIGNS } from '@/data/portfolioData';
import type { DesignCategory, GraphicDesign } from '@/types/portfolio';

const categories: Array<'All' | DesignCategory> = [
  'All',
  'Campaign Design',
  'Web & Services',
  'Automation & AI',
  'Marketing Strategy',
  'Brand Storytelling',
];

export default function ShowroomGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [selectedDesign, setSelectedDesign] = useState<GraphicDesign | null>(null);

  const visibleDesigns = useMemo(
    () => activeCategory === 'All'
      ? GRAPHIC_DESIGNS
      : GRAPHIC_DESIGNS.filter((design) => design.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (!selectedDesign) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedDesign(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDesign]);

  return (
    <>
      <div className="flex flex-wrap gap-2" aria-label="Filter designs by category">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                active
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-slate-500" aria-live="polite">
        Showing {visibleDesigns.length} {visibleDesigns.length === 1 ? 'design' : 'designs'}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleDesigns.map((design, index) => (
          <article
            key={design.id}
            className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <button
              type="button"
              onClick={() => setSelectedDesign(design)}
              className="relative block aspect-square w-full overflow-hidden bg-slate-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
              aria-label={`Open ${design.title}`}
            >
              <Image
                src={design.image}
                alt={design.alt}
                fill
                priority={index < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-white opacity-0 shadow-lg backdrop-blur-sm transition group-hover:opacity-100 group-focus-within:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>

            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-bold tracking-tight text-slate-950">{design.title}</h2>
                  <p className="mt-1 text-xs font-mono text-indigo-600">{design.category}</p>
                </div>
                <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-mono text-slate-500">
                  {design.sourceFile}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-600">{design.description}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedDesign && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="showroom-dialog-title"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedDesign(null);
          }}
        >
          <div className="relative grid max-h-[92vh] w-full max-w-6xl overflow-auto rounded-3xl bg-white shadow-2xl lg:grid-cols-[minmax(0,1fr)_22rem]">
            <button
              type="button"
              onClick={() => setSelectedDesign(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white shadow-lg backdrop-blur transition hover:bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close design viewer"
              autoFocus
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-square min-h-0 bg-slate-100">
              <Image
                src={selectedDesign.image}
                alt={selectedDesign.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-end p-7 sm:p-9">
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-indigo-600">
                {selectedDesign.category}
              </p>
              <h2 id="showroom-dialog-title" className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
                {selectedDesign.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500">{selectedDesign.client}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{selectedDesign.description}</p>
              <p className="mt-8 border-t border-slate-200 pt-5 text-xs font-mono text-slate-400">
                Selected from source artwork {selectedDesign.sourceFile}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

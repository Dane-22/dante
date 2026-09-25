import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Palette } from 'lucide-react';
import { GRAPHIC_DESIGNS } from '@/data/portfolioData';

const previewDesigns = GRAPHIC_DESIGNS.filter((design) => design.featured).slice(0, 3);

export default function ShowroomPreview() {
  return (
    <section id="design" className="space-y-6 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-mono font-medium text-amber-800">
            <Palette className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Graphic Design</span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Visual systems built to communicate
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600 sm:text-base">
            Campaign graphics, service promotions, and brand storytelling created for Elevate Digital Solutions.
          </p>
        </div>
        <Link
          href="/showroom"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Explore the showroom
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {previewDesigns.map((design) => (
          <Link
            key={design.id}
            href="/showroom"
            className="group relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            aria-label={`View ${design.title} in the graphic design showroom`}
          >
            <Image
              src={design.image}
              alt={design.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white">
              {design.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

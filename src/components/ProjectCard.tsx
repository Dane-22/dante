'use client';

import Image from 'next/image';
import { ArrowUpRight, ExternalLink, ImageIcon, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import SpotlightCard from './SpotlightCard';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  isFlagship?: boolean;
}

export default function ProjectCard({ project, isFlagship = false }: ProjectCardProps) {
  const hasPreview = Boolean(project.previewImage);

  return (
    <article className="bento-card h-full">
      <SpotlightCard
        className={`group h-full overflow-hidden border-slate-200/90 p-0 ${
          isFlagship ? 'ring-1 ring-indigo-500/10' : ''
        }`}
      >
        <div className={isFlagship ? 'grid h-full lg:grid-cols-[1.35fr_1fr]' : 'flex h-full flex-col'}>
          <div
            className={`relative overflow-hidden bg-slate-100 ${
              isFlagship ? 'min-h-[320px] lg:min-h-[430px]' : 'aspect-[16/10]'
            }`}
          >
            {hasPreview ? (
              <Image
                src={project.previewImage!}
                alt={project.previewAlt || `${project.title} interface preview`}
                fill
                priority={isFlagship}
                unoptimized
                sizes={isFlagship
                  ? '(max-width: 1024px) 100vw, 58vw'
                  : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col justify-between bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_46%),linear-gradient(135deg,#f8fafc,#eef2ff)] p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-slate-500 backdrop-blur">
                    <ImageIcon className="h-3 w-3" aria-hidden="true" />
                    Preview pending
                  </span>
                  <span className="font-mono text-xs text-slate-400">{project.id}</span>
                </div>

                <div>
                  <p className="max-w-xs text-2xl font-black tracking-tight text-slate-800">
                    Authentic project preview being prepared.
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    No fictional interface is being used in place of the real work.
                  </p>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none" />
          </div>

          <div className={`flex flex-1 flex-col justify-between ${isFlagship ? 'p-7 sm:p-9' : 'p-6'}`}>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-mono font-medium text-indigo-700">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wide text-amber-700">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    Featured
                  </span>
                )}
                <span className={`ml-auto inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wide ${hasPreview ? 'text-emerald-600' : 'text-slate-400'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${hasPreview ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                  {hasPreview ? 'Verified preview' : 'Preview review'}
                </span>
              </div>

              <div className={isFlagship ? 'mt-8' : 'mt-5'}>
                {isFlagship && (
                  <p className="mb-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-indigo-500">
                    Featured workforce platform
                  </p>
                )}
                <h3 className={`${isFlagship ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'} font-extrabold tracking-tight text-slate-950`}>
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-mono font-medium text-indigo-600">
                  {project.subtitle}
                </p>
                <p className={`text-slate-600 ${isFlagship ? 'mt-5 text-base leading-7' : 'mt-3 text-sm leading-6'}`}>
                  {project.description}
                </p>
              </div>

              <div className={`${isFlagship ? 'mt-7' : 'mt-5'} flex flex-wrap gap-2`} aria-label={`${project.title} technologies`}>
                {project.technologies.slice(0, isFlagship ? 5 : 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-mono text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${isFlagship ? 'mt-10' : 'mt-7'} flex items-center justify-between gap-3 border-t border-slate-100 pt-5`}>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                Case study in preparation
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {project.liveStatus === 'unavailable' ? (
                <span className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-400">
                  Site unavailable
                </span>
              ) : (
                <MagneticButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  <span>{project.liveStatus === 'review' ? 'Review live site' : 'Live project'}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </MagneticButton>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </article>
  );
}

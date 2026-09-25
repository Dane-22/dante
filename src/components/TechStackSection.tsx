'use client';

import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Code, 
  Server, 
  Smartphone, 
  Cloud, 
  Layers, 
  Check,
  Palette
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  design: Palette,
  frontend: Code,
  backend: Server,
  mobile: Smartphone,
  cloud: Cloud,
};

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.slug === activeTab);

  return (
    <section id="skills" className="w-full space-y-6 pt-8 pb-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-medium text-indigo-700 mb-2">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Creative & Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Design craft meets engineering rigor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
            A multidisciplinary toolkit spanning visual communication, responsive web products, distributed systems, and mobile experiences.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Clusters
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActiveTab(cat.slug)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === cat.slug
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.slug] || Layers;

          return (
            <div key={category.slug} className="bento-card">
              <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between border-slate-200/90">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500">
                          {category.skills.length} core competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag List */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-indigo-200 hover:shadow-xs transition-all duration-150"
                      >
                        <span className="text-xs font-mono font-medium text-slate-800 group-hover/skill:text-indigo-600">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-200/70 group-hover/skill:bg-indigo-50 group-hover/skill:text-indigo-700 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                    Production Verified
                  </span>
                  <span>Light Mode Optimized</span>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

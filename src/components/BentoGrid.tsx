import HeroSection from './HeroSection';
import ProjectCard from './ProjectCard';
import TechStackSection from './TechStackSection';
import CertificatesSection from './CertificatesSection';
import ShowroomPreview from './ShowroomPreview';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function BentoGrid() {
  const flagshipProject = PROJECTS_DATA.find((project) => project.id === 'attendance-monitoring-system') || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => p.id !== flagshipProject.id);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Bento Grid Item 1: Hero & Profile */}
      <HeroSection />

      {/* Bento Grid Item 2: Projects Showcase */}
      <section id="projects" className="w-full space-y-6 pt-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-medium text-indigo-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Selected Digital Products
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              Real project previews, direct live links, and case studies being prepared with verified product context.
            </p>
          </div>
        </div>

        {/* Bento Projects Layout */}
        <div className="space-y-5">
          {/* Flagship Project (Full Width Bento Card) */}
          <div className="w-full">
            <ProjectCard project={flagshipProject} isFlagship={true} />
          </div>

          {/* Secondary Projects Grid (2 or 3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ShowroomPreview />

      {/* Bento Grid Item 3: Tech Stack */}
      <TechStackSection />

      {/* Bento Grid Item 4: Certifications & Credentials */}
      <CertificatesSection />
    </div>
  );
}

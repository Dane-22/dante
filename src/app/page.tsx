import Navbar from '@/components/Navbar';
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white relative">
        {/* Subtle decorative editorial background grids */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 bg-grid-slate opacity-60"
        />

        {/* Ambient subtle light-mode radial accents */}
        <div
          aria-hidden="true"
          className="fixed -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[130px] pointer-events-none z-0"
        />
        <div
          aria-hidden="true"
          className="fixed top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-slate-200/40 blur-[120px] pointer-events-none z-0"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1 w-full pt-4 pb-12">
            <BentoGrid />
          </main>

          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

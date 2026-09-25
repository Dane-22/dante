'use client';

import React from 'react';
import SpotlightCard from './SpotlightCard';
import { CERTIFICATES_DATA } from '@/data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificatesSection() {
  return (
    <section id="credentials" className="w-full space-y-6 pt-8 pb-4">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-medium text-indigo-700 mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
          <span>Verified Competencies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Certifications & Professional Credentials
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
          Industry-recognized certifications validating cloud architecture, full-stack application development, and data modeling standards.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CERTIFICATES_DATA.map((cert) => (
          <div key={cert.id} className="bento-card">
            <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between border-slate-200/90">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium text-slate-600">
                          {cert.issuer}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-mono text-slate-500">
                          Issued {cert.issueDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors shrink-0"
                    title="Verify Credential"
                    aria-label={`Verify ${cert.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential ID and Link Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ID: {cert.credentialId}</span>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium flex items-center gap-1"
                >
                  <span>Verify Record</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
}

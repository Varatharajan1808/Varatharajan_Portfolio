import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const [tab, setTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Header & Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
            // Career & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
        </div>

        {/* Toggle tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setTab('work')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              tab === 'work'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setTab('education')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              tab === 'education'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
        </div>
      </div>

      {tab === 'work' ? (
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                    {exp.role}
                    {idx === 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-semibold">
                        Present
                      </span>
                    )}
                  </h3>
                  <div className="text-cyan-400 font-medium text-sm mt-0.5 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5 pt-2">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {edu.degree}
                </h3>
                <div className="text-xs text-cyan-400 font-medium mt-1">
                  {edu.institution}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {edu.detail}
                </p>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

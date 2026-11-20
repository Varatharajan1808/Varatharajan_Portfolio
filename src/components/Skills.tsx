import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="mb-12">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
          // Technical Stack & Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills & Specialized Competencies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Core technical abilities across 3D engine architecture, shaders, CAD/BIM systems, and GPU optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {group.category}
                </h3>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/50 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-mono pt-3 border-t border-slate-800/60">
              {group.skills.length} core technologies
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

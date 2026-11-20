import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, ArrowRight, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Background soft ambient gradient glow */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bio & Info (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>3D Engine Developer at Aalai Immersive Tech</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-slate-200">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {PERSONAL_INFO.shortBio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="T_Varatharajan_Resume.pdf"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Refined, Beautifully Proportioned Portrait Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-[240px] sm:max-w-[260px]">
            {/* Ambient backlight glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/30 to-sky-400/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Main Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-2xl">
              <div className="relative h-[250px] sm:h-[280px] overflow-hidden bg-slate-950">
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Smooth bottom gradient overlay to blend into the card base */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* Bottom Card Info Bar */}
              <div className="p-3.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-[11px] text-cyan-400 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                </div>

                <div className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

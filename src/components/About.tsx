import React from 'react';
import { Layers, Cpu, Box } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: About Details (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            // About Me
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Real-Time 3D for the Modern Web
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I build browser-based graphics engines and interactive 3D software using TypeScript, WebGL, and WebGPU. Rather than relying solely on high-level libraries, I focus on the underlying architecture: draw calls, shader mathematics, GPU memory management, and scene graphs.
            </p>
            <p>
              My academic background in <strong className="text-white">Mathematics</strong> provides the foundation for matrix transformations, vector spaces, and computational geometry required for custom shaders and CAD toolsets.
            </p>
            <p>
              At <strong className="text-cyan-400">Aalai Immersive Tech</strong>, I develop WebGPU-based browser CAD and BIM systems with sub-millimeter precision picking and interactive entity modeling.
            </p>
          </div>
        </div>

        {/* Right: 3 Core Technical Pillars (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Low-Level Graphics</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Full control over draw submissions, buffer layouts, and render-loop performance.
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Shader Architecture</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Custom GLSL and WGSL shaders for PBR materials, lighting models, and procedural meshes.
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-2.5 rounded-xl bg-sky-950/60 border border-sky-500/30 text-sky-400 shrink-0 mt-0.5">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-white">CAD & BIM Workflows</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                GPU raycasting, precision coordinate picking, and parametric 3D editing tools.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

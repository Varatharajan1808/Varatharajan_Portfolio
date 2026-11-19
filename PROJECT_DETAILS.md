# Portfolio Project: System Overview & Technical Documentation

## 1. IDENTITY_SUMMARY
**Name:** T Varatharajan
**Role:** 3D_Engine_Developer (WebGL • WebGPU • Graphics Programming • CAD Systems)
**Experience:** 3+ Years in specialized graphics programming and browser-based CAD engines
**Education & Certifications:** 
- Full Stack Web Development Certification (Apr 2023, QSpiders Institute, Chennai)
- MBA in Human Resource Management (Dec 2021 – May 2023, Alagappa University)
- BSc in Mathematics (Jul 2017 – Apr 2020, Kamaraj College)
**Location:** Chennai, Tamil Nadu, India

---

## 2. PROJECT_PHILOSOPHY
This portfolio is built to demonstrate deep technical understanding by avoiding high-level abstractions like React or Vue. It uses a **custom-built component lifecycle system** written in vanilla TypeScript.
Key architectural highlights:
- **Manual State Management:** No third-party state libraries; built from scratch.
- **Component Lifecycle:** Implemented `mount`, `update`, and `unmount` hooks for direct DOM control.
- **Modern Build Engine:** Powered by Vite for high-performance development and bundling.
- **Tailwind CSS 4.0 & PostCSS:** Utilizing the latest CSS engine for high-performance styling.

---

## 3. TECHNICAL_CAPABILITIES (SKILLS)

### GRAPHICS_&_RENDERING
- **APIs:** WebGL, WebGPU
- **Core Systems:** GPU Pipelines, Shaders (GLSL/WGSL), Render Passes, Draw Submission
- **Techniques:** Depth Testing, Framebuffers, Post-Processing, Blinn-Phong, Gamma Correction
- **Knowledge:** MVP Pipeline, Normal Matrix, Forward/Deferred Shading, Resource Lifecycle, GPU Memory Layout

### ENGINE_&_SYSTEMS
- Scene Graph Systems & Transform Hierarchies
- Render Loop & Frame Lifecycle Management
- Resource & Asset Management
- Performance Debugging: FPS Tracking & Draw Call Analysis

### 3D_DATA_&_MATERIALS
- **Formats:** glTF 2.0 (Buffers, Accessors, Node Hierarchies)
- **Shading:** PBR (Physically Based Rendering) Workflow
- **Maps:** Albedo, Normal, AO, Roughness, Texture Baking

### ARCHITECTURE_&_MATH
- **Languages:** TypeScript, JavaScript
- **Mathematics:** Linear Algebra, Computational Geometry, Transformation Math
- **Patterns:** Entity Component System (ECS)

### TOOLS
- Git, GitHub, Blender, VS Code, Chrome DevTools

---

## 4. WORK_HISTORY

### 3D Engine Developer | Aalai Immersive Tech Pvt Ltd — Chennai, Tamil Nadu, India
*MAY 2026 – PRESENT*
- Developing browser-based CAD systems using a custom WebGPU-based rendering engine.
- Implementing CAD entities, geometry processing, and interactive modeling workflows.
- Building reusable rendering components and enhancing WebGPU-based CAD capabilities.

---

### Software Developer (Web-Based 3D Graphics– WebGL/WebGPU) | Hexr Factory Immersive Tech Pvt Ltd
*DEC 2023 – APR 2026*
- Developed a custom WebGL/WebGPU-based rendering engine for browser-based CAD and real-time 3D graphics applications.
- Implemented geometry systems, scene graph architecture, rendering pipelines, and Physically Based Rendering (PBR).
- Developed GLSL/WGSL shader systems, real-time lighting, camera controls, and GPU-optimized rendering techniques.
- Built and optimized GLTF/GLB asset pipelines for efficient real-time rendering.
- Improved rendering performance through efficient buffer management, render-loop optimization, and GPU resource management.
- Collaborated with cross-functional teams to develop scalable engine architecture and ensure cross-browser compatibility.

---

## 5. ACTIVE_PROJECTS

### 1. Vara3D Graphics Engine
- **GitHub:** [Varatharajan1808/Vara3D-Graphics-Engine](https://github.com/Varatharajan1808/Vara3D-Graphics-Engine)
- **Live Demo:** [varatha3deditor.vercel.app](https://varatha3deditor.vercel.app/)
- **Description:** Browser-based 3D graphics engine and visual editor built from scratch using TypeScript and WebGL.
- **Key Features:**
    - Physically Based Rendering (PBR) and GLSL shader systems.
    - Full GLTF 2.0 / GLB asset pipeline.
    - Scene hierarchy, transform gizmos, material editing.
    - Frustum culling, buffer management, GPU resource optimization.
- **Tech Stack:** TypeScript, WebGL, GLSL, glTF 2.0 / GLB.

### 2. LuminaSphere
- **GitHub:** [Varatharajan1808/luminasphere-webgl](https://github.com/Varatharajan1808/luminasphere-webgl)
- **Live Demo:** [luminasphere-webgl.vercel.app](https://luminasphere-webgl.vercel.app/)
- **Description:** Interactive WebGL-based 3D orb showcasing shader-driven vertex displacement, dynamic palettes, and responsive interactions.
- **Tech Stack:** TypeScript, WebGL, GLSL, gl-matrix.

### 3. Portfolio Website
- **GitHub:** [Varatharajan1808/Varatharajan_Portfolio](https://github.com/Varatharajan1808/Varatharajan_Portfolio)
- **Live Demo:** [varatharajanportfolio.vercel.app](https://varatharajanportfolio.vercel.app/)
- **Description:** Personal portfolio built with TypeScript and a custom component architecture with reusable UI components and state management.
- **Tech Stack:** TypeScript, HTML5, CSS3, Vite.

---

## 6. PROJECT_STRUCTURE
```bash
src/
├── core/                   # Kernel: Component system & State 
│   ├── BaseComponent.ts    # Component primitives
│   └── State.ts            # Global state manager
│
├── components/             # UI/View Modules
│   ├── App.ts              # Main orchestrator
│   ├── Navbar.ts           # Navigation logic
│   ├── Hero.ts             # Primary entry view
│   ├── About.ts            # System biography
│   ├── Skills.ts           # Technical competency matrix
│   ├── Experience.ts       # Work history timeline
│   ├── Projects.ts         # Portfolio showcase
│   └── ContactSection.ts   # Communication gateway
│
├── Style/                  # Visual definitions (CSS Modules)
└── assets/                 # Static assets (3D models, textures, videos)
```

---

## 7. SYSTEM_EXECUTION (BUILD & RUN)

**Clone & Initialization:**
```bash
git clone https://github.com/Varatharajan1808/My_Portfolio.git
cd My_Portfolio
npm install
```

**Development Mode:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
```

---

## 8. CONTACT_PROTOCOLS
- **GitHub:** [Varatharajan1808](https://github.com/Varatharajan1808)
- **LinkedIn:** [t-varatharajan](https://www.linkedin.com/in/t-varatharajan)
- **Email:** ciazvanish2000@gmail.com
- **Live Site:** [varatharajanportfolio.vercel.app](https://varatharajanportfolio.vercel.app/)

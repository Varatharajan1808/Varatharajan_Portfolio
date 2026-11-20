export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  videoUrl?: string;
  gallery: ProjectImage[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  points: string[];
}

export const PERSONAL_INFO = {
  name: "T Varatharajan",
  role: "3D Engine Developer",
  tagline: "WebGL · WebGPU · Shaders · CAD & BIM Systems",
  shortBio: "Specialized in engineering custom browser-based rendering engines, WebGPU compute pipelines, and interactive 3D tools from scratch.",
  location: "Chennai, Tamil Nadu, India",
  email: "ciazvanish2000@gmail.com",
  phone: "+91 9659309280",
  whatsapp: "https://wa.me/919659309280",
  linkedin: "https://www.linkedin.com/in/varatharajan3d/",
  github: "https://github.com/Varatharajan1808",
  instagram: "https://instagram.com/",
  resumeUrl: "/assets/resume.pdf",
  profilePhoto: "/assets/varatharajan-profile.jpg",
};

export const PROJECTS: Project[] = [
  {
    id: "vara3d",
    title: "Vara3D — 3D Engine & Visual Editor",
    tagline: "Custom Engine from Scratch · PBR Pipeline · glTF 2.0",
    description: "A full-featured 3D rendering engine and scene editor built without external 3D libraries. Features PBR lighting with multi-light support, hierarchical scene graph, transform gizmos, frustum culling, and end-to-end glTF/GLB import and export.",
    tags: ["TypeScript", "WebGL", "GLSL", "PBR", "glTF 2.0", "Gizmos"],
    liveUrl: "https://varatha3deditor.vercel.app",
    githubUrl: "https://github.com/Varatharajan1808/Vara3D-Graphics-Engine",
    image: "/assets/projects/vara3d-engine.jpg",
    videoUrl: "/assets/projects/ProjectVideo.mp4",
    gallery: [
      {
        src: "/assets/projects/vara3d-engine.jpg",
        caption: "Main Viewport & Real-time Scene Graph (135 FPS WebGL)"
      },
      {
        src: "/assets/projects/editor_4.png",
        caption: "3D CAD Vehicle Model Inspection & Mesh Shading"
      },
      {
        src: "/assets/projects/editor_3.png",
        caption: "Scene Graph Hierarchy, Outliner & Node Transform Inspector"
      },
      {
        src: "/assets/projects/editor_2.png",
        caption: "Material Inspector, Color Properties & Lighting Controls"
      },
      {
        src: "/assets/projects/editor_5.png",
        caption: "Camera Orbit, Orthographic / Perspective View & Spatial Compass"
      },
      {
        src: "/assets/projects/editor_1.png",
        caption: "CAD Ground Grid Alignment & Coordinate Frame Setup"
      }
    ]
  },
  {
    id: "luminasphere",
    title: "LuminaSphere — 3D Shader Orb",
    tagline: "Procedural Mesh · Vertex Displacement · GLSL Math",
    description: "An interactive real-time WebGL shader experience showcasing mathematical vertex displacement and fluid color palettes on an algorithmically generated icosahedron mesh reacting to cursor and touch input.",
    tags: ["TypeScript", "WebGL", "GLSL", "gl-matrix", "Shaders"],
    liveUrl: "https://luminasphere-webgl.vercel.app",
    githubUrl: "https://github.com/Varatharajan1808/luminasphere-webgl",
    image: "/assets/projects/editor_6.png",
    videoUrl: "/assets/projects/luminasphere.mp4",
    gallery: [
      {
        src: "/assets/projects/editor_6.png",
        caption: "GLSL Vertex Displacement Wireframe Orb & Dynamic Normals"
      }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "3D Engine Developer",
    company: "Aalai Immersive Tech Pvt Ltd",
    period: "May 2026 – Present",
    location: "Chennai, India",
    description: "Leading the development of browser-based CAD and BIM systems powered by a custom WebGPU rendering engine.",
    points: [
      "Authoring WebGPU compute and render pipelines in WGSL for interactive CAD/BIM workflows.",
      "Implementing parametric 3D entities, geometry processing, and sub-millimeter raycasting picking.",
      "Engineering reusable graphics components for browser CAD environments."
    ]
  },
  {
    role: "Software Developer (3D Graphics)",
    company: "Hexr Factory Immersive Tech Pvt Ltd",
    period: "Dec 2023 – Apr 2026",
    location: "Chennai, India",
    description: "Developed custom WebGL/WebGPU graphics engines for real-time interactive 3D web applications.",
    points: [
      "Built core engine modules: scene graph hierarchy, camera controllers, and custom draw passes.",
      "Engineered physically based rendering (PBR) workflows with custom GLSL shaders.",
      "Architected glTF 2.0 / GLB asset parsing pipelines and transform gizmos (translate, rotate, scale).",
      "Optimized GPU memory sub-allocations and render loops to sustain 60+ FPS performance."
    ]
  },
  {
    role: "Software Developer Trainee",
    company: "Hexr Factory Immersive Tech Pvt Ltd",
    period: "Sep 2023 – Dec 2023",
    location: "Chennai, India",
    description: "Trained in computer graphics fundamentals and developed browser-based design tools.",
    points: [
      "Developed a 2D canvas graphics editor leveraging WebGL and HTML5 Canvas.",
      "Applied coordinate system transformations, matrix math, and interactive element manipulation."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.Sc in Mathematics",
    institution: "Kamaraj College, Manonmaniam Sundaranar University",
    period: "2017 – 2020",
    detail: "Focused on Linear Algebra, Vector Calculus, and Matrix Transformations — the theoretical foundation for 3D graphics and shader math."
  },
  {
    degree: "MBA in Human Resource Management",
    institution: "Alagappa University",
    period: "2021 – 2023",
    detail: "Leadership, project lifecycle management, and agile team communication."
  },
  {
    degree: "Full Stack Web Development",
    institution: "QSpiders Institute, Chennai",
    period: "2023",
    detail: "Modern JavaScript, TypeScript, component architecture, and responsive web standards."
  }
];

// Clean, unique, non-overlapping skill groups
export const SKILL_GROUPS = [
  {
    category: "Graphics APIs & Frameworks",
    skills: ["WebGPU", "WebGL 2.0", "Three.js", "gl-matrix"]
  },
  {
    category: "Shaders & GPU Pipelines",
    skills: ["WGSL", "GLSL", "PBR Shading", "GPU Optimization", "Scene Graphs"]
  },
  {
    category: "CAD & BIM Engineering",
    skills: ["BIM Systems", "CAD Software Development", "Raycasting & Picking", "Transform Gizmos"]
  },
  {
    category: "Core Stack & Tools",
    skills: ["TypeScript", "JavaScript", "glTF / GLB", "Git & GitHub", "Vite", "Blender"]
  }
];

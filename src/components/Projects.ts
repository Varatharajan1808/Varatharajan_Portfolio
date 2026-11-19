import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Project.css';
import img1 from '../assets/projects/editor_1.png';
import img2 from '../assets/projects/editor_2.png';
import img3 from '../assets/projects/editor_3.png';
import img4 from '../assets/projects/editor_4.png';
import img5 from '../assets/projects/editor_5.png';
import img6 from '../assets/projects/editor_6.png';
import ProjectVideo from '../assets/projects/ProjectVideo.mp4';
import luminasphere from '../assets/projects/luminasphere.mp4';
import portfolioThumb from '../assets/projects/portfolio_thumb.png';

const projectImages = [img1, img2, img3, img4, img5, img6];

// Types
interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    github?: string;
    video?: string;
    image?: string;
    isActive: boolean;
}

// Component
export function createProjects() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'projects';
    element.className = 'section';

    const projects: Project[] = [
        {
            id: 'project-vara3d',
            title: "Vara3D Graphics Engine",
            description: "Developed a browser-based 3D graphics engine and visual editor from scratch using TypeScript and WebGL. Designed and implemented rendering pipelines, scene graph architecture, GLSL shader systems, and Physically Based Rendering (PBR). Built a complete GLTF/GLB asset pipeline and real-time editor tooling with frustum culling GPU optimization.",
            tech: ["TypeScript", "WebGL", "GLSL", "glTF 2.0 / GLB", "PBR"],
            link: "https://varatha3deditor.vercel.app/",
            github: "https://github.com/Varatharajan1808/Vara3D-Graphics-Engine",
            video: ProjectVideo,
            isActive: true
        },
        {
            id: 'project-luminasphere',
            title: "LuminaSphere",
            description: "An interactive WebGL-based 3D orb developed using TypeScript, custom GLSL shaders, and gl-matrix. Features shader-driven vertex displacement animations, dynamic color palettes, responsive mouse/touch interactions, and custom icosahedron geometry.",
            tech: ["TypeScript", "WebGL", "GLSL", "gl-matrix"],
            link: "https://luminasphere-webgl.vercel.app/",
            github: "https://github.com/Varatharajan1808/luminasphere-webgl",
            video: luminasphere,
            isActive: false
        },
        {
            id: 'project-portfolio',
            title: "Portfolio Website",
            description: "Personal developer portfolio built with TypeScript and a custom component architecture with reusable UI components and reactive state management. Implemented responsive layouts, CSS 3D viewport perspectives, and interactive telemetry controls.",
            tech: ["TypeScript", "HTML5", "CSS3", "Vite", "Component System"],
            link: "https://varatharajanportfolio.vercel.app/",
            github: "https://github.com/Varatharajan1808/Varatharajan_Portfolio",
            image: portfolioThumb,
            isActive: false
        }
    ];

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">ACTIVE_PROJECTS</h2>
                    <p class="section-subtitle">Principal research and development output</p>
                    <div class="section-divider"></div>
                </div>

                <div class="projects-grid">
                    ${projects.map(project => `
                        <div
                            class="project-card ${project.isActive ? 'highlighted' : ''}"
                            id="${project.id}"
                            data-link="${project.link}"
                            title="Open Live Demo"
                        >
                            <div class="project-image">
                                <div class="project-connector"></div>
                                ${project.video ? `
                                    <video class="hero-bg-video" autoplay loop muted playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                                        <source src="${project.video}" type="video/mp4">
                                    </video>
                                ` : project.image ? `
                                    <img src="${project.image}" alt="${project.title}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                                ` : `
                                    <div class="project-placeholder" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center;">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.2;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                    </div>
                                `}
                                ${project.isActive ? `
                                <div class="viewport-overlay">
                                    <span class="stat-tag">SYSTEM::ACTIVE</span>
                                    <span class="stat-tag">60 FPS</span>
                                </div>
                                ` : ''}
                                <div class="project-overlay-cta" title="Launch Demo">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="flex-between">
                                    <h3>${project.title}</h3>
                                    <div class="project-links">
                                        ${project.github ? `
                                            <a href="${project.github}" target="_blank" rel="noopener noreferrer" title="View Source on GitHub">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                            </a>
                                        ` : ''}
                                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" title="Open Live Demo">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                </div>
                                <p>${project.description}</p>
                                <div class="project-tech">
                                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="gallery-section">
                    <h3 class="gallery-title">SYSTEM_SNAPSHOTS</h3>
                    <div class="gallery-3d-container">
                        <div class="gallery-track">
                            ${projectImages.map((img, i) => `
                                <div class="gallery-item" style="--i: ${i}">
                                    <img src="${img}" alt="Editor Screenshot ${i + 1}" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function attachEvents(): void {
        const cards = element.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                if (target.closest('a')) return;
                const link = (card as HTMLElement).dataset.link;
                if (link) window.open(link, '_blank', 'noopener,noreferrer');
            });
        });
    }

    function afterMount(): void { }

    function mount(parent: HTMLElement): void {
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        updateComponent(element, render, attachEvents, afterMount);
    }

    return { element, mount, update };
}

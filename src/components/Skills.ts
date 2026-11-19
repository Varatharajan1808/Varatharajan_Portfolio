import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Skills.css';

// Types
interface SkillCategory {
    category: string;
    tags: string[];
}

// Component
export function createSkills() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'skills';
    element.className = 'section';

    const skills: SkillCategory[] = [
        {
            category: "GRAPHICS APIS & SHADERS",
            tags: ["WebGL", "WebGPU", "GLSL", "WGSL", "Rendering Pipelines", "Shader Development", "GPU Optimization"]
        },
        {
            category: "GRAPHICS PROGRAMMING & ENGINE",
            tags: ["Scene Graphs", "Real-Time Rendering", "Physically Based Rendering (PBR)", "Lighting Models", "HDRI Environment Mapping", "Buffer Management"]
        },
        {
            category: "CAD & GEOMETRY",
            tags: ["Browser-Based CAD Systems", "Geometry Processing", "Raycasting", "Object Picking", "Interactive Editing", "Transform Gizmos"]
        },
        {
            category: "ASSET PIPELINES",
            tags: ["GLTF 2.0", "GLB", "PBR Materials", "Texture Optimization", "Normal Maps"]
        },
        {
            category: "LANGUAGES & FRAMEWORKS",
            tags: ["TypeScript", "JavaScript", "Three.js", "HTML5", "CSS3"]
        },
        {
            category: "TOOLS & BUILD SYSTEMS",
            tags: ["Git", "GitHub", "Webpack", "Vite", "NPM", "VS Code", "Chrome DevTools", "Jira"]
        }
    ];

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">TECHNICAL_CAPABILITIES</h2>
                    <p class="section-subtitle">Core competencies in 3D_Engine_Developer</p>
                    <div class="section-divider"></div>
                </div>
                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-category">
                            <h3>${skill.category}</h3>
                            <div class="skill-tags">
                                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function attachEvents(): void { }
    function afterMount(): void { }

    function mount(parent: HTMLElement): void {
        mountComponent(element, parent, render, attachEvents, afterMount);
    }

    function update(): void {
        updateComponent(element, render, attachEvents, afterMount);
    }

    return { element, mount, update };
}

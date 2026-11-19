import { createComponent, mountComponent, updateComponent } from '../core/BaseComponent';
import '../Style/Experience.css';

// Component
export function createExperience() {
    const config = createComponent({});
    const element: HTMLElement = config.element;
    element.id = 'experience';
    element.className = 'section';

    function render(): string {
        return `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">WORK_HISTORY</h2>
                    <p class="section-subtitle">Professional experience and academic foundations</p>
                    <div class="section-divider"></div>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <span class="timeline-company">Aalai Immersive Tech Pvt Ltd — Chennai, Tamil Nadu, India</span>
                                <span class="timeline-date">MAY 2026 - PRESENT</span>
                            </div>
                            <span class="timeline-title">3D Engine Developer</span>
                            <ul class="experience-list">
                                <li>Developing browser-based CAD systems using a custom WebGPU-based rendering engine.</li>
                                <li>Implementing CAD entities, geometry processing, and interactive modeling workflows.</li>
                                <li>Building reusable rendering components and enhancing WebGPU-based CAD capabilities.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <span class="timeline-company">Hexr Factory Immersive Tech Pvt Ltd</span>
                                <span class="timeline-date">DEC 2023 - APR 2026</span>
                            </div>
                            <span class="timeline-title">Software Developer (Web-Based 3D Graphics– WebGL/WebGPU)</span>
                            <ul class="experience-list">
                                <li>Developed a custom WebGL/WebGPU-based rendering engine for browser-based CAD and real-time 3D graphics applications.</li>
                                <li>Implemented geometry systems, scene graph architecture, rendering pipelines, and Physically Based Rendering (PBR).</li>
                                <li>Developed GLSL/WGSL shader systems, real-time lighting, camera controls, and GPU-optimized rendering techniques.</li>
                                <li>Built and optimized GLTF/GLB asset pipelines for efficient real-time rendering.</li>
                                <li>Improved rendering performance through efficient buffer management, render-loop optimization, and GPU resource management.</li>
                                <li>Collaborated with cross-functional teams to develop scalable engine architecture and ensure cross-browser compatibility.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <span class="timeline-company">Certifications: Full Stack Web Development</span>
                                <span class="timeline-date">APR 2023</span>
                            </div>
                            <span class="timeline-title">QSpiders Institute, Chennai</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <span class="timeline-company">MBA in Human Resource Management (HRM)</span>
                                <span class="timeline-date">DEC 2021 - MAY 2023</span>
                            </div>
                            <span class="timeline-title">Alagappa University — Thoothukudi, Tamil Nadu, India</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <span class="timeline-company">Bachelor of Science in Mathematics</span>
                                <span class="timeline-date">JUL 2017 - APR 2020</span>
                            </div>
                            <span class="timeline-title">Kamaraj College, Manonmaniam Sundaranar University — Thoothukudi, Tamil Nadu, India</span>
                        </div>
                    </div>
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

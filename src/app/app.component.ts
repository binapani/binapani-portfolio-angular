import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly nav = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'];
  activeFilter = 'All';
  readonly filters = ['All', 'AI / GenAI', '.NET', 'Angular', 'Python', 'Game', 'Business', 'Other'];

  readonly projects: Project[] = [
    { title: 'NexaAI', category: 'AI / GenAI', description: 'Full-stack AI platform with RAG, AI agents and modern enterprise architecture.', tags: ['Angular', '.NET', 'Python', 'RAG'], featured: true, icon: '✦' },
    { title: 'Color Rush', category: 'Game', description: '2D mobile arcade game built with Unity 6 and C# with color matching and level progression.', tags: ['Unity', 'C#', 'Mobile', 'Game'], featured: true, icon: '●' },
    { title: 'LLM Chat API', category: '.NET', description: '.NET API integrated with local LLMs using Ollama and Qwen.', tags: ['.NET', 'Ollama', 'LLM', 'API'], icon: '◈' },
    { title: 'Career Discovery API', category: 'Python', description: 'FastAPI backend exploring structured career discovery and AI-ready service design.', tags: ['Python', 'FastAPI', 'API'], icon: '⌁' },
    { title: 'Colors Lover LLP', category: 'Business', description: 'A product and services venture spanning stationery, POD, printing and computer training.', tags: ['Business', 'Shopify', 'Products'], icon: '✿' },
    { title: 'Wari Leirang', category: 'Other', description: 'Flutter/Dart OTT-style application concept for Manipuri stories and cultural content.', tags: ['Flutter', 'Dart', 'Mobile'], icon: '▶' }
  ];

  get filteredProjects(): Project[] {
    return this.activeFilter === 'All' ? this.projects : this.projects.filter(p => p.category === this.activeFilter);
  }

  scrollTo(id: string): void {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}

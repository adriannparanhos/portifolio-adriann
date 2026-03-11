import { Component, inject, computed } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent { 
  public translationService = inject(TranslationService);
  public t = this.translationService.t;

  public myProjects = computed(() => {
    const isEnglish = this.translationService.getActiveLang()() === 'en';
    
    return [
      {
        id: 1,
        title: isEnglish ? 'Budget Automation System' : 'Sistema de Automação de Orçamentos',
        description: isEnglish 
          ? 'Corporate Full Stack system developed for Baron Wear Parts. It automates the entire budget generation process, optimizing time and reducing operational errors.' 
          : 'Sistema corporativo Full Stack desenvolvido para a Baron Wear Parts. Automatiza todo o processo de geração de orçamentos, otimizando tempo e reduzindo erros operacionais.',
        technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
        imageUrl: 'assets/images/projeto.jpg', 
        liveUrl: '',
        repositoryUrl: '' 
      },
      {
        id: 2,
        title: isEnglish ? 'SaaS Platform (In Development)' : 'Plataforma SaaS (Em Desenvolvimento)',
        description: isEnglish 
          ? 'A modern scalable SaaS application using a Javascript-based stack to solve specific business needs, featuring a complete API and reactive frontend.' 
          : 'Uma aplicação SaaS moderna e escalável utilizando uma stack baseada em Javascript para resolver necessidades de negócios, com API completa e frontend reativo.',
        technologies: ['Node.js', 'React', 'TypeScript', 'MongoDB'],
        imageUrl: 'assets/images/projeto.jpg',
        liveUrl: 'https://seulink-de-teste.com',
        repositoryUrl: 'https://github.com/seu-usuario/repo-saas'
      },
      {
        id: 3,
        title: isEnglish ? 'Gothic Tactical Card Game' : 'Card Game Tático Gótico',
        description: isEnglish 
          ? '2D tactical card game built in Unity 6. Features a unique dark fantasy aesthetic (Gothic Waifus vs. Monsters), complex turn-based mechanics, and clean architecture.' 
          : 'Card game tático 2D desenvolvido na Unity 6. Apresenta uma estética dark fantasy única (Gothic Waifus vs Monstros), mecânicas complexas de turnos e arquitetura limpa.',
        technologies: ['Unity 6', 'C#', 'Game Design', '2D Art'],
        imageUrl: 'assets/images/projeto.jpg',
        liveUrl: 'https://seu-link-no-itch.io',
        repositoryUrl: ''
      }
    ];
  });
}

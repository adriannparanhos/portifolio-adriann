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
        title: isEnglish ? 'Budget Automation CRM/ERP (In Development)' : 'CRM/ERP de Automação de Orçamentos (Em Desenvolvimento)',
        description: isEnglish 
          ? 'A Full-Stack corporate system designed to automate and manage commercial budgets. The application digitizes complex workflows, optimizing response times and significantly reducing operational errors in pricing.' 
          : 'Sistema corporativo Full Stack focado na gestão e automação de orçamentos comerciais. A aplicação digitaliza fluxos de trabalho complexos, otimizando o tempo de resposta e reduzindo drasticamente erros operacionais.',
        technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
        imageUrl: 'assets/images/projetos/projeto1.png', 
        liveUrl: 'https://seulink-de-teste.com',
        repositoryUrl: 'https://github.com/seu-usuario/repo-saas' 
      }
    ];
  });
}

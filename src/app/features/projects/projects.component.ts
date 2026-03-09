import { Component } from '@angular/core';
import { Project } from './domain/model/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public myProjects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestão Comercial',
      description: 'Sistema completo para automação de geração de orçamentos, otimizando o fluxo de vendas e gestão interna.',
      imageUrl: 'assets/images/projeto.jpg',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      liveUrl: 'https://seulink.com'
    },
    {
      id: 2,
      title: 'Dark Fantasy Card Game',
      description: 'Jogo de cartas estratégico com temática de guerra entre monstros e facções, desenvolvido com arquitetura limpa em C#.',
      imageUrl: 'assets/images/projeto.jpg',
      technologies: ['Unity 6', 'C#', 'Game Design'],
      repositoryUrl: 'https://github.com/seu-repo'
    },
  ];
}

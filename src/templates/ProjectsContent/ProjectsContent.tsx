import React from 'react';
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import styles from './ProjectsContent.module.css';

export default function ProjectsContent() {
  const projects = [
    {
      title: 'Sites Web para grandes empresas',
      description: 'Desenvolvimento de sites web responsivos para grandes empresas, com foco em otimização de desempenho e experiência do usuário.',
      tech: ['TypeScript', 'Next.js', 'Vite.js'],
      status: 'Concluído',
    },
    {
      title: 'Landing Pages',
      description: 'Diversas landing pages para campanhas de marketing e promoção de produtos.',
      tech: ['TypeScript', 'Next.js', 'Vite.js', 'WordPress'],
      status: 'Concluído',
    },
    {
      title: 'E-commerces',
      description: 'Diversos e-commerces para empresas de diferentes segmentos.',
      tech: ['Shopify'],
      status: 'Concluído',
    },
    {
      title: 'Biblioteca de Fluxos de Formulários Dinâmicos',
      description: 'Biblioteca responsável por gerenciar fluxos de formulários dinâmicos e altamente personalizáveis. Permite criar diferentes jornadas de preenchimento a partir de configurações, com controle de etapas, validações e renderização condicional de campos. A solução foi projetada para ser reutilizável entre múltiplos projetos, facilitando a criação e manutenção de formulários complexos com diferentes regras de negócio.',
      tech: ['TypeScript', 'Vite.js'],
      status: 'Concluído',
    },
    {
      title: 'Migrações de sistemas backend legados',
      description: 'Migração de sistemas backend legados para novas tecnologias, garantindo compatibilidade e desempenho otimizado.',
      tech: ['Java', 'Spring Boot', 'Micronaut', 'AWS', 'Serverless', 'Docker', 'Kubernetes', 'Terraform', 'My SQL', 'SQL'],
      status: 'Concluído',
    },
    {
      title: 'Aplicativos mobile para Android e iOS',
      description: 'Desenvolvimento de aplicativos mobile para plataformas Android e iOS, com foco em experiência do usuário e desempenho otimizado.',
      tech: ['React Native', 'Kotlin'],
      status: 'Concluído',
    },
    {
      title: 'API de Localização da Loja Mais Próxima por CEP',
      description: 'API responsável por identificar a loja mais próxima do cliente a partir do CEP informado, utilizando dados de localização das lojas e cálculo de proximidade para direcionar o atendimento.',
      tech: ['Java', 'Spring Boot', 'My SQL'],
      status: 'Concluído',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projetos já realizados</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 100} />
        ))}
      </div>
    </div>
  );
}

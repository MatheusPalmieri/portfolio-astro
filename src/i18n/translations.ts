export type Locale = 'en' | 'pt-br' | 'es' | 'zh' | 'it';

export const localeLabels: Record<Locale, string> = {
  en:    'EN',
  'pt-br': 'PT',
  es:    'ES',
  zh:    '中文',
  it:    'IT',
};

export const localeNames: Record<Locale, string> = {
  en:    'English',
  'pt-br': 'Português',
  es:    'Español',
  zh:    '中文',
  it:    'Italiano',
};

export type TranslationKeys = {
  nav: {
    experience: string;
    education: string;
    github: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    mainSkills: string;
    links: {
      linkedin: string;
      github: string;
      portfolio: string;
      email: string;
    };
  };
  experience: {
    title: string;
    present: string;
    remote: string;
    jobs: Array<{
      company: string;
      role: string;
      period: string;
      location: string;
      description: string[];
      tech: string;
    }>;
  };
  education: {
    title: string;
    languagesTitle: string;
    inProgress: string;
    items: Array<{
      institution: string;
      degree: string;
      period: string;
    }>;
    languages: Array<{ lang: string; level: string }>;
  };
  footer: {
    madeWith: string;
  };
  theme: {
    light: string;
    dark: string;
  };
};

const en: TranslationKeys = {
  nav: {
    experience: 'Experience',
    education: 'Education',
    github: 'GitHub',
  },
  hero: {
    greeting: "Hey, I'm",
    role: 'Full Stack Developer',
    bio: 'Full Stack Developer with 6+ years of experience in B2B products (ERP, CRM and internal platforms), working end-to-end — from technical requirements to production delivery. Strong focus on modern frontend with React, Next.js and TypeScript, and scalable backend with Node.js (NestJS/Express) and Python.',
    mainSkills: 'Main skills',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      email: 'Email',
    },
  },
  experience: {
    title: 'Experience',
    present: 'Present',
    remote: 'Remote',
    jobs: [
      {
        company: 'Jumpad',
        role: 'Full Stack Developer',
        period: 'Aug 2025 — Present',
        location: 'Remote',
        description: [
          'Developed and maintained microservices in Python, working on integrations and product feature evolution.',
          'Implemented and evolved services/APIs in Node.js, ensuring consistent integration between front-end and back-end.',
          'Worked on an AI-related product, delivering end-to-end features and integrations (backend + frontend).',
          'Led the creation and coordination of a UI library in React/Next.js, accelerating deliveries and standardizing components.',
          'Performed performance optimizations and UX improvements, reducing bottlenecks and increasing responsiveness.',
        ],
        tech: 'Python · Node.js · React.js · TypeScript · Tailwind CSS · Redux · CapRover',
      },
      {
        company: 'Premiersoft',
        role: 'Frontend Developer',
        period: 'Oct 2024 — Jul 2025',
        location: 'Remote',
        description: [
          'Developed an ERP for factory/machine management with React/TypeScript, integrating APIs and real-time data flows.',
          'Delivered a technical inspection application with Next.js, focused on accessibility and mobile usability.',
          'Optimized performance and build, reducing bundle size by 35% and accelerating AWS deployment.',
          'Contributed to front-end architecture and CI/CD pipeline configuration, improving release predictability.',
          'Optimized native camera usage in the browser, improving performance and stability in webapps.',
        ],
        tech: 'React.js · Next.js · TypeScript · Zustand · Tailwind CSS · Chakra UI · AWS (S3/CloudFront) · CI/CD',
      },
      {
        company: 'Voeja',
        role: 'Frontend Developer',
        period: 'Jul 2024 — Oct 2024',
        location: 'Remote',
        description: [
          'Planned and developed a B2B flight and hotel booking platform with Next.js/TypeScript.',
          'Implemented booking features and a management dashboard for agencies, increasing operational efficiency by 40%.',
          'Ensured responsive and accessible UI, reducing corporate user churn by 25%.',
          'Documented components and UI/UX patterns to accelerate onboarding and standardize team deliveries.',
        ],
        tech: 'Next.js · TypeScript · Tailwind CSS',
      },
      {
        company: 'Btix',
        role: 'Full Stack Developer',
        period: 'Dec 2022 — Aug 2024',
        location: 'Remote',
        description: [
          'Designed and implemented scalable REST APIs with Node.js and NestJS, increasing service reliability by 30%.',
          'Implemented authentication/authorization with JWT, ensuring security and access control.',
          'Applied Redis for caching and performance optimization in critical flows.',
          'Maintained and evolved microservices in Express.js, focused on performance and scalability.',
          'Wrote and maintained automated tests with Jest, increasing delivery reliability.',
          'Documented and standardized endpoints with Swagger, facilitating integration between teams.',
        ],
        tech: 'Node.js · NestJS · Express.js · MongoDB · Redis · JWT · Jest · Swagger · CI/CD · TypeScript',
      },
      {
        company: 'FG Empreendimentos',
        role: 'IT Analyst',
        period: 'Dec 2021 — Dec 2022',
        location: 'Blumenau, SC',
        description: [
          'Automated internal processes with extensions/scripts, reducing repetitive manual tasks.',
          'Developed web interfaces with JavaScript/HTML/CSS/React to improve usability of legacy systems.',
          'Performed machine setup/maintenance and provided help desk support with SLA ≤ 4h.',
        ],
        tech: 'JavaScript · React · HTML5 · CSS3 · Windows Server',
      },
    ],
  },
  education: {
    title: 'Education',
    languagesTitle: 'Languages',
    inProgress: 'In progress',
    items: [
      {
        institution: 'Estácio',
        degree: 'Bachelor of Software Engineering',
        period: 'May 2023 — May 2027',
      },
    ],
    languages: [
      { lang: 'Portuguese', level: 'Native' },
      { lang: 'English', level: 'Intermediate' },
      { lang: 'Spanish', level: 'Basic' },
    ],
  },
  footer: { madeWith: 'Made with' },
  theme: { light: 'Light', dark: 'Dark' },
};

const ptBr: TranslationKeys = {
  nav: {
    experience: 'Experiência',
    education: 'Educação',
    github: 'GitHub',
  },
  hero: {
    greeting: 'Olá, eu sou',
    role: 'Desenvolvedor Full Stack',
    bio: 'Desenvolvedor Full Stack com 6+ anos de experiência em produtos B2B (ERP, CRM e plataformas internas), atuando de ponta a ponta — do levantamento técnico à entrega em produção. Forte atuação em frontend moderno com React, Next.js e TypeScript, e backend escalável com Node.js (NestJS/Express) e Python.',
    mainSkills: 'Principais habilidades',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfólio',
      email: 'E-mail',
    },
  },
  experience: {
    title: 'Experiência',
    present: 'Atual',
    remote: 'Remoto',
    jobs: [
      {
        company: 'Jumpad',
        role: 'Desenvolvedor Full Stack',
        period: 'Ago 2025 — Atual',
        location: 'Remoto',
        description: [
          'Desenvolvi e mantive microsserviços em Python, atuando em integrações e evolução de funcionalidades do produto.',
          'Implementei e evoluí serviços/APIs em Node.js, garantindo integração consistente entre front-end e back-end.',
          'Atuei em um produto ligado a IA, entregando features e integrações ponta a ponta (backend + frontend).',
          'Liderei a criação e coordenação de uma biblioteca de UI em React/Next.js, acelerando entregas e padronizando componentes.',
          'Realizei otimizações de performance e melhorias de experiência, reduzindo gargalos e aumentando responsividade.',
        ],
        tech: 'Python · Node.js · React.js · TypeScript · Tailwind CSS · Redux · CapRover',
      },
      {
        company: 'Premiersoft',
        role: 'Desenvolvedor Frontend',
        period: 'Out 2024 — Jul 2025',
        location: 'Remoto',
        description: [
          'Desenvolvi um ERP para gestão de fábricas/máquinas com React/TypeScript, integrando APIs e fluxos de dados em tempo real.',
          'Entreguei aplicação de vistoria técnica com Next.js, com foco em acessibilidade e usabilidade mobile.',
          'Otimizei performance e build, reduzindo o bundle em 35% e acelerando o deploy na AWS.',
          'Contribuí na arquitetura do front-end e na configuração/evolução de pipelines CI/CD.',
          'Otimizei uso de câmera nativa no navegador, melhorando performance e estabilidade em webapps.',
        ],
        tech: 'React.js · Next.js · TypeScript · Zustand · Tailwind CSS · Chakra UI · AWS (S3/CloudFront) · CI/CD',
      },
      {
        company: 'Voeja',
        role: 'Desenvolvedor Frontend',
        period: 'Jul 2024 — Out 2024',
        location: 'Remoto',
        description: [
          'Planejei e desenvolvi uma plataforma B2B de reservas de voos e hotéis com Next.js/TypeScript.',
          'Implementei funcionalidades de booking e um dashboard de gestão para agências, aumentando a eficiência operacional em 40%.',
          'Garanti UI responsiva e acessível, reduzindo churn de usuários corporativos em 25%.',
          'Documentei componentes e padrões de UI/UX para acelerar onboarding e padronizar entregas do time.',
        ],
        tech: 'Next.js · TypeScript · Tailwind CSS',
      },
      {
        company: 'Btix',
        role: 'Desenvolvedor Full Stack',
        period: 'Dez 2022 — Ago 2024',
        location: 'Remoto',
        description: [
          'Projetei e implementei APIs REST escaláveis com Node.js e NestJS, elevando a confiabilidade dos serviços em 30%.',
          'Implementei autenticação/autorização com JWT, garantindo segurança e controle de acesso.',
          'Apliquei Redis para cache e otimização de performance em fluxos críticos.',
          'Mantive e evoluí microsserviços em Express.js, com foco em performance e escalabilidade.',
          'Escrevi e mantive testes automatizados com Jest, aumentando a confiabilidade das entregas.',
          'Documentei e padronizei endpoints com Swagger, facilitando integração entre times.',
        ],
        tech: 'Node.js · NestJS · Express.js · MongoDB · Redis · JWT · Jest · Swagger · CI/CD · TypeScript',
      },
      {
        company: 'FG Empreendimentos',
        role: 'Analista de TI',
        period: 'Dez 2021 — Dez 2022',
        location: 'Blumenau, SC',
        description: [
          'Automatizei processos internos com extensões/scripts, reduzindo tarefas manuais repetitivas.',
          'Desenvolvi interfaces web com JavaScript/HTML/CSS/React para melhorar a usabilidade de sistemas legados.',
          'Realizei setup/manutenção de máquinas e prestei suporte help desk com SLA ≤ 4h.',
        ],
        tech: 'JavaScript · React · HTML5 · CSS3 · Windows Server',
      },
    ],
  },
  education: {
    title: 'Educação',
    languagesTitle: 'Idiomas',
    inProgress: 'Cursando',
    items: [
      {
        institution: 'Estácio',
        degree: 'Bacharelado em Engenharia de Software',
        period: 'Mai 2023 — Mai 2027',
      },
    ],
    languages: [
      { lang: 'Português', level: 'Nativo' },
      { lang: 'Inglês', level: 'Intermediário' },
      { lang: 'Espanhol', level: 'Básico' },
    ],
  },
  footer: { madeWith: 'Feito com' },
  theme: { light: 'Claro', dark: 'Escuro' },
};

const es: TranslationKeys = {
  nav: {
    experience: 'Experiencia',
    education: 'Educación',
    github: 'GitHub',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Desarrollador Full Stack',
    bio: 'Desarrollador Full Stack con más de 6 años de experiencia en productos B2B (ERP, CRM y plataformas internas), trabajando de extremo a extremo — desde los requisitos técnicos hasta la entrega en producción. Fuerte enfoque en frontend moderno con React, Next.js y TypeScript, y backend escalable con Node.js (NestJS/Express) y Python.',
    mainSkills: 'Habilidades principales',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portafolio',
      email: 'Correo',
    },
  },
  experience: {
    title: 'Experiencia',
    present: 'Actual',
    remote: 'Remoto',
    jobs: [
      {
        company: 'Jumpad',
        role: 'Desarrollador Full Stack',
        period: 'Ago 2025 — Actual',
        location: 'Remoto',
        description: [
          'Desarrollé y mantuve microservicios en Python, trabajando en integraciones y evolución de funcionalidades.',
          'Implementé y evolucione servicios/APIs en Node.js, garantizando integración consistente entre front-end y back-end.',
          'Trabajé en un producto relacionado con IA, entregando funcionalidades e integraciones de extremo a extremo.',
          'Lideré la creación de una biblioteca de UI en React/Next.js, acelerando entregas y estandarizando componentes.',
          'Realicé optimizaciones de rendimiento y mejoras de UX, reduciendo cuellos de botella.',
        ],
        tech: 'Python · Node.js · React.js · TypeScript · Tailwind CSS · Redux · CapRover',
      },
      {
        company: 'Premiersoft',
        role: 'Desarrollador Frontend',
        period: 'Oct 2024 — Jul 2025',
        location: 'Remoto',
        description: [
          'Desarrollé un ERP para gestión de fábricas con React/TypeScript, integrando APIs y flujos de datos en tiempo real.',
          'Entregué una aplicación de inspección técnica con Next.js, enfocada en accesibilidad y usabilidad móvil.',
          'Optimicé el rendimiento y la compilación, reduciendo el bundle en un 35% y acelerando el despliegue en AWS.',
          'Contribuí a la arquitectura del front-end y la configuración de pipelines CI/CD.',
          'Optimicé el uso de cámara nativa en el navegador, mejorando el rendimiento en webapps.',
        ],
        tech: 'React.js · Next.js · TypeScript · Zustand · Tailwind CSS · Chakra UI · AWS · CI/CD',
      },
      {
        company: 'Voeja',
        role: 'Desarrollador Frontend',
        period: 'Jul 2024 — Oct 2024',
        location: 'Remoto',
        description: [
          'Planifiqué y desarrollé una plataforma B2B de reservas de vuelos y hoteles con Next.js/TypeScript.',
          'Implementé funcionalidades de reserva y un panel de gestión para agencias, aumentando la eficiencia operativa en un 40%.',
          'Garanticé una UI responsiva y accesible, reduciendo la tasa de abandono de usuarios corporativos en un 25%.',
          'Documenté componentes y patrones de UI/UX para estandarizar las entregas del equipo.',
        ],
        tech: 'Next.js · TypeScript · Tailwind CSS',
      },
      {
        company: 'Btix',
        role: 'Desarrollador Full Stack',
        period: 'Dic 2022 — Ago 2024',
        location: 'Remoto',
        description: [
          'Diseñé e implementé APIs REST escalables con Node.js y NestJS, aumentando la confiabilidad en un 30%.',
          'Implementé autenticación/autorización con JWT, garantizando seguridad y control de acceso.',
          'Apliqué Redis para caché y optimización de rendimiento en flujos críticos.',
          'Mantuve y evolucione microservicios en Express.js, enfocado en rendimiento y escalabilidad.',
          'Escribí y mantuve pruebas automatizadas con Jest, aumentando la confiabilidad de las entregas.',
          'Documenté y estandaricé endpoints con Swagger, facilitando la integración entre equipos.',
        ],
        tech: 'Node.js · NestJS · Express.js · MongoDB · Redis · JWT · Jest · Swagger · CI/CD · TypeScript',
      },
      {
        company: 'FG Empreendimentos',
        role: 'Analista de TI',
        period: 'Dic 2021 — Dic 2022',
        location: 'Blumenau, SC',
        description: [
          'Automaticé procesos internos con extensiones/scripts, reduciendo tareas manuales repetitivas.',
          'Desarrollé interfaces web con JavaScript/HTML/CSS/React para mejorar la usabilidad de sistemas legados.',
          'Realicé configuración/mantenimiento de equipos y soporte help desk con SLA ≤ 4h.',
        ],
        tech: 'JavaScript · React · HTML5 · CSS3 · Windows Server',
      },
    ],
  },
  education: {
    title: 'Educación',
    languagesTitle: 'Idiomas',
    inProgress: 'En curso',
    items: [
      {
        institution: 'Estácio',
        degree: 'Ingeniería de Software',
        period: 'May 2023 — May 2027',
      },
    ],
    languages: [
      { lang: 'Portugués', level: 'Nativo' },
      { lang: 'Inglés', level: 'Intermedio' },
      { lang: 'Español', level: 'Básico' },
    ],
  },
  footer: { madeWith: 'Hecho con' },
  theme: { light: 'Claro', dark: 'Oscuro' },
};

const zh: TranslationKeys = {
  nav: {
    experience: '工作经历',
    education: '教育背景',
    github: 'GitHub',
  },
  hero: {
    greeting: '你好，我是',
    role: '全栈开发工程师',
    bio: '拥有6年以上B2B产品（ERP、CRM及内部平台）全栈开发经验，从技术需求到生产交付全程参与。专注于使用React、Next.js和TypeScript构建现代前端，以及使用Node.js（NestJS/Express）和Python构建可扩展后端。',
    mainSkills: '主要技能',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: '作品集',
      email: '邮箱',
    },
  },
  experience: {
    title: '工作经历',
    present: '至今',
    remote: '远程',
    jobs: [
      {
        company: 'Jumpad',
        role: '全栈开发工程师',
        period: '2025年8月 — 至今',
        location: '远程',
        description: [
          '使用Python开发和维护微服务，负责集成和产品功能迭代。',
          '使用Node.js实现和演进服务/API，确保前后端一致集成。',
          '参与AI相关产品开发，端到端交付功能和集成（后端+前端）。',
          '主导React/Next.js UI组件库的创建和协调，加速交付并规范组件。',
          '执行性能优化和用户体验改进，减少瓶颈并提高响应速度。',
        ],
        tech: 'Python · Node.js · React.js · TypeScript · Tailwind CSS · Redux · CapRover',
      },
      {
        company: 'Premiersoft',
        role: '前端开发工程师',
        period: '2024年10月 — 2025年7月',
        location: '远程',
        description: [
          '使用React/TypeScript开发工厂/机器管理ERP，集成API和实时数据流。',
          '使用Next.js交付技术检查应用，专注于无障碍访问和移动端可用性。',
          '优化性能和构建，将bundle大小减少35%，加速AWS部署。',
          '参与前端架构和CI/CD流水线配置，提高发布可预测性。',
          '优化浏览器原生摄像头使用，提升webapp性能和稳定性。',
        ],
        tech: 'React.js · Next.js · TypeScript · Zustand · Tailwind CSS · Chakra UI · AWS · CI/CD',
      },
      {
        company: 'Voeja',
        role: '前端开发工程师',
        period: '2024年7月 — 2024年10月',
        location: '远程',
        description: [
          '规划并开发了使用Next.js/TypeScript的B2B机票和酒店预订平台。',
          '实现预订功能和代理商管理仪表板，将运营效率提高40%。',
          '确保响应式和无障碍UI，将企业用户流失率降低25%。',
          '记录组件和UI/UX模式，加速入职培训并规范团队交付。',
        ],
        tech: 'Next.js · TypeScript · Tailwind CSS',
      },
      {
        company: 'Btix',
        role: '全栈开发工程师',
        period: '2022年12月 — 2024年8月',
        location: '远程',
        description: [
          '使用Node.js和NestJS设计并实现可扩展REST API，将服务可靠性提高30%。',
          '使用JWT实现身份验证/授权，确保安全性和访问控制。',
          '在关键流程中应用Redis进行缓存和性能优化。',
          '维护和演进Express.js微服务，专注于性能和可扩展性。',
          '使用Jest编写和维护自动化测试，提高交付可靠性。',
          '使用Swagger记录和规范端点，促进团队间集成。',
        ],
        tech: 'Node.js · NestJS · Express.js · MongoDB · Redis · JWT · Jest · Swagger · CI/CD · TypeScript',
      },
      {
        company: 'FG Empreendimentos',
        role: 'IT分析师',
        period: '2021年12月 — 2022年12月',
        location: '布卢梅瑙, SC',
        description: [
          '使用扩展/脚本自动化内部流程，减少重复性手动任务。',
          '使用JavaScript/HTML/CSS/React开发Web界面，改善遗留系统的可用性。',
          '执行设备设置/维护并提供SLA ≤ 4小时的帮助台支持。',
        ],
        tech: 'JavaScript · React · HTML5 · CSS3 · Windows Server',
      },
    ],
  },
  education: {
    title: '教育背景',
    languagesTitle: '语言能力',
    inProgress: '在读',
    items: [
      {
        institution: 'Estácio',
        degree: '软件工程学士',
        period: '2023年5月 — 2027年5月',
      },
    ],
    languages: [
      { lang: '葡萄牙语', level: '母语' },
      { lang: '英语', level: '中级' },
      { lang: '西班牙语', level: '初级' },
    ],
  },
  footer: { madeWith: '使用' },
  theme: { light: '浅色', dark: '深色' },
};

const it: TranslationKeys = {
  nav: {
    experience: 'Esperienza',
    education: 'Istruzione',
    github: 'GitHub',
  },
  hero: {
    greeting: 'Ciao, sono',
    role: 'Sviluppatore Full Stack',
    bio: 'Sviluppatore Full Stack con oltre 6 anni di esperienza in prodotti B2B (ERP, CRM e piattaforme interne), lavorando end-to-end — dai requisiti tecnici alla consegna in produzione. Forte focus sul frontend moderno con React, Next.js e TypeScript, e backend scalabile con Node.js (NestJS/Express) e Python.',
    mainSkills: 'Competenze principali',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      email: 'Email',
    },
  },
  experience: {
    title: 'Esperienza',
    present: 'Presente',
    remote: 'Remoto',
    jobs: [
      {
        company: 'Jumpad',
        role: 'Sviluppatore Full Stack',
        period: 'Ago 2025 — Presente',
        location: 'Remoto',
        description: [
          'Sviluppato e mantenuto microservizi in Python, lavorando su integrazioni ed evoluzione delle funzionalità del prodotto.',
          'Implementato ed evoluto servizi/API in Node.js, garantendo integrazione coerente tra front-end e back-end.',
          'Lavorato su un prodotto legato all\'IA, consegnando funzionalità e integrazioni end-to-end.',
          'Guidato la creazione di una libreria UI in React/Next.js, accelerando le consegne e standardizzando i componenti.',
          'Eseguito ottimizzazioni delle prestazioni e miglioramenti UX, riducendo i colli di bottiglia.',
        ],
        tech: 'Python · Node.js · React.js · TypeScript · Tailwind CSS · Redux · CapRover',
      },
      {
        company: 'Premiersoft',
        role: 'Sviluppatore Frontend',
        period: 'Ott 2024 — Lug 2025',
        location: 'Remoto',
        description: [
          'Sviluppato un ERP per la gestione di fabbriche/macchine con React/TypeScript, integrando API e flussi di dati in tempo reale.',
          'Consegnato un\'applicazione di ispezione tecnica con Next.js, focalizzata su accessibilità e usabilità mobile.',
          'Ottimizzato prestazioni e build, riducendo il bundle del 35% e accelerando il deploy su AWS.',
          'Contribuito all\'architettura front-end e alla configurazione delle pipeline CI/CD.',
          'Ottimizzato l\'uso della fotocamera nativa nel browser, migliorando le prestazioni nelle webapp.',
        ],
        tech: 'React.js · Next.js · TypeScript · Zustand · Tailwind CSS · Chakra UI · AWS · CI/CD',
      },
      {
        company: 'Voeja',
        role: 'Sviluppatore Frontend',
        period: 'Lug 2024 — Ott 2024',
        location: 'Remoto',
        description: [
          'Pianificato e sviluppato una piattaforma B2B per prenotazioni di voli e hotel con Next.js/TypeScript.',
          'Implementato funzionalità di prenotazione e un dashboard di gestione per agenzie, aumentando l\'efficienza operativa del 40%.',
          'Garantito UI responsiva e accessibile, riducendo il churn degli utenti aziendali del 25%.',
          'Documentato componenti e pattern UI/UX per accelerare l\'onboarding e standardizzare le consegne del team.',
        ],
        tech: 'Next.js · TypeScript · Tailwind CSS',
      },
      {
        company: 'Btix',
        role: 'Sviluppatore Full Stack',
        period: 'Dic 2022 — Ago 2024',
        location: 'Remoto',
        description: [
          'Progettato e implementato API REST scalabili con Node.js e NestJS, aumentando l\'affidabilità dei servizi del 30%.',
          'Implementato autenticazione/autorizzazione con JWT, garantendo sicurezza e controllo degli accessi.',
          'Applicato Redis per caching e ottimizzazione delle prestazioni nei flussi critici.',
          'Mantenuto ed evoluto microservizi in Express.js, focalizzato su prestazioni e scalabilità.',
          'Scritto e mantenuto test automatizzati con Jest, aumentando l\'affidabilità delle consegne.',
          'Documentato e standardizzato endpoint con Swagger, facilitando l\'integrazione tra team.',
        ],
        tech: 'Node.js · NestJS · Express.js · MongoDB · Redis · JWT · Jest · Swagger · CI/CD · TypeScript',
      },
      {
        company: 'FG Empreendimentos',
        role: 'Analista IT',
        period: 'Dic 2021 — Dic 2022',
        location: 'Blumenau, SC',
        description: [
          'Automatizzato processi interni con estensioni/script, riducendo le attività manuali ripetitive.',
          'Sviluppato interfacce web con JavaScript/HTML/CSS/React per migliorare l\'usabilità dei sistemi legacy.',
          'Eseguito setup/manutenzione di macchine e fornito supporto help desk con SLA ≤ 4h.',
        ],
        tech: 'JavaScript · React · HTML5 · CSS3 · Windows Server',
      },
    ],
  },
  education: {
    title: 'Istruzione',
    languagesTitle: 'Lingue',
    inProgress: 'In corso',
    items: [
      {
        institution: 'Estácio',
        degree: 'Laurea in Ingegneria del Software',
        period: 'Mag 2023 — Mag 2027',
      },
    ],
    languages: [
      { lang: 'Portoghese', level: 'Madrelingua' },
      { lang: 'Inglese', level: 'Intermedio' },
      { lang: 'Spagnolo', level: 'Base' },
    ],
  },
  footer: { madeWith: 'Fatto con' },
  theme: { light: 'Chiaro', dark: 'Scuro' },
};

export const translations: Record<Locale, TranslationKeys> = {
  en,
  'pt-br': ptBr,
  es,
  zh,
  it,
};

// Definindo as traduções
const translations = {
    en: {
      // Header
      "header-title": "Mateus Facundes",
      "header-subtitle": "Full Stack Developer | React.js | PHP | Java | Spring Boot",
      "header-btn": "Contact Me",
      
      // Navigation
      "nav-about": "About",
      "nav-experience": "Experience",
      "nav-projects": "Projects",
      "nav-education": "Education",
      "nav-contact": "Contact",
      
      // About section
      "about-title": "About Me",
      "about-p1": "Hello! I'm Mateus Facundes, a full stack developer with experience in various technologies and modern frameworks. I have a strong aptitude for learning new technologies and I'm passionate about the software development universe.",
      "about-p2": "Currently, I work as a full stack developer at Mobimark, where I have the opportunity to apply and expand my knowledge in front-end and back-end. I have experience with agile methodologies and always seek to apply best practices, such as Clean Code and SOLID principles.",
      "skills-frontend": "Front-end",
      "skills-backend": "Back-end",
      "skills-database": "Database",
      "skills-other": "Other Skills",
      
      // Experience section
      "experience-title": "Professional Experience",
      "experience-mobimark-title": "Mobimark",
      "experience-mobimark-position": "Full Stack Developer",
      "experience-mobimark-date": "February 2023 - Present",
      "experience-mobimark-li1": "Front-end development with JavaScript, HTML, CSS and using React and Vue frameworks",
      "experience-mobimark-li2": "Back-end development with PHP using Laravel, as well as Java and Kotlin with Spring Boot",
      "experience-mobimark-li3": "Adoption of agile methodologies (Scrum, Kanban)",
      "experience-mobimark-li4": "Application of Clean Code and SOLID principles",
      
      "experience-artemis-title": "Artemis TI",
      "experience-artemis-position": "Full Stack Developer",
      "experience-artemis-date": "April 2018 - October 2021",
      "experience-artemis-li1": "Front-end development using WordPress, HTML, JavaScript and CSS",
      "experience-artemis-li2": "Back-end development with PHP using Symphony, and Java with Spring Boot",
      
      "experience-seadprev-title": "Seadprev",
      "experience-seadprev-position": "Monitor of the Nau digital program",
      "experience-seadprev-date": "June 2022 - March 2023",
      "experience-seadprev-desc": "I worked as a monitor in the Nau Digital program, assisting in the development and implementation of digital solutions.",
      
      "experience-forense-title": "The Forense",
      "experience-forense-position": "Network Security Internship",
      "experience-forense-date": "July 2021 - April 2022",
      "experience-forense-desc": "Responsible for finding vulnerabilities in systems through the Pentest method, contributing to the security of applications and networks.",
      
      // Projects section
      "projects-title": "Projects",
      "project-riomaria-title": "Rio Maria Institutional Website",
      "project-riomaria-desc": "Website dedicated to promoting products and news from Rio Maria food company.",
      "project-pokedex-ms-title": "Pokedex Microservice",
      "project-pokedex-ms-desc": "The PokeDex microservice is a lightweight and scalable REST API, developed with Spring Boot and Kotlin, for consuming the Pokémon API.",
      "project-pokedex-title": "Pokedex",
      "project-pokedex-desc": "Personal project developed to practice front-end skills and API consumption.",
      "project-link-site": "Site",
      "project-link-demo": "Demo",
      
      // Education section
      "education-title": "Academic Background",
      "education-estacio-title": "Estácio de Sá University",
      "education-estacio-degree": "Bachelor's in Computer Science",
      "education-estacio-date": "2017 - 2021",
      "education-estacio-desc": "Degree in Computer Science with a focus on software development, algorithms and data structures.",
      
      "education-ifma-title": "Federal Institute of Education, Science and Technology of Maranhão",
      "education-ifma-degree": "Technical Degree in Information Technology",
      "education-ifma-date": "2013 - 2015",
      "education-ifma-desc": "Technical training that provided the foundation of my knowledge in programming and information systems.",
      
      // Contact section
      "contact-title": "Contact",
      
      // Footer
      "footer-copyright": "© 2025 Mateus Facundes. All rights reserved."
    },
    pt: {
      // Header
      "header-title": "Mateus Facundes",
      "header-subtitle": "Desenvolvedor Full Stack | React.js | PHP | Java | Spring Boot",
      "header-btn": "Entre em Contato",
      
      // Navigation
      "nav-about": "Sobre",
      "nav-experience": "Experiência",
      "nav-projects": "Projetos",
      "nav-education": "Formação",
      "nav-contact": "Contato",
      
      // About section
      "about-title": "Sobre Mim",
      "about-p1": "Olá! Sou Mateus Facundes, um desenvolvedor full stack com experiência em diversas tecnologias e frameworks modernos. Tenho uma forte aptidão para aprender novas tecnologias e sou apaixonado pelo universo de desenvolvimento de software.",
      "about-p2": "Atualmente, trabalho como desenvolvedor full stack na Mobimark, onde tenho a oportunidade de aplicar e expandir meus conhecimentos em front-end e back-end. Tenho experiência com metodologias ágeis e procuro sempre aplicar as melhores práticas, como Clean Code e princípios SOLID.",
      "skills-frontend": "Front-end",
      "skills-backend": "Back-end",
      "skills-database": "Banco de Dados",
      "skills-other": "Outras Habilidades",
      
      // Experience section
      "experience-title": "Experiência Profissional",
      "experience-mobimark-title": "Mobimark",
      "experience-mobimark-position": "Desenvolvedor Full Stack",
      "experience-mobimark-date": "Fevereiro 2023 - Presente",
      "experience-mobimark-li1": "Desenvolvimento front-end com JavaScript, HTML, CSS e utilização dos frameworks React e Vue",
      "experience-mobimark-li2": "Desenvolvimento back-end com PHP utilizando Laravel, além de Java e Kotlin com Spring Boot",
      "experience-mobimark-li3": "Adoção de metodologias ágeis (Scrum, Kanban)",
      "experience-mobimark-li4": "Aplicação dos princípios de Clean Code e SOLID",
      
      "experience-artemis-title": "Artemis TI",
      "experience-artemis-position": "Desenvolvedor Full Stack",
      "experience-artemis-date": "Abril 2018 - Outubro 2021",
      "experience-artemis-li1": "Desenvolvimento front-end utilizando WordPress, HTML, JavaScript e CSS",
      "experience-artemis-li2": "Desenvolvimento back-end com PHP utilizando Symphony, além de Java com Spring Boot",
      
      "experience-seadprev-title": "Seadprev",
      "experience-seadprev-position": "Monitor do programa Nau digital",
      "experience-seadprev-date": "Junho 2022 - Março 2023",
      "experience-seadprev-desc": "Atuei como monitor no programa Nau Digital, auxiliando no desenvolvimento e implementação de soluções digitais.",
      
      "experience-forense-title": "The Forense",
      "experience-forense-position": "Estágio em Segurança de Rede",
      "experience-forense-date": "Julho 2021 - Abril 2022",
      "experience-forense-desc": "Responsável por procurar vulnerabilidades em sistemas através do método Pentest, contribuindo para a segurança de aplicações e redes.",
      
      // Projects section
      "projects-title": "Projetos",
      "project-riomaria-title": "Site institucional Rio Maria",
      "project-riomaria-desc": "Site dedicado à divulgação de produtos e novidades da empresa de alimentos Rio Maria.",
      "project-pokedex-ms-title": "Pokedex Microservice",
      "project-pokedex-ms-desc": "O microserviço PokeDex é uma API REST leve e escalável, desenvolvida com Spring Boot e Kotlin, para consumo da API Pokémon.",
      "project-pokedex-title": "Pokedex",
      "project-pokedex-desc": "Projeto pessoal desenvolvido para praticar habilidades em front-end e consumo de APIs.",
      "project-link-site": "Site",
      "project-link-demo": "Demo",
      
      // Education section
      "education-title": "Formação Acadêmica",
      "education-estacio-title": "Universidade Estácio de Sá",
      "education-estacio-degree": "Bacharelado em Ciência da Computação",
      "education-estacio-date": "2017 - 2021",
      "education-estacio-desc": "Formação em Ciência da Computação com foco em desenvolvimento de software, algoritmos e estruturas de dados.",
      
      "education-ifma-title": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
      "education-ifma-degree": "Técnico em Informática",
      "education-ifma-date": "2013 - 2015",
      "education-ifma-desc": "Formação técnica que forneceu as bases do meu conhecimento em programação e sistemas de informação.",
      
      // Contact section
      "contact-title": "Contato",
      
      // Footer
      "footer-copyright": "© 2025 Mateus Facundes. Todos os direitos reservados."
    }
  };
  
  // Função para aplicar a tradução com base no idioma selecionado
  function applyTranslation(lang) {
    // Atualiza o header
    document.querySelector('header h1').textContent = translations[lang]["header-title"];
    document.querySelector('header p').textContent = translations[lang]["header-subtitle"];
    document.querySelector('header .btn').textContent = translations[lang]["header-btn"];
    
    // Atualiza a navegação
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = translations[lang]["nav-about"];
    navLinks[1].textContent = translations[lang]["nav-experience"];
    navLinks[2].textContent = translations[lang]["nav-projects"];
    navLinks[3].textContent = translations[lang]["nav-education"];
    navLinks[4].textContent = translations[lang]["nav-contact"];
    
    // Atualiza a seção Sobre
    document.querySelector('#about h2').textContent = translations[lang]["about-title"];
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs[0].textContent = translations[lang]["about-p1"];
    aboutParagraphs[1].textContent = translations[lang]["about-p2"];
    
    // Atualiza as categorias de habilidades
    const skillCategories = document.querySelectorAll('.skill-category h3');
    skillCategories[0].textContent = translations[lang]["skills-frontend"];
    skillCategories[1].textContent = translations[lang]["skills-backend"];
    skillCategories[2].textContent = translations[lang]["skills-database"];
    skillCategories[3].textContent = translations[lang]["skills-other"];
    
    // Atualiza a seção de Experiência
    document.querySelector('#experience h2').textContent = translations[lang]["experience-title"];
    
    // Mobimark
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems[0].querySelector('h3').textContent = translations[lang]["experience-mobimark-title"];
    timelineItems[0].querySelector('h4').textContent = translations[lang]["experience-mobimark-position"];
    timelineItems[0].querySelector('.date').textContent = translations[lang]["experience-mobimark-date"];
    const mobimarkLis = timelineItems[0].querySelectorAll('ul li');
    mobimarkLis[0].textContent = translations[lang]["experience-mobimark-li1"];
    mobimarkLis[1].textContent = translations[lang]["experience-mobimark-li2"];
    mobimarkLis[2].textContent = translations[lang]["experience-mobimark-li3"];
    mobimarkLis[3].textContent = translations[lang]["experience-mobimark-li4"];
    
    // Artemis TI
    timelineItems[1].querySelector('h3').textContent = translations[lang]["experience-artemis-title"];
    timelineItems[1].querySelector('h4').textContent = translations[lang]["experience-artemis-position"];
    timelineItems[1].querySelector('.date').textContent = translations[lang]["experience-artemis-date"];
    const artemisLis = timelineItems[1].querySelectorAll('ul li');
    artemisLis[0].textContent = translations[lang]["experience-artemis-li1"];
    artemisLis[1].textContent = translations[lang]["experience-artemis-li2"];
    
    // Seadprev
    timelineItems[2].querySelector('h3').textContent = translations[lang]["experience-seadprev-title"];
    timelineItems[2].querySelector('h4').textContent = translations[lang]["experience-seadprev-position"];
    timelineItems[2].querySelector('.date').textContent = translations[lang]["experience-seadprev-date"];
    timelineItems[2].querySelector('p').textContent = translations[lang]["experience-seadprev-desc"];
    
    // The Forense
    timelineItems[3].querySelector('h3').textContent = translations[lang]["experience-forense-title"];
    timelineItems[3].querySelector('h4').textContent = translations[lang]["experience-forense-position"];
    timelineItems[3].querySelector('.date').textContent = translations[lang]["experience-forense-date"];
    timelineItems[3].querySelector('p').textContent = translations[lang]["experience-forense-desc"];
    
    // Atualiza a seção de Projetos
    document.querySelector('#projects h2').textContent = translations[lang]["projects-title"];
    
    const projectCards = document.querySelectorAll('.project-card');
    // Rio Maria
    projectCards[0].querySelector('h3').textContent = translations[lang]["project-riomaria-title"];
    projectCards[0].querySelector('p').textContent = translations[lang]["project-riomaria-desc"];
    projectCards[0].querySelector('.project-links a').textContent = translations[lang]["project-link-site"];
    
    // Pokedex Microservice
    projectCards[1].querySelector('h3').textContent = translations[lang]["project-pokedex-ms-title"];
    projectCards[1].querySelector('p').textContent = translations[lang]["project-pokedex-ms-desc"];
    
    // Pokedex
    projectCards[2].querySelector('h3').textContent = translations[lang]["project-pokedex-title"];
    projectCards[2].querySelector('p').textContent = translations[lang]["project-pokedex-desc"];
    projectCards[2].querySelector('#demo-link').textContent = translations[lang]["project-link-demo"];
    
    // Atualiza a seção de Educação
    document.querySelector('#education h2').textContent = translations[lang]["education-title"];
    
    const educationItems = document.querySelectorAll('#education .timeline-item');
    // Estácio de Sá
    educationItems[0].querySelector('h3').textContent = translations[lang]["education-estacio-title"];
    educationItems[0].querySelector('h4').textContent = translations[lang]["education-estacio-degree"];
    educationItems[0].querySelector('.date').textContent = translations[lang]["education-estacio-date"];
    educationItems[0].querySelector('p').textContent = translations[lang]["education-estacio-desc"];
    
    // IFMA
    educationItems[1].querySelector('h3').textContent = translations[lang]["education-ifma-title"];
    educationItems[1].querySelector('h4').textContent = translations[lang]["education-ifma-degree"];
    educationItems[1].querySelector('.date').textContent = translations[lang]["education-ifma-date"];
    educationItems[1].querySelector('p').textContent = translations[lang]["education-ifma-desc"];
    
    // Atualiza a seção de Contato
    document.querySelector('#contact h2').textContent = translations[lang]["contact-title"];
    
    // Atualiza o rodapé
    document.querySelector('footer p').textContent = translations[lang]["footer-copyright"];
    
    localStorage.setItem('preferredLanguage', lang);
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.checked = (lang === 'en');
    }
  }
  
  function addLanguageToggle() {
    const langToggleContainer = document.createElement('li');
    langToggleContainer.className = 'lang-toggle-container';
    
    langToggleContainer.innerHTML = `
      <label class="switch">
        <input type="checkbox" id="lang-toggle">
        <span class="slider round">
          <span class="lang-label pt">PT</span>
          <span class="lang-label en">EN</span>
        </span>
      </label>
    `;
    
    // Adicionar o toggle à navbar
    const navLinks = document.querySelector('.nav-links');
    navLinks.appendChild(langToggleContainer);
    
    // Adicionar evento de alteração para o toggle
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('change', function() {
      if (this.checked) {
        applyTranslation('en');
      } else {
        applyTranslation('pt');
      }
    });
    
    const style = document.createElement('style');
    style.textContent = `
      .lang-toggle-container {
        display: flex;
        align-items: center;
        margin-left: 20px;
      }
      
      /* The switch - the box around the slider */
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 30px;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #4361ee;
        transition: .4s;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        z-index: 2;
      }
      
      input:checked + .slider {
        background-color: #48b98a;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #48b98a;
      }
      
      input:checked + .slider:before {
        transform: translateX(30px);
      }
      
      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }
      
      /* Language labels */
      .lang-label {
        position: absolute;
        color: white;
        font-size: 12px;
        font-weight: bold;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.3s ease;
      }
      
      .lang-label.pt {
        left: 7px;
        opacity: 1;
      }
      
      .lang-label.en {
        right: 7px;
        opacity: 0.6;
      }
      
      input:checked + .slider .lang-label.pt {
        opacity: 0.6;
      }
      
      input:checked + .slider .lang-label.en {
        opacity: 1;
      }
      
      @media (max-width: 768px) {
        .lang-toggle-container {
          margin-left: 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  function initializeLanguageSystem() {
    addLanguageToggle();
    
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage) {
      applyTranslation(savedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        applyTranslation('en');
      } else {
        applyTranslation('pt');
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', initializeLanguageSystem);
  
  window.applyTranslation = applyTranslation;
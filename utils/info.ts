let info = {
  hero: {
      primerSubtitulo: "MI PORTAFOLIO",
      tituloPrincipal: "FULL STACK DEVELOPER",
      segundoSubitulo: "Hola, soy Nahuel Soaje.",
      btnText: "Mis Proyectos"
  },
  aboutme: {
      title: "Sobre mi",
      mainText: ", un apasionado desarrollador web. Me especializo en el backend y frontend, siendo un desarrollador FullStack. Mi interes por la resolución de problemas me motiva a buscar continuamente nuevas oportunidades de aprendizaje y crecimiento. Con sólidos conocimientos en tecnologías web, estoy listo para enfrentar cualquier desafío. ¡Espero construir algo grandioso juntos!",
      subtitle: "Datos Personales",
      englishL: "Ingles - nivel: Basico",
      spanishL: "Español - nivel: Nativo C2",
      educacion: [
          {
              institute: "Digital House",
              degree: 'Full Stack Tech Developer',
              period: "AGOSTO 2022 - JULIO 2024"
          },
          {
              institute: "Universidad Tecnologica Nacional",
              degree: 'ing.sistemas',
              period: "MARZO 2020 - JUNIO 2021"
          },
          {
              institute: "Colegio Mariano Fragueiro",
              degree: 'Bachiller En Economia y Administracion',
              period: "MARZO 2014 - DICIEMBRE 2019"
          },
      ]
  },
  skillsUse: [
      { name: 'bootstrap' },
      { name: 'css' },
      { name: 'docker' },
      { name: 'figma' },
      { name: 'git' },
      { name: 'github' },
      { name: 'html' },
      { name: 'java' },
      { name: 'js' },
      { name: 'materialui' },
      { name: 'nextjs' },
      { name: 'npm' },
      { name: 'postman' },
      { name: 'react' },
      { name: 'spring' },
      { name: 'tailwind' },
      { name: 'ts' },
      { name: 'vite' },
      { name: 'vscode' },

  ],
  skillsKnown: [
      { name: 'arduino' },
      { name: 'aws' },
      { name: 'bash' },
      { name: 'bootstrap' },
      { name: 'css' },
      { name: 'docker' },
      { name: 'figma' },
      { name: 'git' },
      { name: 'github' },
      { name: 'html' },
      { name: 'idea' },
      { name: 'java' },
      { name: 'js' },
      { name: 'jest' },
      { name: 'materialui' },
      { name: 'nextjs' },
      { name: 'npm' },
      { name: 'postgres' },
      { name: 'postman' },
      { name: 'powershell' },
      { name: 'react' },
      { name: 'sass' },
      { name: 'spring' },
      { name: 'tailwind' },
      { name: 'terraform' },
      { name: 'threejs' },
      { name: 'ts' },
      { name: 'ubuntu' },
      { name: 'vite' },
      { name: 'vscode' },
      { name: 'ubuntu' },

  ],

  navItems : [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Sobre mi",
        link: "#aboutme-section",
      },
      {
        name: "Skills",
        link: "#skills-section",
      },
      {
        name: "Proyectos",
        link: "#proyectos-section",
      },
      {
        name: "Contacto",
        link: "#contact-section",
      }
    ],

  proyectos:{
    rentstudio:{
      title: "Rent Studio",
      description: "App para renta de servicios y equipos fotograficos",
      extraDetail: "El proyecto se llevó a cabo utilizando la metodología SCRUM a lo largo de 4 sprints, con una duración de 14 días cada uno. La aplicación fue desarrollada principalmente con Spring Boot en Java, ReactJS y Tailwind CSS, además de integrar bibliotecas como MUI. Mi rol en este proyecto fue de Fullstack Developer y Scrum Master Mayor mente como Front-end. Lideré al equipo, asegurando que cada miembro alcanzara su máximo potencial y que las tareas se organizaran eficientemente dentro del tiempo disponible.",
      demo: "https://dh.jackmoon.dev",
      imageUrl: "/images/DH/logoRS.png",
      github: "https://github.com/orgs/1774-ProyectoIntegrador/repositories",
      projectImages: [
        "/images/DH/homeRS.png",
        "/images/DH/nuevoProductoRS.png",
        "/images/DH/adminDbRS.png",
        "/images/DH/reservaRS.png",
      ]
    },
    odontologia:{
      title: "clinica odontologica",
      description: "elije odontologos",
      extraDetail: "El proyecto se llevó a cabo utilizando la metodología SCRUM a lo largo de 1 sprint, con una duración de 7 días. La aplicación fue desarrollada con react+vite,este proyecto fue de FrontEnd Developer .",
      demo: "https://ctd-esp-fe3-fina-omega.vercel.app/",
      imageUrl: "/images/proyectos/odontologia/odontologia.png",
      projectImages: [
        "/images/proyectos/odontologia/odontologia-Contacto.png",
        "/images/proyectos/odontologia/odontologia-favs.png",
      
      ]
    },
  }
}

export default info;
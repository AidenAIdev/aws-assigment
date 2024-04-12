import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitIcon6,
    benefitImage2,
    benefitImage1,
    benefitImage3,
    benefitImage4,
    benefitImage5,
    benefitImage6,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    leaderBoard,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Cómo usar",
      url: "#how-to-use",
    },
    {
      id: "2",
      title: "Precios",
      url: "#pricing",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Nueva cuenta",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Ingresa",
      url: "#login",
      onlyMobile: true,
    },
  ];

  export const heroIcons = [homeSmile, file02, searchMd, plusSquare, leaderBoard];

  export const notificationImages = [notification4, notification3, notification2];


  export const aiagencyServices = [
    "Generación de fotos",
    "Mejora de fotos",
    "Integración perfecta",
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Investigación de Público Objetivo",
      text: "Conoce a tu audiencia mediante una investigación profunda basada en datos demográficos, intereses, género y edad, para identificar el target objetivo de tu campaña de marketing.",
      date: "Noviembre 2023",
      status: "completado",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Estrategia Creativa",
      text: "Genera una estrategia única para tu campaña de marketing, incluyendo el 'reason why', objetivos, tono y estilo, todo impulsado por la inteligencia artificial para cautivar a tu audiencia.",
      date: "Noviembre 2023",
      status: "en progreso",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Ideas Creativas",
      text: "Obtén ideas innovadoras para tu campaña, adaptadas a diferentes medios de publicación, desde videos en YouTube hasta anuncios de audio en plataformas como Spotify, todo gracias a la inteligencia artificial.",
      date: "Diciembre 2023",
      status: "completado",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Creación de Anuncios de Audio",
      text: "Potencia tu marca con anuncios de audio impactantes, como los audios publicitarios de radio o Spotify, creados para destacar y llegar a tu audiencia de manera efectiva.",
      date: "Enero 2024",
      status: "en progreso",
      imageUrl: roadmap4,
    },
  ];
  
    export const collabText =
    "Con nuestra plataforma de creación de campañas publicitarias y herramientas avanzadas, ofrecemos una solución integral para impulsar la creatividad y el éxito en tus proyectos de marketing.";

  
    export const pricing = [
      {
        id: "0",
        title: "Básico",
        description: "Desbloquea las funcionalidades esenciales para lanzar tu campaña publicitaria con estilo.",
        price: "$9.99",
        features: [
          "Crea tu marca y campaña publicitaria",
          "Investigación de Público Objetivo",
          "Estrategia Creativa",
          "Ideas Creativas",
          "Creación de Anuncios de Audio",
          "Obtén 100 créditos gratis",
        ],
      },
      {
        id: "1",
        title: "Premium",
        description: "Lleva tu campaña al siguiente nivel con acceso completo a todas las herramientas avanzadas y soporte prioritario.",
        price: "$19.99",
        features: [
          "Todas las características del plan Básico",
          "Análisis Avanzado de Campañas",
          "Soporte Prioritario",
          "Actualizaciones Exclusivas",
          "Obtén 100 créditos gratis",
        ],
      },
      {
        id: "2",
        title: "Empresa",
        description: "Potencia tu negocio con funcionalidades personalizadas y soporte dedicado.",
        price: "Personalizado",
        features: [
          "Funcionalidades personalizadas",
          "Soporte Dedicado",
          "Integración con Herramientas Empresariales",
          "Gestión de Usuarios",
          "Obtén 300 créditos gratis",
        ],
      },
    ];
    
  export const benefits = [
    {
      id: "0",
      title: "Crea tu marca, nosotros nos encargamos del resto",
      text: "Ingresa los datos de tu marca, tu objetivo y el logo, nosotros reconocemos los colores de tu logo y creamos una campaña publicitaria personalizada para ti.",
      backgroundUrl: "../src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage1,
    },
    {
      id: "1",
      title: "Inteligencia de Audiencia",
      text: "Descubre a tu audiencia ideal mediante una investigación profunda que analiza datos demográficos, intereses y comportamientos, proporcionando un target objetivo preciso para tu campaña.",
      backgroundUrl: "../src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage3,
      light: true,
    },
    {
      id: "2",
      title: "Estrategia Creativa",
      text: "Desata tu creatividad con una estrategia única generada por IA que incluye el 'reason why', objetivos, tono y estilo, para cautivar a tu audiencia de manera impactante. Antes lo tenias que hacer tu, ahora lo hacemos nosotros.",
      backgroundUrl: "../src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Inspiración Ilimitada",
      text: "Obtén ideas frescas y originales para tu campaña adaptadas a cada medio de publicación, desde videos en YouTube hasta anuncios en redes sociales, todo alimentado por IA.",
      backgroundUrl: "../src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage4,
      light: true,
    },
    {
      id: "4",
      title: "Planificación Eficaz",
      text: "Optimiza tu presupuesto con una tabla detallada de planificación que sugiere los mejores medios para tu campaña, todo respaldado por la inteligencia artificial.",
      backgroundUrl: "../src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage5,
    },
    {
      id: "5",
      title: "Creatividad Sin Límites",
      text: "Deja volar tu imaginación con la generación de imágenes publicitarias y textos complementarios creados por IA, listos para impactar en Instagram, Google y más.",
      backgroundUrl: "../src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon6,
      imageUrl: benefitImage6,
    },
  ];
  
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];
  
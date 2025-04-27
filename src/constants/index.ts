// ================== IMPORTATIONS DES TYPES ==================
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

// ================== IMPORTATIONS DES RESSOURCES ==================
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// ================== LIENS DE NAVIGATION ==================
export const navLinks: TNavLink[] = [
  { id: "about", title: "À propos" },
  { id: "work", title: "Projets" },
  { id: "contact", title: "Contact" },
];

// ================== SERVICES ==================
export const services: TService[] = [
  { title: "Développeur Web", icon: web },
  { title: "Développeur Mobile (React Native)", icon: mobile },
  { title: "Développeur Backend", icon: backend },
  { title: "Créateur de Contenu Digital", icon: creator },
];

// ================== TECHNOLOGIES ==================
export const technologies: TTechnology[] = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

// ================== EXPÉRIENCES ==================
export const experiences: TExperience[] = [
  {
    title: "Développeur Frontend React.js",
    companyName: "Startup Innovante",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mars 2022 - Présent",
    points: [
      "Création d'interfaces modernes et responsives avec React.js.",
      "Optimisation des performances d'applications web.",
      "Collaboration avec des designers pour améliorer l'UX/UI.",
      "Participation à des projets de grande ampleur en équipe Agile.",
    ],
  },
  {
    title: "Développeur Mobile React Native",
    companyName: "Application Créative",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Avril 2021 - Février 2022",
    points: [
      "Développement d'applications mobiles cross-plateformes.",
      "Mise en œuvre de notifications push et de services géolocalisés.",
      "Amélioration de la fluidité et réduction du temps de chargement.",
      "Collaboration étroite avec des équipes produits et marketing.",
    ],
  },
  {
    title: "Développeur Backend Node.js",
    companyName: "Agence Digitale",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janvier 2020 - Mars 2021",
    points: [
      "Conception et développement d'APIs REST robustes avec Node.js.",
      "Mise en place de bases de données MongoDB sécurisées et performantes.",
      "Gestion de l'authentification et des autorisations utilisateur.",
      "Déploiement d'applications sur des serveurs cloud (AWS, Heroku).",
    ],
  },
  {
    title: "Créateur de Contenu Informatique",
    companyName: "Chaîne TikTok & YouTube",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janvier 2024 - Présent",
    points: [
      "Production de vidéos éducatives sur la programmation.",
      "Partage d'astuces de développement et de motivation quotidienne.",
      "Animation de lives pour discuter de projets tech et coder en direct.",
      "Construction d'une communauté passionnée autour du code et de la tech.",
    ],
  },
];

// ================== TÉMOIGNAGES ==================
export const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Un développeur passionné, capable de parler de code avec une énergie incroyable pendant des heures.",
    name: "Amine B.",
    designation: "Collaborateur",
    company: "Projet Freelance",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Un créateur inspirant qui partage ses connaissances avec bienveillance et maîtrise technique.",
    name: "Fatima L.",
    designation: "Étudiante",
    company: "Communauté Codeurs",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    testimonial:
      "Grâce à ses conseils, j'ai pu améliorer mes compétences en développement web de manière spectaculaire.",
    name: "Yacine M.",
    designation: "Développeur Junior",
    company: "Bootcamp Tech",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

// ================== PROJETS ==================
export const projects: TProject[] = [
  {
    name: "Plateforme d'Apprentissage de la Programmation",
    description:
      "Une plateforme interactive pour apprendre le développement web et mobile à travers des vidéos, des quiz, et des projets pratiques.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Application Mobile pour Créateurs de Contenu",
    description:
      "Une application pour planifier, enregistrer et publier du contenu sur TikTok, YouTube, et Instagram facilement.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "expo", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Dashboard Personnel pour Suivi de Projets",
    description:
      "Un tableau de bord personnel pour suivre l'évolution de tes projets, tes vidéos, et tes publications sur les réseaux sociaux.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

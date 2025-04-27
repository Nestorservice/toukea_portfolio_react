type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nestor Corneille — Software Développeur",
    fullName: "Nestor Corneille",
    email: "nestorcorneille@gmail.com",
  },
  hero: {
    name: "Nestor Corneille",
    p: [
      "Développeur passionné, créateur de contenu sur TikTok, YouTube et Instagram",
      "Je peux parler de programmation et d'informatique pendant des heures !"
    ],
  },
  contact: {
    p: "Entrons en contact",
    h2: "Contact.",
    form: {
      name: {
        span: "Ton Nom",
        placeholder: "Comment t'appelles-tu ?",
      },
      email: { 
        span: "Ton Email", 
        placeholder: "Quel est ton email ?" 
      },
      message: {
        span: "Ton Message",
        placeholder: "Que souhaites-tu dire ?",
      },
    },
  },
  sections: {
    about: {
      p: "Présentation",
      h2: "Aperçu.",
      content: `Je suis un développeur passionné avec de solides compétences en développement web 
      (PHP, Symfony, Flask, React, React Native CLI, Node.js). J'adore apprendre et partager mes connaissances.
      Je suis aussi créateur de contenu, prêt à inspirer la communauté tech à travers des plateformes
      comme TikTok, YouTube et Instagram. Travaillons ensemble pour donner vie à vos projets les plus ambitieux !`,
    },
    experience: {
      p: "Mon parcours",
      h2: "Expérience professionnelle.",
    },
    feedbacks: {
      p: "Ce qu'on dit de moi",
      h2: "Témoignages.",
    },
    works: {
      p: "Mes réalisations",
      h2: "Projets.",
      content: `Chaque projet présenté illustre mes compétences techniques et mon goût pour la résolution de problèmes.
      Ils démontrent ma capacité à utiliser différents langages, frameworks et technologies pour livrer
      des solutions efficaces, performantes et orientées utilisateur.`,
    },
  },
};

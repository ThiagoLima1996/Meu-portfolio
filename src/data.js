//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

import { DiScrum } from "react-icons/di";

// projects images
import Project1 from './assets/img/projects/breve.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';



// navigation
export const navigation = [
  {
    name: 'Início',
    href: 'home',
  },
  {
    name: 'Sobre',
    href: 'about',
  },
  {
    name: 'Projetos',
    href: 'portfolio',
  },
  {
    name: 'Serviços',
    href: 'services',
  },
  {
    name: 'Contato',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/ThiagoLima1996',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/thiago-lima-leite-30a4a5218/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'Freelancer',
  },
  {
    id: '2',
    image: Project1,
    name: 'project name 2',
    category: 'Pessoal',
  },
  {
    id: '3',
    image: Project1,
    name: 'project name 3',
    category: 'Freelancer',
  },
  {
    id: '5',
    image: Project1,
    name: 'project name 5',
    category: 'Pessoal',
  },
  {
    id: '6',
    image: Project1,
    name: 'project name 6',
    category: 'Pessoal',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Freelancer',
  },
  {
    name: 'Pessoal',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  }
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Desenvolvimento Web',
    description:
      'Crio sites com layout que se adapta a qualquer tipo de tela.',
  },
  {
    icon: <FiSettings />,
    name: 'Clean code',
    description:
      'Codigos limpos bem desenvolvido de facil manutenção e totalmente reaproveitaveis',
  },
  {
    icon: <FiGithub />,
    name: 'Git/GitHub',
    description:
      'plataforma em que profissionais de TI usam para compartilhar os códigos no Git com outros desenvolvedores.',
  },
  {
    icon: <DiScrum />,
    name: 'Scrum',
    description:
      'O Scrum é um framework que contém um conjunto de conceitos, práticas e ferramentas para gerenciar projetos de forma ágil.',
  }
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tem alguma duvida?',
    subtitle: 'Estou aqui para ajudar',
    description: 'envie um Email para thiago.lima.leite@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Localização atual',
    subtitle: 'Rio de Janeiro, duque de caxias',
    description: 'Disponivél para home office',
  },
];

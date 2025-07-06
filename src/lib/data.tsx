import { Github, Twitter, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoJava from "/public/images/logos/java-svgrepo-com.svg";
import LogoBootstrap from "/public/images/logos/icons-bootstrap.svg";
import LogoPython from "/public/images/logos/python-svgrepo-com.svg";
import LogoVSCode from "/public/images/logos/vs-code-svgrepo-com.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoVStudio from "/public/images/logos/visual-studio-svgrepo-com.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoSqlServer from "/public/images/logos/microsoft-sql-server-logo-svgrepo-com.svg";
import LogoMySql from "/public/images/logos/mysql-svgrepo.svg";
import LogoMUI from "/public/images/logos/material-ui-svgrepo-com.svg";
import LogoCss from "/public/images/logos/css-3-svgrepo-com.svg";
import LogoHtml from "/public/images/logos/html-5-svgrepo-com.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoNSG from "/public/images/logos/logo.png";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectVasavi from "/public/images/vasaviTrust.png";
import DevTinder from "/public/images/DevTinder.png";
import MernLMSPage from "/public/images/MERN_LMS.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/KedharNadhG",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://twitter.com/shahsagarm",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/KedharNadhG",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/kedharnadhg",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Java",
    logo: LogoJava,
    url: "https://www.java.com/en/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },

  {
    label: "Bootstrap",
    logo: LogoBootstrap,
    url: "https://getbootstrap.com/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "Visual Studio",
    logo: LogoVStudio,
    url: "https://visualstudio.microsoft.com/",
  },
  {
    label: "VS Code",
    logo: LogoVSCode,
    url: "https://code.visualstudio.com/docs",
  },
  {
    label: "MySql",
    logo: LogoMySql,
    // darkModeLogo: LogoCypressLight,
    url: "https://www.mysql.com/",
  },
  {
    label: "MS SqlServer",
    logo: LogoSqlServer,
    url: "https://www.microsoft.com/en-in/sql-server",
  },
  {
    label: "MUI",
    logo: LogoMUI,
    url: "https://mui.com/",
  },
  {
    label: "HTML 5",
    logo: LogoHtml,
    url: "https://html.com/",
  },
  {
    label: "CSS",
    logo: LogoCss,
    url: "https://web.dev/learn/css",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoNSG,
    logoAlt: "NSG logo",
    position: "Jr. Software Developer",
    startDate: new Date(2023, 2),
    endDate: new Date(2024, 6),
    // currentlyWorkHere: true,
    summary: [
      "Worked for various clients like VasaviTrust, BSES, and in some In-House Projects.",
      "Worked with a variety of technologies, including  Node.js, Express.js, JS, jQuery, Web Api, MS SqlServer, Tailwindcss, Bootstrap, Asp.Net Core, and others.",
    ],
  },
  // {
  //   logo: LogoGreenApex,
  //   darkModeLogo: LogoGreenApexLight,
  //   logoAlt: 'Greenapex logo',
  //   position: 'Team Lead',
  //   startDate: new Date(2017, 6),
  //   endDate: new Date(2021, 9),
  //   summary: [
  //     'Acted as team lead in different projects.',
  //     'Brainstormed new ideas & gathered requirements for internal projects.',
  //     'Designed architecture of different projects (frontend + backend).',
  //     'Worked on enterprise-level projects for a variety of clients.',
  //     'Handled sprint planning & task distribution.',
  //   ],
  // },
  // {
  //   logo: LogoDotnpixel,
  //   darkModeLogo: LogoDotnpixelLight,
  //   logoAlt: 'Dotnpixel logo',
  //   position: 'Full Stack Developer',
  //   startDate: new Date(2015, 11),
  //   endDate: new Date(2017, 4),
  //   summary: ['Worked as a full stack developer (React / Laravel).'],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "DevTinder",
    description:
      "A Tinder-style MERN stack networking platform for developers to connect, chat in real time, and manage profiles. Features include 1:1 WebSocket chat, daily AWS SES email digests via Cron Jobs, secure JWT cookie-based authentication, and responsive UI with DaisyUI and theme switching.",
    url: "http://43.204.230.77",
    previewImage: DevTinder,
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "AWS EC2",
      "AWS SES",
      "Cron Jobs",
      "Redux Toolkit",
      "DaisyUI",
      "JWT",
      "NGINX",
      "PM2",
    ],
  },
  {
    name: "Vasavi Trust",
    description:
      "A platform for efficient room bookings, donor management, and resource allocation with real-time updates and concurrency control across multiple branches.",
    url: "http://202.53.11.74/VasaviTrust/MasterLogin.aspx",
    previewImage: ProjectVasavi,
    technologies: [
      "C#",
      "ASP.NET Web API",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "MS SQL Server",
      "Twilio",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "LMS using MERN Stack",
    description:
      "A full-stack LMS platform for instructors and students, enabling course creation, enrollment, secure payments via PayPal, and seamless media management with Cloudinary. Built with MERN stack, Shadcn UI, and Tailwind CSS for an optimized learning experience.",
    url: "https://mern-lms-ua9r.vercel.app",
    previewImage: MernLMSPage,
    technologies: [
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwindcss",
      "Shadcn UI",
      "Context API",
      "PayPal",
      "Cloudinary",
      "JWT",
    ],
  },
  // {
  //   name: 'Fiskil',
  //   description:
  //     'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
  //   url: 'https://fiskil.com.au',
  //   previewImage: ProjectFiskil,
  //   technologies: [
  //     'React',
  //     'Next.js',
  //     'Typescript',
  //     'Tailwindcss',
  //     'Material UI',
  //     'Redux Toolkit',
  //     'React Query',
  //     'Express.js',
  //     'PostgreSQL',
  //     'Firebase',
  //     'AWS Amplify',
  //     'Cypress',
  //     'Storybook',
  //   ],
  // },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];

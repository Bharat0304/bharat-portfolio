import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'ALA MODE Technologies Pvt. Ltd.',
    position: 'Full Stack Developer Intern',
    location: 'New Delhi, India',
    image: '/company/loop.png',
    description: [
      'Developed and integrated a Chatbot and Email Automation System to enhance user engagement and streamline client communication.',
      'Built RESTful APIs using Node.js and Express.js, ensuring efficient, secure, and scalable backend operations.',
      'Implemented automated email reminders using Nodemailer and Node-cron, reducing manual workload and improving response consistency.',
      'Designed and optimized PostgreSQL database queries for structured data management and seamless data retrieval.',
      'Collaborated with frontend team to integrate APIs with a React-based chatbot, ensuring real-time data exchange and dynamic user interaction.',
      'Followed Agile methodology, participated in code reviews, and maintained project documentation using GitHub.',
      'Focused on backend automation, performance optimization, and clean code architecture, resulting in improved communication efficiency across the platform.',
    ],
    startDate: 'June 2025',
    endDate: 'July 2025',
    technologies: [
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Postman', href: 'https://www.postman.com/', icon: <Postman /> },
    ],
    website: '#',
    github: '#',
    linkedin: '#',
  },
];

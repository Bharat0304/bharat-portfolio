import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Proofly',
    description:
      'Testimonial management platform to record, collect, and embed video/text testimonials with admin dashboard and privacy controls.',
    image: '/project/notesbuddy.png',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    link: '#',
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
  {
    title: 'HoloVerse',
    description:
      '3D metaverse collaboration platform for meetings, classes, and events with spatial voice and avatars.',
    image: '/project/quest.png',
    technologies: [
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    link: '#',
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
  {
    title: 'Workspace AI',
    description:
      'AI tool that detects distractions during online study and blocks unrelated apps/tabs with privacy-first design.',
    image: '/project/intent.png',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    link: '#',
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
  {
    title: 'Counsel Plus',
    description:
      'Smart document verification and admission management system with role-based access, live tracking, and analytics.',
    image: '/project/appwrite.png',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    link: '#',
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
];

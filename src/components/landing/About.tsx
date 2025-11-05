import { about, mySkills } from '@/config/About';
import { heroConfig } from '@/config/Hero';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col-reverse gap-8 md:flex-row md:items-start">
        {/* Profile photo */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden ring-1 ring-white/10 bg-yellow-300">
          <Image
            src={heroConfig.avatar}
            alt={about.name}
            fill
            sizes="(max-width: 768px) 12rem, 16rem"
            className="object-cover"
          />
        </div>

        {/* Text and skills */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="size-6 hover:scale-110 transition-transform">{skill}</div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

"use client"

import React, { useEffect, useState } from "react"
import experiences from "@/data/experiences"
import educations from "@/data/education"
import projects from "@/data/projects"
import highlights from "@/data/adhoc"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Search } from "@/components/Search"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  ExternalLink,
  MapPin,
  Code2,
} from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fadeInUp}
      className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-5"
    >
      {children}
    </motion.h2>
  )
}

// Gradient backgrounds for project cards
const projectGradients = [
  "from-violet-50 via-blue-50 to-cyan-50",
  "from-amber-50 via-orange-50 to-rose-50",
  "from-emerald-50 via-teal-50 to-cyan-50",
]

// Emoji icons for companies
const companyEmojis: Record<string, string> = {
  "ALA MODE Technologies Pvt. Ltd.": "�",
}

const schoolEmojis: Record<string, string> = {
  "Maharaja Surajmal Institute of Technology": "🎓",
}

const highlightEmojis = ["🏆", "👨‍💻", "📄"]

// Skill categories
const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Web Dev",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Vite",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      "Git",
      "GitHub",
      "Prisma ORM",
      "MongoDB",
      "SQL",
      "Docker",
      "DevOps",
      "Turborepo",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentYear = new Date().getFullYear()

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-6 right-6 z-[6000] flex items-center gap-3">
        <Search />
        <ThemeSwitcher />
      </div>
      <Navbar />
      {/* Subtle noise overlay */}
      <div className="noise" />

      {/* Background grid */}
      <div className="fixed inset-0 z-0 bg-grid pointer-events-none" />

      {/* Main content */}
      <main className="relative z-10 max-w-[640px] mx-auto px-5 sm:px-6 py-12 sm:py-20">
        {/* ===== HERO / HEADER ===== */}
        <motion.header
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mb-10"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-5"
          >
            <Link href="/" className="group relative">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-zinc-100 dark:ring-white/10 group-hover:ring-zinc-200 dark:group-hover:ring-white/20 transition-all duration-300 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <Image
                  src="/profile.jpg"
                  alt="Bharat Kumar"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-zinc-950" />
            </Link>

            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground tracking-tight">
                Bharat Kumar
              </h1>
              <p className="text-[13.5px] text-muted-foreground mt-0.5 flex items-center gap-1.5">
                Full Stack Developer &middot; AI &amp; Web3
                <span className="inline-flex items-center gap-0.5 opacity-80">
                  <MapPin className="w-3 h-3" /> Delhi
                </span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              {[
                {
                  href: "https://github.com/Bharat0304",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/bharat-kumar-009756239/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://x.com/Bharat84265",
                  icon: Twitter,
                  label: "X",
                },
                {
                  href: "mailto:k.bharatkumar815@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-[17px] h-[17px]" strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="section-divider" />

          <motion.div
            variants={fadeInUp}
            className="mt-5 space-y-3 text-[14.5px] text-muted-foreground leading-[1.7]"
          >
            <p>
              Coding, lifting, and running &mdash; a CSE student building
              scalable systems and working as a full-stack developer.
            </p>
            <p>
              I enjoy working across the full stack and experimenting with
              technologies like AI, Web3, and modern web frameworks to build
              impactful products.
            </p>
          </motion.div>
        </motion.header>

        {/* ===== EXPERIENCE ===== */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-12"
          id="experience"
        >
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-1">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="group flex items-start gap-3.5 p-3.5 rounded-xl border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-250">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex-shrink-0 flex items-center justify-center text-lg">
                    {companyEmojis[exp.title] || "🏢"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[14px] font-medium text-foreground truncate">
                        {exp.title}
                      </p>
                    </div>
                    <p className="text-[12.5px] text-muted-foreground truncate mt-0.5">
                      {exp.subtitle} &middot; {exp.duration}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {exp.details.map((detail, j) => (
                        <li
                          key={j}
                          className="text-[12px] text-muted-foreground leading-relaxed flex items-start gap-1.5"
                        >
                          <span className="text-zinc-300 mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== EDUCATION ===== */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-12"
          id="education"
        >
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-1">
            {educations.map((edu, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="group flex items-start gap-3.5 p-3.5 rounded-xl border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-250">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex-shrink-0 mt-0.5 flex items-center justify-center text-lg">
                    {schoolEmojis[edu.name] || "🏫"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-foreground">
                      {edu.name}
                    </p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">
                      {edu.degree} &middot; {edu.duration} &middot;{" "}
                      <span className="text-foreground/80 font-medium">
                        {edu.grade}
                      </span>
                    </p>
                    <p className="text-[12.5px] text-muted-foreground mt-1.5 leading-relaxed">
                      {edu.brief}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== PROJECTS ===== */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-12"
          id="projects"
        >
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((proj, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black hover:border-zinc-200 dark:hover:border-zinc-800 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all duration-300"
                >
                  {/* Image/Gradient placeholder */}
                  <div
                    className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3.5 flex items-center justify-center bg-transparent"
                  >
                    {proj.image ? (
                      <div className="relative w-full h-full p-6">
                        <Image
                          src={proj.image}
                          alt={proj.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500 dark:mix-blend-lighten"
                        />
                      </div>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${projectGradients[i % projectGradients.length]}`} />
                    )}
                    
                    {proj.status && (
                      <div className="absolute top-2 right-2 z-10">
                        <span className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-black/10 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-full text-zinc-900 dark:text-zinc-100 shadow-sm animate-pulse-slow">
                          {proj.status}
                        </span>
                      </div>
                    )}
                    
                    {!proj.image && (
                      <div className="relative text-center z-10">
                        <p className="text-2xl mb-1 opacity-60">
                          {["🤖", "🧠", "🎥", "🚀"][i % 4]}
                        </p>
                        <p className="text-[10px] font-medium text-zinc-400/80 tracking-wide uppercase">
                          {proj.name}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {proj.name}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-[12.5px] text-muted-foreground leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tech
                        .split(", ")
                        .slice(0, 3)
                        .map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-medium text-muted-foreground bg-secondary/50 rounded-md border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      {proj.tech.split(", ").length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] font-medium text-muted-foreground/60 bg-secondary/30 rounded-md border border-border/50">
                          +{proj.tech.split(", ").length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== ACHIEVEMENTS & HIGHLIGHTS ===== */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-12"
          id="highlights"
        >
          <SectionHeading>Achievements &amp; Highlights</SectionHeading>
          <div className="space-y-1">
            {highlights.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="group flex items-center gap-3.5 p-3.5 rounded-xl border border-transparent hover:border-border hover:bg-card hover:shadow-sm transition-all duration-250">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary border border-border flex-shrink-0 flex items-center justify-center text-xl">
                    {highlightEmojis[i] || "⭐"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="text-[12.5px] text-muted-foreground mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex-shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== SKILLS ===== */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-12"
          id="skills"
        >
          <SectionHeading>Skills</SectionHeading>
          <div className="space-y-4">
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={fadeInUp}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-300 dark:text-zinc-600 mb-2">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-[12px] font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg hover:border-zinc-200 dark:hover:border-zinc-700 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== CONTACT ===== */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-8"
        >
          <motion.div variants={fadeInUp} className="section-divider mb-8" />
          <motion.div variants={fadeInUp} className="text-center space-y-3">
            <p className="text-[14px] text-zinc-500 dark:text-zinc-400">
              Want to talk?{" "}
              <Link
                href="mailto:k.bharatkumar815@gmail.com"
                className="text-zinc-800 dark:text-zinc-200 font-medium hover:text-zinc-600 dark:hover:text-zinc-400 underline underline-offset-4 decoration-zinc-200 dark:decoration-zinc-800 hover:decoration-zinc-400 dark:hover:decoration-zinc-600 transition-colors"
              >
                Mail me
              </Link>
            </p>
          </motion.div>
        </motion.section>

        {/* ===== FOOTER ===== */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 pb-10 text-center"
        >
          <div className="flex justify-center gap-4 mb-5">
            {[
              { href: "https://github.com/Bharat0304", icon: Github },
              {
                href: "https://www.linkedin.com/in/bharat-kumar-009756239/",
                icon: Linkedin,
              },
              { href: "https://x.com/Bharat84265", icon: Twitter },
              {
                href: "https://leetcode.com/u/dmjnn1y7v8/",
                icon: Code2,
              },
            ].map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground/40 hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
          <p className="text-[11px] font-medium tracking-[0.08em] text-muted-foreground/50 uppercase">
            &copy; {currentYear} Bharat Kumar
          </p>
        </motion.footer>
      </main>
    </div>
  )
}

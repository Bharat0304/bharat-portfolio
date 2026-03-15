"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { cn } from "@workspace/ui/lib/utils";
import { ReactNode } from "react";


export const FloatingNav = ({
  navItems,
  className,
  children,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: ReactNode;
  }[];
  className?: string;
  children?: ReactNode;
}) => {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed bottom-10 inset-x-0 mx-auto border border-zinc-200 dark:border-white/20 rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative px-4 py-2 dark:text-neutral-50 items-center justify-center flex text-neutral-600 dark:hover:text-primary hover:text-primary transition-colors duration-200"
            )}
            title={navItem.name}
          >
            <span className="flex items-center justify-center w-5 h-5">{navItem.icon}</span>
          </a>
        ))}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

"use client"

import React from "react"
import { FloatingNav } from "@workspace/ui/components/ui/floating-navbar"
import { ThemeSwitcher } from "./theme-switcher"

import {
    Home,
    Briefcase,
    GraduationCap,
    Code,
    Cpu
} from "lucide-react"

export default function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4" />,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <Briefcase className="h-4 w-4" />,
        },
        {
            name: "Education",
            link: "#education",
            icon: <GraduationCap className="h-4 w-4" />,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: <Code className="h-4 w-4" />,
        },
        {
            name: "Skills",
            link: "#skills",
            icon: <Cpu className="h-4 w-4" />,
        },
    ]

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    )
}
"use client"

import React, { useEffect, useState, useCallback } from "react"
import {
    SearchIcon,
    Home,
    Briefcase,
    GraduationCap,
    Code,
    Cpu,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Sun,
    Moon,
    Monitor,
    X,
    Trophy,
    User,
    Command as CommandIcon,
} from "lucide-react"
import { Command } from "cmdk"
import * as Dialog from "@radix-ui/react-dialog"
import { useTheme } from "next-themes"
import { cn } from "@workspace/ui/lib/utils"
import { useRouter } from "next/navigation"
import projects from "@/data/projects"


export function Search() {
    const [open, setOpen] = useState(false)
    const { setTheme } = useTheme()
    const router = useRouter()

    // Keyboard shortcut handler
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            {/* Search Trigger (Navbar/Fixed Button) */}
            <button
                onClick={() => setOpen(true)}
                className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-sm",
                    "text-zinc-500 dark:text-zinc-400"
                )}
            >
                <SearchIcon className="w-4 h-4" />
                <span className="text-[13px] font-medium hidden sm:inline-block">Search...</span>
                <div className="flex items-center gap-0.5 ml-2 py-0.5 px-1.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                    <CommandIcon className="w-2.5 h-2.5" />
                    <span className="text-[10px] font-bold">K</span>
                </div>
            </button>

            {/* Command Palette Dialog */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-[6000] bg-zinc-950/20 backdrop-blur-[2px] animate-in fade-in duration-200" />
                    <Dialog.Content   className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[6000] w-full max-w-[550px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl animate-in zoom-in-95 fade-in duration-200">
                        <Command className="flex flex-col h-full w-full">
                            {/* Search Input */}
                            <div className="flex items-center border-b border-zinc-100 dark:border-zinc-900 px-4 py-3">
                                <SearchIcon className="w-4 h-4 text-zinc-400 mr-3" />
                                <Command.Input
                                    autoFocus
                                    placeholder="Type a command or search..."
                                    className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-zinc-400 text-zinc-800 dark:text-zinc-100"
                                />
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    <X className="w-4 h-4 text-zinc-400" />
                                </button>
                            </div>

                            {/* Results Scroll Area */}
                            <Command.List className="max-h-[380px] overflow-y-auto p-2">
                                <Command.Empty className="py-12 text-center text-sm text-zinc-400">
                                    No results found.
                                </Command.Empty>

                                {/* Navigation Group */}
                                <Command.Group heading="Navigation" className="px-2 pb-2">
                                    <NavItem icon={Home} label="Home" onSelect={() => runCommand(() => window.location.href = "/")} />
                                    <NavItem icon={Briefcase} label="Experience" onSelect={() => runCommand(() => window.location.href = "#experience")} />
                                    <NavItem icon={GraduationCap} label="Education" onSelect={() => runCommand(() => window.location.href = "#education")} />
                                    <NavItem icon={Code} label="Projects" onSelect={() => runCommand(() => window.location.href = "#projects")} />
                                    <NavItem icon={Cpu} label="Skills" onSelect={() => runCommand(() => window.location.href = "#skills")} />
                                </Command.Group>

                                <Command.Separator className="h-[1px] bg-zinc-100 dark:bg-zinc-900 my-2" />

                                {/* Projects Group */}
                                <Command.Group heading="Projects" className="px-2 pb-2">
                                    {projects.map((project) => (
                                        <NavItem
                                            key={project.name}
                                            icon={Code}
                                            label={project.name}
                                            onSelect={() => runCommand(() => window.open(project.link, "_blank"))}
                                        />
                                    ))}
                                </Command.Group>

                                <Command.Separator className="h-[1px] bg-zinc-100 dark:bg-zinc-900 my-2" />

                                {/* Socials Group */}
                                <Command.Group heading="Socials" className="px-2 pb-2">
                                    <NavItem icon={Github} label="GitHub" onSelect={() => runCommand(() => window.open("https://github.com/Bharat0304", "_blank"))} />
                                    <NavItem icon={Linkedin} label="LinkedIn" onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/bharat-kumar-009756239/", "_blank"))} />
                                    <NavItem icon={Twitter} label="Twitter (X)" onSelect={() => runCommand(() => window.open("https://x.com/Bharat84265", "_blank"))} />
                                    <NavItem icon={Mail} label="Email" onSelect={() => runCommand(() => window.location.href = "mailto:k.bharatkumar815@gmail.com")} />
                                </Command.Group>

                                <Command.Separator className="h-[1px] bg-zinc-100 dark:bg-zinc-900 my-2" />

                                {/* Theme Group */}
                                <Command.Group heading="Theme" className="px-2 pb-2">
                                    <NavItem icon={Sun} label="Light" onSelect={() => runCommand(() => setTheme("light"))} />
                                    <NavItem icon={Moon} label="Dark" onSelect={() => runCommand(() => setTheme("dark"))} />
                                    <NavItem icon={Monitor} label="System" onSelect={() => runCommand(() => setTheme("system"))} />
                                </Command.Group>
                            </Command.List>

                            {/* Footer */}
                            <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900 px-4 py-2.5 bg-zinc-50/50 dark:bg-zinc-900/30">
                                <div className="flex items-center gap-1">
                                    <div className="bg-zinc-200 dark:bg-zinc-800 p-1 rounded-md">
                                        <User className="w-3 h-3 text-zinc-500" />
                                    </div>
                                    <span className="text-[11px] font-medium text-zinc-400">Bharat Kumar Portfolio</span>
                                </div>
                                <div className="flex items-center gap-4 text-[11px] text-zinc-400">
                                    <div className="flex items-center gap-1.5 font-medium">
                                        <span>Go to Page</span>
                                        <span className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-500">↵</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 font-medium">
                                        <span>Exit</span>
                                        <span className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-500 uppercase">Esc</span>
                                    </div>
                                </div>
                            </div>
                        </Command>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <style jsx global>{`
                [cmdk-group-heading] {
                    font-size: 11px;
                    font-weight: 600;
                    color: oklch(0.5 0 0);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    padding-left: 12px;
                    margin-bottom: 8px;
                    margin-top: 8px;
                }
                [cmdk-item] {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 12px;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 150ms ease;
                }
                [cmdk-item][aria-selected="true"] {
                    background-color: oklch(0.96 0 0);
                    color: oklch(0.145 0 0);
                }
                .dark [cmdk-item][aria-selected="true"] {
                    background-color: oklch(0.2 0 0);
                    color: oklch(0.985 0 0);
                }
            `}</style>
        </>
    )
}

function NavItem({ icon: Icon, label, onSelect }: { icon: any, label: string, onSelect: () => void }) {
    return (
        <Command.Item onSelect={onSelect} className="group">
            <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 group-aria-selected:bg-white dark:group-aria-selected:bg-zinc-800 transition-colors border border-transparent group-aria-selected:border-zinc-100 dark:group-aria-selected:border-zinc-700">
                <Icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-aria-selected:text-zinc-900 dark:group-aria-selected:text-zinc-100" strokeWidth={2} />
            </div>
            <span className="text-[14px] font-medium text-zinc-600 dark:text-zinc-400 group-aria-selected:text-zinc-900 dark:group-aria-selected:text-zinc-100">
                {label}
            </span>
        </Command.Item>
    )
}

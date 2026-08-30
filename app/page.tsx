"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, FileText, ExternalLink, ArrowRight, MapPin, Clock, Briefcase, GraduationCap, FileCode2, Atom, Code, Wind, Database, Server, Box, ArrowUpRight, GitBranch, Calendar } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Typewriter } from "@/components/ui/Typewriter"
import Image from "next/image"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
}

export default function PortfolioPage() {
  const [time, setTime] = React.useState<string>("")

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Asia/Kathmandu",
        hour: '2-digit',
        minute:'2-digit',
        hour12: true
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border border-border overflow-hidden bg-muted">
                <Image 
                  src="/photo.png" 
                  alt="Prabesh Bhandari" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Prabesh Bhandari</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium"><Typewriter words={["Full Stack Developer", "Open Source Contributor", "AI Enthusiast"]} /></h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base leading-relaxed">
                I'm a Full Stack Developer focused on building high-impact digital solutions. I specialize in React, TypeScript, and Node.js. I build for the web with performance and clean design at the core.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Info Card */}
        <motion.section variants={itemVariants} id="about">
          <Card className="p-6 md:p-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 w-full max-w-3xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Role</span>
                    <span className="font-medium">Web Developer</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Location</span>
                    <span className="font-medium">Kathmandu, Nepal</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                       <span className="absolute w-2 h-2 rounded-full bg-primary animate-ping opacity-75" />
                       <span className="relative w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Education</span>
                    <span className="font-medium">Bachelor In Computer Application </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                       <span className="absolute w-2 h-2 rounded-full bg-primary animate-ping opacity-75" />
                       <span className="relative w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Currently Building</span>
                    <span className="font-medium"><a href="https://milijuliv1.vercel.app/" target="blank">@Milijuli</a></span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Local Time</span>
                    <span className="font-medium flex items-center gap-2">
                      {time || "Loading..."} <span className="text-muted-foreground font-mono text-xs">// NPT</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Email</span>
                    <span className="font-medium">bprabesh38@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Social Links */}
        <motion.section variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="#">
          {[
            { name: "GitHub", icon: Github, href: "https://github.com/rtn-prabesh", desc: "@rtn-prabesh" },
            { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/prabesh-bhandari-/", desc: "Connect" },
            { name: "Twitter / X", icon: Twitter, href: "https://x.com/_prabesh_10", desc: "@_prabesh_10" },
            { name: "Resume", icon: FileText, href: "#", desc: "Download CV" },
            { name: "Email", icon: Mail, href: "mailto:bprabesh38@gmail.com", desc: "Say hi!" },
          ].map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="p-4 flex flex-col items-start gap-4 group cursor-pointer bg-card border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                <div className="w-full flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{social.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono mt-1">{social.desc}</p>
                </div>
              </Card>
            </a>
          ))}
        </motion.section>

           {/* Tech Stack Section */}
  <motion.section variants={itemVariants} className="space-y-6" id="stack">
    <div className="flex items-center gap-4">
      <div className="px-3 py-1.5 rounded-r bg-blue-500/10 border-l-2 border-blue-500 flex items-center">
        <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400">Tech Stack</h2>
      </div>
      <div className="h-px bg-border flex-1" />
    </div>
    <div className="flex flex-wrap gap-3">
      {[
        { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
      ].map(({ name, src }) => (
        <div 
          key={name} 
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 text-sm font-medium text-foreground hover:shadow-sm transition-all cursor-default"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            {/* For black icons like Next.js and GitHub in dark mode, a white underlay helps visibility */}
            {(name === "Next.js" || name === "GitHub") && (
              <div className="absolute inset-0 bg-white rounded-full dark:scale-90" />
            )}
            <img src={src} alt={name} className="relative z-10 w-full h-full object-contain" />
          </div>
          {name}
        </div>
      ))}
    </div>
  </motion.section>



        {/* Featured Project */}
        <motion.section variants={itemVariants} className="space-y-6" id="projects">
  <div className="flex items-center gap-4">
    <div className="px-3 py-1.5 rounded-r bg-blue-500/10 border-l-2 border-blue-500 flex items-center">
      <h2 className="text-sm font-mono text-blue-600 dark:text-blue-400">Featured Project</h2>
    </div>
    <div className="h-px bg-border flex-1" />
  </div>

  {/* Milijuli Card */}
  <Card className="group overflow-hidden">
    <div className="grid md:grid-cols-2 gap-0">
      <div className="relative h-64 md:h-full min-h-[300px] w-full bg-neutral-900 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden flex items-center justify-center p-8">
        {/* Project Image */}
        <div className="w-full h-full rounded-lg border border-black/10 dark:border-white/10 bg-background shadow-2xl overflow-hidden relative group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500 flex flex-col">
          <div className="h-6 w-full bg-muted/80 border-b border-border flex items-center px-3 gap-1.5 shrink-0 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 relative w-full h-full overflow-hidden bg-black/5 dark:bg-black">
            <Image 
              src="/milijuli.png" 
              alt="Milijuli App Preview" 
              fill 
              className="object-cover object-left-top" 
            />
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Milijuli</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A modern cooperative finance platform designed to simplify savings, loans, and member management for communities and groups.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Next.js","React","TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"].map((tech) => (
            <Badge key={tech} className="bg-white/5 hover:bg-white/10 text-muted-foreground font-mono font-normal">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <a href="https://milijuliv1.vercel.app/" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex-1">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          
        </div>
      </div>
    </div>
  </Card>

  {/* RoomMate Card */}
  <Card className="group overflow-hidden">
    <div className="grid md:grid-cols-2 gap-0">
      <div className="relative h-64 md:h-full min-h-[300px] w-full bg-neutral-900 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden flex items-center justify-center p-8">
        {/* Project Image */}
        <div className="w-full h-full rounded-lg border border-black/10 dark:border-white/10 bg-background shadow-2xl overflow-hidden relative group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500 flex flex-col">
          <div className="h-6 w-full bg-muted/80 border-b border-border flex items-center px-3 gap-1.5 shrink-0 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 relative w-full overflow-hidden bg-black/5 dark:bg-black">
            <Image 
              src="/roommate.png" 
              alt="RoomMate App Preview" 
              fill 
              className="object-cover object-top" 
            />
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">RoomMate</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            RoomMate is a modern room rental platform that connects property owners and tenants, making it easy to discover, list, and manage rental properties across Kathmandu Valley.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Tailwind CSS", "Supabase","PostGreSQL", "Vercel"].map((tech) => (
            <Badge key={tech} className="bg-white/5 hover:bg-white/10 text-muted-foreground font-mono font-normal">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <a href="https://room-mate-v1.vercel.app/" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex-1">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
         
        </div>
      </div>
    </div>
  </Card>

  {/* Brandy Card */}
  <Card className="group overflow-hidden">
    <div className="grid md:grid-cols-2 gap-0">
      <div className="relative h-64 md:h-full min-h-[300px] w-full bg-neutral-900 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden flex items-center justify-center p-8">
        {/* Project Image */}
        <div className="w-full h-full rounded-lg border border-black/10 dark:border-white/10 bg-background shadow-2xl overflow-hidden relative group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500 flex flex-col">
          <div className="h-6 w-full bg-muted/80 border-b border-border flex items-center px-3 gap-1.5 shrink-0 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 relative w-full overflow-hidden bg-black/5 dark:bg-black">
            <Image 
              src="/brandy.png" 
              alt="Brandy App Preview" 
              fill 
              className="object-cover object-top" 
            />
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Brandy</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Brandy is a modern shoe e-commerce website built with HTML, CSS, and JavaScript, featuring a responsive design, product showcase, and intuitive shopping experience.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript"].map((tech) => (
            <Badge key={tech} className="bg-white/5 hover:bg-white/10 text-muted-foreground font-mono font-normal">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <a href="https://brandy-wheat.vercel.app/" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex-1">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          
        </div>
      </div>
    </div>
  </Card>
</motion.section>

        {/* Contact Section */}
        <motion.section variants={itemVariants} className="pt-8 pb-16 relative" id="contact">
          {/* Subtle dot pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
            }} 
          />
          
          <div className="relative z-10 space-y-10 py-6">
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 rounded-r bg-blue-500/10 border-l-2 border-blue-500 flex items-center">
                <span className="text-sm font-mono text-blue-600 dark:text-blue-400">Let's talk.</span>
              </div>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 -mx-6 rounded-2xl border border-transparent hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
              <div className="text-lg md:text-xl font-mono text-foreground leading-relaxed">
                <p>Got a project in mind or just want to say hi?</p>
                <p className="mt-1">Book a quick intro call.</p>
              </div>
              <a 
                href="https://cal.com/rtn-prabesh/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl border border-blue-500/30 bg-background text-blue-600 dark:text-blue-400 font-mono font-medium group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all duration-300 shrink-0 shadow-sm"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Book a Call
              </a>
            </div>

            <Card className="relative overflow-hidden p-8 flex flex-col items-center justify-center text-center space-y-6 mt-8 hover:border-blue-500/50 transition-colors duration-300">
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', 
                  backgroundSize: '24px 24px' 
                }} 
              />
              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl font-bold">Let's Connect</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these platforms
                </p>
              </div>
              
              <div className="relative z-10 flex flex-wrap justify-center gap-4">
                <a 
                  href="https://x.com/_prabesh_10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-accent transition-colors shadow-sm"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a 
                  href="https://github.com/rtn-prabesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-accent transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/prabesh-bhandari-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-accent transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-0 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a 
              href="https://github.com/rtn-prabesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors font-medium"
            >
              rtnPrabesh
            </a>
            . All rights reserved.
          </p>
        </footer>

      </motion.div>
    </div>
  )
}

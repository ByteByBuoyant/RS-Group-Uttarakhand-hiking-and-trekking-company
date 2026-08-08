import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, FileDown, Sun, Moon, Briefcase, Compass, Terminal, ArrowUpRight, X, Rocket, Film, BookOpen, Camera, Trophy, Users, FlaskConical, Radio, Code2, ExternalLink, Cpu, Globe, Phone } from 'lucide-react';
import { IMG, CONTACT, SKILLS, PROJECTS, TIMELINE, PAPERS, ACHIEVEMENTS, VOLUNTEER, BLOGS, FUTURE } from '@/data/portfolio';
import Particles from '@/components/Particles';
import Starfield from '@/components/Starfield';
import { MagneticButton, Reveal, TiltCard } from '@/components/ui-bits';

const NAV = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Lab', 'lab'], ['Studio', 'studio'], ['Library', 'library'], ['Gallery', 'gallery'], ['Journey', 'journey'], ['Contact', 'contact']];

const ROADMAP = [
  { icon: Rocket, title: "Build products that solve real-world problems", description: "Create software and digital experiences that people genuinely enjoy using, combining functionality with thoughtful design." },
  { icon: Code2, title: "Become a well-rounded software engineer", description: "Continue learning full-stack development, AI, modern web technologies, cloud, and system design while building production-ready applications." },
  { icon: Cpu, title: "Keep exploring emerging technologies", description: "Stay curious and experiment with AI, computer vision, automation, and new tools that challenge me to think differently." },
  { icon: Camera, title: "Blend technology with creativity", description: "Continue growing my skills in cinematography, video editing, colour grading, storytelling, and content creation while combining creativity with engineering." },
  { icon: Globe, title: "Work on meaningful products", description: "Collaborate with talented teams, contribute to impactful projects, and build technology that makes a difference in people's lives." },
  { icon: BookOpen, title: "Never stop learning", description: "Keep challenging myself, exploring new ideas, building side projects, and stepping outside my comfort zone because every project teaches something valuable." }
];

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-8 bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export default function HomePage() {
  const [dark, setDark] = useState(true);
  const [recruiter, setRecruiter] = useState(false);
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Viewport scroll targets
  const studioSectionRef = useRef(null);
  const journeySectionRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 });

  // Hero scroll-linked transformations
  const heroScale = useTransform(smoothProgress, [0, 0.12], [1, 0.85]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const heroYTransform = useTransform(smoothProgress, [0, 0.12], [0, -80]);

  // Creative Studio horizontal scroll calculations (Parallax - No hijacking/hanging)
  const { scrollYProgress: studioProgress } = useScroll({
    target: studioSectionRef,
    offset: ["start end", "end start"]
  });
  const studioX = useTransform(studioProgress, [0, 1], [10, -25]);
  const smoothStudioX = useSpring(studioX, { stiffness: 85, damping: 24 });

  // Journey draw values
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeySectionRef,
    offset: ["start center", "end center"]
  });
  const journeyLineHeight = useTransform(journeyProgress, [0, 0.85], [0, 100]);
  const smoothJourneyLine = useSpring(journeyLineHeight, { stiffness: 95, damping: 24 });

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark);
  }, [dark]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const go = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const immersive = !recruiter;

  return (
    <div className="relative min-h-screen selection:text-foreground">
      <Helmet>
        <title>Samriddhi Gururani — AI/ML Engineer, Builder & Storyteller</title>
        <meta name="description" content="Portfolio of Samriddhi Gururani — B.Tech CSE student specializing in AI/ML, Computer Vision, Web Development and Educational Technology. Projects, research papers, hackathons and cinematography." />
        <meta name="keywords" content="Samriddhi Gururani, AI ML engineer, Computer Vision, portfolio, Graphic Era Hill University, exoplanet detection, deep learning" />
        <meta property="og:title" content="Samriddhi Gururani — Portfolio" />
        <meta property="og:description" content="Immersive portfolio: AI/ML, Computer Vision, research and cinematography." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Backgrounds */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${immersive ? 'aurora' : ''}`} />
        <div className="absolute inset-0 grid-bg opacity-60" />
        {immersive && <img src={IMG.nebula} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen" />}
        {immersive && <Starfield density={1} />}
      </div>

      {/* Nav */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-8">
          <button onClick={() => go('home')} className="font-display text-lg font-bold tracking-tight"></button>
          <nav className={`hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex ${scrolled || recruiter ? 'glass' : ''}`}>
            {NAV.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-primary/10 hover:text-foreground">
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setRecruiter(v => !v)} className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition ${recruiter ? 'bg-primary text-primary-foreground' : 'glass hover:bg-primary/10'}`} title="Toggle Recruiter Mode">
              {recruiter ? <Briefcase size={15} /> : <Compass size={15} />}
              <span className="hidden sm:inline">{recruiter ? 'Recruiter' : 'Immersive'}</span>
            </button>
            <button onClick={() => setDark(v => !v)} className="glass rounded-full p-2.5 transition hover:bg-primary/10" title="Toggle theme" aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Recruiter banner */}
      <AnimatePresence>
        {recruiter && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed inset-x-0 top-[64px] z-40 flex justify-center px-4">
            <div className="glass flex items-center gap-3 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Recruiter Mode — clean, scannable view. Everything findable in under 2 minutes.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCENE 1: HERO */}
      <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pt-28 sm:px-8">
        {immersive && <Particles count={40} />}
        <motion.div style={immersive ? { scale: heroScale, opacity: heroOpacity, y: heroYTransform } : {}} className="mx-auto w-full max-w-[80rem]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Title and CTAs */}
            <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
              <Reveal>
                <motion.h1 initial={{ opacity: 0, filter: 'blur(14px)', y: 30 }} animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="font-display font-bold leading-[1.02]">
                  <span className="block text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl">Hi, I'm</span>
                  <span className={`mt-2 block text-5xl sm:text-7xl xl:text-[7.5rem] ${immersive ? 'animate-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent text-glow' : 'text-primary'}`}>
                    Samriddhi
                    <br />
                    Gururani
                  </span>
                </motion.h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-lg sm:text-xl font-medium font-display text-muted-foreground tracking-wide">
                  Multidisciplinary Computer Science Student, AI/ML Builder & Filmmaker
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <MagneticButton as="button" onClick={() => go('lab')} className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:scale-95">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    Explore My Work <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </MagneticButton>
                  <MagneticButton href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40 active:scale-95">
                    <FileDown size={17} className="transition-transform group-hover:translate-y-0.5" /> Download Resume
                  </MagneticButton>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-10 flex items-center justify-center gap-5 text-muted-foreground lg:justify-start">
                  {[[Github, CONTACT.github], [Linkedin, CONTACT.linkedin], [Instagram, CONTACT.instagram], [Mail, `mailto:${CONTACT.email}`]].map(([Icon, href], i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary hover:-translate-y-0.5" aria-label="social link">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Multidisciplinary Creative Engineering Hub Visual */}
            <div className="flex justify-center lg:col-span-5">
              <Reveal delay={0.4} y={40} className="w-full max-w-[480px]">
                <TiltCard disabled={recruiter} className="glass relative aspect-square w-full rounded-[2.5rem] p-6 border border-foreground/10 overflow-hidden group shadow-2xl transition-all duration-500 hover:border-primary/30">
                  {/* Local styles for custom animations */}
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes hologram-spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    @keyframes float-slow-1 {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      50% { transform: translateY(-12px) rotate(1.5deg); }
                    }
                    @keyframes float-slow-2 {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      50% { transform: translateY(10px) rotate(-1.2deg); }
                    }
                    @keyframes float-slow-3 {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      50% { transform: translateY(-8px) rotate(0.8deg); }
                    }
                    @keyframes pulse-glow {
                      0%, 100% { opacity: 0.35; transform: scale(1); }
                      50% { opacity: 0.65; transform: scale(1.05); }
                    }
                    @keyframes bounce-soundwave {
                      0%, 100% { transform: scaleY(0.35); }
                      50% { transform: scaleY(1.0); }
                    }
                  `}} />

                  {/* Grid background inside */}
                  <div className="absolute inset-0 grid-bg opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Ambient holographic glows */}
                  <div className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full bg-primary/10 blur-[60px] animate-[pulse-glow_5s_ease-in-out_infinite]" />
                  <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-secondary/10 blur-[60px] animate-[pulse-glow_7s_ease-in-out_infinite]" />

                  {/* Central Node: Rotating Holographic Constellation/Sphere */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-72 h-72 rounded-full border border-primary/20 flex items-center justify-center animate-[hologram-spin_40s_linear_infinite]">
                      {/* Connection rays / orbits */}
                      <div className="absolute w-56 h-56 rounded-full border border-dashed border-secondary/20" />
                      <div className="absolute w-40 h-40 rounded-full border border-dotted border-primary/25" />
                      
                      {/* Constellation Dots */}
                      <span className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_8px_hsl(var(--primary))]" />
                      <span className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-secondary/80 shadow-[0_0_8px_hsl(var(--secondary))]" />
                      <span className="absolute left-0 top-1/2 w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_8px_hsl(var(--primary))]" />
                      <span className="absolute right-0 top-1/2 w-1.5 h-1.5 rounded-full bg-secondary/80 shadow-[0_0_8px_hsl(var(--secondary))]" />
                    </div>
                  </div>

                  {/* Dynamic Connection lines in background */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none stroke-current text-border" viewBox="0 0 400 400">
                    <line x1="90" y1="90" x2="200" y2="200" className="stroke-primary/30 stroke-2" />
                    <line x1="310" y1="120" x2="200" y2="200" className="stroke-secondary/30 stroke-2" />
                    <line x1="160" y1="310" x2="200" y2="200" className="stroke-primary/30 stroke-2" />
                  </svg>

                  {/* Core Hub Center Card */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-16 w-16 rounded-2xl glass border border-primary/35 flex items-center justify-center shadow-lg shadow-primary/10 animate-[pulse-glow_4s_ease-in-out_infinite]">
                      <Terminal className="text-primary animate-pulse" size={24} />
                    </div>
                  </div>

                  {/* Facet Node 1: AI & Computational Intelligence */}
                  <div className="absolute top-10 left-6 w-[170px] pointer-events-auto animate-[float-slow-1_7s_ease-in-out_infinite]">
                    <div className="glass rounded-2xl p-3 border border-primary/20 shadow-xl hover:border-primary/40 hover:shadow-primary/5 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Cpu size={14} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-primary uppercase">AI & ML</span>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-foreground">Neural Networks</div>
                      <p className="mt-1 text-[9px] text-muted-foreground leading-tight">Exoplanet detection, computer vision models, ARDS diagnostics.</p>
                    </div>
                  </div>

                  {/* Facet Node 2: Cinematography & Storytelling */}
                  <div className="absolute top-20 right-6 w-[170px] pointer-events-auto animate-[float-slow-2_8s_ease-in-out_infinite]">
                    <div className="glass rounded-2xl p-3 border border-secondary/20 shadow-xl hover:border-secondary/40 hover:shadow-secondary/5 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                          <Camera size={14} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-secondary uppercase">Creative</span>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-foreground">Cinematography</div>
                      <p className="mt-1 text-[9px] text-muted-foreground leading-tight">Storytelling, color grading, video editing, cinematic shorts.</p>
                    </div>
                  </div>

                  {/* Facet Node 3: Web Engineering & Design */}
                  <div className="absolute bottom-10 left-[25%] -translate-x-1/2 w-[180px] pointer-events-auto animate-[float-slow-3_9s_ease-in-out_infinite]">
                    <div className="glass rounded-2xl p-3 border border-foreground/10 shadow-xl hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/90">
                          <Code2 size={14} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Software</span>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-foreground">Web Engineering</div>
                      <p className="mt-1 text-[9px] text-muted-foreground leading-tight">Full-stack web platforms, interactive web designs, layout grids.</p>
                    </div>
                  </div>

                  {/* Floating Tech Badges / Sparks */}
                  <div className="absolute bottom-20 right-10 h-7 w-7 rounded-full bg-secondary/15 border border-secondary/35 flex items-center justify-center text-secondary text-xs animate-[float-slow-1_6s_ease-in-out_infinite] font-mono">
                    Py
                  </div>
                  <div className="absolute top-[50%] left-4 h-7 w-7 rounded-full bg-primary/15 border border-primary/35 flex items-center justify-center text-primary text-xs animate-[float-slow-2_5s_ease-in-out_infinite] font-mono">
                    Js
                  </div>
                </TiltCard>
              </Reveal>
            </div>

          </div>
        </motion.div>
      </section>

      {/* SCENE 2: ABOUT */}
      <section id="about" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[80rem] px-4 py-28 sm:px-8"
        >
          <div className="max-w-4xl">
            <SectionTitle eyebrow="Curiosity Driven" title="The intersection of code and lens" />
            <Reveal>
              <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-display">
                <p>
                  I'm a Computer Science student who's always curious and excited to learn something new.
                  Whether it's creating AI-powered applications, developing websites, or experimenting with new ideas, I enjoy turning curiosity into real projects that make an impact.
                </p>
                <p>
                  Beyond technology, I love bringing stories to life through cinematography. Whether it's capturing beautiful shots, experimenting with colour grading, or editing across different software, I enjoy every step of the creative process.
                </p>
                <p>
                  I adapt quickly to new environments, enjoy learning by doing, and believe creativity is just as important as technology in building meaningful experiences.
                </p>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      {immersive && (
        <div className="relative overflow-hidden border-y border-border/60 py-4">
          <div className="flex w-max animate-marquee gap-8 font-display text-2xl font-semibold text-muted-foreground/50">
            {[...Array(2)].map((_, k) => (
              <span key={k} className="flex gap-8">
                {['AI / ML', 'Computer Vision', 'Full-Stack', 'Research', 'Cinematography', 'Leadership', 'Deep Learning', 'Storytelling'].map(t => (
                  <span key={t} className="flex items-center gap-8">{t}<span className="text-primary">✦</span></span>
                ))}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* SCENE 3: SKILLS (Dynamic 3D Assembly Grid) */}
      <section id="skills" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[80rem] px-4 py-28 sm:px-8"
        >
          <SectionTitle eyebrow="Galaxy Skills Universe" title="A constellation of capabilities" sub="Every tool orbits a purpose — engineering, intelligence and craft." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, y: 80, rotateX: 12, rotateY: 12, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 75, damping: 16, delay: i * 0.05 }}
              >
                <TiltCard disabled={recruiter} className="glass h-full rounded-[2rem] p-7 border border-border/40 hover:border-primary/35 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)] transition-all duration-500">
                  <div className="mb-4 font-display text-lg font-semibold text-primary">{s.group}</div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map(it => (
                      <span key={it} className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground hover:border-primary/20 hover:text-primary transition-colors duration-300">
                        {it}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SCENE 4: LAB / PROJECTS (Perspective Fold Entry Cards) */}
      <section id="lab" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[80rem] px-4 py-28 sm:px-8"
        >
          <SectionTitle eyebrow="AI Research Lab" title="Projects as case studies" sub="Open any experiment to read the full problem → solution → impact story." />
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 110, rotateY: i % 2 === 0 ? -12 : 12, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 65, damping: 14, delay: i * 0.06 }}
                className="h-full"
              >
                <button onClick={() => setActive(p)} className="group block w-full text-left h-full">
                  <TiltCard disabled={recruiter} className="glass relative h-full overflow-hidden rounded-[2rem] p-8 border border-border/40 hover:border-primary/45 hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)] transition-all duration-500">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:scale-110 transition-transform duration-500"><FlaskConical size={22} /></div>
                      <span className="font-mono text-xs text-muted-foreground">{p.date}</span>
                    </div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                    <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.slice(0, 4).map(t => <span key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</span>)}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Open case study <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </TiltCard>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SCENE 5: RESEARCH PAPERS (Horizontal Slide Reveal) */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[80rem] px-4 pb-28 sm:px-8"
        >
          <SectionTitle eyebrow="Research" title="Published & presented papers" />
          <div className="grid gap-6 md:grid-cols-2">
            {PAPERS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 70, damping: 15 }}
              >
                <div className="glass flex h-full flex-col rounded-[2rem] p-8 border border-border/40 hover:border-secondary/40 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.12)] transition-all duration-300">
                  <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 font-mono text-xs text-secondary">
                    <BookOpen size={13} /> {p.tag}
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.venue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SCENE 6: CREATIVE STUDIO (Horizontal Parallax Scroll Track - No hijacking/hanging) */}
      <section ref={studioSectionRef} id="studio" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative py-28"
        >
          <div className="mx-auto w-full max-w-[80rem] px-4 sm:px-8 mb-10">
            <SectionTitle eyebrow="Creative Studio" title="Cinematography & video editing" sub="I love to play with cinematics — content creation, storytelling and color." />
          </div>

          {/* Desktop sliding timeline track */}
          <div className="hidden lg:block overflow-hidden py-4">
            <motion.div style={{ x: useTransform(smoothStudioX, v => `${v}vw`) }} className="flex gap-8 px-4 sm:px-8 w-[140vw]">
              {[{
                icon: Film,
                t: 'Video Editing',
                d: 'Premiere Pro edits — pacing, sound design and cinematic color grades.'
              }, {
                icon: Camera,
                t: 'Cinematography',
                d: 'Framing the Himalayas, marathons and campus life with intention.'
              }, {
                icon: Radio,
                t: 'Content Creation',
                d: 'Short-form storytelling that turns real moments into narratives.'
              }].map((c, i) => (
                <div key={c.t} className="glass rounded-[2rem] p-8 min-w-[320px] max-w-[360px] flex flex-col justify-between border border-border/40 hover:border-primary/30 transition-all duration-300">
                  <div>
                    <c.icon className="mb-6 text-primary" size={28} />
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                  <div className="mt-8 font-mono text-[10px] text-muted-foreground tracking-widest">CHAPTER 0{i+1}</div>
                </div>
              ))}

              {/* Extra timeline wireframe card */}
              <div className="glass rounded-[2rem] p-8 min-w-[340px] max-w-[380px] flex flex-col justify-between border border-border/40 relative overflow-hidden bg-background/40">
                <div className="flex items-end gap-1.5 h-16 w-full bg-secondary/5 rounded-2xl border border-secondary/20 p-3">
                  {[0.3, 0.7, 0.45, 0.8, 0.55, 0.9, 0.4, 0.85, 0.35, 0.75, 0.5, 0.9, 0.3, 0.7, 0.45, 0.8, 0.55].map((h, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        height: `${h * 100}%`,
                        animationDelay: `${idx * 0.08}s`,
                        transformOrigin: 'bottom'
                      }} 
                      className="w-full bg-secondary/40 rounded-full animate-[bounce-soundwave_1.4s_ease-in-out_infinite]" 
                    />
                  ))}
                </div>
                <div className="mt-6">
                  <div className="text-[10px] text-muted-foreground font-mono">TIMELINE WORKSPACE</div>
                  <div className="font-display text-lg font-semibold text-secondary">Cinematic Cuts</div>
                  <p className="text-xs text-muted-foreground mt-1">Stitch together footage, color correction, soundscapes.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile stack layout */}
          <div className="lg:hidden mx-auto max-w-[80rem] px-4 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {[{
                icon: Film,
                t: 'Video Editing',
                d: 'Premiere Pro edits — pacing, sound design and cinematic color grades.'
              }, {
                icon: Camera,
                t: 'Cinematography',
                d: 'Framing the Himalayas, marathons and campus life with intention.'
              }, {
                icon: Radio,
                t: 'Content Creation',
                d: 'Short-form storytelling that turns real moments into narratives.'
              }].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.08}>
                  <div className="glass rounded-3xl p-7 border border-border/40">
                    <c.icon className="mb-4 text-primary" size={26} />
                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SCENE 7: LIBRARY / BLOG */}
      <section id="library" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[80rem] px-4 py-28 sm:px-8"
        >
          <SectionTitle eyebrow="Interactive Library" title="Writing & field notes" sub="Essays from the lab, the trail and the edit bay." />
          <div className="grid gap-6 md:grid-cols-3">
            {BLOGS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 80, damping: 16, delay: i * 0.05 }}
              >
                <TiltCard disabled={recruiter} className="glass flex h-full flex-col rounded-[2rem] p-7 border border-border/40 hover:border-primary/30 transition-all duration-300">
                  <span className="mb-3 w-fit rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-primary">{b.tag}</span>
                  <h3 className="font-display text-lg font-semibold leading-snug">{b.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{b.excerpt}</p>
                  <div className="mt-5 font-mono text-xs text-muted-foreground">{b.read} read</div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>



      {/* SCENE 9: PHOTOGRAPHY GALLERY (Staggered 3D Perspective Cards) */}
      <section id="gallery" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[80rem] px-4 py-28 sm:px-8"
        >
          <SectionTitle eyebrow="Photography Gallery" title="Through the lens" sub="Long exposures, golden hours and the small details." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMG.photos.map((ph, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 120, scale: 0.92, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: (i % 3) * 0.08 }}
              >
                <div className="group relative overflow-hidden rounded-[2rem] border border-border/40 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/5 bg-background">
                  <img src={ph.src} alt={ph.label} className="h-80 w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.08] group-hover:contrast-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute bottom-5 left-5 font-mono text-[10px] text-foreground/90 bg-background/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-foreground/10">{ph.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SCENE 10: JOURNEY TIMELINE (Interactive draw path on scroll) */}
      <section id="journey" ref={journeySectionRef} className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative mx-auto max-w-[72rem] px-4 py-28 sm:px-8"
        >
          <SectionTitle eyebrow="Mountain Journey" title="Hackathons, papers & podiums" sub="An ascent through competitions, research and endurance." />
          <div className="relative border-l border-border pl-8">
            {/* Glowing draw progress line linked to scroll */}
            <motion.div
              style={{ height: useTransform(smoothJourneyLine, v => `${v}%`) }}
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary origin-top"
            />
            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="relative pb-10 group">
                  {/* Connecting Dot with glowing state */}
                  <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-border group-hover:border-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-all duration-300" />
                  </span>
                  <div className="font-mono text-xs text-primary">{t.year}</div>
                  <div className="mt-1 font-display text-lg font-semibold group-hover:text-primary transition-colors duration-300">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.place}</div>
                  <div className="mt-1 text-sm text-muted-foreground/80 leading-relaxed">{t.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SCENE 11: CONTACT HUB (Satisfying narrative conclusion) */}
      <section id="contact" className="relative border-t border-border/20">
        <motion.div
          initial={{ opacity: 0.85, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="relative py-28"
        >
          {immersive && <Particles count={50} />}
          <div className="relative mx-auto max-w-[72rem] px-4 text-center sm:px-8">
            <Reveal>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">Get In Touch</div>
              <h2 className="font-display text-4xl font-bold sm:text-6xl leading-tight">Every Great Project<br /><span className="text-primary">Starts With a Conversation.</span></h2>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
                Whether you have an exciting internship, an ambitious idea, a startup, or simply want to connect over technology and creativity, I'd love to hear from you. Great conversations often lead to even greater ideas.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all">
                  <Mail size={17} /> Get in Touch
                </MagneticButton>
                <MagneticButton href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium transition hover:border-primary/20">
                  <FileDown size={17} /> Download Resume
                </MagneticButton>
                <MagneticButton href="tel:+918077296623" className="flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium transition hover:border-primary/20">
                  <Phone size={17} /> +91 8077296623
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-12 flex items-center justify-center gap-4">
                {[
                  { name: "GitHub", Icon: Github, href: CONTACT.github },
                  { name: "LinkedIn", Icon: Linkedin, href: CONTACT.linkedin },
                  { name: "Instagram", Icon: Instagram, href: CONTACT.instagram },
                  { name: "LeetCode", Icon: Code2, href: CONTACT.leetcode }
                ].map(({ name, Icon, href }, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg bg-popover px-2.5 py-1 text-[10px] font-medium text-popover-foreground border border-border shadow-lg backdrop-blur-md pointer-events-none whitespace-nowrap z-50">
                      {name}
                    </div>
                    <MagneticButton href={href} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full glass border border-border hover:border-primary/40 hover:shadow-[0_0_15px_hsl(var(--primary)/0.35)] hover:-translate-y-1 transition-all duration-300 text-muted-foreground hover:text-primary">
                      <Icon size={20} />
                    </MagneticButton>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Closing Message */}
            <Reveal delay={0.25}>
              <div className="mt-20 max-w-2xl mx-auto border-t border-border/30 pt-10">
                <p className="font-display text-sm leading-relaxed text-muted-foreground italic">
                  "Thanks for exploring my journey. Every project here started with curiosity, countless iterations, and a willingness to learn. I hope we get the chance to build something meaningful together."
                </p>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-[80rem] px-4">
          Samriddhi Gururani · {CONTACT.location} · © {new Date().getFullYear()}
        </div>
      </footer>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-background/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="glass scrollbar-thin max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl sm:rounded-3xl"
            >
              <div className="relative h-44 overflow-hidden rounded-t-3xl bg-gradient-to-br from-card via-muted/40 to-primary/10 border-b border-border/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.08),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.05),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button onClick={() => setActive(null)} className="glass absolute right-4 top-4 rounded-full p-2 transition hover:bg-primary/20" aria-label="Close">
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">{active.tag}</div>
                  <h3 className="font-display text-3xl font-bold">{active.title}</h3>
                </div>
              </div>
              <div className="space-y-6 p-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {active.tech.map(t => <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{t}</span>)}
                </div>
                {[['The problem', active.problem], ['The solution', active.solution]].map(([h, body]) => (
                  <div key={h}>
                    <div className="mb-1 font-display text-lg font-semibold text-primary">{h}</div>
                    <p className="text-muted-foreground">{body}</p>
                  </div>
                ))}
                <div>
                  <div className="mb-2 font-display text-lg font-semibold text-primary">Highlights</div>
                  <ul className="space-y-2">
                    {active.impact.map(it => (
                      <li key={it} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={active.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                    <Github size={16} /> View Repository
                  </a>
                  <span className="font-mono text-xs text-muted-foreground self-center">{active.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

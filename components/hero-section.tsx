"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

function FloatingOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl animate-pulse-glow ${className}`} />
  )
}

// Deterministic particle positions to avoid hydration mismatch
const particleData = [
  { x: 5, duration: 12, delay: 0 },
  { x: 15, duration: 15, delay: 2 },
  { x: 25, duration: 18, delay: 4 },
  { x: 35, duration: 11, delay: 1 },
  { x: 45, duration: 14, delay: 3 },
  { x: 55, duration: 16, delay: 5 },
  { x: 65, duration: 13, delay: 2.5 },
  { x: 75, duration: 17, delay: 1.5 },
  { x: 85, duration: 12, delay: 4.5 },
  { x: 95, duration: 19, delay: 3.5 },
  { x: 10, duration: 14, delay: 6 },
  { x: 30, duration: 16, delay: 7 },
  { x: 50, duration: 11, delay: 8 },
  { x: 70, duration: 18, delay: 9 },
  { x: 90, duration: 15, delay: 0.5 },
]

function Particles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleData.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{ left: `${particle.x}%` }}
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,1) 100%), url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Floating Orbs */}
      <FloatingOrb className="w-96 h-96 bg-primary/10 -top-48 -left-48" />
      <FloatingOrb className="w-80 h-80 bg-primary/5 top-1/4 -right-40" />
      <FloatingOrb className="w-64 h-64 bg-primary/10 bottom-20 left-1/4" />

      {/* Mouse Following Glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle, rgba(0,216,255,0.15) 0%, transparent 70%)",
          left: "var(--mouse-x, 50%)",
          top: "var(--mouse-y, 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          >
            <img src="taurus-logo.svg" alt="Taurus Logo" className="h-40 w-auto" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">O sonho do atleta é o</span>
            <br />
            <span className="gradient-text cyan-glow-text">nosso compromisso.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-primary font-medium mb-4"
          >
            Mais treino. Mais repetição. Mais confiança. Mais evolução.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Treinos técnicos de futebol, alta performance e acompanhamento 
            individualizado em Albufeira, Algarve.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/351962616880"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar Avaliação
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#programas"
              className="px-8 py-4 text-foreground font-semibold rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Conhecer o Programa
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          
        </motion.div>
      </motion.a>
    </section>
  )
}

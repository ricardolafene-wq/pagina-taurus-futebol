"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight } from "lucide-react"

const programs = [
  {
    name: "Treino Individual",
    description: "Atenção total e personalizada para evolução acelerada.",
    features: [
      "Atenção 100% personalizada",
      "Correção técnica detalhada",
      "Evolução acelerada",
      "Flexibilidade de horários",
    ],
    highlight: false,
  },
  {
    name: "Pequenos Grupos",
    description: "O equilíbrio perfeito entre atenção individual e dinâmica coletiva.",
    features: [
      "Competição saudável",
      "Desenvolvimento técnico",
      "Dinâmica coletiva",
      "Máximo 4 atletas",
    ],
    highlight: true,
  },
  {
    name: "Alta Performance",
    description: "Programa intensivo para atletas com objetivos competitivos.",
    features: [
      "Programa avançado",
      "Preparação competitiva",
      "Foco em rendimento",
      "Análise de vídeo",
    ],
    highlight: false,
  },
]

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${program.highlight ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      {/* Highlight Badge */}
      {program.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full z-10">
          Mais Popular
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
          program.highlight
            ? "glass border-primary/30 bg-primary/5"
            : "glass-card hover:bg-primary/5 hover:border-primary/20"
        }`}
      >
        {/* Glow Effect */}
        {program.highlight && (
          <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl -z-10" />
        )}

        {/* Content */}
        <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
        <p className="text-muted-foreground mb-6">{program.description}</p>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {program.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/351962616880"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full font-medium transition-all group/btn ${
            program.highlight
              ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
              : "border border-border hover:border-primary/50 hover:bg-primary/5"
          }`}
        >
          Saber Mais
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programas" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Programas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Escolhe o programa{" "}
            <span className="gradient-text">ideal para ti</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Diferentes formatos para diferentes necessidades, 
            sempre com o mesmo compromisso de excelência.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {programs.map((program, index) => (
            <ProgramCard key={program.name} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

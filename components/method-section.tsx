"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Avaliação Inicial",
    description: "Análise completa das capacidades técnicas, físicas e cognitivas do atleta.",
  },
  {
    number: "02",
    title: "Definição de Objetivos",
    description: "Estabelecimento de metas claras e mensuráveis em conjunto com o atleta e família.",
  },
  {
    number: "03",
    title: "Plano Individual",
    description: "Criação de um programa de treino personalizado baseado nas necessidades identificadas.",
  },
  {
    number: "04",
    title: "Treino Contínuo",
    description: "Implementação do plano com sessões regulares e ajustes conforme a evolução.",
  },
  {
    number: "05",
    title: "Evolução Mensurável",
    description: "Avaliação periódica do progresso e celebração das conquistas alcançadas.",
  },
]

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex items-start gap-6"
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
        >
          <Check className="w-5 h-5 text-primary" />
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg animate-pulse-glow" />
        </motion.div>
        
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            style={{ transformOrigin: "top" }}
            className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="glass-card rounded-xl p-6 hover:bg-primary/5 transition-colors">
          <span className="text-primary font-mono text-sm">{step.number}</span>
          <h3 className="text-xl font-semibold mt-2 mb-2">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function MethodSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            O Nosso Método
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Como funciona o{" "}
            <span className="gradient-text">processo de evolução</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Uma metodologia estruturada que garante resultados consistentes e mensuráveis.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

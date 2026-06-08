"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Target, Trophy, TrendingUp, Users, Circle } from "lucide-react"

const benefits = [
  {
    icon: Circle,
    title: "Desenvolvimento Técnico",
    description: "Aperfeiçoamento das habilidades fundamentais do futebol com metodologia comprovada.",
  },
  {
    icon: Zap,
    title: "Velocidade de Decisão",
    description: "Treino cognitivo para tomada de decisão rápida e eficaz em contexto de jogo.",
  },
  {
    icon: Target,
    title: "Confiança em Jogo",
    description: "Construção de autoconfiança através de repetição e sucesso nos treinos.",
  },
  {
    icon: Trophy,
    title: "Mentalidade Competitiva",
    description: "Desenvolvimento da mentalidade vencedora essencial para o alto rendimento.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Individual",
    description: "Acompanhamento personalizado do progresso e adaptação constante do plano.",
  },
  {
    icon: Users,
    title: "Acompanhamento Próximo",
    description: "Relação próxima entre treinador e atleta para maximizar o potencial.",
  },
]

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:bg-primary/5 hover:border-primary/30">
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            <benefit.icon className="w-7 h-7 text-primary" />
          </div>
          <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <h3 className="relative text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {benefit.title}
        </h3>
        <p className="relative text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  )
}

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 overflow-hidden">
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
            Benefícios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            O que a Taurus oferece{" "}
            <span className="gradient-text">ao atleta</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Um programa completo focado no desenvolvimento técnico, mental e 
            competitivo do jogador.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Para que idades?",
    answer:
      "Os nossos programas são destinados a atletas dos 6 aos 18 anos. Adaptamos a metodologia e intensidade dos treinos de acordo com a faixa etária e nível de desenvolvimento de cada atleta.",
  },
  {
    question: "Quantas vezes por semana devo treinar?",
    answer:
      "Recomendamos no mínimo 2 sessões semanais para resultados consistentes. No entanto, a frequência ideal depende dos objetivos individuais, calendário de competições do clube e disponibilidade do atleta. Na avaliação inicial, definimos juntos o plano mais adequado.",
  },
  {
    question: "O treino substitui o clube?",
    answer:
      "Não. A Taurus é um complemento ao trabalho realizado no clube. O nosso foco é o desenvolvimento técnico individual, que muitas vezes não é possível trabalhar em contexto de equipa devido às limitações de tempo e número de jogadores.",
  },
  {
    question: "Como funciona a avaliação inicial?",
    answer:
      "A avaliação inicial é uma sessão de 60 minutos onde analisamos as capacidades técnicas, físicas e cognitivas do atleta. Com base nesta análise, definimos os pontos fortes, áreas de melhoria e traçamos um plano de desenvolvimento personalizado.",
  },
  {
    question: "Onde decorrem os treinos?",
    answer:
      "Os treinos decorrem em instalações de qualidade na zona de Albufeira, Algarve. Dispomos de campos com piso sintético de última geração e todas as condições necessárias para um treino de excelência.",
  },
]

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Respostas às dúvidas mais comuns sobre os nossos programas.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

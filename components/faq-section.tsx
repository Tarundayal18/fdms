"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of design and branding services including logo design, brand identity development, web design, and complete brand overhauls tailored to your business needs.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope! A simple logo design might take a week, while a full brand overhaul can take a few months. We'll give you a clear timeline upfront and keep you updated throughout.",
  },
  {
    id: 3,
    question: "How do you ensure the work matches my vision?",
    answer:
      "We start with detailed discovery sessions to understand your goals, target audience, and brand values. Regular communication and revision rounds ensure the final product aligns perfectly with your vision.",
  },
  {
    id: 4,
    question: "Do you offer revisions?",
    answer:
      "We include multiple revision rounds in our packages. We'll work with you until you're completely satisfied with the results, ensuring your investment delivers exactly what you need.",
  },
  {
    id: 5,
    question: "Do you offer revisions?",
    answer:
      "We include multiple revision rounds in our packages. We'll work with you until you're completely satisfied with the results, ensuring your investment delivers exactly what you need.",
  },
  {
    id: 6,
    question: "Do you offer revisions?",
    answer:
      "We include multiple revision rounds in our packages. We'll work with you until you're completely satisfied with the results, ensuring your investment delivers exactly what you need.",
  },
  {
    id: 7,
    question: "Do you offer revisions?",
    answer:
      "We include multiple revision rounds in our packages. We'll work with you until you're completely satisfied with the results, ensuring your investment delivers exactly what you need.",
  },
]

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState<number | null>(2)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full px-4 py-12 md:py-20" style={{ backgroundColor: "#F09FA8" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-8xl md:text-10xl font-bold mb-4" style={{ color: "#3B001B", fontFamily: "Oswald" }}>
            You ask,
            <br />
            we answer.
          </h1>
          {/* <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: "#FFFACD" }}>
            <span className="text-sm md:text-base font-bold" style={{ color: "#3B001B", fontFamily: "Oswald" }}>
              FAQs
            </span>
          </div> */}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6">
          {faqItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Question Button */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 md:px-8 py-4 md:py-5 rounded-full flex items-center justify-between hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#FFFACD" }}
              >
                <h3
                  className="text-lg md:text-xl font-bold text-left flex-1"
                  style={{ color: "#3B001B", fontFamily: "Oswald" }}
                >
                  {item.question}
                </h3>
                <div
                  className="flex-shrink-0 ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#A8D8D8" }}
                >
                  {expandedId === item.id ? (
                    <ChevronUp size={24} style={{ color: "#3B001B" }} />
                  ) : (
                    <ChevronDown size={24} style={{ color: "#3B001B" }} />
                  )}
                </div>
              </button>

              {/* Answer - appears below as separate box */}
              {expandedId === item.id && (
                <div className="mt-4 md:mt-5 ml-4 md:ml-8 mr-4 md:mr-0 animate-in fade-in duration-300">
                  <div
                    className="rounded-3xl p-5 md:p-6 text-sm md:text-base leading-relaxed"
                    style={{ backgroundColor: "#A8D8D8", color: "#3B001B" }}
                  >
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

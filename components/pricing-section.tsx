"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const features = [
    "Social Media Management (3 platforms, 12 posts/month)",
    "Monthly Email Marketing Campaign (up to 3 campaigns)",
    "Blog Content Creation (2 articles/month)",
    "Basic Analytics Report with Actionable Insights",
    "Post Scheduling and Optimization",
    "Quarterly Competitor Analysis",
    "Engagement Monitoring and Response (comments and messages)",
  ]

  const cards = [
    {
      title: "Marketing Momentum",
      price: "$299",
      description:
        "Small to medium-sized businesses looking to build and sustain a consistent online presence without the hassle.",
        color: "#C0ECBF",
    },
    {
      title: "Growth Accelerator",
      price: "$499",
      description:
        "For brands aiming to scale faster with more campaigns, deeper analytics, and stronger engagement strategies.",
        color: "#F09FA8",
    },
    {
      title: "Enterprise Expansion",
      price: "$899",
      description:
        "For enterprises seeking full-service marketing management with dedicated support and strategy sessions.",
        color: "#C7CAFF",
    },
  ]

  return (
    <div className="w-full bg-[#181a12] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-oswald text-6xl md:text-8xl font-bold text-[#FFFACD] relative inline-block">
            Pick your
            <br />
            flavor
            <span className="absolute -top-8 left-1/3 bg-blue-200 text-[#3b001b] px-3 py-1 rounded-full text-sm font-bold">
              Pricing
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#A8D8D8] rounded-3xl overflow-hidden flex flex-col md:flex-row"
              style={{ backgroundColor: card.color }}
            >
              {/* Left Side - Features */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 pb-3 border-b border-[#3b001b]/20"
                    >
                      <Check className="w-4 h-4 text-[#3b001b] flex-shrink-0 mt-1" />
                      <span className="text-[#3b001b] font-oswald font-semibold text-sm md:text-base leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full mb-8 mt-8 bg-[#FFE878] hover:bg-[#ffed4e] text-[#3b001b] font-oswald font-bold text-base py-3 rounded-full border-b-4 border-[#3b001b] shadow-md transition-all duration-200 active:translate-y-1 active:shadow-sm">
                  Book a Call
                </button>
              </div>

              {/* Right Side - Pricing Details */}
              <div className="flex-1 p-6 md:p-8 flex items-start justify-start">
                <div className="bg-[#FFFACD] rounded-3xl p-8 md:p-10 w-full">
                  <div className="flex mb-4">
                    <div className="bg-[#F09FA8] text-[#3b001b] px-4 py-1.5 rounded-full font-oswald font-bold text-sm border-2 border-[#F09FA8]">
                      {card.title}
                    </div>
                  </div>

                  <div className="text-left mb-4">
                    <div className="font-oswald font-black text-4xl md:text-5xl text-[#3b001b]">
                      {card.price}
                      <span className="text-base font-bold">/month</span>
                    </div>
                  </div>



                  {/* Billing Toggle */}
                  <div className="flex gap-2 mb-12">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={`px-5 py-1.5 rounded-full font-oswald font-bold transition-all ${
                        billingCycle === "monthly"
                          ? "bg-[#FFE878] text-[#3b001b] border-2 border-[#3b001b]"
                          : "bg-white text-[#3b001b] border-2 border-[#3b001b]"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle("yearly")}
                      className={`px-5 py-1.5 rounded-full font-oswald font-bold transition-all ${
                        billingCycle === "yearly"
                          ? "bg-[#FFE878] text-[#3b001b] border-2 border-[#3b001b]"
                          : "bg-white text-[#3b001b] border-2 border-[#3b001b]"
                      }`}
                    >
                      Yearly
                    </button>
                  </div>

                  <p className="text-left text-[#3b001b] font-oswald text-xs mb-3">
                    Save up to 30% by paying yearly
                  </p>

                  <div className="border-t border-dashed border-[#3b001b]/30 my-4"></div>

                  <p className="text-left text-[#3b001b] font-oswald text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

const stepsData = [
  {
    id: 1,
    title: "Magic in Progress",
    description:
      "We head into the creative cave and start sketching, designing, writing, and building. You'll get updates, sneak peeks, and maybe a few happy dances along the way.",
    imageSrc: "/Container.png",
  },
  {
    id: 2,
    title: "Kickoff & Coffee Chats",
    description:
      "We get to know you—your brand, your goals, your vibe (and maybe your favorite snacks). This is where the ideas start flying and the creative wheels start turning.",
    imageSrc: "/Container.png",
  },
  {
    id: 3,
    title: "Strategy & Planning",
    description:
      "We dive deep into market research, competitor analysis, and audience insights. Together, we craft a roadmap that turns your vision into a concrete action plan.",
    imageSrc: "/images/step3.png",
  },
  {
    id: 4,
    title: "Launch & Optimize",
    description:
      "We launch your campaign with precision and monitor performance in real-time. Continuous optimization ensures you get the best results and maximum ROI.",
    imageSrc: "/images/step4.png",
  },
]

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = stepsData.find((step) => step.id === activeStep)

  return (
    <section 
      className="w-full py-16 px-4 md:py-24 min-h-screen flex items-center"
      style={{
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(ellipse 8px 8px, rgb(192, 236, 191), rgb(192, 236, 191) 25%, rgb(246, 194, 244) 25%)',
        backgroundSize: '16px 16px'
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 md:mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-black text-purple-900 leading-tight text-balance">
            Our not-so
            <br />
            secret sauce
          </h2>
          <div className="absolute top-8 left-48 md:left-64 bg-green-300 text-purple-900 px-4 py-2 rounded-full text-sm md:text-base font-bold transform -rotate-12 shadow-md">
            Process
          </div>
        </div>

        {/* Content card */}
        <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left content */}
            <div className="order-2 md:order-1">
              <div className="flex gap-3 mb-8">
                {stepsData.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 ${
                      activeStep === step.id
                        ? "bg-black text-white shadow-lg"
                        : "bg-white text-black border-2 border-black hover:scale-105"
                    }`}
                  >
                    {step.id}
                  </button>
                ))}
              </div>

              <h3 className="font-bold text-3xl md:text-4xl text-[#3b001b] mb-4 leading-tight">{currentStep?.title}</h3>
              <p className="text-[#3b001b] text-base md:text-lg leading-relaxed opacity-90">{currentStep?.description}</p>
            </div>

            {/* Right illustration */}
            <div className="order-1 md:order-2 relative h-64 md:h-80">
              {/* Animated PNG image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  key={`img-${activeStep}`}
                  className="relative w-full h-full flex items-center justify-center"
                  style={{
                    animation: "imageSlideIn 0.7s ease-out",
                  }}
                >
                  <img
                    src={currentStep?.imageSrc}
                    alt={currentStep?.title}
                    className="w-full h-auto object-contain max-w-4xl"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes imageSlideIn {
            0% {
              opacity: 0;
              transform: translateX(100px) scale(0.8) rotate(5deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1) rotate(0deg);
            }
          }

          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
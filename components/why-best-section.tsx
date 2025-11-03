"use client"

import { Zap, Palette, Layers, Heart, Globe, CheckCircle } from "lucide-react"

const reasons = [
    {
        title: "Creative Sparks",
        description: "We craft ideas that break the mold and make your brand unforgettable.",
        bgColor: "bg-yellow-300",
        textColor: "text-gray-900",
        icon: Zap,
    },
    {
        title: "Design That Delivers",
        description: "Smart, strategic visuals built to grow your brand and move the needle.",
        bgColor: "bg-emerald-200",
        textColor: "text-gray-900",
        icon: Palette,
    },
    {
        title: "Adaptable & Flexible",
        description: "Tailored solutions for evolving markets and changing needs.",
        bgColor: "bg-orange-200",
        textColor: "text-gray-900",
        icon: Layers,
    },
    {
        title: "Human-Centered Approach",
        description: "We craft brands that connect emotionally and authentically.",
        bgColor: "bg-white",
        textColor: "text-gray-900",
        icon: Heart,
    },
    {
        title: "Ideas You Didn't See Coming",
        description: "Our best ideas come with out-of-the-box thinking and a dash of magic.",
        bgColor: "bg-blue-300",
        textColor: "text-gray-900",
        icon: CheckCircle,
    },
    {
        title: "Global Vision, Local Focus",
        description: "Bringing global trends with a local understanding.",
        bgColor: "bg-pink-300",
        textColor: "text-gray-900",
        icon: Globe,
    },
    {
        title: "Every Detail Matters",
        description: "Every element we design is intentional, measured, refined, and built to perform.",
        bgColor: "bg-yellow-100",
        textColor: "text-gray-900",
        icon: Palette,
    },
]

export default function WhyBestSection() {
    return (
        <section className="bg-[#181a12] py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Heading with Badge */}
                <div className="relative mb-16 md:mb-20 text-center">
                    <h2 className="font-oswald text-6xl md:text-8xl font-semibold text-[#fae0be] leading-tight inline-block">
                        Why we are
                        <br />
                        the best
                    </h2>
                </div>


                <div className="space-y-2">
                    {/* Row 1 - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#FAFABF", color: "#3B001B" }}
                        >
                            <Zap className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[0].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[0].description}</p>
                        </div>

                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#C0ECBF", color: "#3B001B" }}
                        >
                            <Palette className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[1].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[1].description}</p>
                        </div>
                    </div>

                    {/* Row 2 - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2">
                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#FAE0BE", color: "#3B001B" }}
                        >
                            <Layers className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[2].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[2].description}</p>
                        </div>

                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#FEFAE7", color: "#3B001B" }}
                        >
                            <Heart className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[3].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[3].description}</p>
                        </div>

                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#F6C2F4", color: "#3B001B" }}
                        >
                            <CheckCircle className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[4].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[4].description}</p>
                        </div>
                    </div>

                    {/* Row 3 - 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#C7CAFF", color: "#3B001B" }}
                        >
                            <Globe className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[5].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[5].description}</p>
                        </div>

                        <div
                            className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
                            style={{ backgroundColor: "#FEFAE7", color: "#3B001B" }}
                        >
                            <Palette className="w-16 h-16 md:w-20 md:h-20 mb-6 opacity-80" />
                            <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{reasons[6].title}</h3>
                            <p className="font-sans text-sm md:text-base leading-relaxed w-70">{reasons[6].description}</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

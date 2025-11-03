"use client"

import { Twitter, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Zephyr",
    title: "Callahan",
    role: "CEO, CREATIVE DIRECTOR",
    bgColor: "bg-[#fae0be]",
    accentColor1: "bg-purple-300",
    accentColor2: "bg-cyan-300",
    image: "👨‍💼",
    socials: ["twitter", "linkedin"],
  },
  {
    id: 2,
    name: "Leander",
    title: "Frost",
    role: "DESIGNER / ART DIRECTOR",
    bgColor: "bg-[#f6c2f4]",
    accentColor1: "bg-green-400",
    accentColor2: "bg-blue-300",
    image: "👨‍🎨",
    socials: ["twitter", "linkedin"],
  },
  {
    id: 3,
    name: "Thane",
    title: "Vesper",
    role: "CONTENT CREATOR",
    bgColor: "bg-[#cdabeb]",
    accentColor1: "bg-blue-400",
    accentColor2: "bg-cyan-300",
    image: "👨‍💻",
    socials: ["twitter", "linkedin"],
  },
  {
    id: 4,
    name: "Maybe You",
    title: "Cause we are hiring",
    role: "SR. GRAPHIC DESIGNER",
    bgColor: "bg-[#c0ecbf]",
    accentColor1: "bg-pink-300",
    accentColor2: "bg-yellow-300",
    image: "👤",
    isHiring: true,
  },
]

export default function AboutSection() {
  return (
    <section className="w-full bg-orange-50 py-16 md:py-24 px-4 font-oswald">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 md:mb-16 relative">
          <div className="bg-pink-300 text-[#3b001b] px-4 py-2 rounded-full text-sm md:text-base font-bold w-fit transform -rotate-12 shadow-md mb-6">
            About us
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#3b001b] leading-tight text-balance max-w-x5l">
            We started at a kitchen table with coffee, chaos, and a shared love for bold ideas. Now we're a small team
            doing big things—branding, designing, and creating work that actually makes people feel something. No fluff,
            no fuss, just fun, friendly, scroll-stopping creativity.
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`${member.bgColor} rounded-3xl p-6 md:p-8 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300`}
            >
              <div className="relative mb-6 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                {/* Accent circle 1 */}
                <div
                  className={`absolute w-24 h-24 md:w-32 md:h-32 ${member.accentColor1} rounded-full opacity-70 -top-2 -left-2`}
                ></div>

                {/* Accent circle 2 */}
                <div
                  className={`absolute w-20 h-20 md:w-28 md:h-28 ${member.accentColor2} rounded-full opacity-60 -bottom-1 -right-1`}
                ></div>

                {/* Main circular profile */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-lg z-10">
                  {member.image}
                </div>
              </div>

              {/* Name and Title */}
              <h3 className="text-xl md:text-2xl font-black text-[#3b001b] mb-1">{member.name}</h3>
              <p className="text-sm md:text-base font-bold text-[#3b001b] mb-2">{member.title}</p>
              <p className="text-xs md:text-sm text-[#3b001b] opacity-75 mb-6 uppercase tracking-wide">
                {member.role}
              </p>

              {/* Social Icons or CTA Button */}
              {member.isHiring ? (
                <button className=" text-black px-8 py-3 rounded-full font-bold text-sm md:text-base bg-[#FFE878] hover:bg-[#ffed4e] text-[#3b001b] font-oswald font-bold text-base py-3 rounded-full border-b-4 border-[#3b001b] shadow-md transition-all duration-200 active:translate-y-1 active:shadow-sm">
                  Join our team
                </button>
              ) : (
                <div className="flex gap-4">
                  <a href="#" className="text-[#3b001b] hover:scale-125 transition-transform">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-[#3b001b] hover:scale-125 transition-transform">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-[#3b001b] hover:scale-125 transition-transform">
                    <Mail size={20} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

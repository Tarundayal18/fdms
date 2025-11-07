// "use client"

// import Image from "next/image"
// import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
// import { useState } from "react"
// import ContactSection from "@/components/contact-section"
// import FooterSection from "@/components/footer-section"
// import Navbar from "@/components/navbar"

// export default function Mainproject() {
//   const [currentProject, setCurrentProject] = useState(0)

//   const projects = [
//     {
//       label: "PREVIOUS PROJECT",
//       title: "Celebrity Chef Press Kit",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cA00qWm5VpbWd8ZPvI1SRkuFPjrnqA.png",
//     },
//     {
//       label: "NEXT PROJECT",
//       title: "Culinary Menus",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cA00qWm5VpbWd8ZPvI1SRkuFPjrnqA.png",
//     },
//   ]

//   return (
//     <main className="bg-[#f5f1ed] min-h-screen">
//          <Navbar />
//       {/* Hero Section */}
//       <section className="pt-16 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 ">
//         <div className="max-w-7xl mx-auto py-12">
//           <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-oswald text-center text-[#3e1a2a] mb-4">Corporate Deck</h1>
//           <div className="flex justify-center mb-8">
//             <div className="inline-block bg-[#e2dfff] px-4 py-2 rounded-full">
//               <span className="text-sm font-semibold font-oswald text-[#3e1a2a]">Presentation Design</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Corporate Deck Hero Section */}
//       <section className=" px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-10xl mx-auto h-screen relative">
//           <Image
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lhervwy7mMqea89CENrEjxucjmYg9m.png"
//             alt="Corporate deck presentation materials"
//             fill
//             className="object-cover rounded-2xl"
//           />
//         </div>
//       </section>

//       <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#f5f1ed]">
//         <div className="max-w-8xl mx-auto ">
//           {/* Info Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">CLIENT</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">Tech Corp</p>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">DURATION</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">1 Week</p>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">YEAR</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">2024</p>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">INDUSTRY</h3>
//               <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">Technology</p>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="bg-opacity-60  rounded-lg">
//             <p className="text-base font-oswald sm:text-lg text-[#644651] leading-relaxed max-w-4xl mx-auto">
//               In this engaging undertaking, we conceived a visually compelling corporate presentation for a prominent
//               data center enterprise holding a substantial presence in the Asia Pacific realm. The central objective
//               involved crafting a dynamic deck to spotlight the company's advanced array of solutions for both current
//               clientele and prospective collaborators. This initiative aimed to solidify the company's standing as a
//               pioneering force in the technological sphere.
//             </p>
//           </div>
//         </div>
//       </section>



//       {/* Case Study Section */}


//       {/* Mockup Images Section */}
//       <section className=" px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-9xl mx-auto">
//           <Image
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p2s9CCljlCjh9yDsOUZsLNVfIBADTI.png"
//             alt="Presentation mockups"
//             width={1400}
//             height={400}
//             className="w-full h-auto rounded-2xl"
//           />
//         </div>

//         <div className="max-w-8xl mx-auto">
//           <Image
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p2s9CCljlCjh9yDsOUZsLNVfIBADTI.png"
//             alt="Presentation mockups"
//             width={1400}
//             height={400}
//             className="w-full h-auto rounded-2xl"
//           />
//         </div>

//         <div className="max-w-8xl mx-auto">
//           <Image
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p2s9CCljlCjh9yDsOUZsLNVfIBADTI.png"
//             alt="Presentation mockups"
//             width={1400}
//             height={400}
//             className="w-full h-auto rounded-2xl"
//           />
//         </div>

//         <div className="max-w-8xl mx-auto">
//           <Image
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p2s9CCljlCjh9yDsOUZsLNVfIBADTI.png"
//             alt="Presentation mockups"
//             width={1400}
//             height={400}
//             className="w-full h-auto rounded-2xl"
//           />
//         </div> 
//       </section>


//       <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 ">
//         <div className="max-w-4xl mx-auto">
//           {/* Challenge */}
//           <div className="mb-12">
//             <h2 className="text-3xl sm:text-4xl font-oswald md:text-4xl font-bold text-[#3e1a2a] mb-4">The Challenge:</h2>
//             <p className="text-base sm:text-lg font-oswald text-[#644651] leading-relaxed">
//               The startup needed to distill complex technical information into a clear and compelling narrative for
//               investors.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-6">The Solution:</h2>
//             <div className="space-y-4">
//               <p className="text-base sm:text-lg text-[#644651] font-oswald leading-relaxed">
//                 Developed a strong visual story with custom infographics.
//               </p>
//               <p className="text-base sm:text-lg font-oswald text-[#644651] leading-relaxed">
//                 Crafted a concise and impactful script for each slide.
//               </p>
//               <p className="text-base sm:text-lg font-oswald text-[#644651] leading-relaxed">
//                 Ensured the design was consistent with the company's new brand identity.
//               </p>
//             </div>
//           </div>

//           {/* Key Highlights */}
//           <div className="mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-4xl font-oswald font-bold text-[#3e1a2a] mb-6">Key Highlights:</h2>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-6 h-6 text-[#00a8cc] flex-shrink-0 mt-1" />
//                 <p className="text-base sm:text-lg text-[#644651] font-oswald leading-relaxed">
//                   Successfully raised $2 million in seed funding.
//                 </p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-6 h-6 text-[#00a8cc] flex-shrink-0 mt-1" />
//                 <p className="text-base sm:text-lg font-oswald text-[#644651] leading-relaxed">
//                   Praised by investors for clarity and professionalism.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="border-l-4 border-[#ffd700] pl-6">
//             <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-4">Testimonial:</h2>
//             <p className="text-base sm:text-lg italic font-oswald text-[#644651] mb-3">
//               "The new deck was a game-changer for our fundraising efforts. It told our story perfectly."
//             </p>
//             <p className="text-base sm:text-lg font-oswald font-bold text-[#644651]">— CEO, Tech Corp</p>
//           </div>
//         </div>
//       </section>

//       {/* Project Carousel */}
//       <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24">
//         <div className="max-w-10xl mx-auto">
//           <div className="relative">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Previous Project */}
//               <div className="relative h-54 sm:h-62 md:h-70 rounded-2xl overflow-hidden group cursor-pointer bg-black">
//                 {/* <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cA00qWm5VpbWd8ZPvI1SRkuFPjrnqA.png"
//                   alt="Celebrity Chef Press Kit"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 /> */}
//                 <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 sm:p-8">
//                   <p className="text-white text-end text-xs sm:text-sm font-oswald font-semibold mb-2 opacity-75">PREVIOUS PROJECT</p>
//                   <h3 className="text-white text-end text-2xl sm:text-3xl font-oswald md:text-4xl font-bold">Celebrity Chef Press Kit</h3>
//                 </div>
//                 <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors">
//                   <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                 </button>
//               </div>

//               {/* Next Project */}
//               <div className="relative h-54 sm:h-62 md:h-70 rounded-2xl overflow-hidden group cursor-pointer bg-black">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cA00qWm5VpbWd8ZPvI1SRkuFPjrnqA.png"
//                   alt="Culinary Menus"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 sm:p-8">
//                   <p className="text-white text-end  text-xs sm:text-sm font-oswald font-semibold mb-2 opacity-75">NEXT PROJECT</p>
//                   <h3 className="text-white text-end text-2xl sm:text-3xl font-oswald md:text-4xl font-bold">Culinary Menus</h3>
//                 </div>
//                 <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors">
//                   <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>



//       <ContactSection />
//             <FooterSection />
//     </main>
//   )
// }























"use client";

import { useSearchParams } from "next/navigation";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import ProjectNavigation from "./projectnavigation";
import { Suspense } from "react";


export default function ProjectPage() {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading project...</div>}>
        <ProjectPageContent />
      </Suspense>
    );
  }

  function ProjectPageContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const project = projectData.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-2xl">
                Project not found 😢
            </div>
        );
    }

    return (
        <main className="bg-[#f5f1ed] min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-16 pb-12 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto py-12">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-oswald text-center text-[#3e1a2a] mb-4">
                        {project.title}
                    </h1>
                    <div className="flex justify-center flex-wrap gap-3 mb-8">
                        {(Array.isArray(project.tag) ? project.tag : [project.tag]).map((tag, i) => {
                            const bgColors = [
                                "bg-[#E2DFFF]", // light purple
                                "bg-[#FFF2B2]", // soft yellow
                                "bg-[#FCE3F2]", // light pink
                                "bg-[#D9F7E5]", // light mint green
                                "bg-[#FFE5CC]", // peach
                                "bg-[#E0F0FF]", // sky blue
                            ];
                            const bgColor = bgColors[i % bgColors.length]; // cycle through colors

                            return (
                                <div
                                    key={i}
                                    className={`inline-block ${bgColor} px-4 py-2 rounded-full shadow-sm transition-transform hover:scale-105`}
                                >
                                    <span className="text-sm font-semibold font-oswald text-[#3e1a2a]">
                                        {tag}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Hero Image */}
            <section className="px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="max-w-10xl mx-auto h-screen relative">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </section>

            {/* Info + Description */}
            <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#f5f1ed]">
                <div className="max-w-8xl mx-auto">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
                        <div>
                            <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">CLIENT</h3>
                            <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.client}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">DURATION</h3>
                            <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.duration}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">YEAR</h3>
                            <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.year}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold font-oswald text-[#897378] tracking-widest mb-2">INDUSTRY</h3>
                            <p className="text-3xl sm:text-2xl font-oswald font-bold text-[#3e1a2a]">{project.industry}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-opacity-60 rounded-lg">
                        <p className="text-base font-oswald sm:text-lg text-[#644651] leading-relaxed max-w-4xl mx-auto">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mockup Images */}
            <section className="px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="max-w-9xl mx-auto space-y-8">
                    {project.mockupImages.map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            alt={`Mockup ${i}`}
                            width={1400}
                            height={400}
                            className="w-full h-auto rounded-2xl"
                        />
                    ))}
                </div>
            </section>

            {/* Challenge / Solution / Highlights / Testimonial */}
            <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    {/* Challenge */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl font-oswald md:text-4xl font-bold text-[#3e1a2a] mb-4">The Challenge:</h2>
                        <p className="text-base sm:text-lg font-oswald text-[#644651] leading-relaxed">{project.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-6">The Solution:</h2>
                        <div className="space-y-4">
                            {project.solution.map((s, i) => (
                                <p key={i} className="text-base sm:text-lg text-[#644651] font-oswald leading-relaxed">
                                    {s}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl font-oswald font-bold text-[#3e1a2a] mb-6">Key Highlights:</h2>
                        <div className="space-y-4">
                            {project.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#00a8cc] flex-shrink-0 mt-1" />
                                    <p className="text-base sm:text-lg text-[#644651] font-oswald leading-relaxed">{h}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    {project.id !== 14 && (
                    <div className="border-l-4 border-[#ffd700] pl-6">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold font-oswald text-[#3e1a2a] mb-4">Testimonial:</h2>
                        <p className="text-base sm:text-lg italic font-oswald text-[#644651] mb-3">
                            “{project.testimonial.quote}”
                        </p>
                        <p className="text-base sm:text-lg font-oswald font-bold text-[#644651]">
                            — {project.testimonial.author}
                        </p>
                    </div>
                    )}
                </div>
                
                
            </section>

            <ProjectNavigation />

            <ContactSection />
            <FooterSection />
        </main>
    );
}

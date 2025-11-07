"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectData } from "@/data/projectData"; // Adjust your path

export default function ProjectNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 projects at a time
  const visibleProjects = projectData.slice(currentIndex, currentIndex + 2);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectData.length - 2 : prev - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= projectData.length ? 0 : prev + 2
    );
  };

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-10xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
          {visibleProjects.map((proj) => (
            <Link
              key={proj.id}
              href={`/project/mainproject?id=${proj.id}`}
              className="relative h-54 sm:h-62 md:h-70 rounded-2xl overflow-hidden group cursor-pointer bg-black"
            >
              <Image
                src={proj.heroImage}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 sm:p-8">
                <p className="text-white text-end text-xs sm:text-sm font-oswald font-semibold mb-2 opacity-75">
                  {proj.id % 2 === 0 ? "NEXT PROJECT" : "PREVIOUS PROJECT"}
                </p>
                <h3 className="text-white text-end text-2xl sm:text-3xl md:text-4xl font-oswald font-bold">
                  {proj.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

export default function ProjectsHeroSection() {
  return (
    <div className="relative bg-[#d8f2da] pt-40 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="text-left md:w-1/2">
          <h1 className="font-oswald text-5xl sm:text-6xl lg:text-8xl font-bold text-[#2b0012] mb-6">
            About Us
          </h1>
          <p className="font-oswald text-xl text-[#2b0012]">
            Fun, friendly, scroll-stopping creativity. That's us.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 h-80 md:mt-0 flex justify-center">
          <img
            src="./heroabout.png"
            alt="About Illustration"
            className="max-w-md w-full object-contain"
          />
        </div>
      </div>

      {/* Wavy divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 text-[#fff0dc]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

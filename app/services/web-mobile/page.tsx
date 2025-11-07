import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import FooterSection from "@/components/footer-section";
import MinimumProjectsGrid from "@/components/minimum-project-grid";
import Navbar from "@/components/navbar";
import ProjectsGridSection from "@/components/projects-grid-section";
import ServicesSection from "@/components/services-section";
import StepsSection from "@/components/steps-section";
import Tesiminiols from "@/components/testiminiols";

export default function WebApp() {
  const cards = [
    {
      id: 1,
      title: "Code Craft",
      text: "We design and build websites from scratch — fast, secure, and uniquely yours.",
      image: "/Link02.png",
    },
    {
      id: 2,
      title: "Plug & Play",
      text: "We develop dynamic websites on platforms like WordPress, Shopify, and Wix for quick, cost-efficient launches.",

      image: "/Link (1).png",
    },
    {
      id: 3,
      title: "Shop Stop",
      text: "A 12-month subscription plan that covers your website, hosting, and ongoing marketing.",

      image: "/Link (6).png",
    },
    {
      id: 4,
      title: "App Attack",
      text: "We design and develop mobile apps for Android and iOS — built to grow your digital reach.",

      image: "/Link.png",
    },
    
  ];

  return (
    <main className="min-h-screen bg-[#fefce8]">
      {/* Hero Section - Tailored Solutions */}
      <Navbar />

      {/* Header Section */}
      <div className="relative bg-[#f0d6f0] pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-oswald font-bold text-xl text-[#0d9488]">
            OUR SERVICES!
          </p>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2b0012] mb-4">
          Websites & Mobile Apps
          </h1>
          <p className="font-oswald text-xl text-[#2b0012]">
          Pretty and powerful digital experiences that work.
          </p>
        </div>

        {/* Wavy divider */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20 text-yellow-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative  py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-oswald sm:text-3xl lg:text-5xl font-bold text-[#4a2c2a] leading-tight">
                TAILORED SOLUTIONS FOR{" "}
                <span className="text-[#a08474] font-oswald">YOUR BUSINESS</span>
              </h1>
              <p className="text-lg font-oswald text-[#6b5144] max-w-xl leading-relaxed">
                At EdMS, we are more than a creative agency—we are your growth partners.
                Founded with a mission to transform ideas into impactful results, we
                specialize in delivering innovative strategies that drive measurable success.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/website.png"
                alt="Business Solutions Illustration"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <section className="bg-stone-50 py-14 px-4 sm:px-8 lg:px-12">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative w-full rounded-[2rem] overflow-hidden duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-90 sm:h-96 lg:h-[24rem] object-cover"
              />
              <div className="absolute top-8 left-8 right-8 text-white">
                <h2 className="text-4xl font-bold font-oswald">{card.title}</h2>
                <p className="mt-2 text-[1.205rem] font-oswald">{card.text}</p>
              </div>
              <button className="absolute bottom-8 right-8 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-xl">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <MinimumProjectsGrid />
      <StepsSection />
      <Tesiminiols />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
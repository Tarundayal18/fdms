"use client"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Bold Brew Coffee Co.",
      logo: "LogoIpsum",
      image: "/coffee-machine-espresso.jpg",
    },
    {
      id: 2,
      title: "FlexFit Studio Branding",
      logo: "LOGO",
      image: "/black-water-bottle-fitness.jpg",
    },
    {
      id: 3,
      title: "Bold Brew Coffee Co.",
      logo: "LogoIpsum",
      image: "/coffee-machine-espresso.jpg",
    },
    {
      id: 4,
      title: "FlexFit Studio Branding",
      logo: "LOGO",
      image: "/black-water-bottle-fitness.jpg",
    },
  ]

  return (
    <section className="w-full bg-[#FFFACD] py-16 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-oswald text-6xl md:text-8xl font-black text-[#3B001B] text-center leading-tight">
          Look what
          <br />
          we made!
        </h2>
        <div className="flex justify-center mt-4">
          {/* <div className="bg-blue-200 rounded-full px-6 py-2">
            <span className="font-oswald text-[#3B001B] font-bold">Portfolio</span>
          </div> */}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-[68rem] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {portfolioItems.map((item) => (
      <div key={item.id} className="flex flex-col items-center">
        {/* Portfolio Card */}
        <div className="rounded-3xl w-full h-[460px] relative overflow-hidden mb-6 bg-[#FFFBEA] flex flex-col justify-between">
          {/* Image */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            {/* Logo Badge */}
            <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-2 z-10 shadow">
              <span className="font-oswald text-[#3B001B] font-bold text-sm">
                {item.logo}
              </span>
            </div>

            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-fill transition-transform duration-300 ease-out hover:scale-110"
            />
          </div>

          {/* Title + Button Row */}
          <div className="flex items-center justify-between w-full px-6 py-4 bg-[#FFFBEA] rounded-b-3xl">
            <h3 className="font-oswald text-lg md:text-xl font-bold text-[#3B001B]">
              {item.title}
            </h3>
            <button className="bg-[#FFE878] text-[#3B001B] font-oswald font-bold py-2 px-6 rounded-full border-b-4 border-[#3B001B] hover:translate-y-1 transition-transform duration-100">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  )
}

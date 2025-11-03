export default function FeaturesSection() {
    const features = [
      {
        title: "Fast and Reliable Delivery",
        description: "We move at the speed of creativity — and caffeine. Your deadlines won't even see us coming.",
        bgColor: "bg-[#d4f4dd]",
        image: "/img01.png",
      },
      {
        title: "Clear, No-Surprise Pricing",
        description: "No hidden fees, no sneaky charges — just clear, honest pricing and work that makes you wonder.",
        bgColor: "bg-[#f5d4e8]",
        image: "/img02.png",
      },
      {
        title: "Everything, Under One Roof",
        description: "Design? Branding? Websites? TikTok dances? (Okay, maybe not that last one... yet.)",
        bgColor: "bg-[#fef6c8]",
        image: "/img03.png",
      },
    ]
  
    return (
      <section className="w-full bg-[#fef6e8] py-16 px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Illustration Container */}
                <div
                  className="mb-6 flex h-70 w-70 items-center justify-center rounded-full p-8"
                >
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="h-full w-full object-contain"
                  />
                </div>
  
                {/* Title */}
                <h3 className="mb-4 font-oswald text-2xl font-bold leading-tight text-[#3d1a1f] md:text-3xl">
                  {feature.title}
                </h3>
  
                {/* Description */}
                <p className="max-w-sm w-65 text-base leading-relaxed text-[#3d1a1f]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
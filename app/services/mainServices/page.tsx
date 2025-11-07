export default function MainServicePage() {
    return (
      <main className="font-oswald bg-white">

        {/* Hero Section with CTA */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-blue-50">
          <div className="max-w-5xl mx-auto text-center">
            {/* Founder Avatars */}
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-300 border-2 border-white flex items-center justify-center text-sm font-bold text-gray-900">
                  JD
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-900 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                  AK
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-sm font-bold text-white">
                  RK
                </div>
              </div>
              <p className="text-gray-700 font-oswald text-sm md:text-base font-semibold">Trusted by founders.</p>
            </div>
  
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Google Ads that spend smart, not just spend more.
            </h1>
  
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-700 mb-10 font-oswald">
              We plan, create, and optimize search ad campaigns that drive real ROI.
            </p>
  
            {/* CTA Button */}
            <button className="bg-gray-900 text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-gray-800 transition-colors text-base md:text-lg font-oswald">
              Book A Call
            </button>
          </div>
        </section>
        
        {/* Diagonal Striped Banner Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="relative h-64 md:h-80 flex items-center justify-center">
            {/* Orange Stripe */}
            <div
              className="absolute top-0 left-0 w-full h-32 bg-orange-500 transform -skew-y-2"
              style={{
                clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4 text-white font-bold text-base md:text-lg whitespace-nowrap">
                  <span>Identity Kit</span>
                  <span className="text-xl">×</span>
                  <span>Branding As A Service</span>
                  <span className="text-xl">×</span>
                  <span>Brand Makeover</span>
                  <span className="text-xl">×</span>
                  <span>Post Packs</span>
                  <span className="text-xl">×</span>
                  <span>Pay & Play</span>
                  <span className="text-xl">×</span>
                  <span>CXO Glow</span>
                </div>
              </div>
            </div>
  
            {/* Navy Stripe */}
            <div
              className="absolute bottom-0 left-0 w-full h-32 bg-gray-900 transform skew-y-2"
              style={{
                clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4 text-white font-bold text-base md:text-lg whitespace-nowrap">
                  <span>100+ Customers</span>
                  <span className="text-xl">×</span>
                  <span>Senior Designer</span>
                  <span className="text-xl">×</span>
                  <span>10+ Years of Experience</span>
                  <span className="text-xl">×</span>
                  <span>100+ Customers</span>
                  <span className="text-xl">×</span>
                  <span>Senior Designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Service Cards Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {/* Mint Green Card */}
            <div className="bg-green-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Actually Do</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We run strategic Google Ads campaigns with focused keyword research, ad copywriting, and conversion
                tracking to maximize performance and minimize wastage.
              </p>
            </div>
  
            {/* Pink Card */}
            <div className="bg-pink-200 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why We're Not Like Everyone Else</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Others chase clicks. We chase conversions. Every ad we run is tracked, tested, and tuned for
                profitability.
              </p>
            </div>
  
            {/* Cream Card */}
            <div className="bg-amber-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Data-driven strategy meets creative excellence. We combine analytics with storytelling to create campaigns
                that resonate and convert.
              </p>
            </div>
          </div>
        </section>
  
        
      </main>
    )
  }
  
export default function BrandingIdentityPage() {
    return (
      <main className="min-h-screen bg-stone-100">
        {/* Hero Section */}
        <section className="bg-stone-100 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-teal-600 font-bold text-sm tracking-widest mb-4">OUR SERVICES!</p>
              <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 mb-4">
                Branding & Identity
              </h1>
              <p className="text-stone-700 text-lg sm:text-xl font-light">Make your mark—boldly and beautifully.</p>
            </div>
  
            {/* Wavy Divider */}
            <div className="flex justify-center">
              <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-20 fill-stone-50">
                <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z" />
              </svg>
            </div>
          </div>
        </section>
  
        {/* Service Cards Section */}
        <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Logo Magic Card */}
              <div className="relative bg-orange-500 rounded-3xl p-8 sm:p-12 min-h-96 flex flex-col justify-between overflow-hidden group">
                {/* Wavy shape at bottom */}
                <svg className="absolute bottom-0 right-0 w-32 h-32 text-orange-400 opacity-30" viewBox="0 0 100 100">
                  <path d="M50,0 Q100,20 100,50 Q100,80 50,100 Q0,80 0,50 Q0,20 50,0" fill="currentColor" />
                </svg>
  
                <div className="relative z-10">
                  <h3 className="font-oswald text-white text-3xl sm:text-4xl font-black mb-2">LOGO MAGIC</h3>
                  <p className="text-white text-sm sm:text-base font-light leading-relaxed">
                    We create memorable logos and identity kits that visually define your brand's purpose and personality.
                  </p>
                </div>
  
                {/* Arrow Button */}
                <div className="relative z-10 flex justify-end">
                  <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-stone-100 transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
  
              {/* Pack Attack Card */}
              <div className="relative bg-violet-600 rounded-3xl p-8 sm:p-12 min-h-96 flex flex-col justify-between overflow-hidden group">
                {/* Wavy shape at bottom */}
                <svg className="absolute bottom-0 right-0 w-32 h-32 text-violet-500 opacity-30" viewBox="0 0 100 100">
                  <path d="M50,0 Q100,20 100,50 Q100,80 50,100 Q0,80 0,50 Q0,20 50,0" fill="currentColor" />
                </svg>
  
                <div className="relative z-10">
                  <h3 className="font-oswald text-white text-3xl sm:text-4xl font-black mb-2">PACK ATTACK</h3>
                  <p className="text-white text-sm sm:text-base font-light leading-relaxed">
                    We design packaging and brand collaterals that make your product irresistible — on shelves or screens.
                  </p>
                </div>
  
                {/* Arrow Button */}
                <div className="relative z-10 flex justify-end">
                  <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-stone-100 transition-colors">
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
  
            {/* Bottom Content Section */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-oswald text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
                  TAILORED SOLUTIONS FOR YOUR BUSINESS
                </h2>
                <p className="text-stone-600 text-base leading-relaxed">
                  At FdMS, we are more than a creative agency—we are your growth partners. Founded with a mission to
                  transform ideas into impactful results, we specialize in delivering innovative strategies that drive
                  measurable success.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <svg className="w-full max-w-sm h-auto" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Illustration placeholder - simplified business illustration */}
                  <circle cx="150" cy="100" r="40" fill="none" stroke="#9CA3AF" strokeWidth="2" />
                  <path d="M150 140 L150 200" stroke="#9CA3AF" strokeWidth="2" />
                  <path d="M120 160 L100 200" stroke="#9CA3AF" strokeWidth="2" />
                  <path d="M180 160 L200 200" stroke="#9CA3AF" strokeWidth="2" />
                  <path d="M100 200 L200 200" stroke="#9CA3AF" strokeWidth="2" />
  
                  {/* Gear and document elements */}
                  <circle cx="220" cy="80" r="25" fill="none" stroke="#9CA3AF" strokeWidth="2" />
                  <path d="M210 70 L230 90" stroke="#9CA3AF" strokeWidth="1.5" />
                  <path d="M230 70 L210 90" stroke="#9CA3AF" strokeWidth="1.5" />
  
                  {/* Bar chart elements */}
                  <rect x="240" y="140" width="20" height="40" fill="none" stroke="#9CA3AF" strokeWidth="2" />
                  <rect x="265" y="120" width="20" height="60" fill="none" stroke="#9CA3AF" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
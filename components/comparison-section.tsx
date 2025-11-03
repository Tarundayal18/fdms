"use client"

import type React from "react"

interface ComparisonItem {
  icon: React.ReactNode
  text: string
}

interface ComparisonSectionProps {
  leftTitle?: string
  rightTitle?: string
  leftItems?: ComparisonItem[]
  rightItems?: ComparisonItem[]
}

// Icon Components
const GenericIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const JargonIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const CreativityIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const MetricsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
  </svg>
)

const CampaignIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const CostIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const MethodsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const ScopeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const TacticsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const ClientIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const PersonalizedIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const TalkIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
)

const IdeasIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-20C5.13 1 2 4.13 2 8c0 2.38.92 4.54 2.64 6.29.3.3.59.59.86.88.26.27.52.56.77.85.25.29.48.59.69.89.9 1.43 1.4 3.01 1.4 4.7v1h8v-1c0-1.69.5-3.27 1.4-4.7.21-.3.44-.6.69-.89.25-.29.51-.58.77-.85.27-.29.56-.58.86-.88C19.08 12.54 20 10.38 20 8c0-3.87-3.13-7-7-7zm0 2c-2.76 0-5 2.24-5 5 0 2.56 1.88 4.68 4.34 4.97.3-.35.61-.68.92-1 .31-.32.6-.65.87-.99C10.5 14.5 9 12.42 9 10c0-1.66 1.34-3 3-3s3 1.34 3 3c0 2.42-1.5 4.5-3.66 5.97.27.34.56.67.87.99.31.32.62.65.92 1 2.46-.29 4.34-2.41 4.34-4.97 0-2.76-2.24-5-5-5z" />
  </svg>
)

const ROIIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 9.41 12l4 4 6.3-6.29L21 12v-6z" />
  </svg>
)

const PartnersIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.64 1.7 1.77 1.7 2.95V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
)

const PricingIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
  </svg>
)

const ToolsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.6C.4 7 .9 10 2.9 12c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
  </svg>
)

const ExpertsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const StrategiesIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const PassionIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const defaultLeftItems: ComparisonItem[] = [
  { icon: <GenericIcon />, text: "Generic Solutions" },
  { icon: <JargonIcon />, text: "Jargon Overload" },
  { icon: <CreativityIcon />, text: "Boring Creativity" },
  { icon: <MetricsIcon />, text: "Fluff Metrics" },
  { icon: <CampaignIcon />, text: "One-Time Campaigners" },
  { icon: <CostIcon />, text: "Hidden Costs" },
  { icon: <MethodsIcon />, text: "Outdated Methods" },
  { icon: <ScopeIcon />, text: "Limited Scope" },
  { icon: <TacticsIcon />, text: "Reactive Tactics" },
  { icon: <ClientIcon />, text: "Just Another Client" },
]

const defaultRightItems: ComparisonItem[] = [
  { icon: <PersonalizedIcon />, text: "Personalized Plans" },
  { icon: <TalkIcon />, text: "Plain Talk" },
  { icon: <IdeasIcon />, text: "Bold Ideas" },
  { icon: <ROIIcon />, text: "Real ROI" },
  { icon: <PartnersIcon />, text: "Long-Term Partners" },
  { icon: <PricingIcon />, text: "Transparent Pricing" },
  { icon: <ToolsIcon />, text: "Innovative Tools" },
  { icon: <ExpertsIcon />, text: "Full-Service Experts" },
  { icon: <StrategiesIcon />, text: "Proactive Strategies" },
  { icon: <PassionIcon />, text: "Passion & Care" },
]

export default function ComparisonSection({
  leftTitle = "Other Agencies",
  rightTitle = "Agenius",
  leftItems = defaultLeftItems,
  rightItems = defaultRightItems,
}: ComparisonSectionProps) {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Main Heading Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative inline-block w-full">
            <h1 className="font-oswald font-bold text-5xl md:text-6xl lg:text-8xl text-[#3b001b] leading-tight">
              Built different
            </h1>
            <div className="flex items-center justify-center gap-4 mt-2 flex-wrap">
              <span className="font-oswald font-bold text-5xl md:text-6xl lg:text-8xl text-[#3b001b]">
                (in a good way)
              </span>
              {/* <div className="bg-yellow-300 text-[#3d1a3d] px-4 py-2 rounded-full text-xs md:text-sm font-bold font-oswald">
                Differences
              </div> */}
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            {/* Left Column - Other Agencies */}
            <div className="relative">
              {/* Title */}
              <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-4xl text-[#3b001b] mb-6 md:mb-8 text-center">
                {leftTitle}
              </h2>


              {/* Pink Box */}
              <div className="bg-pink-300 rounded-3xl p-6 md:p-8 lg:p-10 relative z-10">
                {/* Wavy Right Edge */}
                <div className="absolute -right-4 top-0 bottom-0 w-8 flex flex-col justify-around">
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                </div>

                {/* Items List */}
                <div className="space-y-4 md:space-y-5">
                  {leftItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-400 last:border-b-0">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <span className="text-gray-900 font-medium text-sm md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Agenius */}
            <div className="relative">
              {/* Title */}
              <h2 className="font-oswald font-bold text-2xl md:text-3xl lg:text-4xl text-[#3b001b] mb-6 md:mb-8 text-center pl-0 md:pl-4">
                {rightTitle}
              </h2>


              {/* Yellow Box */}
              <div className="bg-yellow-200 rounded-3xl p-6 md:p-8 lg:p-10 relative z-10">
                {/* Wavy Left Edge */}
                <div className="absolute -left-4 top-0 bottom-0 w-8 flex flex-col justify-around">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                </div>

                {/* Items List */}
                <div className="space-y-4 md:space-y-5">
                  {rightItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 pb-4 border-b border-gray-400 last:border-b-0">
                      <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <span className="text-gray-900 font-medium text-sm md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Versus Badge - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="bg-gray-900 text-white px-6 py-3 rounded-full font-oswald font-bold text-lg md:text-xl whitespace-nowrap shadow-lg">
                Versus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

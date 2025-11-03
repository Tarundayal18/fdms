interface Testimonial {
  id: number
  name: string
  quote: string
  company: string
  avatar: string
  bgColor: string
  textColor: string
  borderColor: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative flex flex-col items-start gap-3 p-4">
      {/* Name Badge - Speech Bubble Style */}
      <div className="relative flex items-center gap-3 rounded-3xl bg-yellow-100 px-6 py-3 shadow-sm">
        {/* Avatar Circle */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-400 text-2xl shadow-md">
          {testimonial.avatar}
        </div>

        {/* Name Text */}
        <div className="font-medium text-[#3b001b] text-lg">
          {testimonial.name}
        </div>

        {/* Speech Bubble Tail */}
        <div className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 transform bg-yellow-100"></div>
      </div>

      {/* Quote Card */}
      <div className={`w-full rounded-3xl ${testimonial.bgColor}  p-4 shadow-lg`}>
        {/* Quote Text */}
        <blockquote
          className={`mb-6 font-bold ${testimonial.textColor} text-lg leading-relaxed border-1 border-[#3b001b] rounded-2xl p-2`}
        >
          {testimonial.quote}
        </blockquote>


        {/* Company Info */}
        <div className="flex items-center gap-3 ">
          {/* Company Logo Circle */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-dotted border-gray-800 bg-white">
            <span className="text-xs font-black text-gray-900">LOGO</span>
          </div>

          {/* Company Name */}
          <div className={`font-semibold $  {testimonial.textColor}`}>
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}

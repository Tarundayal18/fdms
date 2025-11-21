"use client"

interface PaginationDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

export default function PaginationDots({ total, current, onDotClick }: PaginationDotsProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2.5 w-2.5 rounded-full transition-all md:h-3 md:w-3 ${
            index === current ? "bg-purple-900" : "bg-purple-300"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </div>
  )
}

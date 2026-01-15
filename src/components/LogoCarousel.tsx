import { useEffect, useRef } from 'react'

// Mock company logos - using SVG text representations for demonstration
const companies = [
  { name: 'TechCorp', color: 'from-blue-400 to-blue-600' },
  { name: 'DataFlow', color: 'from-purple-400 to-purple-600' },
  { name: 'CloudSync', color: 'from-cyan-400 to-cyan-600' },
  { name: 'AutoMate', color: 'from-green-400 to-green-600' },
  { name: 'FlowHub', color: 'from-pink-400 to-pink-600' },
  { name: 'TaskPro', color: 'from-orange-400 to-orange-600' },
  { name: 'WorkWave', color: 'from-indigo-400 to-indigo-600' },
  { name: 'SyncFlow', color: 'from-teal-400 to-teal-600' },
]

export function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset scroll position when we've scrolled past the first set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by industry leaders
          </p>
        </div>

        {/* Glassmorphic Container */}
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border/40 bg-background/30 p-6 backdrop-blur-xl sm:p-8 md:rounded-3xl md:p-10">
          {/* Gradient Overlays for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background/30 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background/30 to-transparent sm:w-32" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden sm:gap-12 md:gap-16"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate the logos twice for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex min-w-[140px] flex-shrink-0 items-center justify-center sm:min-w-[160px] md:min-w-[180px]"
              >
                <div className="group flex h-16 w-full items-center justify-center rounded-lg border border-border/50 bg-card/30 px-6 transition-all duration-300 hover:border-border hover:bg-card/50 sm:h-20 md:h-24">
                  <span
                    className={`bg-gradient-to-r ${company.color} bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:scale-110 sm:text-2xl md:text-3xl`}
                  >
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent sm:mt-10 sm:w-48" />
      </div>
    </section>
  )
}

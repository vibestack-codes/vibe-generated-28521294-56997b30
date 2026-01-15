import { CheckCircle2, Code, Rocket, Settings } from 'lucide-react'

const timelineSteps = [
  {
    step: 1,
    icon: Settings,
    title: 'Configure Your Workflow',
    description:
      'Set up your async tasks with our intuitive visual builder. Define triggers, dependencies, and execution rules in minutes.',
    accentColor: '#007BFF',
  },
  {
    step: 2,
    icon: Code,
    title: 'Integrate Your Tools',
    description:
      'Connect seamlessly with your existing stack. Support for REST APIs, webhooks, databases, and popular third-party services.',
    accentColor: '#9D00FF',
  },
  {
    step: 3,
    icon: Rocket,
    title: 'Deploy & Automate',
    description:
      'Launch your workflows with one click. Our infrastructure handles scaling, retries, and monitoring automatically.',
    accentColor: '#007BFF',
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: 'Monitor & Optimize',
    description:
      'Track performance in real-time with detailed analytics. Get insights and recommendations to continuously improve efficiency.',
    accentColor: '#9D00FF',
  },
]

export function Timeline() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Get up and running in four simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on md+ */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:block" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineSteps.map((item, index) => {
              const Icon = item.icon
              const isLast = index === timelineSteps.length - 1

              return (
                <div
                  key={item.step}
                  className="group relative flex flex-col gap-6 md:flex-row md:gap-8"
                >
                  {/* Number Badge */}
                  <div className="relative z-10 flex items-start md:flex-shrink-0">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-background/40 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-background/50"
                      style={{
                        boxShadow: `0 0 20px ${item.accentColor}20`,
                      }}
                    >
                      <Icon
                        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                        style={{ color: item.accentColor }}
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isLast ? '' : 'pb-8 md:pb-0'
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-background/50 sm:p-8">
                      {/* Neon Glow Effect on Hover */}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                        style={{
                          background: `radial-gradient(circle at 0% 50%, ${item.accentColor}, transparent 70%)`,
                        }}
                      />

                      {/* Step Number Badge */}
                      <div className="relative mb-3 inline-flex">
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            backgroundColor: `${item.accentColor}20`,
                            color: item.accentColor,
                          }}
                        >
                          Step {item.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="relative mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="relative text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

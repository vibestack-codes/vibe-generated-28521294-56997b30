import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { FloatingDashboard } from '@/components/FloatingDashboard'
import { LogoCarousel } from '@/components/LogoCarousel'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { Timeline } from '@/components/Timeline'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header with glassmorphism */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60">
              <span className="text-lg font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-xl font-bold">FlowState</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm">
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="mt-4" onClick={() => setIsOpen(false)}>
                  Sign In
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Master Asynchronous
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Workflows
              </span>{' '}
              with Ease
            </h1>

            {/* Supporting Subheadline */}
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl lg:mt-8">
              Streamline your team's productivity with intelligent task orchestration.
              Build, automate, and scale workflows that adapt to your needs.
            </p>

            {/* CTA Button */}
            <div className="mt-8 lg:mt-10">
              <Button
                size="lg"
                className="hero-cta-button bg-[#007BFF] px-8 py-6 text-base font-semibold text-white transition-all hover:bg-[#0056b3] sm:text-lg"
              >
                Get Started for Free
              </Button>
            </div>

            {/* Floating Dashboard Mockup */}
            <FloatingDashboard />
          </div>
        </section>

        {/* Logo Carousel Section */}
        <LogoCarousel />

        {/* Features Grid Section */}
        <FeaturesGrid />

        {/* Timeline Section */}
        <Timeline />
      </main>

      <Toaster position="bottom-right" />
    </div>
  )
}

export default App

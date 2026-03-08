/**
 * BeaconLink AI — Landing Page
 * A modern, single-page React + Tailwind CSS landing for the intelligent,
 * location-aware wearable AI companion for immersive physical spaces.
 */

import { useState, useEffect } from 'react'

// =============================================================================
// SCROLL ANIMATION HOOK — triggers fade-in/slide-up on scroll into view
// =============================================================================
function useScrollAnimation(threshold = 0.1) {
  const [ref, setRef] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return [setRef, isVisible]
}

// =============================================================================
// NAV BAR
// =============================================================================
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
          BeaconLink
        </a>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            Feature
          </a>
          <a href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

// =============================================================================
// HERO SECTION
// =============================================================================
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background — atmospheric space with subtle wearable */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1920&q=80"
          alt="Person exploring a grand, atmospheric space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-[fadeIn_0.8s_ease-out]">
          Your Intelligent Personal Guide to Every Place That Tells a Story
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-[slideUp_0.8s_ease-out_0.2s_both]">
          A tiny wearable. Precise location awareness. Real-time personalized audio stories.
          Natural conversations. Immersive, adaptive adventures that unfold exactly where you stand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slideUp_0.8s_ease-out_0.4s_both]">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-lg"
          >
            See How It Works
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-colors"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// VALUE PROPOSITION — "The Experience"
// =============================================================================
function ValueProposition() {
  const [setRef, isVisible] = useScrollAnimation(0.15)

  return (
    <section ref={setRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Many remarkable places still feel static, impersonal, or overwhelming — especially for visitors
          who move at different paces, speak different languages, or simply want a more personal connection.
        </p>
        <p
          className={`mt-8 text-xl md:text-2xl font-semibold text-indigo-700 leading-relaxed transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          BeaconLink transforms them. It turns passive wandering into deeply personal, responsive journeys —
          adapting in real time to who you are, what you care about, and exactly where you are.
        </p>
      </div>
    </section>
  )
}

// =============================================================================
// CORE EXPERIENCE HIGHLIGHTS — 6 benefit cards
// =============================================================================
const experienceCards = [
  {
    title: 'Hyper-Personalized Narration',
    description: 'Content that evolves with your interests, pace, and location. Every step reveals stories tailored just for you.',
    icon: '🎯',
  },
  {
    title: 'Natural Voice Conversations',
    description: 'Ask anything. Get thoughtful, context-aware replies. Your AI guide understands where you are and what you\'re experiencing.',
    icon: '💬',
  },
  {
    title: 'Seamless, Hands-Free Immersion',
    description: 'No screens. No maps. Just you and the place coming alive — completely hands-free, triggered exactly where you stand.',
    icon: '✨',
  },
  {
    title: 'Universal Accessibility',
    description: 'Multiple languages, adaptive pacing, and support for hearing and mobility needs. Every visitor deserves the full experience.',
    icon: '🌍',
  },
  {
    title: 'Privacy-Focused Group Safety',
    description: 'Opt-in features to know where your companions are — without hassle. Stay connected, stay safe, stay in control.',
    icon: '🔒',
  },
  {
    title: 'Real-Time Location Precision',
    description: 'Low-cost BLE beacons deliver pinpoint accuracy. Content activates precisely when and where it matters most.',
    icon: '📍',
  },
]

function ExperienceHighlights() {
  const [setRef, isVisible] = useScrollAnimation(0.08)

  return (
    <section ref={setRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          The Experience
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
          What makes BeaconLink different — and why visitors love it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceCards.map((card, i) => (
            <div
              key={card.title}
              className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// HOW IT WORKS — 5-step flow
// =============================================================================
const howItWorksSteps = [
  { step: 1, title: 'Wear the device', desc: 'Clip on the small, comfortable wearable — built for all-day use in active environments.' },
  { step: 2, title: 'Step into the space', desc: 'Enter any BeaconLink-enabled location. No setup, no pairing — it just works.' },
  { step: 3, title: 'Content activates precisely', desc: 'BLE beacons detect your position. Narration and stories trigger exactly where you stand.' },
  { step: 4, title: 'Speak naturally & explore', desc: 'Ask questions, dive deeper, or simply listen. Your guide adapts to you in real time.' },
  { step: 5, title: 'Stay connected with your group', desc: 'Optional opt-in features keep you and your companions in sync — with full privacy control.' },
]

function HowItWorks() {
  const [setRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="how-it-works" ref={setRef} className="py-20 md:py-28 bg-indigo-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          How It Works
        </h2>
        <p className="text-slate-600 text-center mb-16">
          Five simple steps to a completely transformed visit.
        </p>

        <div className="space-y-8">
          {howItWorksSteps.map((item, i) => (
            <div
              key={item.step}
              className={`flex gap-6 items-start transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// DEVICE SHOWCASE — wearable in realistic contexts
// =============================================================================
function DeviceShowcase() {
  const [setRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={setRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Designed for Discovery
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Small, discreet, comfortable — built for all-day wear in active environments.
        </p>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              alt="Compact clip-on wearable device"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Clip-on style</h3>
              <p className="text-slate-600 text-sm">Attach to collar, pocket, or bag. Unobtrusive and secure.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&q=80"
              alt="Earpiece-style wearable"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Earpiece style</h3>
              <p className="text-slate-600 text-sm">Hands-free audio, comfortable for hours of exploration.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
              alt="Badge-style wearable device"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Badge style</h3>
              <p className="text-slate-600 text-sm">Modern, minimal design. Fits naturally with any outfit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// KEY FEATURES — card/accordion style
// =============================================================================
const keyFeatures = [
  { title: 'Real-time, location-triggered AI narration & responses', desc: 'Content activates the moment you arrive — no tapping, no searching.' },
  { title: 'Adaptive storytelling and interactive elements', desc: 'Stories evolve based on your interests, pace, and path through the space.' },
  { title: 'Multi-language support + accessibility modes', desc: 'Multiple languages, adaptive pacing, and support for diverse needs.' },
  { title: 'Secure, user-controlled group location features', desc: 'Opt-in "Find My" style features — you decide who sees what.' },
  { title: 'Easy content curation tools', desc: 'Space operators can create and update experiences with intuitive tools.' },
]

function KeyFeatures() {
  const [setRef, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="features" ref={setRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Key Features
        </h2>
        <p className="text-slate-600 text-center mb-16">
          Everything you need for a deeply personal, worry-free experience.
        </p>

        <div className="space-y-4">
          {keyFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// CONTACT FORM — final CTA
// =============================================================================
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', organization: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-indigo-900 text-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to make every visit unforgettable?
        </h2>
        <p className="text-indigo-200 mb-12 text-lg">
          Experience places in a new way. Get in touch and we&apos;ll show you how BeaconLink can transform your next adventure.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-white/10 border border-white/20">
            <p className="text-xl font-medium">Thank you for reaching out!</p>
            <p className="text-indigo-200 mt-2">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-indigo-200 mb-1">Organization / Role (optional)</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g. Curator, Educator, Visitor"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                placeholder="Tell us about your interest..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold bg-orange-500 hover:bg-orange-400 text-white transition-colors shadow-lg"
            >
              Request a Demo
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// =============================================================================
// FOOTER
// =============================================================================
function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
      <p>© {new Date().getFullYear()} BeaconLink AI. All rights reserved.</p>
    </footer>
  )
}

// =============================================================================
// MAIN APP
// =============================================================================
export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <ValueProposition />
      <ExperienceHighlights />
      <HowItWorks />
      <DeviceShowcase />
      <KeyFeatures />
      <ContactForm />
      <Footer />
    </div>
  )
}

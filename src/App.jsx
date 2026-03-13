/**
 * BeaconLink AI — Landing Page
 * A modern, single-page React + Tailwind CSS landing for the intelligent,
 * location-aware wearable AI companion for immersive physical spaces.
 */

import { useState, useEffect, useRef } from "react";
import heroBgVideo from "../assets/herobg.mp4";
import museumImage from "../assets/museum.webp";
import themeparkImage from "../assets/themepark.jpg";
import heritageImage from "../assets/heritage.jpeg";

// =============================================================================
// SCROLL ANIMATION HOOK — triggers fade-in/slide-up on scroll into view
// =============================================================================
function useScrollAnimation(threshold = 0.1) {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible];
}

// =============================================================================
// NAV BAR
// =============================================================================
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-base sm:text-lg md:text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors tracking-tight"
        >
          BeaconLink
        </a>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="#features"
            className="text-sm sm:text-base text-slate-600 hover:text-indigo-600 font-medium transition-colors"
          >
            Feature
          </a>
          <a
            href="#contact"
            className="text-sm sm:text-base text-slate-600 hover:text-indigo-600 font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

// =============================================================================
// HERO SECTION
// =============================================================================
function Hero() {
  const videoRef = useRef(null);

  const setHalfSpeed = () => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background — video with bottom 5px cropped, 2x slower */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroBgVideo}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={setHalfSpeed}
          className="absolute top-0 left-0 w-full h-[calc(100%+5px)] object-cover object-top"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-[fadeIn_0.8s_ease-out]">
          Your Intelligent Personal Guide to Every Place That Tells a Story
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed animate-[slideUp_0.8s_ease-out_0.2s_both]">
          A tiny wearable. Precise location awareness. Real-time personalized
          audio stories. Natural conversations. Immersive, adaptive adventures
          that unfold exactly where you stand.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-[slideUp_0.8s_ease-out_0.4s_both]">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-lg"
          >
            See How It Works
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-colors"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// VALUE PROPOSITION — "The Experience"
// =============================================================================
function ValueProposition() {
  const [setRef, isVisible] = useScrollAnimation(0.15);

  return (
    <section
      ref={setRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Many remarkable places still feel static, impersonal, or overwhelming
          — especially for visitors who move at different paces, speak different
          languages, or simply want a more personal connection.
        </p>
        <p
          className={`mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-indigo-700 leading-relaxed transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          BeaconLink transforms them. It turns passive wandering into deeply
          personal, responsive journeys — adapting in real time to who you are,
          what you care about, and exactly where you are.
        </p>
      </div>
    </section>
  );
}

// =============================================================================
// CORE EXPERIENCE HIGHLIGHTS — 6 benefit cards (minimal icon set)
// =============================================================================
const experienceCards = [
  {
    title: "Hyper-Personalized Narration",
    description:
      "Content that evolves with your interests, pace, and location. Every step reveals stories tailored just for you.",
    icon: "personalize",
  },
  {
    title: "Natural Voice Conversations",
    description:
      "Ask anything. Get thoughtful, context-aware replies. Your AI guide understands where you are and what you're experiencing.",
    icon: "voice",
  },
  {
    title: "Seamless, Hands-Free Immersion",
    description:
      "No screens. No maps. Just you and the place coming alive — completely hands-free, triggered exactly where you stand.",
    icon: "handsFree",
  },
  {
    title: "Universal Accessibility",
    description:
      "Multiple languages, adaptive pacing, and support for hearing and mobility needs. Every visitor deserves the full experience.",
    icon: "accessibility",
  },
  {
    title: "Privacy-Focused Group Safety",
    description:
      "Opt-in features to know where your companions are — without hassle. Stay connected, stay safe, stay in control.",
    icon: "group",
  },
  {
    title: "Real-Time Location Precision",
    description:
      "Low-cost BLE beacons deliver pinpoint accuracy. Content activates precisely when and where it matters most.",
    icon: "location",
  },
];

const experienceIcons = {
  personalize: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="w-6 h-6 text-indigo-600"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
    </svg>
  ),
  voice: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="w-6 h-6 text-indigo-600"
    >
      <path d="M12 2v4M8 6v4a4 4 0 0 0 8 0V6M4 14v2a8 8 0 0 0 16 0v-2" />
    </svg>
  ),
  handsFree: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="w-6 h-6 text-indigo-600"
    >
      <path d="M4 12h16M12 4a8 8 0 0 1 0 16" />
    </svg>
  ),
  accessibility: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="w-6 h-6 text-indigo-600"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M9 12h6" />
    </svg>
  ),
  group: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="w-6 h-6 text-indigo-600"
    >
      <circle cx="9" cy="7" r="2.5" />
      <circle cx="15" cy="7" r="2.5" />
      <path d="M5 20v-1a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1" />
    </svg>
  ),
  location: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="w-6 h-6 text-indigo-600"
    >
      <path d="M12 2C8 8 8 14 12 20c4-6 4-12 0-18z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

function ExperienceHighlights() {
  const [setRef, isVisible] = useScrollAnimation(0.08);

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
              className={`group relative rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-indigo-200 group-hover:bg-indigo-400 transition-colors duration-300"
                aria-hidden
              />
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 mt-0.5 p-2 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300"
                  aria-hidden
                >
                  {experienceIcons[card.icon]}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// HOW IT WORKS — compact winding path, alternating left/right, colored nodes
// =============================================================================
const howItWorksSteps = [
  {
    title: "Wear the device",
    desc: "Clip on the small, comfortable wearable — built for all-day use in active environments.",
    color: "bg-sky-400",
  },
  {
    title: "Step into the space",
    desc: "Enter any BeaconLink-enabled location. No setup, no pairing — it just works.",
    color: "bg-pink-400",
  },
  {
    title: "Content activates precisely",
    desc: "BLE beacons detect your position. Narration and stories trigger exactly where you stand.",
    color: "bg-violet-500",
  },
  {
    title: "Speak naturally & explore",
    desc: "Ask questions, dive deeper, or simply listen. Your guide adapts to you in real time.",
    color: "bg-teal-500",
  },
  {
    title: "Stay connected with your group",
    desc: "Optional opt-in features keep you and your companions in sync — with full privacy control.",
    color: "bg-indigo-600",
  },
];

function HowItWorks() {
  const [setRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="how-it-works"
      ref={setRef}
      className="py-16 md:py-20 bg-slate-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          How It Works
        </h2>
        <p className="text-slate-600 text-center mb-10">
          Five simple steps to a completely transformed visit.
        </p>

        <div className="relative">
          {/* Mobile: horizontal scroll of step cards */}
          <div
            className="md:hidden overflow-x-auto overflow-y-hidden -mx-4 px-4 pb-2 scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-4 min-w-min">
              {howItWorksSteps.map((item, i) => {
                const num = i + 1;
                return (
                  <div
                    key={item.title}
                    className={`shrink-0 w-[78vw] max-w-[300px] snap-center rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } transition-all duration-500`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div
                      className={`h-2 w-full ${item.color} opacity-95`}
                      aria-hidden
                    />
                    <div className="p-4">
                      <div
                        className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${item.color} text-white text-sm font-bold shadow mb-3`}
                      >
                        {num}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 italic uppercase tracking-wide mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: centered timeline with alternating left / right content */}
          <div className="hidden md:block relative">
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 bg-slate-700 rounded-full"
              aria-hidden
            />
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l-2 border-dashed border-white/60"
              aria-hidden
            />
            <div className="flex flex-col gap-6">
              {howItWorksSteps.map((item, i) => {
                const contentOnLeft = i % 2 === 0;
                const num = i + 1;
                const contentBlock = (
                  <div
                    className={`${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } transition-all duration-500`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <h3 className="text-lg font-bold text-slate-900 italic uppercase tracking-wide mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
                return (
                  <div
                    key={item.title}
                    className="relative min-h-[72px] grid grid-cols-[1fr_auto_1fr] items-center gap-4"
                  >
                    <div
                      className={`min-w-0 py-1 ${
                        contentOnLeft ? "pr-6 text-right" : ""
                      }`}
                    >
                      {contentOnLeft && contentBlock}
                    </div>
                    <div
                      className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${item.color} text-white font-bold text-lg shadow-md z-10`}
                    >
                      {num}
                    </div>
                    <div className="min-w-0 py-1 pl-6">
                      {!contentOnLeft && contentBlock}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// BEST SUITED FOR — use-case cards: museums, themed parks, heritage sites
// =============================================================================
const bestSuitedForCards = [
  {
    title: "Museums",
    description:
      "Art, history, and science come alive with personalized audio tours. Multi-language support and hands-free narration let every visitor explore at their own pace.",
    image: museumImage,
    alt: "Museum gallery with visitors",
  },
  {
    title: "Themed parks & lands",
    description:
      "Immersive worlds deserve immersive guidance. Location-triggered stories, wayfinding, and optional group safety keep families connected while everyone enjoys the adventure.",
    image: themeparkImage,
    alt: "Themed park or immersive land",
  },
  {
    title: "Heritage & historic sites",
    description:
      "Monuments, ruins, and cultural districts tell deeper stories with context-aware narration. Accessibility modes and adaptive pacing make heritage accessible to all.",
    image: heritageImage,
    alt: "Historic or heritage site",
  },
];

function BestSuitedFor() {
  const [setRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={setRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Best Suited For
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
          BeaconLink shines in spaces where stories come alive and every corner
          has something to discover.
        </p>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {bestSuitedForCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// KEY FEATURES — card/accordion style
// =============================================================================
const keyFeatures = [
  {
    title: "Real-time, location-triggered AI narration & responses",
    desc: "Content activates the moment you arrive — no tapping, no searching.",
  },
  {
    title: "Adaptive storytelling and interactive elements",
    desc: "Stories evolve based on your interests, pace, and path through the space.",
  },
  {
    title: "Multi-language support + accessibility modes",
    desc: "Multiple languages, adaptive pacing, and support for diverse needs.",
  },
  {
    title: "Secure, user-controlled group location features",
    desc: 'Opt-in "Find My" style features — you decide who sees what.',
  },
  {
    title: "Easy content curation tools",
    desc: "Space operators can create and update experiences with intuitive tools.",
  },
];

function KeyFeatures() {
  const [setRef, isVisible] = useScrollAnimation(0.1);

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
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// CONTACT FORM — final CTA
// =============================================================================
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-indigo-900 text-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to make every visit unforgettable?
        </h2>
        <p className="text-indigo-200 mb-12 text-lg">
          Experience places in a new way. Get in touch and we&apos;ll show you
          how BeaconLink can transform your next adventure.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-white/10 border border-white/20">
            <p className="text-xl font-medium">Thank you for reaching out!</p>
            <p className="text-indigo-200 mt-2">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-indigo-200 mb-1"
              >
                Name
              </label>
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-indigo-200 mb-1"
              >
                Email
              </label>
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
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-indigo-200 mb-1"
              >
                Organization / Role (optional)
              </label>
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-indigo-200 mb-1"
              >
                Message
              </label>
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
  );
}

// =============================================================================
// FOOTER
// =============================================================================
function Footer() {
  return (
    <footer className="py-5 sm:py-6 md:py-8 px-4 bg-slate-900 text-slate-400 text-center">
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} BeaconLink AI. All rights reserved.
      </p>
    </footer>
  );
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
      <BestSuitedFor />
      <KeyFeatures />
      <ContactForm />
      <Footer />
    </div>
  );
}

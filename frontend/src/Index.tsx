import { useRef } from "react";
import { Globe, ArrowRight } from "lucide-react";
import { AboutSection } from "./components/AboutSection";
import { FeaturedVideoSection } from "./components/FeaturedVideoSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ServicesSection } from "./components/ServicesSection";

export function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Vanilla JS Ref-based video fade animation helper
  const fadeVideo = (video: HTMLVideoElement, targetOpacity: number, duration: number) => {
    const startOpacity = parseFloat(video.style.opacity || "0");
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = currentVal.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const handleCanPlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.play().catch(() => {});
    fadeVideo(video, 1, 500);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const remainingTime = video.duration - video.currentTime;

    // Trigger fade-out 500ms before completion (we start at 0.55s remaining)
    if (remainingTime <= 0.55 && !video.dataset.fadingOut) {
      video.dataset.fadingOut = "true";
      fadeVideo(video, 0, 500);
    }
  };

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.style.opacity = "0";
    video.dataset.fadingOut = ""; // reset fadingOut flag

    setTimeout(() => {
      video.currentTime = 0;
      video.play().then(() => {
        fadeVideo(video, 1, 500);
      }).catch(() => {});
    }, 100);
  };

  return (
    <div className="bg-black text-white min-h-screen w-full relative">
      {/* SECTION 1: HERO */}
      <header className="min-h-screen relative flex flex-col overflow-hidden w-full bg-black">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          poster="/posters/hero.webp"
          muted
          autoPlay
          playsInline
          preload="auto"
          onCanPlay={handleCanPlay}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          style={{ opacity: 0 }}
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0 pointer-events-none"
        />

        {/* Gradient overlay to darken background for text readability */}
        <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

        {/* Navbar */}
        <nav className="relative z-20 w-full px-6 py-6">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Left Brand */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg tracking-tight">Asme</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8 ml-8">
                <a href="#features" className="text-white/85 hover:text-white text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-white/85 hover:text-white text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#about" className="text-white/85 hover:text-white text-sm font-medium transition-colors">
                  About
                </a>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-white/80 text-sm font-medium transition-colors cursor-pointer">
                Sign Up
              </button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white hover:bg-white/5 text-sm font-medium transition-colors cursor-pointer">
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center -translate-y-[10%] md:-translate-y-[15%] max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white tracking-tight font-normal font-instrument leading-none mb-8 select-none">
            Know it then <em className="italic">all</em>.
          </h1>

          {/* Email Signup Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full max-w-xl mx-auto mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none text-white placeholder:text-white/40 flex-1 w-full text-sm py-1"
            />
            <button
              type="submit"
              className="bg-white hover:bg-neutral-200 text-black rounded-full p-3 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Subtitle */}
          <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto mb-6 px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>

          {/* Manifesto Button */}
          <div>
            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
              Read Manifesto
            </button>
          </div>
        </div>

        {/* Social Icons Footer */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="#"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* SECTION 2: ABOUT */}
      <div id="about">
        <AboutSection />
      </div>

      {/* SECTION 3: FEATURED VIDEO */}
      <div id="features">
        <FeaturedVideoSection />
      </div>

      {/* SECTION 4: PHILOSOPHY */}
      <PhilosophySection />

      {/* SECTION 5: SERVICES */}
      <ServicesSection />
    </div>
  );
}

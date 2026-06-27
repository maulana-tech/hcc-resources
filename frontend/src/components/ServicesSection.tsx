import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LazyVideo } from "./LazyVideo";

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = [
    {
      id: 1,
      tag: "Strategy",
      title: "Research & Insight",
      description:
        "We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.",
      videoSrc:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
      poster: "/posters/strategy.webp",
    },
    {
      id: 2,
      tag: "Craft",
      title: "Design & Execution",
      description:
        "From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.",
      videoSrc:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
      poster: "/posters/craft.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black py-28 md:py-40 px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-between items-end mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">
            What we do
          </h2>
          <span className="text-white/40 text-sm hidden md:inline tracking-wider">
            Our services
          </span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Card video area */}
              <div className="aspect-video relative overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <LazyVideo
                    src={card.videoSrc}
                    poster={card.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8">
                {/* Top row */}
                <div className="flex justify-between items-center mb-6">
                  <span className="uppercase tracking-widest text-white/40 text-xs">
                    {card.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

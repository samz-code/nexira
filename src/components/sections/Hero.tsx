// src/components/sections/Hero.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/layout/Button';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.52, 0.78]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
    >
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }} aria-hidden>
        <img
          src="/hero.png"
          alt="Aerial view of a South Sudanese city skyline at dusk"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div className="absolute inset-0 bg-navy" style={{ opacity: overlayOpacity }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/15" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-transparent to-transparent" aria-hidden />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full px-6 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-8xl">
          <h1
            className="max-w-5xl font-display font-extrabold tracking-tight text-cream"
            style={{ fontSize: 'clamp(3rem, 7.5vw, 7rem)', lineHeight: 0.94 }}
          >
            <HeroLine delay={0.3}>Building South Sudan&rsquo;s</HeroLine>
            <HeroLine delay={0.45}>
              <span className="text-gold">Future.</span>
            </HeroLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-cream/85 sm:text-xl"
          >
            A diversified enterprise driving sustainable growth across South Sudan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#ecosystem" size="lg" variant="gold">
              <span className="flex items-center gap-2">
                Explore Our Businesses
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
            <Button href="#connect" size="lg" variant="light">
              <span className="flex items-center gap-2">
                Partner With Us
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ opacity: scrollHintOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/55 transition-colors hover:text-cream lg:flex"
        aria-label="Scroll to next section"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Scroll</span>
        <span className="flex h-9 w-[22px] justify-center rounded-full border border-cream/35 pt-2">
          <span className="h-1.5 w-1.5 animate-scrollDot rounded-full bg-gold" />
        </span>
      </motion.button>
    </section>
  );
}

function HeroLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
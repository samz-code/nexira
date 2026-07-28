import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/layout/Button';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { IMAGES } from '@/constants/images';

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);

  return (
    <section ref={ref} className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-navy py-section">
      <motion.div className="absolute inset-0" style={{ scale }} aria-hidden>
        <img
          src={IMAGES.hero.gorge}
          alt="A dramatic natural gorge landscape"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div className="absolute inset-0 bg-navy" style={{ opacity }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/50 to-navy" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-gold" aria-hidden />
          <span className="eyebrow text-gold">An Invitation</span>
          <span className="h-px w-8 bg-gold" aria-hidden />
        </motion.div>

        <h2 className="mt-7 text-display-lg font-display font-extrabold leading-[0.98] tracking-tight text-cream text-balance">
          <AnimatedText text="Let's build the" />
          <br />
          <AnimatedText text="future together." delay={0.2} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-7 max-w-editorial text-pretty text-lg leading-relaxed text-cream/80"
        >
          South Sudan&rsquo;s next chapter will not be written from the outside. It will be built by the people and
          partners who choose to be here. We would like that to include you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex justify-center"
        >
          <Button href="#connect" size="lg" variant="gold">
            Partner With Nexira
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ImageReveal } from '@/components/layout/ImageReveal';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { FUTURE_VENTURES } from '@/constants/data';

export function Future() {
  return (
    <section
      id="future"
      className="relative overflow-hidden bg-navy py-section text-cream sm:py-section-sm lg:py-section"
    >
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" aria-hidden />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-green/10 blur-[120px]" aria-hidden />

      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">Building Tomorrow</span>
            </div>
            <h2 className="mt-5 text-display-md font-display font-extrabold leading-tight tracking-tight text-cream text-balance">
              <AnimatedText text="The next decade is being decided now." light />
            </h2>
          </div>
          <p className="max-w-editorial text-pretty leading-relaxed text-cream/70">
            These are not ideas waiting for permission. They are ventures in active development &mdash; each shaped
            around a real need the country will have, and a future Nexira intends to help build.
          </p>
        </div>

        {/* Pipeline — spaced standalone cards with breathing room */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {FUTURE_VENTURES.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 6) * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-xl3 border border-cream/10 bg-cream/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-cream/[0.04] hover:shadow-2xl hover:shadow-black/40"
            >
              <ImageReveal
                src={v.image}
                alt={v.name}
                className="aspect-[16/10] w-full overflow-hidden"
                rounded="rounded-none"
              />

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <span className="font-display text-xs font-semibold tracking-widest text-cream/40 transition-colors duration-500 group-hover:text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-cream">{v.name}</h3>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-cream/45">{v.industry}</p>

                <div className="my-4 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-16" aria-hidden />

                <p className="text-sm font-medium italic text-gold">{v.tagline}</p>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-cream/65 text-pretty">
                  {v.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-3xl border-l-2 border-gold/60 pl-6 lg:mt-20"
        >
          <p className="font-display text-xl font-medium leading-relaxed text-cream/80 sm:text-2xl text-balance">
            <span className="font-bold text-gold">Future impact &mdash;</span> a technology company that gives a
            young nation digital footing. A logistics company that lets commerce move. A foundation that returns
            value to communities. An energy company that powers growth without costing the future. A property
            company that builds the spaces a capital will need.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
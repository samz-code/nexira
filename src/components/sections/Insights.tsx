import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { INSIGHTS } from '@/constants/data';

export function Insights() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <section id="insights" className="relative overflow-hidden bg-green-light/40 py-section sm:py-section-sm lg:py-section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">Latest Insights</span>
            </div>
            <h2 className="mt-5 text-display-md font-display font-extrabold leading-tight tracking-tight text-navy text-balance">
              <AnimatedText text="Notes from the ground." />
            </h2>
          </div>
          <a
            href="#connect"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
          >
            View all
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* Featured editorial */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group lg:col-span-7"
          >
            <a href="#insights" className="block">
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl3">
                <motion.img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  {featured.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs text-cream/70">
                    <span>{featured.date}</span>
                    <span className="h-1 w-1 rounded-full bg-cream/50" aria-hidden />
                    <span>{featured.readTime}</span>
                  </div>
                  <h3 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight text-cream text-balance sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-pretty leading-relaxed text-cream/80">{featured.excerpt}</p>
                </div>
              </div>
            </a>
          </motion.article>

          {/* Side list */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <a href="#insights" className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <div className="relative aspect-square overflow-hidden rounded-xl2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-span-8 flex flex-col justify-center">
                    <span className="eyebrow text-gold">{item.category}</span>
                    <h3 className="mt-2 font-display text-base font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-gold sm:text-lg">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slateblue">
                      <span>{item.date}</span>
                      <span className="h-1 w-1 rounded-full bg-slateblue/40" aria-hidden />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

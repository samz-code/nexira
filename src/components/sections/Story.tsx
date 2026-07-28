import { motion } from 'framer-motion';
import { Flame, Hourglass, Sprout, Compass } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ImageReveal } from '@/components/layout/ImageReveal';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { TIMELINE } from '@/constants/data';
import { IMAGES } from '@/constants/images';

const VALUES = [
  { title: 'Conviction', body: 'We believe in this country before its story is widely told.', Icon: Flame },
  { title: 'Patience', body: 'We build for decades, not quarters.', Icon: Hourglass },
  { title: 'Stewardship', body: 'Every business should leave its community stronger.', Icon: Sprout },
  { title: 'Independence', body: 'We earn the trust to make our own decisions.', Icon: Compass },
];

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream py-section sm:py-section-sm lg:py-section">
      <Container>
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">Our Story</span>
            </div>
            <h2
              className="mt-5 font-display font-extrabold leading-[1.05] tracking-tight text-navy text-balance"
              style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
            >
              <AnimatedText text="Why Nexira exists." />
            </h2>
            <p className="mt-6 max-w-editorial text-xl leading-relaxed text-slateblue text-pretty sm:text-2xl">
              South Sudan is one of the youngest nations on earth &mdash; and one of the most underestimated. Its
              future will be built by its own businesses, its own people, and measured in decades.
            </p>
            <p className="mt-5 max-w-editorial text-lg leading-relaxed text-slateblue/80 text-pretty sm:text-xl">
              We are a holding company, not a single business. Each company stands on its own and endures. Together,
              they form an ecosystem that grows with the country it calls home.
            </p>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              src={IMAGES.story.meeting}
              alt="Business leaders collaborating in a bright office"
              className="aspect-[4/3] w-full"
              rounded="rounded-xl3"
              parallax
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-xl2 bg-navy p-8 text-cream sm:p-10"
          >
            <p className="eyebrow text-gold">Mission</p>
            <p className="mt-4 text-2xl leading-snug text-pretty text-cream sm:text-3xl">
              To build businesses that create lasting growth, employment, and national development in South Sudan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl2 border border-navy/10 bg-white p-8 sm:p-10"
          >
            <p className="eyebrow text-gold">Vision</p>
            <p className="mt-4 text-2xl leading-snug text-pretty text-navy sm:text-3xl">
              A self-sustaining South Sudan, respected across the region and the world.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden />
            <span className="eyebrow text-gold">Our Values</span>
          </div>
          <h3
            className="mt-4 max-w-2xl font-display font-extrabold leading-[1.05] tracking-tight text-navy text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            What we stand on.
          </h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-xl2 border border-navy/10 bg-white p-7 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-float"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold transition-all duration-300 ease-smooth group-hover:bg-gold group-hover:text-white">
                  <v.Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </span>
                <h4 className="font-display text-2xl font-bold text-navy">{v.title}</h4>
                <p className="mt-2 text-lg leading-relaxed text-slateblue">{v.body}</p>
                <span
                  className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300 ease-smooth group-hover:scale-x-100"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 lg:mt-32">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden />
            <span className="eyebrow text-gold">The Journey</span>
          </div>
          <h3
            className="mt-4 max-w-3xl font-display font-extrabold leading-[1.05] tracking-tight text-navy text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            From one conviction to a diversified group.
          </h3>

          <div className="relative mt-14 pl-8 sm:pl-12">
            <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-gold via-navy/20 to-transparent" aria-hidden />
            <div className="space-y-12">
              {TIMELINE.map((entry, i) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="relative"
                >
                  <span
                    className="absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-cream sm:-left-12"
                    aria-hidden
                  />
                  <p className="eyebrow text-gold">{entry.year}</p>
                  <h4 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">{entry.title}</h4>
                  <p className="mt-2 max-w-editorial text-lg leading-relaxed text-slateblue">{entry.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
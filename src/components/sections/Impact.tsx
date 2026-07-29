import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { AnimatedCounter } from '@/components/layout/AnimatedCounter';
import { ImageReveal } from '@/components/layout/ImageReveal';
import { IMPACT_METRICS } from '@/constants/data';
import { IMAGES } from '@/constants/images';

const PILLARS = [
  {
    title: 'Employment',
    body: 'Each operating business creates direct and indirect work for South Sudanese professionals, craftspeople, and communities.',
    image: IMAGES.impact.engineer,
    lead: true,
  },
  {
    title: 'Economic Growth',
    body: 'By building businesses that keep value in the country, we contribute to a more self-sustaining national economy.',
    image: IMAGES.impact.cranes,
  },
  {
    title: 'Communities',
    body: 'Our companies invest in the people around them, through training, local sourcing, and long-term relationships.',
    image: IMAGES.impact.youth,
  },
  {
    title: 'Innovation',
    body: 'A young nation is a place where new models can take root. We build businesses that think in decades and act with urgency.',
    image: IMAGES.impact.construction,
  },
];

const MARQUEE_TEXT = 'Building Businesses That Build Nations';

export function Impact() {
  const [lead, ...rest] = PILLARS;

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-green-light/40 py-section sm:py-section-sm lg:py-section"
    >
      <Container>
        {/* Hero statement — full-width, headline carries the section */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" aria-hidden />
          <span className="eyebrow text-base font-bold tracking-widest text-gold sm:text-lg">Our Impact</span>
        </div>

        <h2 className="mt-6 max-w-5xl text-[clamp(2.75rem,6vw,6.5rem)] font-display font-extrabold leading-[0.98] tracking-tight text-navy text-balance">
          Growth that can be measured, and growth that cannot.
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slateblue text-pretty sm:text-2xl">
          Numbers tell part of the story: the businesses launched, the people employed, the sectors entered.
          But the fuller measure of our work is in the trust we build, the capacity we develop, and the communities
          that grow alongside us.
        </p>

        {/* Metrics — a full-width ledger, not a boxed stat grid */}
        <div className="mt-16 border-y border-navy/15 lg:mt-20">
          <div className="grid divide-y divide-navy/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="py-8 pr-6 sm:px-8 sm:py-10 lg:py-12">
                <p className="font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-none text-navy">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-4 font-display text-base font-bold uppercase tracking-wide text-navy/80 sm:text-lg">
                  {m.label}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slateblue sm:text-lg">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Marquee — a genuine continuous loop, not a scroll-linked ±8% nudge that barely reads as motion */}
      <div className="mt-20 select-none overflow-hidden lg:mt-28">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className={`shrink-0 whitespace-nowrap px-6 font-display text-[9vw] font-extrabold leading-none tracking-tight sm:text-[7vw] lg:text-[5.5vw] ${
                copy === 1 ? 'text-transparent [-webkit-text-stroke:1.5px_var(--color-navy,#0f1f3d)]' : 'text-navy/8'
              }`}
              aria-hidden={copy === 1}
            >
              {MARQUEE_TEXT}
            </p>
          ))}
        </motion.div>
      </div>

      <Container>
        {/* Pillars — one lead story, three supporting, evenly distributed to balance the lead's height */}
        <div className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col lg:col-span-7"
          >
            <ImageReveal
              src={lead.image}
              alt={lead.title}
              className="aspect-[16/11] w-full flex-1"
              rounded="rounded-xl2"
              parallax
            />
            <h3 className="mt-6 font-display text-3xl font-bold text-navy sm:text-4xl">{lead.title}</h3>
            <p className="mt-3 max-w-lg text-lg leading-relaxed text-slateblue sm:text-xl">{lead.body}</p>
          </motion.article>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {rest.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i + 1) * 0.1 }}
                className="group flex flex-1 items-center gap-5 rounded-xl2 border border-navy/10 bg-cream/60 p-4 transition-colors duration-500 hover:border-gold/40 hover:bg-white sm:gap-6 sm:p-5"
              >
                <ImageReveal
                  src={p.image}
                  alt={p.title}
                  className="aspect-square w-24 shrink-0 self-stretch sm:w-32"
                  rounded="rounded-xl2"
                  parallax
                />
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slateblue sm:text-lg">{p.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { ImageReveal } from '@/components/layout/ImageReveal';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { IMAGES } from '@/constants/images';

const PILLARS = [
  {
    title: 'A young nation',
    body: 'More than 70% of the population is under 30. That is not a challenge to manage \u2014 it is a generation to build with.',
  },
  {
    title: 'Vast arable land',
    body: 'Some of the most fertile, least-developed farmland on the continent. The foundation of a food-secure future.',
  },
  {
    title: 'The Nile and beyond',
    body: 'A country defined by water, wildlife, and landscape \u2014 the raw material of tourism, agriculture, and identity.',
  },
  {
    title: 'An economy being built',
    body: 'Everything is being created for the first time. The companies that are built now will shape the country for generations.',
  },
];

export function SouthSudan() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      id="south-sudan"
      ref={ref}
      className="relative overflow-hidden bg-cream py-section sm:py-section-sm lg:py-section"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">Why South Sudan</span>
            </div>
            <h2 className="mt-5 text-display-md font-display font-extrabold leading-tight tracking-tight text-navy text-balance">
              <AnimatedText text="A land of possibility, still being written." />
            </h2>
            <p className="mt-6 max-w-editorial text-lg leading-relaxed text-slateblue text-pretty">
              South Sudan is too often seen through the lens of its difficulties. We see it differently &mdash; as a
              young country with extraordinary human and natural resources, where the businesses and institutions of
              the next fifty years are being decided right now.
            </p>
            <p className="mt-5 max-w-editorial text-base leading-relaxed text-slateblue/80 text-pretty">
              To invest here is to invest early, with patience, and with people who understand the ground. That is what
              we do.
            </p>

            {/* Pillars — hairline card grid, matching the Opportunities / Future treatment */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-navy/10 bg-navy/10">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-cream p-5 transition-colors duration-500 hover:bg-white"
                >
                  <h3 className="font-display text-base font-bold leading-snug text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slateblue">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5">
              <motion.div style={{ y: y1 }}>
                <ImageReveal
                  src={IMAGES.southSudan.women}
                  alt="Women in colourful traditional African dress celebrating culture"
                  className="aspect-[4/3] w-full"
                  rounded="rounded-xl3"
                  parallax
                />
              </motion.div>
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div style={{ y: y2 }}>
                  <ImageReveal
                    src={IMAGES.southSudan.maasai}
                    alt="Maasai men in traditional attire performing a cultural dance"
                    className="aspect-[3/4] w-full"
                    rounded="rounded-xl3"
                    parallax
                  />
                </motion.div>
                <div className="flex flex-col gap-5">
                  <ImageReveal
                    src={IMAGES.southSudan.mountain}
                    alt="Mountain landscape in the African desert"
                    className="aspect-[4/3] w-full"
                    rounded="rounded-xl3"
                    parallax
                  />
                  <ImageReveal
                    src={IMAGES.southSudan.tree}
                    alt="A solitary tree in the African desert dunes"
                    className="aspect-[4/3] w-full"
                    rounded="rounded-xl3"
                    parallax
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
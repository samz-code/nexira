import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { COMPANIES } from '@/constants/data';

const MotionLink = motion(Link);

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-cream py-section sm:py-section-sm lg:py-section">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden />
            <span className="eyebrow text-gold-700">The Ecosystem</span>
          </div>
          <h2
            className="mt-5 font-display font-extrabold leading-[1.05] tracking-tight text-navy text-balance"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
          >
            <AnimatedText text="One group. Many businesses." />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slateblue text-pretty">
            Each company is independent and complete, yet connected to a shared purpose.
          </p>
        </div>

        {/* Company grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c, i) => (
            <MotionLink
              key={c.id}
              to={`/ecosystem/${c.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl3 border border-navy/10 bg-white transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-navy/20 hover:shadow-float"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: c.accent }}
                >
                  {c.industry}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-extrabold text-navy">{c.name}</h3>
                <p className="mt-1 text-base font-medium italic text-gold-700">{c.tagline}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-slateblue">{c.description}</p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-700">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
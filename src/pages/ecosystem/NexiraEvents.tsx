import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/layout/Button';
import { IMAGES } from '@/constants/images';

const ACCENT = '#BFA07A';
const SERVICES = [
  'Conference and summit design',
  'Cultural events',
  'Corporate experiences',
  'Production and logistics',
];
const STRENGTHS = [
  'End-to-end production',
  'High-profile convening',
  'Cross-sector partnerships',
];

export function NexiraEvents() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <article className="bg-cream">
      <header className="relative min-h-[62vh] overflow-hidden bg-navy text-cream">
        <motion.img
          src={IMAGES.ecosystem.eventsA}
          alt="Nexira Events"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent" aria-hidden />

        <Container className="relative z-10 flex min-h-[62vh] flex-col justify-end pb-14 pt-32">
          <Link
            to="/ecosystem"
            className="inline-flex items-center gap-2 text-base font-medium text-cream/75 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to the ecosystem
          </Link>

          <div className="mt-6">
            <span
              className="rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-navy"
              style={{ backgroundColor: ACCENT }}
            >
              Conferences, Events and Experiences
            </span>
          </div>

          <h1
            className="mt-5 max-w-4xl font-display font-extrabold leading-[1.02] tracking-tight text-cream"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)' }}
          >
            Nexira Events
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-medium italic text-gold sm:text-2xl">
            Gatherings that move people.
          </p>
        </Container>
      </header>

      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden />
                <span className="eyebrow text-gold-700">Overview</span>
              </div>
              <p
                className="mt-6 max-w-editorial text-pretty leading-relaxed text-navy"
                style={{ fontSize: 'clamp(1.35rem, 2vw, 1.75rem)', lineHeight: 1.5 }}
              >
                An events company designing conferences, summits, and cultural experiences that bring together
                leaders, communities, and partners to shape what comes next.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-xl3 border border-navy/10 bg-white p-8 shadow-float">
                <p className="eyebrow text-navy/50">At a glance</p>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-slateblue">Sector</dt>
                    <dd className="mt-1 text-lg font-medium text-navy">Conferences, Events and Experiences</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-slateblue">Status</dt>
                    <dd className="mt-1 text-lg font-medium text-navy">Operating company</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-slateblue">Part of</dt>
                    <dd className="mt-1 text-lg font-medium text-navy">Nexira Enterprises Ltd</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-white py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight text-navy"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                What we do
              </h2>
              <ul className="mt-8 space-y-4">
                {SERVICES.map((s) => (
                  <li key={s} className="flex items-start gap-4">
                    <span
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Check className="h-4 w-4 text-navy" strokeWidth={2.5} />
                    </span>
                    <span className="text-xl leading-snug text-navy">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="font-display font-extrabold leading-tight tracking-tight text-navy"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Where we are strong
              </h2>
              <ul className="mt-8 space-y-4">
                {STRENGTHS.map((s) => (
                  <li
                    key={s}
                    className="rounded-xl2 border-l-4 bg-cream px-6 py-5 text-xl leading-snug text-navy"
                    style={{ borderColor: ACCENT }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="overflow-hidden rounded-xl3 bg-navy px-8 py-14 text-center text-cream sm:px-14 sm:py-20">
            <h2
              className="mx-auto max-w-3xl font-display font-extrabold leading-tight tracking-tight text-cream text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Work with Nexira Events.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-cream/75">
              Whether you want to collaborate, invest, or engage this company for work, we are open to the
              right partner.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/#connect" size="lg" variant="gold">
                Start a conversation
              </Button>
              <Link
                to="/opportunities"
                className="inline-flex items-center gap-2 text-lg font-semibold text-gold transition-colors hover:text-gold-soft"
              >
                Explore opportunities
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/ecosystem/horizon"
              className="group flex flex-col rounded-xl2 border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slateblue">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </span>
              <span className="mt-2 font-display text-2xl font-bold text-navy group-hover:text-gold-700">
                Horizon Seekers
              </span>
            </Link>
            <Link
              to="/ecosystem/productions"
              className="group flex flex-col items-end rounded-xl2 border border-navy/10 bg-white p-6 text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slateblue">
                Next
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="mt-2 font-display text-2xl font-bold text-navy group-hover:text-gold-700">
                Nexira Productions
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
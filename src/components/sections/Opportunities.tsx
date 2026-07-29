import { motion } from 'framer-motion';
import {
  Handshake,
  TrendingUp,
  Layers,
  Briefcase,
  Sprout,
  Compass,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/layout/SectionTitle';
import { Button } from '@/components/layout/Button';
import { OPPORTUNITIES } from '@/constants/data';

const ICONS: Record<string, LucideIcon> = {
  Handshake,
  TrendingUp,
  Layers,
  Briefcase,
  Sprout,
  Compass,
};

export function Opportunities() {
  return (
    <section id="opportunities" className="relative overflow-hidden bg-cream py-section sm:py-section-sm lg:py-section">
      <Container>
        <SectionTitle
          eyebrow="Opportunities"
          title={<>Ways to build with Nexira.</>}
          description="We work with investors, institutions, governments, and operators who see what we see in South Sudan. These are the doors that are open."
        />

        {/* Spaced standalone cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {OPPORTUNITIES.map((opp, i) => {
            const Icon = ICONS[opp.icon] ?? Compass;
            return (
              <motion.article
                key={opp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.07 }}
                className="group relative flex flex-col rounded-xl3 border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-navy/15 text-navy transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-sm font-semibold tracking-widest text-navy/25 transition-colors duration-500 group-hover:text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold leading-snug text-navy">{opp.title}</h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gold">{opp.summary}</p>

                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slateblue text-pretty">
                  {opp.detail}
                </p>

                <a
                  href="#connect"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-all duration-300 group-hover:text-gold"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col items-center justify-center gap-6 rounded-xl3 bg-navy px-8 py-14 text-center lg:mt-20"
        >
          <p className="eyebrow text-gold">A shared horizon</p>
          <h3 className="max-w-2xl text-display-sm font-display font-extrabold leading-tight tracking-tight text-cream text-balance">
            Let&rsquo;s build together.
          </h3>
          <p className="max-w-editorial text-pretty leading-relaxed text-cream/70">
            The most meaningful work is done with others. If your goals and ours align, we would like to hear from you.
          </p>
          <Button href="#connect" size="lg" variant="gold">
            Partner With Nexira
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
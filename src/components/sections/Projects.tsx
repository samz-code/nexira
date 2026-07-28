import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ImageReveal } from '@/components/layout/ImageReveal';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { PROJECTS } from '@/constants/data';

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-cream py-section sm:py-section-sm lg:py-section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">Featured Projects</span>
            </div>
            <h2 className="mt-5 text-display-md font-display font-extrabold leading-tight tracking-tight text-navy text-balance">
              <AnimatedText text="Work that is already underway." />
            </h2>
          </div>
          <p className="max-w-editorial text-pretty leading-relaxed text-slateblue">
            A selection of programmes across our companies &mdash; each built with partners, each measured by the
            lasting change it creates.
          </p>
        </div>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} reversed={i % 2 === 1} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectRow({
  project,
  reversed,
  index,
}: {
  project: (typeof PROJECTS)[number];
  reversed: boolean;
  index: number;
}) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
      >
        <ImageReveal
          src={project.image}
          alt={project.title}
          className="aspect-[16/11] w-full"
          rounded="rounded-xl3"
          parallax
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
      >
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold text-gold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px w-8 bg-gold/50" aria-hidden />
          <span className="eyebrow text-slateblue">{project.industry}</span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy text-balance sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 text-pretty leading-relaxed text-slateblue">{project.overview}</p>

        <div className="mt-6">
          <p className="eyebrow text-navy/50">Objectives</p>
          <ul className="mt-3 space-y-2">
            {project.objectives.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm text-slateblue">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-pretty leading-relaxed text-slateblue">
          <span className="font-display text-sm font-bold text-navy">Impact &mdash; </span>
          {project.impact}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.results.map((r) => (
            <div key={r.label} className="rounded-xl2 bg-navy px-4 py-3 text-cream">
              <p className="font-display text-xl font-extrabold text-gold">{r.value}</p>
              <p className="mt-0.5 text-xs text-cream/70">{r.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#connect"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
        >
          Explore Project
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </motion.div>
    </article>
  );
}

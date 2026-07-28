import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-gold" aria-hidden />
        <span className={`eyebrow ${light ? 'text-gold' : 'text-gold'}`}>{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        className={`text-display-md font-display font-extrabold leading-tight tracking-tight text-balance ${
          light ? 'text-cream' : 'text-navy'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className={`max-w-editorial text-lg leading-relaxed text-pretty ${
            light ? 'text-cream/75' : 'text-slateblue'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

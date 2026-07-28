import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  light?: boolean;
  /** Reveal per character instead of per word — good for short, high-impact headings. */
  by?: 'word' | 'char';
  /** Add a soft blur that resolves as each unit settles. */
  blur?: boolean;
  /** Sweep a gold gradient highlight across the text once it has revealed. */
  highlight?: boolean;
};

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  light = false,
  by = 'word',
  blur = false,
  highlight = false,
}: AnimatedTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : by === 'char' ? stagger * 0.4 : stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { y: '110%', opacity: 0, filter: blur ? 'blur(8px)' : 'blur(0px)' },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: reduceMotion ? 0.4 : 0.8, ease: EASE },
    },
  };

  // Shared highlight styling: a slow gold gradient sweep that runs after the reveal.
  const highlightClass = highlight
    ? 'bg-gradient-to-r from-current via-gold to-current bg-[length:200%_100%] bg-clip-text text-transparent animate-text-sweep'
    : '';

  if (by === 'char') {
    let index = 0;
    return (
      <motion.span
        className={`inline ${light ? 'text-cream' : ''} ${highlightClass} ${className}`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap align-bottom">
            {Array.from(word).map((ch) => (
              <span
                key={index++}
                className="inline-block overflow-hidden align-bottom"
                style={{ paddingBottom: '0.06em' }}
              >
                <motion.span variants={child} className="inline-block">
                  {ch}
                </motion.span>
              </span>
            ))}
            {wi < words.length - 1 && '\u00A0'}
          </span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={`inline ${light ? 'text-cream' : ''} ${highlightClass} ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.06em' }}
        >
          <motion.span variants={child} className="inline-block">
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

type AnimatedTextBlockProps = {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  /** Fade each line in alongside the upward slide for a softer entrance. */
  fade?: boolean;
};

export function AnimatedTextBlock({
  lines,
  className = '',
  delay = 0,
  stagger = 0.08,
  fade = false,
}: AnimatedTextBlockProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : stagger, delayChildren: delay },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { y: '110%', opacity: fade ? 0 : 1 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: reduceMotion ? 0.4 : 0.9, ease: EASE },
    },
  };

  return (
    <motion.span
      className={`block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span variants={item} className="block">
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
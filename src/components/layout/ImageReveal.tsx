import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  rounded?: string;
  parallax?: boolean;
  priority?: boolean;
};

export function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  rounded = 'rounded-xl3',
  parallax = false,
  priority = false,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-8%', '8%'] : ['0%', '0%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${rounded} ${className}`}
      initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ y, scale }}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
}

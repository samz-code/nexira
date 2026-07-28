import { forwardRef, type ReactNode, type MouseEventHandler } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'gold' | 'ghost' | 'light';
type Size = 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
};

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary: 'bg-navy text-cream hover:bg-navy/90 hover:shadow-deep',
  gold: 'bg-gold text-navy hover:bg-gold-soft hover:shadow-gold',
  ghost: 'bg-transparent text-navy border border-navy/15 hover:border-navy/40 hover:bg-navy/[0.03]',
  light: 'bg-transparent text-cream border border-cream/25 hover:bg-cream hover:text-navy',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
  ({ children, href, onClick, variant = 'primary', size = 'md', className = '', icon, ariaLabel }, ref) => {
    const inner = (
      <>
        {children}
        {icon ?? (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </>
    );

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a ref={ref} href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
          {inner}
        </a>
      );
    }

    return (
      <button ref={ref} type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
        {inner}
      </button>
    );
  }
);

Button.displayName = 'Button';
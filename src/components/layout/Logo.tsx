type LogoProps = {
  /** When true, renders the variant suited for dark backgrounds (e.g. the footer). */
  light?: boolean;
  className?: string;
};

export function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Nexira Enterprises"
      className={`h-12 w-auto select-none lg:h-14 ${light ? 'brightness-0 invert' : ''} ${className}`}
      draggable={false}
    />
  );
}
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { NAV_ITEMS, COMPANIES, FUTURE_VENTURES, CONTACT, SOCIALS } from '@/constants/data';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0 noise-overlay opacity-[0.04]" aria-hidden />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="relative container-edge px-6 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-cream/70">
              A diversified holding company headquartered in Juba, South Sudan — building businesses that create
              sustainable economic growth, employment, and long-term national development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            <FooterCol title="Explore">
              {NAV_ITEMS.map((n) => (
                <FooterLink key={n.href} href={n.href}>
                  {n.label}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Companies">
              {COMPANIES.map((c) => (
                <FooterLink key={c.id} href="#ecosystem">
                  {c.name.replace('Nexira ', '').replace('Horizon Seekers', 'Horizon')}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Future Ventures">
              {FUTURE_VENTURES.map((c) => (
                <FooterLink key={c.id} href="#future">
                  {c.name.replace('Nexira ', '')}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Connect">
              <FooterLink href={`mailto:${CONTACT.email}`} external>
                Email
              </FooterLink>
              <FooterLink href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} external>
                Phone
              </FooterLink>
              {SOCIALS.map((s) => (
                <FooterLink key={s.label} href={s.href} external>
                  {s.label}
                </FooterLink>
              ))}
            </FooterCol>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-cream/10 pt-8 text-center text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Nexira Enterprises Ltd. All rights reserved.</p>
        </div>

        <div className="h-16" />
      </div>

      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`group fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-cream/20 bg-navy/80 px-4 py-2 text-sm font-medium text-cream/70 shadow-lg backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      Back to top
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-cream/40">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="link-underline text-sm text-cream/70 transition-colors hover:text-gold"
      >
        {children}
      </a>
    </li>
  );
}
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/layout/Button';
import { Logo } from '@/components/layout/Logo';
import { NAV_ITEMS } from '@/constants/data';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrolled } from '@/hooks/useScrolled';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => NAV_ITEMS.map((n) => n.href.replace('#', '')), []);
  const active = useActiveSection(ids);
  const progress = useScrollProgress();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function handleNav(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white shadow-sm">
        <nav className="mx-auto flex h-20 w-full max-w-[100rem] items-center justify-between px-6 sm:px-10 lg:h-24 lg:px-16">
          <button onClick={() => handleNav('#hero')} className="shrink-0 scale-110 lg:scale-125" aria-label="Nexira home">
            <Logo light={false} />
          </button>

          <ul className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="group relative rounded-md px-5 py-3 text-base font-medium text-navy transition-colors duration-200 hover:text-gold-700"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span
                      className="absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gold transition-all duration-300 ease-smooth"
                      style={{ width: isActive ? 20 : 0 }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center lg:flex">
            <Button href="#connect" size="md" variant="primary" className="!px-6 !py-3 !text-base">
              Partner With Nexira
            </Button>
          </div>

          <button
            className="flex h-12 w-12 items-center justify-center rounded-md text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <div
          className="h-0.5 origin-left bg-gold transition-transform"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
          aria-hidden
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-navy px-6 pt-28 pb-10 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleNav(item.href)}
                    className="block w-full border-b border-cream/10 py-5 text-left font-display text-4xl font-bold text-cream"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8"
            >
              <Button href="#connect" size="lg" variant="gold" className="w-full" onClick={() => setOpen(false)}>
                Partner With Nexira
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Copy, Check, ChevronDown, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { CONTACT } from '@/constants/data';

type ContactItem = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
};

type FormState = {
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = { name: '', email: '', organization: '', interest: '', message: '' };

// Pragmatic email check — rejects obvious mistakes without over-constraining valid addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};

  const name = form.name.trim();
  if (!name) errors.name = 'Please enter your name.';
  else if (name.length < 2) errors.name = 'That name looks too short.';

  const email = form.email.trim();
  if (!email) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address.';

  const message = form.message.trim();
  if (!message) errors.message = 'Please write a short message.';
  else if (message.length < 10) errors.message = 'Add a little more detail (at least 10 characters).';

  return errors;
}

// Build a mailto: link that pre-fills the visitor's email client, addressed to CONTACT.email.
function buildMailto(form: FormState): string {
  const subjectBits = ['Enquiry from', form.name.trim()];
  if (form.interest) subjectBits.push(`— ${form.interest}`);
  const subject = subjectBits.filter(Boolean).join(' ');

  const bodyLines = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
  ];
  if (form.organization.trim()) bodyLines.push(`Organization: ${form.organization.trim()}`);
  if (form.interest) bodyLines.push(`Interested in: ${form.interest}`);
  bodyLines.push('', form.message.trim());

  const params = new URLSearchParams({ subject, body: bodyLines.join('\n') });
  // URLSearchParams encodes spaces as "+"; mail clients want %20 in mailto bodies.
  return `mailto:${CONTACT.email}?${params.toString().replace(/\+/g, '%20')}`;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [sent, setSent] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  // Honeypot: real users never see or fill this. A non-empty value means a bot.
  const [botField, setBotField] = useState('');

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function handleBlur(key: keyof FormState) {
    setTouched((t) => ({ ...t, [key]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [key]: fieldErrors[key] }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Silently drop bot submissions — behave as if "sent" so they don't retry.
    if (botField) {
      setSent(true);
      return;
    }

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setTouched({ name: true, email: true, organization: true, interest: true, message: true });
      const firstInvalid = (['name', 'email', 'message'] as (keyof FormState)[]).find((k) => fieldErrors[k]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    setErrors({});
    // Open the visitor's email client with the enquiry pre-filled, addressed to CONTACT.email.
    window.location.href = buildMailto(form);
    // Show the confirmation screen; if the mail client didn't open, it surfaces the address to copy.
    setSent(true);
  }

  function resetForm() {
    setSent(false);
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setBotField('');
  }

  async function handleCopy(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel((l) => (l === label ? null : l)), 1600);
    } catch {
      // Clipboard API unavailable (unsupported browser or no permission) — fail silently.
    }
  }

  const contactItems: ContactItem[] = [
    { icon: <MapPin className="h-5 w-5" />, label: 'Office', value: CONTACT.office },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      copyable: true,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
      copyable: true,
    },
    { icon: <Clock className="h-5 w-5" />, label: 'Hours', value: 'Monday to Friday, 8:00 AM to 5:00 PM (EAT)' },
  ];

  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-cream px-4 py-16 sm:px-8 sm:py-section-sm lg:px-0 lg:py-section"
    >
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + contact info */}
          <div className="flex min-w-0 flex-col lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">Connect</span>
            </div>
            <h2 className="mt-4 text-[2rem] font-display font-extrabold leading-[1.1] tracking-tight text-navy text-balance sm:mt-5 sm:text-4xl lg:text-display-md">
              <AnimatedText text="Start a conversation." />
            </h2>
            <p className="mt-4 max-w-editorial text-[0.9375rem] leading-relaxed text-slateblue text-pretty sm:mt-6 sm:text-lg">
              Whether you are exploring a partnership, an investment, or a project, we would be glad to hear from
              you. If you are simply looking to understand what we do, that conversation is welcome too.
            </p>

            <ul className="mt-8 space-y-1.5 sm:space-y-1 lg:mt-10">
              {contactItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="group flex items-center rounded-xl2 bg-navy/[0.03] transition-colors duration-300 hover:bg-navy/[0.06] sm:bg-transparent sm:hover:bg-navy/[0.04]">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex min-w-0 flex-1 items-center gap-3.5 px-3.5 py-3.5 sm:gap-4 sm:px-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 bg-navy/5 text-navy transition-all duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-navy sm:h-11 sm:w-11">
                          {item.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.6875rem] uppercase tracking-wider text-slateblue/70 sm:text-xs">
                            {item.label}
                          </span>
                          <span className="block truncate text-sm font-medium text-navy">{item.value}</span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex min-w-0 flex-1 items-center gap-3.5 px-3.5 py-3.5 sm:gap-4 sm:px-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 bg-navy/5 text-navy transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                          {item.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.6875rem] uppercase tracking-wider text-slateblue/70 sm:text-xs">
                            {item.label}
                          </span>
                          <span className="block text-sm font-medium text-navy">{item.value}</span>
                        </span>
                      </div>
                    )}

                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.label, item.value)}
                        aria-label={`Copy ${item.label.toLowerCase()}`}
                        className="mr-2.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slateblue/50 opacity-100 transition-all duration-200 hover:bg-navy/10 hover:text-navy focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:mr-3 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
                      >
                        {copiedLabel === item.label ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 lg:col-span-7"
          >
            <div className="rounded-xl3 bg-navy p-5 text-cream sm:p-8 lg:p-10">
              {sent ? (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center px-2 text-center sm:min-h-[420px]">
                  <CheckCircle2 className="h-12 w-12 text-gold sm:h-14 sm:w-14" />
                  <h3 className="mt-5 font-display text-xl font-extrabold text-cream sm:mt-6 sm:text-2xl">
                    Opening your email
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-pretty leading-relaxed text-cream/70 sm:text-base">
                    Your email app should open with the message ready to send. If it does not, write to us
                    directly at the address below and we will respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy('Email', CONTACT.email)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
                  >
                    {copiedLabel === 'Email' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {CONTACT.email}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 text-sm font-semibold text-cream/60 transition-colors hover:text-cream"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  {/* Honeypot — visually hidden, off-tab, ignored by real users. */}
                  <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="company_website">Do not fill this field</label>
                    <input
                      id="company_website"
                      name="company_website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <Field label="Full name" id="name" error={touched.name ? errors.name : undefined}>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        aria-invalid={!!(touched.name && errors.name)}
                        aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                        className={inputClass(touched.name && errors.name)}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Email" id="email" error={touched.email ? errors.email : undefined}>
                      <input
                        id="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                        className={inputClass(touched.email && errors.email)}
                        placeholder="you@organization.com"
                      />
                    </Field>
                  </div>

                  <Field label="Organization" id="organization">
                    <input
                      id="organization"
                      autoComplete="organization"
                      value={form.organization}
                      onChange={(e) => update('organization', e.target.value)}
                      className={inputClass(false)}
                      placeholder="Company or institution (optional)"
                    />
                  </Field>

                  <Field label="I'm interested in" id="interest">
                    <div className="relative">
                      <select
                        id="interest"
                        value={form.interest}
                        onChange={(e) => update('interest', e.target.value)}
                        className={`${inputClass(false)} cursor-pointer appearance-none pr-10`}
                      >
                        <option value="">Select an area</option>
                        <option>Business Partnership</option>
                        <option>Investment Opportunity</option>
                        <option>Joint Venture</option>
                        <option>Corporate Services</option>
                        <option>Development Project</option>
                        <option>Strategic Collaboration</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/50" />
                    </div>
                  </Field>

                  <Field label="Message" id="message" error={touched.message ? errors.message : undefined}>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                      className={`${inputClass(touched.message && errors.message)} resize-none`}
                      placeholder="Tell us a little about what you have in mind."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-display text-base font-semibold text-navy transition-colors duration-300 hover:bg-gold-soft hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:bg-gold-soft"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-xs text-cream/50">
                    This opens your email app, addressed to {CONTACT.email}.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Full-width map — its own division below the two-column block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-xl3 border border-navy/10 sm:mt-12 lg:mt-16"
        >
          <iframe
            title="Nexira Enterprises location in Juba, South Sudan"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`}
            className="h-56 w-full grayscale-[0.3] sm:h-80 lg:h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </section>
  );
}

// Shared input styling; adds a red border + ring when the field is in an error state.
function inputClass(hasError: string | false | undefined) {
  return [
    'form-input transition-colors duration-200',
    hasError
      ? 'border-red-400 focus:border-red-400 focus-visible:ring-red-400/40'
      : 'focus:border-gold',
  ].join(' ');
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="eyebrow text-cream/60">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-xs text-red-300">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
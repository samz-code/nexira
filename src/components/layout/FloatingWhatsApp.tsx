// src/components/layout/FloatingWhatsApp.tsx
import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';
import { CONTACT } from '@/constants/data';

// ---------------------------------------------------------------------------
// Config — driven by CONTACT so there is a single source of truth.
// whatsappNumber must be international format, digits only (no + or spaces).
// ---------------------------------------------------------------------------
const CONFIG = {
  whatsappNumber: CONTACT.whatsapp.replace(/[^\d]/g, ''), // '+211 925 576 720' -> '211925576720'
  companyName: 'Nexira',
  agentName: 'Nexira Enterprises',
  tagline: 'Online now · replies in minutes',
  greeting: 'Hello 👋 Welcome to Nexira. Pick a channel or send us a message.',
  channels: {
    email: CONTACT.email,
    phone: CONTACT.phone,
    messengerUsername: '', // e.g. 'nexira' -> m.me/nexira (leave '' to hide)
  },
} as const;

type ChannelKey = 'whatsapp' | 'email' | 'phone' | 'messenger';

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}
function ChatIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}
function CloseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function EmailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
    </svg>
  );
}
function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Self-injected keyframes (runs once)
// ---------------------------------------------------------------------------
const STYLE_ID = 'nexira-fw-styles';
const KEYFRAMES = `
@keyframes fw-pulse-ring {
  0%   { transform: scale(0.9); opacity: 0.7; }
  70%  { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
}
@keyframes fw-fab-in {
  0%   { transform: scale(0) translateY(40px); opacity: 0; }
  60%  { transform: scale(1.15) translateY(-6px); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}
@keyframes fw-panel-in {
  0%   { transform: translateY(24px) scale(0.92); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes fw-slide-in {
  0%   { transform: translateX(28px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes fw-bubble-in {
  0%   { transform: translateY(10px) scale(0.96); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes fw-ripple {
  0%   { transform: scale(0); opacity: 0.5; }
  100% { transform: scale(3.2); opacity: 0; }
}
@keyframes fw-icon-pop {
  0%   { transform: scale(0) rotate(-45deg); opacity: 0; }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .fw-anim { animation: none !important; }
}
`;

function useInjectStyles() {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = KEYFRAMES;
    document.head.appendChild(el);
  }, []);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function FloatingWhatsApp() {
  useInjectStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const rippleId = useRef(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    const id = window.setTimeout(() => document.addEventListener('mousedown', onClick), 0);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const spawnRipple = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = rippleId.current++;
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    window.setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  }, []);

  const openWhatsApp = useCallback(() => {
    if (!CONFIG.whatsappNumber) return; // guard against an empty/misconfigured number
    const base = `https://wa.me/${CONFIG.whatsappNumber}`;
    const text = message.trim() ? `?text=${encodeURIComponent(message.trim())}` : '';
    window.open(`${base}${text}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
    setMessage('');
  }, [message]);

  const openChannel = useCallback((key: ChannelKey) => {
    switch (key) {
      case 'whatsapp':
        openWhatsApp();
        break;
      case 'email':
        window.open(`mailto:${CONFIG.channels.email}`, '_self');
        break;
      case 'phone':
        window.open(`tel:${CONFIG.channels.phone.replace(/\s/g, '')}`, '_self');
        break;
      case 'messenger':
        if (CONFIG.channels.messengerUsername)
          window.open(`https://m.me/${CONFIG.channels.messengerUsername}`, '_blank', 'noopener,noreferrer');
        break;
    }
  }, [openWhatsApp]);

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    spawnRipple(e);
    setOpen((v) => !v);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      openWhatsApp();
    }
  };

  const hasMessenger = Boolean(CONFIG.channels.messengerUsername);

  const channels: { key: ChannelKey; label: string; icon: ReactElement; bg?: string; color?: string }[] = [
    { key: 'whatsapp', label: 'WhatsApp Chat', icon: <WhatsAppIcon />, bg: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff' },
    ...(hasMessenger
      ? [{ key: 'messenger' as ChannelKey, label: 'Messenger', icon: <ChatIcon />, bg: 'linear-gradient(135deg,#0084FF,#00C6FF)', color: '#fff' }]
      : []),
    { key: 'email', label: 'Email us', icon: <EmailIcon /> },
    { key: 'phone', label: 'Call us', icon: <PhoneIcon /> },
  ];

  return (
    <div style={S.root}>
      {open && (
        <div
          ref={panelRef}
          className="fw-anim"
          style={{ ...S.panel, animation: 'fw-panel-in 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}
          role="dialog"
          aria-label={`Chat with ${CONFIG.companyName}`}
        >
          <header style={S.header}>
            <div style={S.headerGlow} aria-hidden="true" />
            <div style={S.avatar} aria-hidden="true"><WhatsAppIcon size={22} /></div>
            <div style={S.headerText}>
              <strong style={S.headerTitle}>{CONFIG.agentName}</strong>
              <span style={S.headerSub}><span style={S.dot} />{CONFIG.tagline}</span>
            </div>
            <button style={S.iconBtn} onClick={() => setOpen(false)} aria-label="Close chat"><CloseIcon /></button>
          </header>

          <div style={S.body}>
            <div className="fw-anim" style={{ ...S.bubble, animation: 'fw-bubble-in 0.4s ease 0.1s both' }}>{CONFIG.greeting}</div>
            <div style={S.channelList}>
              {channels.map((c, i) => (
                <button
                  key={c.key}
                  className="fw-anim"
                  style={{
                    ...S.channelBtn,
                    ...(c.bg ? { background: c.bg, color: c.color, border: 'none' } : {}),
                    animation: `fw-slide-in 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.15 + i * 0.08}s both`,
                  }}
                  onClick={() => openChannel(c.key)}
                >
                  {c.icon}<span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <footer style={S.footer}>
            <input
              ref={inputRef}
              style={S.input}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type a message…"
              aria-label="Message"
            />
            <button style={S.sendBtn} onClick={openWhatsApp} aria-label="Send via WhatsApp"><WhatsAppIcon /></button>
          </footer>
        </div>
      )}

      <div style={S.fabWrap}>
        {!open && <span className="fw-anim" style={{ ...S.pulseRing, animation: 'fw-pulse-ring 2s ease-out infinite' }} aria-hidden="true" />}
        {!open && <span className="fw-anim" style={{ ...S.pulseRing, animation: 'fw-pulse-ring 2s ease-out infinite 1s' }} aria-hidden="true" />}
        <button
          className="fw-anim"
          style={{ ...S.fab, animation: 'fw-fab-in 0.6s cubic-bezier(0.34,1.56,0.64,1)' }}
          onClick={onToggle}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
        >
          {ripples.map((r) => (
            <span key={r.id} style={{ ...S.ripple, left: r.x, top: r.y }} />
          ))}
          <span
            key={open ? 'x' : 'w'}
            className="fw-anim"
            style={{ display: 'flex', animation: 'fw-icon-pop 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}
          >
            {open ? <CloseIcon size={24} /> : <WhatsAppIcon size={26} />}
          </span>
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Styles — navy/gold brand palette
//   navy  #0f1e3d   gold #bfa07a   gold-soft #d4bd9a
// ---------------------------------------------------------------------------
const NAVY = '#0f1e3d';
const GOLD = '#bfa07a';
const GOLD_SOFT = '#d4bd9a';
const brandGradient = `linear-gradient(135deg, ${NAVY}, #1a2f5a 55%, ${GOLD})`;

const S: Record<string, React.CSSProperties> = {
  root: { position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16, fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' },
  fabWrap: { position: 'relative', width: 64, height: 64 },
  pulseRing: { position: 'absolute', inset: 0, borderRadius: '50%', background: GOLD, zIndex: 0 },
  fab: {
    position: 'relative', zIndex: 1, width: 64, height: 64, borderRadius: '50%', border: 'none',
    background: brandGradient, color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    boxShadow: '0 8px 28px rgba(15,30,61,0.45)', overflow: 'hidden',
  },
  ripple: { position: 'absolute', width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.6)', transform: 'translate(-50%,-50%)', animation: 'fw-ripple 0.65s ease-out forwards', pointerEvents: 'none' },
  panel: { width: 350, maxWidth: 'calc(100vw - 48px)', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.28)', display: 'flex', flexDirection: 'column', transformOrigin: 'bottom right' },
  header: { position: 'relative', background: brandGradient, color: '#fff', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12, overflow: 'hidden' },
  headerGlow: { position: 'absolute', top: -30, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(191,160,122,0.28)', filter: 'blur(10px)' },
  avatar: { position: 'relative', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `2px solid ${GOLD}` },
  headerText: { position: 'relative', display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 },
  headerTitle: { fontSize: 15, lineHeight: 1.2 },
  headerSub: { fontSize: 12, opacity: 0.92, display: 'flex', alignItems: 'center', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'fw-pulse-ring 1.8s infinite' },
  iconBtn: { position: 'relative', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: 4, display: 'flex' },
  body: { padding: 16, background: '#f7f6f2', display: 'flex', flexDirection: 'column', gap: 14, maxHeight: 380, overflowY: 'auto' },
  bubble: { background: '#fff', borderRadius: '4px 16px 16px 16px', padding: '12px 16px', fontSize: 14, color: '#1f2937', lineHeight: 1.45, boxShadow: '0 2px 10px rgba(0,0,0,0.06)', alignSelf: 'flex-start', maxWidth: '88%' },
  channelList: { display: 'flex', flexDirection: 'column', gap: 10 },
  channelBtn: { display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px', borderRadius: 14, border: `1px solid ${GOLD_SOFT}`, background: '#fff', color: NAVY, fontSize: 14, fontWeight: 600, cursor: 'pointer', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
  footer: { display: 'flex', alignItems: 'center', gap: 8, padding: 12, background: '#fff', borderTop: '1px solid #eee' },
  input: { flex: 1, border: `1px solid ${GOLD_SOFT}`, borderRadius: 22, padding: '11px 16px', fontSize: 14, outline: 'none', background: '#faf9f6' },
  sendBtn: { width: 44, height: 44, borderRadius: '50%', border: 'none', background: brandGradient, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, boxShadow: '0 4px 14px rgba(15,30,61,0.4)' },
};
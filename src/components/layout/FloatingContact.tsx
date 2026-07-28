import { useState } from 'react';
import { FaWhatsapp, FaFacebookMessenger, FaTimes } from 'react-icons/fa';

const WHATSAPP_NUMBER = '254700000000';
const WHATSAPP_MESSAGE = 'Hi Nexira, I would like to know more about your services.';
const MESSENGER_PAGE_ID = 'nexira';

export function FloatingContact() {
  const [open, setOpen] = useState<boolean>(false);

  const whatsappHref =
    'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);
  const messengerHref = 'https://m.me/' + MESSENGER_PAGE_ID;

  function toggleOpen() {
    setOpen(function flip(prev) {
      return !prev;
    });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="flex flex-col items-end gap-3">
          <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
            <span className="rounded-md bg-neutral-900 text-white text-xs px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Message us on Messenger
            </span>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0084FF] text-white shadow-lg hover:scale-105 transition-transform">
              <FaFacebookMessenger size={22} />
            </span>
          </a>

          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
            <span className="rounded-md bg-neutral-900 text-white text-xs px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat on WhatsApp
            </span>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform">
              <FaWhatsapp size={24} />
            </span>
          </a>
        </div>
      ) : null}

      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-orange text-white shadow-xl hover:scale-105 transition-transform"
      >
        {open ? <FaTimes size={22} /> : <FaWhatsapp size={26} />}
      </button>
    </div>
  );
}
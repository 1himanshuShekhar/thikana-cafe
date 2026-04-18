import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917320091985"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-button"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-[#1EBE5D] transition-all duration-300 whatsapp-pulse flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} />
    </a>
  );
};

export default FloatingWhatsApp;

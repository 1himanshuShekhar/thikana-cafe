import { Coffee, Phone, MapPin, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1F1916] text-[#FDFBF7]" data-testid="main-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#B48256] flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-2xl font-semibold">
                Thikana <span className="text-[#D4A373]">Café</span>
              </span>
            </div>
            <p className="text-[#A89B91] leading-relaxed max-w-md mb-6">
              Where tradition meets taste. Experience authentic kulhad chai and freshly brewed coffee in a warm, welcoming space.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" data-testid="footer-instagram" className="w-10 h-10 rounded-full bg-[#2C241F] hover:bg-[#B48256] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" data-testid="footer-facebook" className="w-10 h-10 rounded-full bg-[#2C241F] hover:bg-[#B48256] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:hello@thikanacafe.com" aria-label="Email" data-testid="footer-email" className="w-10 h-10 rounded-full bg-[#2C241F] hover:bg-[#B48256] flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-[#FDFBF7]">Explore</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-[#A89B91] hover:text-[#D4A373] transition-colors text-sm" data-testid="footer-home-link">Home</Link>
              <Link to="/menu" className="block text-[#A89B91] hover:text-[#D4A373] transition-colors text-sm" data-testid="footer-menu-link">Menu</Link>
              <Link to="/about" className="block text-[#A89B91] hover:text-[#D4A373] transition-colors text-sm" data-testid="footer-about-link">About</Link>
              <Link to="/gallery" className="block text-[#A89B91] hover:text-[#D4A373] transition-colors text-sm" data-testid="footer-gallery-link">Gallery</Link>
              <Link to="/contact" className="block text-[#A89B91] hover:text-[#D4A373] transition-colors text-sm" data-testid="footer-contact-link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-[#FDFBF7]">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-[#D4A373] flex-shrink-0" />
                <a href="tel:+917320091985" className="text-[#A89B91] hover:text-[#D4A373] transition-colors text-sm" data-testid="footer-phone">
                  +91 73200 91985
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#D4A373] flex-shrink-0" />
                <span className="text-[#A89B91] text-sm" data-testid="footer-address">Phagwara, Punjab 144401</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2C241F] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A89B91] text-sm">&copy; 2025 Thikana Café. Crafted with love in Phagwara.</p>
          <p className="text-[#A89B91] text-sm font-serif italic">"Desi Vibes, Kulhad Sips"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

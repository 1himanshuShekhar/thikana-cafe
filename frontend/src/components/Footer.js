import { Coffee, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#6F4E37] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="text-2xl font-bold">Thikana Café</span>
            </div>
            <p className="text-[#F5F5DC] leading-relaxed">
              Experience authentic kulhad chai and freshly brewed coffee in a cozy, eco-friendly environment.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-[#F5F5DC] hover:text-white transition-colors" data-testid="footer-home-link">
                Home
              </Link>
              <Link to="/menu" className="block text-[#F5F5DC] hover:text-white transition-colors" data-testid="footer-menu-link">
                Menu
              </Link>
              <Link to="/about" className="block text-[#F5F5DC] hover:text-white transition-colors" data-testid="footer-about-link">
                About
              </Link>
              <Link to="/gallery" className="block text-[#F5F5DC] hover:text-white transition-colors" data-testid="footer-gallery-link">
                Gallery
              </Link>
              <Link to="/contact" className="block text-[#F5F5DC] hover:text-white transition-colors" data-testid="footer-contact-link">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+917320091985" className="text-[#F5F5DC] hover:text-white transition-colors" data-testid="footer-phone">
                  +91 73200 91985
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span className="text-[#F5F5DC]" data-testid="footer-address">Phagwara, Punjab 144401</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-[#F5F5DC] hover:text-white transition-colors" aria-label="Facebook" data-testid="footer-facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#F5F5DC] hover:text-white transition-colors" aria-label="Instagram" data-testid="footer-instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#F5F5DC] hover:text-white transition-colors" aria-label="Twitter" data-testid="footer-twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-[#F5F5DC]">
          <p>&copy; 2025 Thikana Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

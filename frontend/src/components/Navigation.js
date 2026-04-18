import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#FDFBF7]/80 border-b border-[#6F4E37]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
            <Coffee className="w-8 h-8 text-[#6F4E37]" />
            <span className="text-2xl font-bold text-[#6F4E37]">Thikana Café</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#6F4E37]'
                    : 'text-[#5C4B41] hover:text-[#6F4E37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-cta"
              className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1EBE5D] transition-colors"
            >
              Order Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#6F4E37]"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-[#6F4E37]'
                    : 'text-[#5C4B41]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-nav-whatsapp-cta"
              className="block bg-[#25D366] text-white px-6 py-2.5 rounded-full font-medium text-center hover:bg-[#1EBE5D] transition-colors"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

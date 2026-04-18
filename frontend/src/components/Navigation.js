import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-xl shadow-sm border-b border-[#E8E1D9]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-md border-b border-transparent'
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
            <div className="w-10 h-10 rounded-full bg-[#B48256] flex items-center justify-center group-hover:bg-[#8E5E3D] transition-colors">
              <Coffee className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="font-serif text-2xl font-semibold text-[#3D332D] tracking-tight">
              Thikana <span className="text-[#B48256]">Café</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                  location.pathname === link.path
                    ? 'text-[#B48256]'
                    : 'text-[#3D332D] hover:text-[#B48256]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#B48256] rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-cta"
              className="bg-[#B48256] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#8E5E3D] btn-lift"
            >
              Order Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3D332D] p-2"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-[#E8E1D9] animate-fade-in" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                className={`block py-2 text-base font-medium ${
                  location.pathname === link.path ? 'text-[#B48256]' : 'text-[#3D332D]'
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
              className="block bg-[#B48256] text-white px-6 py-3 rounded-full font-medium text-center hover:bg-[#8E5E3D] transition-colors"
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

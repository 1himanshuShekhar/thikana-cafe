import { Coffee, Leaf, Users, Sparkles, Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from "../hooks/useSEO";

const Home = () => {
  useSEO({
    title: 'Thikana Café | Best Kulhad Chai Café in Phagwara, Punjab',
    description: 'Thikana Café is the best kulhad chai café in Phagwara, Punjab. Enjoy authentic masala chai, kulhad coffee, cold coffee, and Indian snacks. Order on WhatsApp: 7320091985.',
    keywords: 'kulhad chai café Phagwara, best café in Phagwara, Thikana Café, masala chai Phagwara, kulhad coffee, chai café near me, café Punjab 144401, desi chai, café near LPU, hangout café Phagwara',
    canonical: 'https://thikanacafe.com/',
  });

  const features = [
    { icon: Coffee, title: 'Freshly Brewed', description: 'Every cup made with passion and the finest ingredients, delivering unmatched flavor.' },
    { icon: Sparkles, title: 'Traditional Kulhad', description: 'Authentic handcrafted clay cups that enhance taste and connect you to heritage.' },
    { icon: Leaf, title: 'Eco-Friendly', description: 'Sustainable, biodegradable serving that honors our planet with every sip.' },
    { icon: Users, title: 'Cozy Hangout', description: 'A warm, inviting space perfect for catching up with friends and creating memories.' },
  ];

  const menuPreview = [
    { name: 'Masala Chai', price: '20', description: 'Aromatic spiced tea brewed with love', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80' },
    { name: 'Kulhad Coffee', price: '30', description: 'Rich coffee in traditional clay cup', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80' },
    { name: 'Cold Coffee', price: '50', description: 'Creamy, chilled and refreshing', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80' },
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Regular Customer', text: 'Absolutely the best chai in Phagwara. The kulhad adds such an authentic touch that takes me back to my childhood.', rating: 5 },
    { name: 'Priya Singh', role: 'Food Blogger', text: 'The ambiance is cozy, the staff is welcoming, and the cold coffee is simply divine. A hidden gem!', rating: 5 },
    { name: 'Amit Sharma', role: 'College Student', text: 'My go-to hangout spot. The masala chai is perfect and the prices are super student-friendly.', rating: 5 },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1612846213933-916a1f56d859?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZWF8ZW58MHx8fHwxNzc2NDk1NDg1fDA&ixlib=rb-4.1.0&q=85')`,
        }}
        data-testid="hero-section"
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="animate-fade-in-up animate-delay-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#D4A373]"></span>
              <span className="text-sm text-white/90 tracking-widest uppercase font-medium">Desi Vibes, Kulhad Sips</span>
            </div>
          </div>

          <h1
            className="animate-fade-in-up animate-delay-200 font-serif text-6xl sm:text-7xl lg:text-8xl font-semibold text-white leading-none mb-8"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
            data-testid="hero-title"
          >
            Thikana <span className="italic text-[#D4A373]">Café</span>
          </h1>

          <p
            className="animate-fade-in-up animate-delay-300 text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto font-light"
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
            data-testid="hero-description"
          >
            The best <strong className="font-normal text-white">kulhad chai café in Phagwara, Punjab</strong>. Authentic masala chai, freshly brewed kulhad coffee, and traditional Indian snacks — served with warmth in the heart of Phagwara (144401).
          </p>

          <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-button"
              className="group inline-flex items-center gap-2 bg-[#B48256] hover:bg-[#8E5E3D] text-white rounded-full px-8 py-4 font-medium btn-lift"
            >
              Order Now on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/menu"
              data-testid="hero-menu-link"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full px-8 py-4 font-medium hover:bg-white/20 transition-colors"
            >
              Explore Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-fade-in animate-delay-500">
          Scroll to discover
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#FAF8F5]" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">Why Choose Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3D332D] mb-4">The Best Kulhad Chai Café in Phagwara</h2>
            <div className="accent-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  data-testid={`feature-card-${index}`}
                  className="premium-card bg-white rounded-2xl p-8 border border-[#E8E1D9]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A373] to-[#B48256] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-[#3D332D] mb-3">{feature.title}</h3>
                  <p className="text-sm text-[#8A796F] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white" data-testid="menu-preview-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">Our Bestsellers</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3D332D]">Taste the Tradition</h2>
            </div>
            <Link
              to="/menu"
              data-testid="view-full-menu-button"
              className="group inline-flex items-center gap-2 text-[#B48256] font-medium hover:text-[#8E5E3D] transition-colors"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuPreview.map((item, index) => (
              <div
                key={index}
                data-testid={`menu-preview-card-${index}`}
                className="premium-card group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8E1D9]"
              >
                <div className="image-zoom aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-2xl text-[#3D332D]">{item.name}</h3>
                    <span className="font-serif text-xl font-semibold text-[#B48256]">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-[#8A796F] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW STRIP */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#1F1916] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606486544554-164d98da4889?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NzY0OTU0ODV8MA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#D4A373] mx-auto mb-6" strokeWidth={1} />
          <p className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-8 text-[#FDFBF7]">
            "A thikana is not just a place — it's a feeling of belonging, a corner of warmth where friends become family over cups of chai."
          </p>
          <Link
            to="/about"
            data-testid="about-link-home"
            className="inline-flex items-center gap-2 border-2 border-[#D4A373] text-[#D4A373] rounded-full px-8 py-3 font-medium hover:bg-[#D4A373] hover:text-[#1F1916] transition-colors"
          >
            Discover Our Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#FAF8F5]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3D332D] mb-4">Loved by Our Guests</h2>
            <div className="accent-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-testid={`testimonial-card-${index}`}
                className="premium-card bg-white rounded-2xl p-8 border border-[#E8E1D9] relative"
              >
                <Quote className="w-8 h-8 text-[#D4A373]/40 absolute top-6 right-6" strokeWidth={1} />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A373] text-[#D4A373]" />
                  ))}
                </div>
                <p className="text-[#3D332D] leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="pt-5 border-t border-[#E8E1D9]">
                  <p className="font-serif text-lg text-[#3D332D]">{testimonial.name}</p>
                  <p className="text-sm text-[#8A796F]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO CONTENT */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAF8F5]" data-testid="local-seo-section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">Visit Us in Phagwara</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3D332D] mb-4">A Kulhad Chai Café in the Heart of Punjab</h2>
            <div className="accent-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#3D332D]/80 leading-relaxed">
            <div>
              <h3 className="font-serif text-2xl text-[#3D332D] mb-3">Authentic Kulhad Chai in Phagwara</h3>
              <p className="mb-4">
                Looking for the <strong>best kulhad chai café in Phagwara, Punjab</strong>? Thikana Café serves freshly brewed <Link to="/menu" className="text-[#B48256] underline decoration-[#D4A373] underline-offset-4 hover:text-[#8E5E3D]">masala chai, ginger chai, and elaichi chai</Link> in traditional clay cups — just like the good old days.
              </p>
              <p>
                Every cup is made with hand-picked tea leaves, whole spices, and fresh milk. Our kulhads are eco-friendly, handmade by local potters, and keep your chai warm for longer.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#3D332D] mb-3">Your Favourite Hangout Spot Near LPU</h3>
              <p className="mb-4">
                Whether you're a student, traveler, or local, our café in <strong>Phagwara (144401)</strong> is the perfect <Link to="/about" className="text-[#B48256] underline decoration-[#D4A373] underline-offset-4 hover:text-[#8E5E3D]">hangout thikana</Link> — affordable prices, cozy ambiance, and wholesome Punjabi vibes.
              </p>
              <p>
                Pair your chai with <Link to="/menu" className="text-[#B48256] underline decoration-[#D4A373] underline-offset-4 hover:text-[#8E5E3D]">Punjabi samosa, paneer pakora, bun maska, or kulhad coffee</Link>. Need to order quickly? <a href="https://wa.me/917320091985" target="_blank" rel="noopener noreferrer" className="text-[#B48256] underline decoration-[#D4A373] underline-offset-4 hover:text-[#8E5E3D]">Message us on WhatsApp</a> — we'll have it ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white" data-testid="cta-section">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#B48256] to-[#8E5E3D] p-12 md:p-20 text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative">
              <h2 className="font-serif text-4xl md:text-5xl mb-5">Ready for a Sip of Tradition?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-light">
                Your favorite chai is just one message away. Order now or visit us in Phagwara.
              </p>
              <a
                href="https://wa.me/917320091985"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-whatsapp-button"
                className="inline-flex items-center gap-2 bg-white text-[#B48256] rounded-full px-8 py-4 font-semibold btn-lift hover:bg-[#FAF8F5]"
              >
                Order on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

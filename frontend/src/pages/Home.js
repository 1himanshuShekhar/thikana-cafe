import { Coffee, Leaf, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Freshly Brewed',
      description: 'Every cup made fresh with premium ingredients',
    },
    {
      icon: Sparkles,
      title: 'Traditional Kulhad',
      description: 'Authentic clay cups for genuine desi experience',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable and environment-conscious serving',
    },
    {
      icon: Users,
      title: 'Hangout Spot',
      description: 'Perfect place to relax with friends',
    },
  ];

  const menuPreview = [
    { name: 'Masala Chai', price: '₹20', description: 'Spiced tea with aromatic flavors' },
    { name: 'Kulhad Coffee', price: '₹30', description: 'Rich coffee in traditional clay cup' },
    { name: 'Cold Coffee', price: '₹50', description: 'Chilled coffee perfection' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Best chai in Phagwara! The kulhad adds such an authentic touch.',
    },
    {
      name: 'Priya Singh',
      text: 'Love the cozy ambiance and the cold coffee is amazing!',
    },
    {
      name: 'Amit Sharma',
      text: 'Perfect spot to hang out with friends. Highly recommend the masala chai.',
    },
  ];

  return (
    <div>
      <section
        className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxjbGF5JTIwY3VwJTIwaG90JTIwdGVhJTIwbWFzYWxhJTIwY2hhaXxlbnwwfHx8fDE3NzY0OTQ3MTd8MA&ixlib=rb-4.1.0&q=85')`,
        }}
        data-testid="hero-section"
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-[#D97736] mb-4 font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Desi Vibes, Kulhad Sips
          </p>
          <h1 className="text-5xl sm:text-6xl tracking-tight leading-none text-white font-bold mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }} data-testid="hero-title">
            Thikana Café
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-white mb-8 max-w-2xl mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }} data-testid="hero-description">
            Experience the authentic taste of kulhad chai and freshly brewed coffee in a warm, traditional setting. Every sip tells a story of culture and comfort.
          </p>
          <a
            href="https://wa.me/917320091985"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-button"
            className="inline-block bg-[#25D366] text-white rounded-full px-8 py-4 font-medium hover:bg-[#1EBE5D] transition-colors"
          >
            Order Now on WhatsApp
          </a>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-center text-[#6F4E37] mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  data-testid={`feature-card-${index}`}
                  className="bg-[#F5F5DC] rounded-2xl p-8 border border-[#6F4E37]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-12 h-12 text-[#D97736] mb-4" />
                  <h3 className="text-xl sm:text-2xl text-[#6F4E37] mb-3">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-[#5C4B41]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F5DC]" data-testid="menu-preview-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-center text-[#6F4E37] mb-4">Our Popular Menu</h2>
          <p className="text-center text-[#5C4B41] mb-12">Taste the tradition in every sip</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {menuPreview.map((item, index) => (
              <div
                key={index}
                data-testid={`menu-preview-card-${index}`}
                className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#6F4E37]/10 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl text-[#6F4E37] mb-2">{item.name}</h3>
                <p className="text-xl text-[#D97736] font-semibold mb-3">{item.price}</p>
                <p className="text-base leading-relaxed text-[#5C4B41]">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/menu"
              data-testid="view-full-menu-button"
              className="inline-block bg-[#6F4E37] text-white rounded-full px-8 py-4 font-medium hover:bg-[#5A3E2B] transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-center text-[#6F4E37] mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-testid={`testimonial-card-${index}`}
                className="bg-[#F5F5DC] rounded-2xl p-8 border border-[#6F4E37]/10"
              >
                <p className="text-base leading-relaxed text-[#5C4B41] mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#6F4E37] font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#6F4E37] text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-6">Visit Us Today</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-8">
            Experience the perfect blend of tradition and taste at Thikana Café. Your favorite chai awaits!
          </p>
          <a
            href="https://wa.me/917320091985"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-whatsapp-button"
            className="inline-block bg-[#25D366] text-white rounded-full px-8 py-4 font-medium hover:bg-[#1EBE5D] transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Heart, Award, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from "../hooks/useSEO";

const About = () => {
  useSEO({
    title: 'About Thikana Café — Kulhad Chai Culture in Phagwara, Punjab',
    description: 'Learn the story of Thikana Café, Phagwara\'s favourite kulhad chai café. Discover our passion for traditional kulhad culture, eco-friendly serving, and authentic Punjabi chai.',
    keywords: 'about Thikana Café, kulhad culture Phagwara, traditional chai café Punjab, eco-friendly café, Punjabi chai story, desi café Phagwara, kulhad history',
    canonical: 'https://thikanacafe.com/about',
  });

  const values = [
    { icon: Heart, title: 'Passion', description: 'We pour love into every cup we serve' },
    { icon: Award, title: 'Quality', description: 'Only the finest ingredients make it to your cup' },
    { icon: Users, title: 'Community', description: 'Building connections one chai at a time' },
    { icon: Clock, title: 'Tradition', description: 'Keeping the kulhad culture alive' },
  ];

  const stats = [
    { value: '500+', label: 'Happy Customers Daily' },
    { value: '50+', label: 'Menu Varieties' },
    { value: '100%', label: 'Fresh Ingredients' },
    { value: '5★', label: 'Customer Rating' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block animate-fade-in-up">About Us</span>
          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-[#3D332D] mb-6" data-testid="about-page-title">
            Our <span className="italic text-[#B48256]">Story</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-[#8A796F] leading-relaxed max-w-2xl mx-auto">
            Born from a dream to bring back the authentic <strong className="font-medium text-[#3D332D]">kulhad chai culture to Phagwara, Punjab</strong> — one clay cup at a time.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">The Journey</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3D332D] mb-8 leading-tight">
                A Thikana for Every <span className="italic text-[#B48256]">Chai Lover</span>
              </h2>
              <div className="space-y-5 text-[#3D332D]/80 leading-relaxed">
                <p>
                  Thikana Café was born from a simple dream — to bring back the authentic taste of <strong className="font-medium">traditional kulhad chai</strong> to the modern world. In a time where everything is disposable, we believe in the magic of clay cups that connect us to our roots.
                </p>
                <p>
                  Located in the heart of <strong className="font-medium">Phagwara, Punjab (144401)</strong>, our café is more than just a place for a quick drink. It's a <em className="font-serif text-[#B48256]">thikana</em> — a home away from home — where friends gather, stories unfold, and memories are brewed over steaming cups of <Link to="/menu" className="underline decoration-[#D4A373] underline-offset-4 hover:text-[#B48256]">masala chai and kulhad coffee</Link>.
                </p>
                <p>
                  Every kulhad at our café is handmade by local potters, supporting artisans while reducing our environmental footprint. Every sip is an experience to remember — whether you're a student near LPU, a traveler in Phagwara, or a local chai lover.
                </p>
              </div>
              <Link
                to="/menu"
                data-testid="about-explore-menu"
                className="inline-flex items-center gap-2 mt-8 text-[#B48256] font-medium hover:text-[#8E5E3D] transition-colors"
              >
                Explore Our Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="image-zoom rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/36522640/pexels-photo-36522640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Kulhad chai close-up"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                  data-testid="about-image"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-[#E8E1D9] hidden md:block">
                <p className="font-serif text-3xl text-[#B48256] mb-1">Since 2023</p>
                <p className="text-sm text-[#8A796F]">Serving with love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#1F1916] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <p className="font-serif text-4xl md:text-5xl text-[#D4A373] mb-2">{stat.value}</p>
                <p className="text-sm text-[#A89B91] tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-white" data-testid="values-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">What We Stand For</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#3D332D] mb-4">Our Values</h2>
            <div className="accent-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  data-testid={`value-card-${index}`}
                  className="premium-card bg-[#FAF8F5] rounded-2xl p-8 border border-[#E8E1D9] text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A373] to-[#B48256] flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-[#3D332D] mb-3">{value.title}</h3>
                  <p className="text-sm text-[#8A796F] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KULHAD CULTURE */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block">Heritage</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3D332D] mb-8">The <span className="italic text-[#B48256]">Kulhad</span> Culture</h2>
          <div className="space-y-5 text-[#3D332D]/80 leading-relaxed text-lg">
            <p>
              The kulhad, a traditional clay cup, has been integral to Indian tea culture for centuries. Made from natural clay, these cups are biodegradable and eco-friendly — the perfect sustainable choice for serving beverages.
            </p>
            <p>
              But kulhads are more than containers. Clay's porous nature enhances the flavor of chai and coffee, giving them a unique earthy taste. It also keeps beverages warmer longer, letting you savor every sip.
            </p>
            <p className="font-serif italic text-[#B48256] text-xl md:text-2xl pt-4">
              At Thikana Café, we keep this beautiful tradition alive — one kulhad at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

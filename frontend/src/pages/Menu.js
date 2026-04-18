import { useState } from 'react';
import { Coffee, Sparkles, UtensilsCrossed, ArrowRight } from 'lucide-react';
import useSEO from '@/hooks/useSEO';

const Menu = () => {
  useSEO({
    title: 'Menu — Kulhad Chai, Coffee & Snacks | Thikana Café Phagwara',
    description: 'Explore our menu: Masala Chai ₹20, Ginger Chai ₹25, Kulhad Coffee ₹30, Cold Coffee ₹50, Punjabi Samosa, Paneer Pakora & more. Best chai café in Phagwara, Punjab.',
    keywords: 'Thikana Café menu, kulhad chai menu Phagwara, masala chai price, kulhad coffee Phagwara, cold coffee café, Punjabi samosa Phagwara, café menu Punjab, chai prices Phagwara',
    canonical: 'https://thikanacafe.com/menu',
  });

  const [activeCategory, setActiveCategory] = useState('Chai');

  const menuData = {
    Chai: [
      { name: 'Masala Chai', price: '20', description: 'Traditional spiced tea with aromatic blend of cardamom, cinnamon, and cloves', badge: 'Popular' },
      { name: 'Ginger Chai', price: '25', description: 'Strong ginger-infused tea, perfect for a warm, soothing feeling' },
      { name: 'Elaichi Chai', price: '25', description: 'Fragrant cardamom-flavored tea with rich, aromatic notes' },
      { name: 'Special Kulhad Chai', price: '30', description: 'Our signature blend served in traditional clay cup', badge: 'Signature' },
      { name: 'Adrak Elaichi Chai', price: '30', description: 'Perfect harmony of ginger and cardamom flavors' },
      { name: 'Plain Chai', price: '15', description: 'Simple, classic tea brewed to perfection' },
    ],
    Coffee: [
      { name: 'Kulhad Coffee', price: '30', description: 'Rich coffee served in a traditional clay cup', badge: 'Signature' },
      { name: 'Cold Coffee', price: '50', description: 'Creamy chilled coffee with a frothy top' },
      { name: 'Hazelnut Cold Coffee', price: '70', description: 'Premium cold coffee with delicate hazelnut flavor', badge: 'Premium' },
      { name: 'Espresso', price: '40', description: 'Strong and concentrated coffee shot' },
      { name: 'Cappuccino', price: '60', description: 'Balanced blend of espresso, steamed milk, and foam' },
      { name: 'Cafe Latte', price: '65', description: 'Smooth espresso with velvety steamed milk' },
    ],
    Snacks: [
      { name: 'Punjabi Samosa', price: '20', description: 'Crispy golden samosa with spicy potato filling', badge: 'Popular' },
      { name: 'Bun Maska', price: '30', description: 'Soft fluffy bun with butter — perfect with chai' },
      { name: 'Paneer Pakora', price: '40', description: 'Deep-fried cottage cheese fritters, crunchy outside, soft inside' },
      { name: 'French Fries', price: '60', description: 'Crispy golden fries seasoned to perfection' },
      { name: 'Veg Sandwich', price: '50', description: 'Fresh vegetables layered in grilled bread' },
      { name: 'Cheese Toast', price: '45', description: 'Toasted bread topped with melted cheese' },
      { name: 'Aloo Tikki', price: '35', description: 'Spiced potato patty, crispy and flavorful' },
    ],
  };

  const categories = [
    { name: 'Chai', icon: Coffee, label: 'Chai Varieties' },
    { name: 'Coffee', icon: Sparkles, label: 'Coffee' },
    { name: 'Snacks', icon: UtensilsCrossed, label: 'Snacks' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block animate-fade-in-up">Our Offerings</span>
          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-[#3D332D] mb-6" data-testid="menu-page-title">
            Our <span className="italic text-[#B48256]">Menu</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-[#8A796F] leading-relaxed max-w-2xl mx-auto">
            A carefully curated selection of <strong className="font-medium text-[#3D332D]">traditional kulhad chai, freshly brewed coffee, and Indian snacks</strong> at the best café in Phagwara, Punjab. Made with love, priced for everyone.
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4" data-testid="menu-category-tabs">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  data-testid={`menu-category-${category.name.toLowerCase()}`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#B48256] text-white shadow-lg shadow-[#B48256]/30'
                      : 'bg-white text-[#3D332D] border border-[#E8E1D9] hover:border-[#B48256] hover:text-[#B48256]'
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MENU ITEMS */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="menu-items-list">
            {menuData[activeCategory].map((item, index) => (
              <div
                key={`${activeCategory}-${index}`}
                data-testid={`menu-item-${index}`}
                className="premium-card bg-white rounded-2xl p-6 border border-[#E8E1D9] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-serif text-xl text-[#3D332D]">{item.name}</h3>
                      {item.badge && (
                        <span className="text-[10px] tracking-widest uppercase bg-[#D4A373]/20 text-[#8E5E3D] px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#8A796F] leading-relaxed">{item.description}</p>
                  </div>
                  <div className="menu-dots hidden sm:block"></div>
                  <div className="flex-shrink-0">
                    <span className="font-serif text-2xl font-semibold text-[#B48256]">₹{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#B48256] to-[#8E5E3D] p-10 md:p-16 text-center text-white">
            <h3 className="font-serif text-3xl md:text-4xl mb-4">Ready to Order?</h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto font-light">
              Get your favorites delivered or order ahead on WhatsApp for a quick pickup.
            </p>
            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="menu-order-button"
              className="inline-flex items-center gap-2 bg-white text-[#B48256] rounded-full px-8 py-4 font-semibold btn-lift hover:bg-[#FAF8F5]"
            >
              Order on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;

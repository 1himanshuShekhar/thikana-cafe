import { useState } from 'react';
import { Coffee, Sparkles, UtensilsCrossed } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Chai');

  const menuData = {
    Chai: [
      { name: 'Masala Chai', price: '₹20', description: 'Traditional spiced tea with aromatic blend' },
      { name: 'Ginger Chai', price: '₹25', description: 'Strong ginger-infused tea for warmth' },
      { name: 'Elaichi Chai', price: '₹25', description: 'Cardamom-flavored tea with rich aroma' },
      { name: 'Special Kulhad Chai', price: '₹30', description: 'Our signature tea in clay cup' },
      { name: 'Adrak Elaichi Chai', price: '₹30', description: 'Perfect blend of ginger and cardamom' },
      { name: 'Plain Chai', price: '₹15', description: 'Simple and classic tea' },
    ],
    Coffee: [
      { name: 'Kulhad Coffee', price: '₹30', description: 'Rich coffee served in traditional clay cup' },
      { name: 'Cold Coffee', price: '₹50', description: 'Creamy chilled coffee with ice' },
      { name: 'Hazelnut Cold Coffee', price: '₹70', description: 'Premium cold coffee with hazelnut flavor' },
      { name: 'Espresso', price: '₹40', description: 'Strong and concentrated coffee shot' },
      { name: 'Cappuccino', price: '₹60', description: 'Perfect balance of espresso and milk foam' },
      { name: 'Cafe Latte', price: '₹65', description: 'Smooth espresso with steamed milk' },
    ],
    Snacks: [
      { name: 'Punjabi Samosa', price: '₹20', description: 'Crispy golden samosa with spicy filling' },
      { name: 'Bun Maska', price: '₹30', description: 'Soft bun with butter - perfect with chai' },
      { name: 'Paneer Pakora', price: '₹40', description: 'Deep-fried cottage cheese fritters' },
      { name: 'French Fries', price: '₹60', description: 'Crispy golden fries' },
      { name: 'Veg Sandwich', price: '₹50', description: 'Fresh vegetables in grilled bread' },
      { name: 'Cheese Toast', price: '₹45', description: 'Toasted bread with melted cheese' },
      { name: 'Aloo Tikki', price: '₹35', description: 'Spiced potato patty' },
    ],
  };

  const categories = [
    { name: 'Chai', icon: Coffee },
    { name: 'Coffee', icon: Sparkles },
    { name: 'Snacks', icon: UtensilsCrossed },
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl tracking-tight leading-none text-[#6F4E37] mb-4" data-testid="menu-page-title">
            Our Menu
          </h1>
          <p className="text-base leading-relaxed text-[#5C4B41]">
            Explore our delicious selection of traditional beverages and snacks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="menu-category-tabs">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                data-testid={`menu-category-${category.name.toLowerCase()}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-[#6F4E37] text-white'
                    : 'bg-[#F5F5DC] text-[#6F4E37] hover:bg-[#E8E1D9]'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="space-y-6" data-testid="menu-items-list">
          {menuData[activeCategory].map((item, index) => (
            <div
              key={index}
              data-testid={`menu-item-${index}`}
              className="bg-[#F5F5DC] rounded-2xl p-6 border border-[#6F4E37]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl text-[#6F4E37] mb-2">{item.name}</h3>
                  <p className="text-base leading-relaxed text-[#5C4B41]">{item.description}</p>
                </div>
                <div className="menu-item-dots"></div>
                <div className="text-2xl font-semibold text-[#D97736]">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-[#F5F5DC] rounded-2xl border border-[#6F4E37]/10">
          <h3 className="text-2xl sm:text-3xl text-[#6F4E37] mb-4">Ready to Order?</h3>
          <p className="text-base leading-relaxed text-[#5C4B41] mb-6">
            Contact us on WhatsApp for quick orders and home delivery
          </p>
          <a
            href="https://wa.me/917320091985"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="menu-order-button"
            className="inline-block bg-[#25D366] text-white rounded-full px-8 py-4 font-medium hover:bg-[#1EBE5D] transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;

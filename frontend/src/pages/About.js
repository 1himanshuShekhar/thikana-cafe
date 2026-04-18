import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour love into every cup we serve',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Only the finest ingredients make it to your cup',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections one chai at a time',
    },
    {
      icon: Clock,
      title: 'Tradition',
      description: 'Keeping the kulhad culture alive',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl tracking-tight leading-none text-[#6F4E37] mb-6" data-testid="about-page-title">
                Our Story
              </h1>
              <div className="space-y-6 text-base leading-relaxed text-[#5C4B41]">
                <p>
                  Thikana Café was born from a simple dream - to bring back the authentic taste and experience of traditional kulhad chai to the modern world. In a time where everything is served in disposable cups, we believe in the magic of clay cups that not only enhance the flavor but also connect us to our roots.
                </p>
                <p>
                  Located in the heart of Phagwara, Punjab, our café is more than just a place to grab a quick drink. It's a thikana - a home away from home - where friends gather, stories are shared, and memories are made over steaming cups of chai and coffee.
                </p>
                <p>
                  Every kulhad used at our café tells a story of tradition, craftsmanship, and sustainability. We work with local potters to ensure that each cup is handmade with care, supporting local artisans while reducing our environmental footprint.
                </p>
                <p>
                  Our menu celebrates the rich flavors of Punjab - from the robust masala chai that awakens your senses to the smooth kulhad coffee that soothes your soul. Every item is prepared fresh with premium ingredients, ensuring that every sip is an experience to remember.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1630748662359-40a2105640c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxjbGF5JTIwY3VwJTIwaG90JTIwdGVhJTIwbWFzYWxhJTIwY2hhaXxlbnwwfHx8fDE3NzY0OTQ3MTd8MA&ixlib=rb-4.1.0&q=85"
                alt="Kulhad chai close-up"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F5DC]" data-testid="values-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-center text-[#6F4E37] mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  data-testid={`value-card-${index}`}
                  className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#6F4E37]/10 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-12 h-12 text-[#D97736] mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl text-[#6F4E37] mb-3">{value.title}</h3>
                  <p className="text-base leading-relaxed text-[#5C4B41]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-[#6F4E37] mb-6">The Kulhad Culture</h2>
          <div className="text-base leading-relaxed text-[#5C4B41] space-y-4">
            <p>
              The kulhad, a traditional clay cup, has been an integral part of Indian tea culture for centuries. Made from natural clay, these cups are biodegradable and eco-friendly, making them the perfect sustainable choice for serving beverages.
            </p>
            <p>
              But kulhads are more than just eco-friendly containers. The porous nature of clay enhances the flavor of chai and coffee, giving them a unique earthy taste that you simply can't get from regular cups. The clay also keeps the beverage warm for longer, allowing you to savor every sip.
            </p>
            <p>
              At Thikana Café, we're proud to keep this beautiful tradition alive, one kulhad at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    { url: 'https://images.pexels.com/photos/5814950/pexels-photo-5814950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Traditional kulhad chai', span: 'md:col-span-2 md:row-span-2 h-[600px]' },
    { url: 'https://images.pexels.com/photos/15945660/pexels-photo-15945660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Cozy café interior', span: 'md:col-span-1 md:row-span-1 h-[290px]' },
    { url: 'https://images.pexels.com/photos/192933/pexels-photo-192933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Warm café ambiance', span: 'md:col-span-1 md:row-span-1 h-[290px]' },
    { url: 'https://images.unsplash.com/photo-1562235681-74f0c27da49f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxiYXJpc3RhJTIwcG91cmluZ3xlbnwwfHx8fDE3NzY0OTU0ODF8MA&ixlib=rb-4.1.0&q=85', alt: 'Barista pouring chai', span: 'md:col-span-1 md:row-span-1 h-[290px]' },
    { url: 'https://images.unsplash.com/photo-1606486544554-164d98da4889?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NzY0OTU0ODV8MA&ixlib=rb-4.1.0&q=85', alt: 'Fresh coffee beans', span: 'md:col-span-1 md:row-span-1 h-[290px]' },
    { url: 'https://images.pexels.com/photos/6205462/pexels-photo-6205462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Café delights', span: 'md:col-span-3 md:row-span-1 h-[400px]' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block animate-fade-in-up">Moments Captured</span>
          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-[#3D332D] mb-6" data-testid="gallery-page-title">
            Our <span className="italic text-[#B48256]">Gallery</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-[#8A796F] leading-relaxed max-w-2xl mx-auto">
            A visual journey through our café — the kulhads, the ambiance, and the memories we create.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-testid="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                data-testid={`gallery-image-${index}`}
                className={`${image.span} image-zoom group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <img src={image.url} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#D4A373] mb-1">Thikana Café</p>
                    <p className="font-serif text-xl text-white">{image.alt}</p>
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
            <h3 className="font-serif text-3xl md:text-4xl mb-4">Visit & Create Your Own Memories</h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto font-light">
              Come experience the warmth of Thikana Café in person. Your story awaits.
            </p>
            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="gallery-contact-button"
              className="inline-flex items-center gap-2 bg-white text-[#B48256] rounded-full px-8 py-4 font-semibold btn-lift hover:bg-[#FAF8F5]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

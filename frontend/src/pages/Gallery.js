const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxjbGF5JTIwY3VwJTIwaG90JTIwdGVhJTIwbWFzYWxhJTIwY2hhaXxlbnwwfHx8fDE3NzY0OTQ3MTd8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Traditional kulhad chai',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1774683272173-4f72fd508739?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0fGVufDB8fHx8MTc3NjQ5NDcxN3ww&ixlib=rb-4.1.0&q=85',
      alt: 'Cozy cafe interior',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1749996089724-268703b8c4dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwd2FybSUyMGxpZ2h0fGVufDB8fHx8MTc3NjQ5NDcxN3ww&ixlib=rb-4.1.0&q=85',
      alt: 'Warm cafe ambiance',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1630748662359-40a2105640c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxjbGF5JTIwY3VwJTIwaG90JTIwdGVhJTIwbWFzYWxhJTIwY2hhaXxlbnwwfHx8fDE3NzY0OTQ3MTd8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Kulhad close-up',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1601050690294-397f3c324515?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBjYWZlJTIwZm9vZCUyMHNuYWNrcyUyMHNhbW9zYXxlbnwwfHx8fDE3NzY0OTQ3MTd8MA&ixlib=rb-4.1.0&q=85',
      alt: 'Indian snacks',
      span: 'md:col-span-2 md:row-span-1',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl tracking-tight leading-none text-[#6F4E37] mb-4" data-testid="gallery-page-title">
            Gallery
          </h1>
          <p className="text-base leading-relaxed text-[#5C4B41]">
            Take a visual journey through our café and offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]" data-testid="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              data-testid={`gallery-image-${index}`}
              className={`${image.span} group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-[#F5F5DC] rounded-2xl border border-[#6F4E37]/10">
          <h3 className="text-2xl sm:text-3xl text-[#6F4E37] mb-4">Visit Us & Create Memories</h3>
          <p className="text-base leading-relaxed text-[#5C4B41] mb-6">
            Come experience the warmth and flavors of Thikana Café in person
          </p>
          <a
            href="https://wa.me/917320091985"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-contact-button"
            className="inline-block bg-[#6F4E37] text-white rounded-full px-8 py-4 font-medium hover:bg-[#5A3E2B] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

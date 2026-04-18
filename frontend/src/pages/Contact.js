import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const openingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Saturday - Sunday', hours: '8:00 AM - 11:00 PM' },
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl tracking-tight leading-none text-[#6F4E37] mb-4" data-testid="contact-page-title">
            Contact Us
          </h1>
          <p className="text-base leading-relaxed text-[#5C4B41]">
            We'd love to hear from you. Visit us or get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#F5F5DC] rounded-2xl p-8 border border-[#6F4E37]/10" data-testid="contact-info-card">
              <h2 className="text-2xl sm:text-3xl text-[#6F4E37] mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#D97736] mt-1" />
                  <div>
                    <h3 className="text-xl text-[#6F4E37] mb-1">Phone</h3>
                    <a
                      href="tel:+917320091985"
                      data-testid="contact-phone-link"
                      className="text-[#5C4B41] hover:text-[#6F4E37] transition-colors"
                    >
                      +91 73200 91985
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D97736] mt-1" />
                  <div>
                    <h3 className="text-xl text-[#6F4E37] mb-1">Address</h3>
                    <p className="text-[#5C4B41]" data-testid="contact-address">
                      Phagwara, Punjab 144401
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-[#D97736] mt-1" />
                  <div>
                    <h3 className="text-xl text-[#6F4E37] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/917320091985"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-whatsapp-link"
                      className="text-[#5C4B41] hover:text-[#6F4E37] transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5DC] rounded-2xl p-8 border border-[#6F4E37]/10" data-testid="opening-hours-card">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#D97736]" />
                <h2 className="text-2xl sm:text-3xl text-[#6F4E37]">Opening Hours</h2>
              </div>
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center" data-testid={`opening-hours-${index}`}>
                    <span className="text-[#6F4E37] font-medium">{schedule.day}</span>
                    <span className="text-[#5C4B41]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/917320091985"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-button"
              className="block w-full bg-[#25D366] text-white text-center rounded-full px-8 py-4 font-medium hover:bg-[#1EBE5D] transition-colors"
            >
              Message Us on WhatsApp
            </a>
          </div>

          <div className="bg-[#F5F5DC] rounded-2xl p-2 border border-[#6F4E37]/10" data-testid="google-maps-container">
            <iframe
              title="Thikana Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13780.158891234567!2d75.77392!3d31.22406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5c1c0c0c0c0d%3A0x1c1c1c1c1c1c1c1c!2sPhagwara%2C%20Punjab%20144401!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem', minHeight: '500px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-maps-iframe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

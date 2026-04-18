import { Phone, MapPin, Clock, MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
  const openingHours = [
    { day: 'Monday — Friday', hours: '8:00 AM – 10:00 PM' },
    { day: 'Saturday — Sunday', hours: '8:00 AM – 11:00 PM' },
  ];

  const contactItems = [
    { icon: Phone, label: 'Phone', value: '+91 73200 91985', href: 'tel:+917320091985', testid: 'contact-phone-link' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/917320091985', testid: 'contact-whatsapp-link', external: true },
    { icon: MapPin, label: 'Address', value: 'Phagwara, Punjab 144401', testid: 'contact-address' },
    { icon: Mail, label: 'Email', value: 'hello@thikanacafe.com', href: 'mailto:hello@thikanacafe.com', testid: 'contact-email-link' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-[0.2em] uppercase text-[#B48256] font-medium mb-4 block animate-fade-in-up">Get In Touch</span>
          <h1 className="animate-fade-in-up animate-delay-100 font-serif text-5xl md:text-6xl lg:text-7xl text-[#3D332D] mb-6" data-testid="contact-page-title">
            Say <span className="italic text-[#B48256]">Hello</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-[#8A796F] leading-relaxed max-w-2xl mx-auto">
            Questions, reservations, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* LEFT: INFO */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="contact-info-cards">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A373] to-[#B48256] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <p className="text-xs tracking-[0.15em] uppercase text-[#8A796F] mb-1">{item.label}</p>
                      <p className="font-serif text-lg text-[#3D332D]">{item.value}</p>
                    </>
                  );
                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      data-testid={item.testid}
                      className="premium-card block bg-white rounded-2xl p-6 border border-[#E8E1D9]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} data-testid={item.testid} className="premium-card bg-white rounded-2xl p-6 border border-[#E8E1D9]">
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8E1D9]" data-testid="opening-hours-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A373] to-[#B48256] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-[#3D332D]">Opening Hours</h3>
                </div>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-[#E8E1D9] last:border-0 last:pb-0" data-testid={`opening-hours-${index}`}>
                      <span className="text-[#3D332D] font-medium text-sm">{schedule.day}</span>
                      <span className="text-[#B48256] text-sm font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917320091985"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-button"
                className="group flex items-center justify-between w-full bg-gradient-to-br from-[#B48256] to-[#8E5E3D] text-white rounded-2xl p-6 btn-lift"
              >
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-white/70 mb-1">Quick Order</p>
                  <p className="font-serif text-xl">Message us on WhatsApp</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </a>
            </div>

            {/* RIGHT: MAP */}
            <div className="lg:col-span-3" data-testid="google-maps-container">
              <div className="bg-white rounded-3xl p-3 border border-[#E8E1D9] h-full">
                <iframe
                  title="Thikana Café Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13780.158891234567!2d75.77392!3d31.22406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5c1c0c0c0c0d%3A0x1c1c1c1c1c1c1c1c!2sPhagwara%2C%20Punjab%20144401!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.25rem', minHeight: '620px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="google-maps-iframe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

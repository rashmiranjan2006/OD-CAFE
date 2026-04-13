import { useScrollReveal } from '@/hooks/useAnimations';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Visit <span className="italic gold-text">OD Cafe</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 reveal" style={{ transitionDelay: '0.15s' }}>
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.957!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OD Cafe Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="glass-card p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground font-sans font-light">42 Artisan Lane, Bandra West,<br />Mumbai 400050</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground font-sans font-light">Mon - Fri: 7:00 AM – 10:00 PM</p>
                  <p className="text-muted-foreground font-sans font-light">Sat - Sun: 8:00 AM – 11:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground font-sans font-light">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground font-sans font-light">hello@odcafe.in</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="block text-center px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

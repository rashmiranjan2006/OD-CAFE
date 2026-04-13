import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding pb-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              OD<span className="text-gold">.</span>Cafe
            </h3>
            <p className="font-sans font-light text-primary-foreground/70 leading-relaxed">
              Brewed for moments,<br />crafted with passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm font-sans text-primary-foreground/60 mb-4">
              Get the latest on new blends & events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-sans text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="px-6 py-3 rounded-full bg-gold text-accent-foreground text-sm font-sans uppercase tracking-wider hover:shadow-lg transition-all duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans text-primary-foreground/40">
            © 2024 OD Cafe. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/50 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

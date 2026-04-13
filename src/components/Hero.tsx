import { useParallax } from '@/hooks/useAnimations';
import { ChevronDown } from 'lucide-react';
import heroImg from '@/assets/hero-coffee.jpg';

const Hero = () => {
  const offset = useParallax(0.4);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src={heroImg}
          alt="Premium coffee at OD Cafe"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Steam particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-0"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${45 + i * 3}%`,
              bottom: '30%',
              background: 'hsl(var(--gold) / 0.3)',
              animation: `steam ${3 + i * 0.5}s ease-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <p
          className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Est. 2024 — Artisanal Coffee
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] text-foreground mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          Brewed for<br />
          <span className="italic gold-text">Moments</span>
        </h1>
        <p
          className="text-lg md:text-xl font-sans text-muted-foreground max-w-xl mx-auto mb-12 font-light opacity-0 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          Crafted with passion, served with soul. Every cup tells a story at OD Cafe.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: '1.1s' }}
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-widest rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-foreground/20 text-foreground font-sans text-sm uppercase tracking-widest rounded-full hover:bg-foreground/5 transition-all duration-500 hover:-translate-y-1"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;

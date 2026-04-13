import { useScrollReveal } from '@/hooks/useAnimations';
import latteImg from '@/assets/latte-art.jpg';
import coldBrewImg from '@/assets/cold-brew.jpg';
import dessertImg from '@/assets/dessert.jpg';

const signatures = [
  {
    name: 'The OD Signature',
    tagline: 'Our most loved creation',
    description: 'A velvety blend of house espresso, oat milk, and caramelized vanilla — topped with micro-foam art.',
    image: latteImg,
  },
  {
    name: 'Midnight Cold Brew',
    tagline: 'Bold. Smooth. Unforgettable.',
    description: '24 hours of patience in every glass. Steeped with dark cocoa nibs and served over hand-cut ice.',
    image: coldBrewImg,
  },
  {
    name: 'Chocolate Fondant',
    tagline: 'Decadence redefined',
    description: 'Warm molten center meets rich Belgian chocolate. Paired perfectly with our single-origin espresso.',
    image: dessertImg,
  },
];

const Signature = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">Signature Collection</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our <span className="italic gold-text">Bestsellers</span>
          </h2>
        </div>

        <div className="space-y-32">
          {signatures.map((item, i) => (
            <div
              key={item.name}
              className={`reveal flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-20 items-center`}
              style={{ transitionDelay: '0.1s' }}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                {/* Spotlight glow */}
                <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, hsl(var(--gold) / 0.1), transparent 70%)' }}
                />
              </div>

              {/* Text */}
              <div className="lg:w-1/2">
                <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-3">{item.tagline}</p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">{item.name}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-lg font-light mb-8">{item.description}</p>
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-sans text-gold hover:text-foreground transition-colors duration-300 group/link"
                >
                  View in Menu
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;

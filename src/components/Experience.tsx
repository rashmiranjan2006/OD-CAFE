import { useScrollReveal } from '@/hooks/useAnimations';
import { Music, Wifi, Armchair, Coffee } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';

const features = [
  { icon: Coffee, title: 'Specialty Brews', desc: 'Single-origin beans roasted to perfection' },
  { icon: Armchair, title: 'Cozy Seating', desc: 'Velvet chairs, warm nooks & window seats' },
  { icon: Music, title: 'Curated Vibes', desc: 'Lo-fi, jazz & acoustic playlists' },
  { icon: Wifi, title: 'Fast Wi-Fi', desc: 'Work-friendly with power at every seat' },
];

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={gallery1} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">The Experience</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              More Than Just <span className="italic gold-text">Coffee</span>
            </h2>
            <p className="text-muted-foreground font-sans font-light text-lg max-w-2xl mx-auto">
              OD Cafe is a feeling. It&apos;s the warmth of a Sunday morning, the quiet hum of creativity, and the comfort of a place that knows your name.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal glass-card p-8 text-center hover-lift"
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-sans font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

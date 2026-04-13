import { useScrollReveal } from '@/hooks/useAnimations';
import aboutImg from '@/assets/about-cafe.jpg';

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={aboutImg}
                alt="OD Cafe warm interior"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-2xl" />
          </div>

          {/* Text */}
          <div>
            <div className="reveal">
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                Where Every<br />Sip Feels Like<br /><span className="italic gold-text">Home</span>
              </h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6 text-lg font-light">
                OD Cafe was born from a simple belief: coffee is more than a drink — it&apos;s an experience. Nestled in the heart of the city, we&apos;ve created a sanctuary where time slows down and conversations deepen.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8 font-light">
                Our beans are ethically sourced from single-origin farms, roasted in small batches to capture every nuance of flavor. Every cup is a handcrafted masterpiece, prepared by baristas who treat their craft as art.
              </p>
            </div>
            <div className="reveal flex gap-12" style={{ transitionDelay: '0.4s' }}>
              <div>
                <span className="text-4xl font-serif font-bold gold-text">12+</span>
                <p className="text-sm text-muted-foreground mt-1 font-sans">Single Origins</p>
              </div>
              <div>
                <span className="text-4xl font-serif font-bold gold-text">5K+</span>
                <p className="text-sm text-muted-foreground mt-1 font-sans">Happy Customers</p>
              </div>
              <div>
                <span className="text-4xl font-serif font-bold gold-text">3</span>
                <p className="text-sm text-muted-foreground mt-1 font-sans">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

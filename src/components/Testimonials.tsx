import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useAnimations';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    text: 'OD Cafe isn\'t just a cafe — it\'s an experience. The Signature Latte is the best I\'ve had in the city. The ambiance makes you want to stay forever.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Startup Founder',
    text: 'My second office. Fast Wi-Fi, incredible coffee, and a team that remembers your order. I\'ve closed three deals at this cafe.',
    rating: 5,
  },
  {
    name: 'Kavya Nair',
    role: 'Interior Designer',
    text: 'The attention to detail in the interiors is unmatched. From the pendant lights to the ceramic cups — everything screams premium craft.',
    rating: 5,
  },
  {
    name: 'Rahul Desai',
    role: 'Coffee Enthusiast',
    text: 'Finally, a cafe that takes single-origin seriously. The Ethiopian pour-over was a revelation. Will keep coming back.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            What People <span className="italic gold-text">Say</span>
          </h2>
        </div>

        <div className="reveal relative" style={{ transitionDelay: '0.2s' }}>
          <div className="text-center px-4 md:px-16">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8 italic min-h-[120px] transition-all duration-500">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>

            <p className="font-serif text-lg font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground font-sans">{testimonials[current].role}</p>
          </div>

          {/* Nav */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

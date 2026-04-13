import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useAnimations';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import aboutImg from '@/assets/about-cafe.jpg';
import latteImg from '@/assets/latte-art.jpg';
import espressoImg from '@/assets/espresso.jpg';

const images = [
  { src: gallery1, alt: 'Cozy interior', span: 'col-span-2 row-span-2' },
  { src: gallery2, alt: 'Pour-over brewing', span: '' },
  { src: espressoImg, alt: 'Espresso shot', span: '' },
  { src: latteImg, alt: 'Latte art', span: '' },
  { src: gallery3, alt: 'Evening terrace', span: 'col-span-2' },
  { src: aboutImg, alt: 'Cafe ambiance', span: '' },
];

const Gallery = () => {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary/30" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              A Glimpse <span className="italic gold-text">Inside</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, i) => (
              <div
                key={i}
                className={`reveal overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
                style={{ transitionDelay: `${0.08 * i}s` }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery image expanded"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl animate-scale-in"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;

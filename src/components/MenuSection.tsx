import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useAnimations';
import latteImg from '@/assets/latte-art.jpg';
import espressoImg from '@/assets/espresso.jpg';
import pastryImg from '@/assets/pastry.jpg';
import dessertImg from '@/assets/dessert.jpg';
import coldBrewImg from '@/assets/cold-brew.jpg';

const categories = ['All', 'Coffee', 'Snacks', 'Desserts'];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  { name: 'Signature Latte', description: 'House blend with silky oat milk & vanilla', price: '₹280', category: 'Coffee', image: latteImg, badge: 'Bestseller' },
  { name: 'Single Origin Espresso', description: 'Ethiopian Yirgacheffe, fruity & bright', price: '₹220', category: 'Coffee', image: espressoImg },
  { name: 'Cold Brew', description: '24-hour steeped, smooth & bold', price: '₹260', category: 'Coffee', image: coldBrewImg },
  { name: 'Butter Croissant', description: 'Flaky, golden, fresh from the oven', price: '₹180', category: 'Snacks', image: pastryImg },
  { name: 'Chocolate Fondant', description: 'Warm center, dusted cocoa', price: '₹320', category: 'Desserts', image: dessertImg, badge: 'Chef\'s Pick' },
  { name: 'Affogato', description: 'Espresso over vanilla gelato', price: '₹300', category: 'Desserts', image: espressoImg },
];

const MenuSection = () => {
  const [active, setActive] = useState('All');
  const ref = useScrollReveal();
  const filtered = active === 'All' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-sans mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Crafted with <span className="italic gold-text">Care</span>
          </h2>
          <div className="line-accent" />
        </div>

        {/* Tabs */}
        <div className="reveal flex justify-center gap-2 mb-12 flex-wrap" style={{ transitionDelay: '0.15s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-sans uppercase tracking-wider transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className="reveal glass-card overflow-hidden hover-lift group"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {item.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-sans bg-gold text-accent-foreground rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{item.name}</h3>
                  <span className="font-serif text-lg font-bold gold-text">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

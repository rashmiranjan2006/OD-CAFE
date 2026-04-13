import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Signature from '@/components/Signature';
import Gallery from '@/components/Gallery';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Signature />
      <Gallery />
      <Experience />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
};

export default Index;

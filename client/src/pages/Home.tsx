import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import RequestForm from '@/components/RequestForm';
import ContactSection from '@/components/ContactSection';
import JoinSection from '@/components/JoinSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <HowItWorks />
        <Testimonials />
        <RequestForm />
        <ContactSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

const WHATSAPP_NUMBER = '21650000000';
const PHONE_NUMBER = '+216 50 000 000';

export default function HeroSection() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('hero.cta'))}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isArabic ? 'md:order-2' : ''}`}>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleWhatsApp}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
              >
                <MessageCircle size={20} />
                {t('hero.whatsapp')}
              </Button>
              <Button
                onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-bold py-6 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                {t('hero.call')}
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold group"
              >
                {t('hero.cta')}
                {isArabic ? (
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                )}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className={`${isArabic ? 'md:order-1' : ''}`}>
            <div className="relative">
              <img
                src="/images/hero-delivery.jpg"
                alt="Delivery Service"
                className="w-full rounded-2xl shadow-2xl object-cover h-96 md:h-full"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

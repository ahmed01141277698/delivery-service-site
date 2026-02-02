import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = '21650000000';
const PHONE_NUMBER = '+216 50 000 000';
const EMAIL = 'info@delivery.tn';

export default function ContactSection() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('contact.whatsapp'),
      description: isArabic ? 'تواصل معنا عبر واتساب للرد السريع' : 'Contact us via WhatsApp for quick response',
      action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'),
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      description: isArabic ? 'اتصل بنا مباشرة في أي وقت' : 'Call us directly anytime',
      action: () => window.location.href = `tel:${PHONE_NUMBER}`,
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      description: isArabic ? 'أرسل لنا بريد إلكتروني' : 'Send us an email',
      action: () => window.location.href = `mailto:${EMAIL}`,
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer"
                onClick={method.action}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>

                {/* Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    method.action();
                  }}
                  className={`w-full bg-gradient-to-r ${method.color} text-white font-bold py-2 rounded-lg hover:shadow-lg transition-all`}
                >
                  {isArabic ? 'تواصل الآن' : 'Contact Now'}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            {isArabic ? 'معلومات التواصل' : 'Contact Information'}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-900">{t('contact.phone')}</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 hover:text-blue-700">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-900">{t('contact.whatsapp')}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-900">{t('contact.email')}</p>
                <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:text-blue-700">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

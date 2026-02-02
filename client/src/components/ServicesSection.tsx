import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Truck, Globe, Lock } from 'lucide-react';

export default function ServicesSection() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const services = [
    {
      id: 1,
      icon: Truck,
      title: t('service.local.title'),
      description: t('service.local.desc'),
      items: t('service.local.items'),
      image: '/images/local-delivery.jpg',
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 2,
      icon: Globe,
      title: t('service.international.title'),
      description: t('service.international.desc'),
      items: t('service.international.items'),
      image: '/images/international-delivery.jpg',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      icon: Lock,
      title: t('service.transfer.title'),
      description: t('service.transfer.desc'),
      items: t('service.transfer.items'),
      image: '/images/money-transfer.jpg',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Items */}
                  <div className="text-sm text-gray-500 leading-relaxed">
                    <p className="font-semibold text-gray-700 mb-2">
                      {isArabic ? 'يتضمن:' : 'Includes:'}
                    </p>
                    <p>{service.items}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

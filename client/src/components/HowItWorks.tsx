import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, MapPin, Users, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: t('how.step1'),
      description: t('how.step1.desc'),
      color: 'from-orange-400 to-orange-600',
    },
    {
      number: 2,
      icon: MapPin,
      title: t('how.step2'),
      description: t('how.step2.desc'),
      color: 'from-blue-400 to-blue-600',
    },
    {
      number: 3,
      icon: Users,
      title: t('how.step3'),
      description: t('how.step3.desc'),
      color: 'from-purple-400 to-purple-600',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: t('how.step4'),
      description: t('how.step4.desc'),
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('how.title')}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                  {/* Step Number */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="text-gray-700" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector */}
                {!isLast && (
                  <div className={`hidden md:flex absolute ${isArabic ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 ${isArabic ? '-translate-x-1/2' : 'translate-x-full'} w-8 h-0.5 bg-gradient-to-r ${step.color}`}>
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isArabic ? '-left-1' : '-right-1'} w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-l-orange-500 border-t-transparent border-b-transparent`}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

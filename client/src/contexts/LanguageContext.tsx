import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.contact': 'التواصل',
    'nav.join': 'انضم معنا',

    // Hero Section
    'hero.title': 'خدمة التوصيل المستقلة',
    'hero.subtitle': 'توصيل موثوق بين تونس وقطر وداخل كل بلد',
    'hero.cta': 'اطلب توصيل الآن',
    'hero.whatsapp': 'تواصل عبر واتساب',
    'hero.call': 'اتصل بنا',

    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم خدمات توصيل احترافية وموثوقة',

    'service.local.title': 'التوصيل المحلي',
    'service.local.desc': 'توصيل سريع وآمن داخل تونس وقطر',
    'service.local.items': 'طلبات المطاعم • المشتريات • الأغراض الشخصية • المشاوير • توصيل الموظفين والتلاميذ',

    'service.international.title': 'التوصيل الدولي',
    'service.international.desc': 'تنسيق توصيل آمن بين تونس وقطر يدًا بيد',
    'service.international.items': 'أغراض شخصية • استقبال من المطار • خدمات التنسيق • توثيق العمليات',

    'service.transfer.title': 'توثيق التحويل (قريبًا)',
    'service.transfer.desc': 'خدمة توثيق آمنة لتسليم الأموال يدًا بيد',
    'service.transfer.items': 'توثيق الهوية • تسليم آمن • تنسيق موثوق • خدمة قانونية',

    // How It Works
    'how.title': 'كيف تعمل الخدمة؟',
    'how.step1': 'تواصل معنا',
    'how.step1.desc': 'أرسل رسالة عبر واتساب أو اتصل بنا مباشرة',
    'how.step2': 'تحديد الخدمة',
    'how.step2.desc': 'حدد نوع الخدمة والمسار والتفاصيل',
    'how.step3': 'التنسيق',
    'how.step3.desc': 'نتنسق معك ومع السائق أو المسافر',
    'how.step4': 'التسليم',
    'how.step4.desc': 'استلام وتسليم آمن يدًا بيد',

    // Testimonials
    'testimonials.title': 'آراء عملائنا',
    'testimonial.1.text': 'خدمة ممتازة وسريعة! وصلت طلبيتي في الوقت المحدد.',
    'testimonial.1.name': 'أحمد محمد',
    'testimonial.2.text': 'أوصي بهذه الخدمة بشدة. احترافية وموثوقية عالية.',
    'testimonial.2.name': 'فاطمة علي',
    'testimonial.3.text': 'نقلت أغراضي من تونس إلى قطر بأمان تام. شكراً لكم!',
    'testimonial.3.name': 'محمود حسن',

    // Request Form
    'form.title': 'اطلب توصيل',
    'form.name': 'الاسم',
    'form.phone': 'رقم الهاتف',
    'form.service': 'نوع الخدمة',
    'form.from': 'من',
    'form.to': 'إلى',
    'form.description': 'وصف الأغراض',
    'form.submit': 'إرسال الطلب',
    'form.submitting': 'جاري الإرسال...',
    'form.success': 'تم إرسال الطلب بنجاح!',

    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك في أي وقت',
    'contact.whatsapp': 'واتساب',
    'contact.phone': 'هاتف',
    'contact.email': 'بريد إلكتروني',
    'contact.form.title': 'نموذج التواصل',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال',

    // Join Section
    'join.title': 'انضم كسائق أو مسافر',
    'join.subtitle': 'هل تريد العمل معنا؟',
    'join.description': 'نبحث عن سائقين ومسافرين موثوقين للعمل معنا',
    'join.form.name': 'الاسم الكامل',
    'join.form.phone': 'رقم الهاتف',
    'join.form.type': 'نوع العمل',
    'join.form.type.driver': 'سائق',
    'join.form.type.traveler': 'مسافر',
    'join.form.experience': 'خبرتك',
    'join.form.submit': 'إرسال الطلب',

    // Footer
    'footer.legal': 'تنبيه قانوني',
    'footer.legal.text': 'نحن وسيط تنسيق خدمات ولسنا شركة شحن أو تحويل أموال. جميع عمليات التسليم والتحويل تتم بالاتفاق المباشر بين الأطراف.',
    'footer.rights': '© 2026 خدمة التوصيل المستقلة. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ ما',
    'common.success': 'تم بنجاح',
    'common.close': 'إغلاق',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.join': 'Join Us',

    // Hero Section
    'hero.title': 'Independent Delivery Service',
    'hero.subtitle': 'Reliable delivery between Tunisia and Qatar',
    'hero.cta': 'Request Delivery',
    'hero.whatsapp': 'Contact on WhatsApp',
    'hero.call': 'Call Us',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional and reliable delivery services',

    'service.local.title': 'Local Delivery',
    'service.local.desc': 'Fast and secure delivery within Tunisia and Qatar',
    'service.local.items': 'Restaurant orders • Shopping • Personal items • Errands • Employee & student transport',

    'service.international.title': 'International Delivery',
    'service.international.desc': 'Safe coordination between Tunisia and Qatar hand-to-hand',
    'service.international.items': 'Personal items • Airport pickup • Coordination services • Operation documentation',

    'service.transfer.title': 'Money Transfer Documentation (Coming Soon)',
    'service.transfer.desc': 'Secure documentation service for hand-to-hand money transfer',
    'service.transfer.items': 'ID verification • Secure delivery • Reliable coordination • Legal service',

    // How It Works
    'how.title': 'How It Works',
    'how.step1': 'Contact Us',
    'how.step1.desc': 'Send a message via WhatsApp or call us directly',
    'how.step2': 'Select Service',
    'how.step2.desc': 'Choose service type, route and details',
    'how.step3': 'Coordination',
    'how.step3.desc': 'We coordinate with you and the driver or traveler',
    'how.step4': 'Delivery',
    'how.step4.desc': 'Safe hand-to-hand delivery',

    // Testimonials
    'testimonials.title': 'Customer Reviews',
    'testimonial.1.text': 'Excellent and fast service! My order arrived on time.',
    'testimonial.1.name': 'Ahmed Mohammed',
    'testimonial.2.text': 'I highly recommend this service. Very professional and reliable.',
    'testimonial.2.name': 'Fatima Ali',
    'testimonial.3.text': 'Transferred my items from Tunisia to Qatar safely. Thank you!',
    'testimonial.3.name': 'Mahmoud Hassan',

    // Request Form
    'form.title': 'Request Delivery',
    'form.name': 'Name',
    'form.phone': 'Phone Number',
    'form.service': 'Service Type',
    'form.from': 'From',
    'form.to': 'To',
    'form.description': 'Item Description',
    'form.submit': 'Submit Request',
    'form.submitting': 'Submitting...',
    'form.success': 'Request submitted successfully!',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you anytime',
    'contact.whatsapp': 'WhatsApp',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.title': 'Contact Form',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',

    // Join Section
    'join.title': 'Join as Driver or Traveler',
    'join.subtitle': 'Want to work with us?',
    'join.description': 'We are looking for reliable drivers and travelers to work with us',
    'join.form.name': 'Full Name',
    'join.form.phone': 'Phone Number',
    'join.form.type': 'Work Type',
    'join.form.type.driver': 'Driver',
    'join.form.type.traveler': 'Traveler',
    'join.form.experience': 'Your Experience',
    'join.form.submit': 'Submit Application',

    // Footer
    'footer.legal': 'Legal Notice',
    'footer.legal.text': 'We are a service coordination intermediary, not a shipping or money transfer company. All delivery and transfer operations are conducted by direct agreement between parties.',
    'footer.rights': '© 2026 Independent Delivery Service. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success',
    'common.close': 'Close',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

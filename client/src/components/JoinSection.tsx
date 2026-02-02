import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '21650000000';

export default function JoinSection() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'driver',
    experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const typeLabel = formData.type === 'driver' ? 'سائق' : 'مسافر';
    const message = `
*طلب انضمام جديد* 👋

*الاسم:* ${formData.name}
*الهاتف:* ${formData.phone}
*نوع العمل:* ${typeLabel}
*الخبرة:* ${formData.experience}
    `.trim();

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setFormData({
      name: '',
      phone: '',
      type: 'driver',
      experience: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="join" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              {t('join.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              {t('join.subtitle')}
            </p>
            <p className="text-gray-600">
              {t('join.description')}
            </p>
          </div>

          {/* Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('join.form.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('join.form.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={isArabic ? '+216 50 000 000' : '+216 50 000 000'}
                />
              </div>

              {/* Work Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('join.form.type')} *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="driver">{t('join.form.type.driver')}</option>
                  <option value="traveler">{t('join.form.type.traveler')}</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('join.form.experience')} *
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder={isArabic ? 'حدثنا عن خبرتك' : 'Tell us about your experience'}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={20} />
                {isSubmitting ? t('form.submitting') : t('join.form.submit')}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                {isArabic
                  ? 'سيتم فتح واتساب برسالة تحتوي على بيانات طلبك'
                  : 'WhatsApp will open with your application details'}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

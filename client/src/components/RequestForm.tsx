import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '21650000000';

export default function RequestForm() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'local',
    from: '',
    to: '',
    description: '',
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

    // Prepare WhatsApp message
    const message = `
*طلب توصيل جديد* 📦

*الاسم:* ${formData.name}
*الهاتف:* ${formData.phone}
*نوع الخدمة:* ${formData.service === 'local' ? 'توصيل محلي' : formData.service === 'international' ? 'توصيل دولي' : 'توثيق تحويل'}
*من:* ${formData.from}
*إلى:* ${formData.to}
*وصف الأغراض:* ${formData.description}
    `.trim();

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: 'local',
      from: '',
      to: '',
      description: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">
              {t('form.title')}
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {isArabic ? 'ملء النموذج أدناه وسيتم فتح واتساب برسالة جاهزة' : 'Fill the form below and WhatsApp will open with your request'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.name')} *
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
                  {t('form.phone')} *
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

              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.service')} *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="local">{t('service.local.title')}</option>
                  <option value="international">{t('service.international.title')}</option>
                  <option value="transfer">{t('service.transfer.title')}</option>
                </select>
              </div>

              {/* From - To */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('form.from')} *
                  </label>
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={isArabic ? 'من أين' : 'From where'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('form.to')} *
                  </label>
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder={isArabic ? 'إلى أين' : 'To where'}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.description')} *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder={isArabic ? 'صف الأغراض التي تريد توصيلها' : 'Describe the items you want to deliver'}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={20} />
                {isSubmitting ? t('form.submitting') : t('form.submit')}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                {isArabic
                  ? 'سيتم فتح واتساب برسالة تحتوي على بيانات طلبك'
                  : 'WhatsApp will open with your request details'}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

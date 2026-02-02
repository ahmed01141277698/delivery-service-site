import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '+216 50 000 000'; // Replace with actual number
const WHATSAPP_NUMBER = '21650000000'; // Replace with actual number
const EMAIL = 'info@delivery.tn'; // Replace with actual email

export default function Footer() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <footer className="bg-blue-900 text-white">
      {/* Legal Notice */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-blue-100">
            <p className="font-semibold mb-2">{t('footer.legal')}</p>
            <p>{t('footer.legal.text')}</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">📦</span>
              {isArabic ? 'عن الخدمة' : 'About Service'}
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {isArabic
                ? 'خدمة توصيل مستقلة موثوقة توفر حلولاً سريعة وآمنة للتوصيل المحلي والدولي.'
                : 'A reliable independent delivery service providing fast and secure local and international delivery solutions.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-blue-100 hover:text-orange-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-orange-400 transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-orange-400 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a href="#join" className="text-blue-100 hover:text-orange-400 transition-colors">
                  {t('nav.join')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'تواصل معنا' : 'Contact Info'}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-400" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-blue-100 hover:text-orange-400 transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-orange-400" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-orange-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-400" />
                <a href={`mailto:${EMAIL}`} className="text-blue-100 hover:text-orange-400 transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'تابعنا' : 'Follow Us'}
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                title="Facebook"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                title="Twitter"
              >
                <span>𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                title="Instagram"
              >
                <span>📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

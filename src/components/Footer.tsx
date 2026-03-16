import Link from 'next/link'
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import AmanosLogo from './AmanosLogo'

const services = [
  { label: 'Web Sitesi Kurma', href: '/web-sitesi' },
  { label: 'Logo & Marka Kimliği', href: '/logo-tasarim' },
  { label: 'SEO & Dijital Pazarlama', href: '/seo-dijital-pazarlama' },
  { label: 'Sosyal Medya Yönetimi', href: '/sosyal-medya' },
]

const company = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
]

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#F0F5FF] border-t border-slate-200">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0072FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col items-start gap-0.5 mb-4 group">
              <AmanosLogo className="w-14 h-9 transition-all" />
              <span className="text-[11px] font-bold tracking-[0.18em] gradient-text uppercase leading-none">Amanos Dijital</span>
            </Link>
            <p className="text-[#5C6E8A] text-sm leading-relaxed mb-6">
              Dijitalde güçlü bir varlık için stratejik çözüm ortağınız. Tasarım, geliştirme ve pazarlama tek çatı altında.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#5C6E8A] hover:text-[#0072FF] hover:border-[#0072FF]/30 transition-all"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#0A1628] font-semibold text-sm mb-5 tracking-wide">Hizmetler</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5C6E8A] hover:text-[#0072FF] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#0072FF] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#0A1628] font-semibold text-sm mb-5 tracking-wide">Şirket</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#5C6E8A] hover:text-[#0072FF] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#0072FF] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#0A1628] font-semibold text-sm mb-5 tracking-wide">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+905445317980" className="flex items-center gap-2.5 text-[#5C6E8A] hover:text-[#0072FF] text-sm transition-colors group">
                  <Phone size={14} className="text-[#0072FF] flex-shrink-0" />
                  0544 531 7980
                </a>
              </li>
              <li>
                <a href="mailto:info@amanosdijital.com" className="flex items-center gap-2.5 text-[#5C6E8A] hover:text-[#0072FF] text-sm transition-colors group">
                  <Mail size={14} className="text-[#0072FF] flex-shrink-0" />
                  info@amanosdijital.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-[#5C6E8A] text-sm">
                  <MapPin size={14} className="text-[#0072FF] flex-shrink-0 mt-0.5" />
                  İzmir, Türkiye
                </span>
              </li>
            </ul>

            {/* CTA mini */}
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-1.5 mt-6 px-4 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white text-xs font-semibold cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all group"
            >
              Ücretsiz Teklif Al
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8A9BB5] text-xs">
            © 2025 Amanos Dijital — Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-[#8A9BB5] text-xs">
            <a href="#" className="hover:text-[#0072FF] transition-colors">Gizlilik Politikası</a>
            <span className="w-px h-3 bg-slate-300" />
            <a href="#" className="hover:text-[#0072FF] transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

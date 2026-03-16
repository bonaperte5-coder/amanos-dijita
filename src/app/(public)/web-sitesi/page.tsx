'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Star,
  Smartphone,
  Zap,
  ShieldCheck,
  Search,
  Paintbrush,
  LayoutDashboard,
  Globe,
  BarChart3,
  MessageCircle,
} from 'lucide-react'

/* ─────────── Data ─────────── */

const features = [
  {
    icon: Smartphone,
    title: 'Mobil Öncelikli Tasarım',
    desc: '7 ziyaretçiden 6\'sı telefondan geliyor — hiçbirini kaybetmeyin.',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Ultra Hızlı Yükleme',
    desc: '3 saniyeden yavaş = %53 kullanıcı kaybı. Biz optimize ederiz.',
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: 'SSL & Güvenlik',
    desc: 'Müşterileriniz güvende — Google sizi güvenilir işaretler.',
    highlight: false,
  },
  {
    icon: Search,
    title: 'SEO Hazır Altyapı',
    desc: 'Google\'da bulunabilir olun. Organik müşteri kazanın.',
    highlight: true,
  },
  {
    icon: Paintbrush,
    title: 'Özgün Tasarım',
    desc: 'Şablon yok — rakiplerinizden sıyrılan, size özel tasarım.',
    highlight: false,
  },
  {
    icon: LayoutDashboard,
    title: 'Kolay Yönetim Paneli',
    desc: 'Tek satır kod bilmeden içeriklerinizi kendiniz güncelleyin.',
    highlight: false,
  },
  {
    icon: Globe,
    title: 'Domain & Hosting',
    desc: 'Nereden alacaksınız, ne kadar ödeyeceksiniz — biz yönetiriz.',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'Google Analytics',
    desc: 'Kaç kişi geldi, ne yaptı — veriye dayalı kararlar alın.',
    highlight: false,
  },
]

const siteTypes = [
  {
    emoji: '🏢',
    name: 'Kurumsal Web Sitesi',
    desc: 'Şirketinizi dijitalde temsil eden, müşteri güveni inşa eden profesyonel tanıtım sitesi.',
    tags: ['Hizmet sayfaları', 'İletişim formu', 'Hakkımızda', 'Blog'],
    cta: 'Bu Tür İçin Teklif Al',
  },
  {
    emoji: '🛍️',
    name: 'E-Ticaret Sitesi',
    desc: 'Ürünlerinizi online satmaya hazır, ödeme entegrasyonlu tam donanımlı mağaza.',
    tags: ['Ürün kataloğu', 'Sepet sistemi', 'Ödeme entegrasyonu', 'Stok yönetimi'],
    cta: 'Bu Tür İçin Teklif Al',
  },
  {
    emoji: '🎯',
    name: 'Landing Page',
    desc: 'Tek bir ürün veya kampanya için yüksek dönüşüm odaklı, güçlü tek sayfalık site.',
    tags: ['Kampanya sayfası', 'Lead form', 'Hızlı yayın', 'A/B test hazır'],
    cta: 'Bu Tür İçin Teklif Al',
  },
  {
    emoji: '💼',
    name: 'Portfolyo Sitesi',
    desc: 'Freelancer ve kreatifler için işlerinizi sergileyen, müşteri kazandıran kişisel site.',
    tags: ['Proje galerisi', 'İletişim formu', 'Hizmetler', 'Referanslar'],
    cta: 'Bu Tür İçin Teklif Al',
  },
]

const processSteps = [
  {
    day: 'Gün 1',
    title: 'Keşif Görüşmesi',
    desc: 'İhtiyaçlarınızı dinliyoruz. Ne istediğinizi anlamadan bir satır kod yazmıyoruz.',
    icon: '🎯',
  },
  {
    day: 'Gün 2–3',
    title: 'Tasarım Onayı',
    desc: 'Sizi yansıtan tasarımı hazırlıyoruz. Onaylayana kadar revize ediyoruz.',
    icon: '🎨',
  },
  {
    day: 'Gün 4–5',
    title: 'Geliştirme',
    desc: 'Tasarımı hayata geçiriyoruz. Hız, güvenlik, SEO — hepsi dahil.',
    icon: '</> ',
  },
  {
    day: 'Gün 6',
    title: 'Test & Revizyon',
    desc: 'Her cihazda, her tarayıcıda test ediyoruz. Revizyon hakkınız var.',
    icon: '✅',
  },
  {
    day: 'Gün 7',
    title: 'Yayın 🚀',
    desc: 'Siteniz yayında. 30 gün ücretsiz destek başlıyor.',
    icon: '🚀',
    isLast: true,
  },
]

const guarantees = [
  {
    icon: '🔄',
    title: 'Memnun Kalmazsanız Revizyon Garantisi',
    desc: 'Tasarımı beğenmediyseniz söyleyin — yeniden yapıyoruz. Onaylamadan bir adım ileri geçmiyoruz.',
  },
  {
    icon: '🛡️',
    title: '30 Gün Ücretsiz Destek',
    desc: 'Yayına girdikten sonra sizi yalnız bırakmıyoruz. 30 gün boyunca her sorunuza anında dönüş.',
  },
  {
    icon: '💰',
    title: 'Fiyat Güvencesi',
    desc: 'Teklif verdiğimiz fiyat, ödeyeceğiniz fiyat. Sonradan ek ücret yok, sürpriz yok.',
  },
]

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    role: 'E-ticaret Girişimcisi',
    avatar: 'MY',
    text: 'Web sitemiz 3 günde teslim edildi ve beklentilerimi çok aştı. Google sıralamalarımız ilk ayda ciddi ölçüde yükseldi.',
    rating: 5,
  },
  {
    name: 'Ayşe Kara',
    role: 'Butik Sahibi',
    avatar: 'AK',
    text: 'Logo tasarımımdan web sitemin kurulumuna kadar her şeyi üstlendiler. Gerçekten anahtar teslim bir hizmet.',
    rating: 5,
  },
  {
    name: 'Can Demir',
    role: 'Danışmanlık Firması',
    avatar: 'CD',
    text: 'Fiyat performans açısından piyasada en iyisi. Büyük ajans kalitesini küçük işletme bütçesiyle aldım.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Web sitesi yaptırmak ne kadar sürer?',
    a: 'Standart kurumsal ve portfolyo siteler ortalama 5–7 iş günü, e-ticaret siteleri 10–14 iş günü içinde teslim edilmektedir. Ücretsiz görüşmede projenize özel net bir süre bildiririz.',
  },
  {
    q: 'Fiyatlar nasıl belirleniyor?',
    a: 'Fiyat; site türüne, sayfa sayısına, istenen özelliklere ve içerik yoğunluğuna göre belirlenir. Sabit paket satmıyoruz — projenize özel teklif hazırlıyoruz. Ücretsiz görüşmede aynı gün net rakam veririz.',
  },
  {
    q: 'Sitenin içeriğini (yazı, fotoğraf) ben mi hazırlamalıyım?',
    a: 'Hayır, zorunlu değil. İçerikleriniz varsa kullanırız; yoksa ihtiyaç duyduğunuz metinleri ve görselleri biz hazırlayabiliriz. Bu konuyu görüşmede ele alırız.',
  },
  {
    q: 'Yayınlandıktan sonra güncelleme yapabilir miyim?',
    a: 'Evet. Her siteyi kolay yönetim paneliyle teslim ediyoruz. Hiç kod bilmeden yazı ekleyebilir, fotoğraf yükleyebilir, sayfa güncelleyebilirsiniz. Ayrıca 30 gün boyunca teknik desteğimiz yanınızda.',
  },
  {
    q: 'Domain ve hosting dahil mi?',
    a: 'Paketlerimize dahil değil; ancak nereden, nasıl alacağınızı adım adım gösteriyoruz ya da isterseniz sizin adınıza ayarlıyoruz. Yıllık maliyetler genellikle 500–1500 TL arasındadır.',
  },
  {
    q: 'Tasarımı beğenmezsem ne olur?',
    a: 'Revizyon garantimiz var — onaylamadığınız bir tasarımla ilerlenmez. Revizyon sayısında esnekiz. Amacımız sizi gerçekten memnun etmek.',
  },
]

const relatedServices = [
  {
    href: '/logo-tasarim',
    emoji: '✦',
    title: 'Logo & Marka Kimliği',
    desc: 'Web sitenizle uyumlu özgün bir marka kimliği oluşturun.',
  },
  {
    href: '/seo-dijital-pazarlama',
    emoji: '📈',
    title: 'SEO & Dijital Pazarlama',
    desc: "Sitenizi yaptırdıktan sonra Google'da üst sıralara taşıyın.",
  },
  {
    href: '/sosyal-medya',
    emoji: '◎',
    title: 'Sosyal Medya Yönetimi',
    desc: 'Sitenize trafik çeken profesyonel sosyal medya içerikleri.',
  },
]

/* ─────────── Sub-Components ─────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-[#0A1628] font-semibold text-sm leading-snug">{q}</span>
        <ChevronDown
          size={16}
          className={`text-[#0072FF] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-[#5C6E8A] text-sm leading-relaxed border-t border-slate-100 pt-4">{a}</p>
      </div>
    </div>
  )
}

/* ─────────── Page ─────────── */

export default function WebSitesiPage() {
  return (
    <div>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-40" />
        <div className="orb orb-indigo w-[300px] h-[300px] bottom-0 left-0 opacity-30" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0072FF]/08 border border-[#0072FF]/18 rounded-full mb-6">
            <span className="badge-dot" />
            <span className="section-label">Web Sitesi Kurma</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
            Web Siteniz
            <br />
            <span className="gradient-text">Müşteri Kazandırsın</span>
          </h1>

          {/* Sub */}
          <p className="text-[#5C6E8A] text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Rakipleriniz online. Müşterileriniz Google&apos;da arıyor.
            <br className="hidden md:block" />
            Hızlı, mobil uyumlu ve SEO hazır siteniz <strong className="text-[#0A1628]">7 günde yayında.</strong>
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/iletisim"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-2xl text-white font-bold text-base cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all w-full sm:w-auto justify-center"
            >
              Ücretsiz Teklif Al <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/905445317980?text=Merhaba%2C%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#0072FF]/20 rounded-2xl text-[#0072FF] font-bold text-base hover:border-[#0072FF]/40 hover:shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={17} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[#5C6E8A]">
            {[
              { icon: '⚡', text: 'Ortalama 7 Gün Teslimat' },
              { icon: '🔄', text: 'Revizyon Garantisi' },
              { icon: '✅', text: 'Fiyat Sürprizi Yok' },
              { icon: '🕐', text: '2 Saatte Geri Dönüş' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. SOCIAL PROOF BAR
      ══════════════════════════════════════ */}
      <section className="py-5 border-y border-slate-200/80 bg-white/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <span className="text-[#8A9BB5] text-xs font-medium tracking-wider uppercase">Tamamlanan Projelerden</span>
            {[
              { val: '50+', label: 'Tamamlanan Proje' },
              { val: '40+', label: 'Mutlu Müşteri' },
              { val: '%100', label: 'Memnuniyet' },
              { val: '7 Gün', label: 'Ort. Teslimat' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-lg font-extrabold font-heading gradient-text">{s.val}</span>
                <span className="text-[#5C6E8A] text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. NE KAZANIRSINIZ? (Features)
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Neler Dahil</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Ne Kazanırsınız?</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
            Her web sitesi projemiz bu özellikleri kapsamlı şekilde içerir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glass-card p-6 flex flex-col gap-3 ${
                f.highlight ? 'border-[#0072FF]/20 shadow-[0_4px_24px_rgba(0,114,255,0.08)]' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/05 border border-[#0072FF]/15 flex items-center justify-center flex-shrink-0">
                <f.icon size={18} className="text-[#0072FF]" />
              </div>
              <h3 className="text-[#0A1628] font-bold text-sm leading-snug">{f.title}</h3>
              <p className="text-[#5C6E8A] text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. SİTE TÜRLERİ (Packages replaced)
      ══════════════════════════════════════ */}
      <section className="py-24 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Site Türleri</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="gradient-text">Ne Tür Bir Site İstiyorsunuz?</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
              Sabit paket yok — projenizin ihtiyacına göre size özel fiyat hazırlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {siteTypes.map((type) => (
              <div key={type.name} className="glass-card p-7 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl service-icon-wrap">{type.emoji}</div>
                  <div>
                    <h3 className="text-[#0A1628] font-bold font-heading text-lg mb-1">{type.name}</h3>
                    <p className="text-[#5C6E8A] text-sm leading-relaxed">{type.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#0072FF]/06 border border-[#0072FF]/12 rounded-full text-[#0072FF] text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-1.5 text-[#0072FF] text-xs font-semibold group-hover:gap-2.5 transition-all"
                >
                  {type.cta} <ChevronRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#5C6E8A] text-sm mb-4">
              Hangi seçeneğin size uygun olduğundan emin değil misiniz?
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white font-bold text-sm cta-glow hover:from-[#FF7A45] transition-all"
            >
              Ücretsiz Danışmanlık Al <ArrowRight size={15} />
            </Link>
            <p className="text-[#8A9BB5] text-xs mt-3">Aynı gün size özel teklif hazırlarız</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. MID-PAGE CTA (inline)
      ══════════════════════════════════════ */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FF6B35]/05 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0072FF]/05 blur-[80px] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Hızlı Başlangıç</p>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#0A1628] mb-2">
                5 Dakikada Teklif Alın
              </h3>
              <p className="text-[#5C6E8A] text-sm">
                Formu doldurun — 2 saat içinde sizi arayalım, ihtiyaçlarınızı anlayalım.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/iletisim"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white font-bold text-sm cta-glow hover:from-[#FF7A45] transition-all"
              >
                Teklif İste <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/905445317980?text=Merhaba%2C%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#0072FF]/20 rounded-xl text-[#0072FF] font-bold text-sm hover:border-[#0072FF]/40 transition-all"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. SÜREÇ / TESLİMAT ZAMANÇİZELGESİ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Sürecimiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="gradient-text">7 Günde Nasıl Yayına Çıkıyoruz?</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
              Her adımda bilgilendirilirsiniz. Sürpriz yok, gecikme yok.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#0072FF]/20 via-[#5B21B6]/20 to-transparent -translate-x-1/2" />

            <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className={`glass-card p-5 text-center group h-full flex flex-col items-center ${step.isLast ? 'border-[#FF6B35]/20 bg-gradient-to-b from-white to-[#FFF5F0]' : ''}`}>
                    {/* Day badge */}
                    <span className="inline-block px-2.5 py-1 bg-[#0072FF]/08 border border-[#0072FF]/15 rounded-full text-[#0072FF] text-[10px] font-bold font-mono mb-3">
                      {step.day}
                    </span>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 ${
                      step.isLast
                        ? 'bg-gradient-to-br from-[#FF6B35]/15 to-[#FF8C5A]/10 border border-[#FF6B35]/20'
                        : 'bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/05 border border-[#0072FF]/15'
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-[#0A1628] font-bold text-sm mb-2">{step.title}</h3>
                    <p className="text-[#5C6E8A] text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {/* Arrow between cards */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center">
                      <ChevronRight size={12} className="text-[#0072FF]/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B35]/08 border border-[#FF6B35]/15 rounded-full">
              <span className="text-[#FF6B35] text-xl">⚡</span>
              <span className="text-[#FF6B35] font-bold text-sm">Ortalama 7 İş Günü Teslimat Garantisi</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. GARANTİ & TAAHHÜTLER
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Güvencelerimiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="gradient-text">Risk Almadan Başlayın</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guarantees.map((g) => (
              <div key={g.title} className="glass-card p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/05 border border-[#0072FF]/15 flex items-center justify-center text-2xl">
                  {g.icon}
                </div>
                <div>
                  <h3 className="text-[#0A1628] font-bold text-sm mb-2 leading-snug">{g.title}</h3>
                  <p className="text-[#5C6E8A] text-xs leading-relaxed">{g.desc}</p>
                </div>
                <CheckCircle2 size={16} className="text-[#0072FF] mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. MÜŞTERİ YORUMLARI
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Müşteri Yorumları</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="gradient-text">Onlar Ne Dedi?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-7 relative">
              <span className="quote-mark">&ldquo;</span>
              <div className="flex gap-0.5 mb-4 mt-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-[#FF6B35] fill-[#FF6B35]" />
                ))}
              </div>
              <p className="text-[#5C6E8A] text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0072FF] to-[#5B21B6] flex items-center justify-center text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#0A1628] text-sm font-semibold">{t.name}</p>
                  <p className="text-[#8A9BB5] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. SSS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-3">SSS</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="gradient-text">Sık Sorulan Sorular</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#5C6E8A] text-sm mb-4">Başka sorunuz mu var?</p>
            <a
              href="https://wa.me/905445317980?text=Merhaba%2C%20web%20sitesi%20hakkında%20sorum%20var."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#0072FF]/20 rounded-xl text-[#0072FF] font-semibold text-sm hover:border-[#0072FF]/40 transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp&apos;tan Sorun
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. DİĞER HİZMETLER
      ══════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Tamamlayıcı Hizmetler</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0A1628]">
            Web Sitenizi Daha Güçlü Yapın
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedServices.map((s) => (
            <Link key={s.href} href={s.href} className="glass-card p-6 group flex items-start gap-4">
              <div className="service-icon-wrap text-2xl flex-shrink-0">{s.emoji}</div>
              <div className="flex-1">
                <h3 className="text-[#0A1628] font-bold font-heading text-base mb-1">{s.title}</h3>
                <p className="text-[#5C6E8A] text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#0072FF] text-xs font-semibold group-hover:gap-2 transition-all">
                  İncele <ChevronRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0072FF] via-[#3B4FCC] to-[#5B21B6]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/05 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-block text-blue-200 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Ücretsiz Görüşme
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Projenizi Konuşalım
            <br />
            <span className="text-[#FFD580]">Bugün Başlayın.</span>
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            15 dakikalık ücretsiz görüşmede ihtiyaçlarınızı dinliyor,
            aynı gün size özel teklif hazırlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href="/iletisim"
              className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 bg-[#FF6B35] hover:bg-[#FF7A45] rounded-2xl text-white font-bold text-lg shadow-[0_8px_32px_rgba(255,107,53,0.45)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.55)] transition-all w-full sm:w-auto justify-center"
            >
              Ücretsiz Teklif Al <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/905445317980?text=Merhaba%2C%20web%20sitesi%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-bold text-lg transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          <p className="text-blue-200/60 text-xs">
            📞 Ortalama 2 saat içinde geri dönüyoruz. Herhangi bir bağlılık yok.
          </p>
        </div>
      </section>

    </div>
  )
}

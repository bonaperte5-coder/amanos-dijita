'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Star,
  Layers,
  Palette,
  FileStack,
  BookOpen,
  RefreshCw,
  Sparkles,
  MessageCircle,
} from 'lucide-react'

/* ─────────── Data ─────────── */

const features = [
  {
    icon: Sparkles,
    title: 'Sıfırdan Özgün Tasarım',
    desc: 'Şablon yok, hazır ikon yok. Markanız için tamamen sıfırdan üretilen, size özel bir logo.',
    highlight: true,
  },
  {
    icon: Layers,
    title: '3 Farklı Konsept Seçeneği',
    desc: 'Tek bir yönü dayatmıyoruz. 3 farklı tasarım yönü sunuyor, beğendiğinizi geliştiriyoruz.',
    highlight: false,
  },
  {
    icon: Palette,
    title: 'Marka Renk & Font Sistemi',
    desc: 'Logonuzla uyumlu renk paleti ve tipografi seçimi — her platformda tutarlı bir marka dili.',
    highlight: false,
  },
  {
    icon: FileStack,
    title: 'Tüm Formatlarda Teslim',
    desc: 'AI, SVG, PNG, PDF — baskıdan dijitale her ortamda kullanıma hazır vektörel dosyalar.',
    highlight: true,
  },
  {
    icon: BookOpen,
    title: 'Mini Marka Kılavuzu',
    desc: 'Logoyu nasıl, nerede, hangi renklerle kullanacağınızı anlatan rehber dokümant.',
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: 'Revizyon Garantisi',
    desc: 'Onaylamadığınız bir tasarımla ilerlenmez. Memnun kalana kadar geliştirmeye devam ederiz.',
    highlight: false,
  },
]

const portfolioItems = [
  {
    initials: 'TK',
    brand: 'Teknik Çözüm A.Ş.',
    sector: 'Teknoloji & Yazılım',
    colors: ['#0072FF', '#5B21B6', '#0A1628'],
    style: 'Kurumsal & Modern',
  },
  {
    initials: 'BK',
    brand: 'Bahar Kafe',
    sector: 'Gıda & Restoran',
    colors: ['#FF6B35', '#FFD580', '#2D1B00'],
    style: 'Sıcak & Davetkar',
  },
  {
    initials: 'YM',
    brand: 'Yılmaz Mimarlık',
    sector: 'Mimarlık & İnşaat',
    colors: ['#1A1A2E', '#C9A96E', '#F5F0E8'],
    style: 'Premium & Minimal',
  },
  {
    initials: 'NS',
    brand: 'Nova Sağlık',
    sector: 'Sağlık & Wellness',
    colors: ['#00B894', '#0072FF', '#F8FAFF'],
    style: 'Güven & Temiz',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Brief & Keşif',
    desc: 'Sektörünüzü, rakiplerinizi, hedef kitlenizi ve beklentilerinizi dinliyoruz. Ne istemediğiniz de en az ne istediğiniz kadar önemli.',
    icon: '🎯',
    duration: 'Gün 1',
  },
  {
    step: '02',
    title: '3 Konsept Sunumu',
    desc: 'Tamamen farklı 3 tasarım yönü hazırlıyoruz. Her birinin arka planındaki stratejiyi açıklıyoruz.',
    icon: '✏️',
    duration: 'Gün 2–3',
  },
  {
    step: '03',
    title: 'Seçim & Geliştirme',
    desc: 'Beğendiğiniz yönü detaylandırıyoruz. Renk, form, tipografi — her detayı birlikte şekillendiriyoruz.',
    icon: '🎨',
    duration: 'Gün 4–5',
  },
  {
    step: '04',
    title: 'Teslimat & Kılavuz',
    desc: 'Tüm formatlarda hazır dosyalar ve mini marka kılavuzu ile teslim ediyoruz.',
    icon: '📦',
    duration: 'Gün 6–7',
    isLast: true,
  },
]

const guarantees = [
  {
    icon: '✏️',
    title: 'Onaylamadan İlerlenmez',
    desc: 'Her aşamada onayınız alınır. Beğenmediğiniz bir tasarımla bir sonraki adıma asla geçilmez.',
  },
  {
    icon: '🔄',
    title: 'Memnun Kalana Kadar Revizyon',
    desc: 'Tasarımı beğenmediyseniz söyleyin — revize ediyoruz. Amacımız sizi gerçekten memnun etmek.',
  },
  {
    icon: '📁',
    title: 'Eksiksiz Dosya Teslimi',
    desc: 'Baskı, web, sosyal medya — her ortam için ihtiyaç duyduğunuz tüm format ve boyutlarda teslim.',
  },
]

const testimonials = [
  {
    name: 'Selin Arslan',
    role: 'Butik Kafe Sahibi',
    avatar: 'SA',
    text: 'Logo tasarımımı tamamen yenilettim. 3 farklı konsept arasından seçtim, harika bir süreçti. Müşterilerim artık logomuzu çok seviyor.',
    rating: 5,
  },
  {
    name: 'Murat Özkan',
    role: 'Yazılım Girişimcisi',
    avatar: 'MÖ',
    text: 'Startup\'ımızın kimliğini sıfırdan oluşturdular. Şablona benzemeyen, gerçekten özgün bir logo. Yatırımcı sunumlarında fark yarattı.',
    rating: 5,
  },
  {
    name: 'Fatma Çelik',
    role: 'Güzellik Merkezi',
    avatar: 'FÇ',
    text: 'Renk paletinden font seçimine kadar her şeyi düşünmüşler. Mini marka kılavuzu gerçekten çok işe yaradı.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Logo tasarımı ne kadar sürer?',
    a: 'Standart bir logo projesi ortalama 5–7 iş günü içinde tamamlanır. İlk konseptler 2–3 gün içinde sunulur, ardından seçiminize göre geliştirme yapılır. Ücretsiz görüşmede projenize özel net bir süre bildiririz.',
  },
  {
    q: 'Kaç revizyon hakkım var?',
    a: 'Onaylamadığınız hiçbir tasarımla ilerlenmez. Revizyon sayısını kısıtlamak yerine gerçekten memnun olmanızı hedefliyoruz. Anlaşmada revizyon kapsamı net olarak belirlenir.',
  },
  {
    q: 'Başka bir yerde tasarlattığım logoyu yenileyebilir misiniz?',
    a: 'Evet. Mevcut logonuzu koruyarak modernize edebilir veya tamamen yeni bir kimlikle başlayabiliriz. Görüşmede mevcut durumu değerlendirip en doğru yaklaşımı öneriyoruz.',
  },
  {
    q: 'Teslimatta hangi dosya formatlarını alırım?',
    a: 'AI (Adobe Illustrator), SVG, PNG (şeffaf arka plan, çeşitli boyutlar), PDF ve JPG formatlarında teslim yapıyoruz. Baskı ve dijital kullanım için ihtiyaç duyduğunuz her format dahildir.',
  },
  {
    q: 'Mini marka kılavuzu ne içeriyor?',
    a: 'Logo kullanım kuralları, renk kodları (HEX, RGB, CMYK), font aileleri, doğru/yanlış kullanım örnekleri ve minimum boyut gereksinimleri yer alır.',
  },
  {
    q: 'Logonun ticari kullanım hakkı bende mi olacak?',
    a: 'Evet, tasarım tamamen size aittir. Proje tamamlanıp ödeme yapıldıktan sonra tüm telif hakları müşteriye devredilir.',
  },
]

const relatedServices = [
  {
    href: '/web-sitesi',
    emoji: '</>',
    title: 'Web Sitesi Kurma',
    desc: 'Logonuzla uyumlu, mobil uyumlu profesyonel web sitenizi yaptırın.',
  },
  {
    href: '/seo-dijital-pazarlama',
    emoji: '📈',
    title: 'SEO & Dijital Pazarlama',
    desc: 'Güçlü markanızı Google aramaları ile daha geniş kitlelere ulaştırın.',
  },
  {
    href: '/sosyal-medya',
    emoji: '◎',
    title: 'Sosyal Medya Yönetimi',
    desc: 'Marka kimliğinizle uyumlu içeriklerle sosyal medyada öne çıkın.',
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

export default function LogoTasarimPage() {
  return (
    <div>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="orb orb-indigo w-[500px] h-[500px] -top-40 -right-40 opacity-40" />
        <div className="orb orb-orange w-[300px] h-[300px] bottom-0 left-0 opacity-30" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5B21B6]/08 border border-[#5B21B6]/18 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B21B6]" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#5B21B6] font-mono">
              Logo & Marka Kimliği
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
            İlk İzlenim
            <br />
            <span className="gradient-text">Sadece Bir Kez Olur</span>
          </h1>

          {/* Sub */}
          <p className="text-[#5C6E8A] text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Markanız için şablon yok, hazır ikon yok.
            <br className="hidden md:block" />
            Tamamen sıfırdan, <strong className="text-[#0A1628]">sadece size özel</strong> bir kimlik tasarlıyoruz.
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
              href="https://wa.me/905445317980?text=Merhaba%2C%20logo%20tasarımı%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#5B21B6]/20 rounded-2xl text-[#5B21B6] font-bold text-base hover:border-[#5B21B6]/40 hover:shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={17} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[#5C6E8A]">
            {[
              { icon: '✏️', text: '3 Farklı Konsept' },
              { icon: '🔄', text: 'Revizyon Garantisi' },
              { icon: '📁', text: 'Tüm Formatlarda Teslim' },
              { icon: '©️', text: 'Telif Hakkı Size Ait' },
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
              { val: '50+', label: 'Logo Projesi' },
              { val: '3', label: 'Konsept Seçeneği' },
              { val: '%100', label: 'Özgün Tasarım' },
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
          <p className="section-label mb-3">Hizmet Kapsamı</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Ne Kazanırsınız?</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
            Her logo projesi bu kapsamı eksiksiz içerir — ek ücret yok.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`glass-card p-6 flex flex-col gap-3 ${
                f.highlight ? 'border-[#5B21B6]/20 shadow-[0_4px_24px_rgba(91,33,182,0.08)]' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B21B6]/10 to-[#0072FF]/05 border border-[#5B21B6]/15 flex items-center justify-center flex-shrink-0">
                <f.icon size={18} className="text-[#5B21B6]" />
              </div>
              <h3 className="text-[#0A1628] font-bold text-sm leading-snug">{f.title}</h3>
              <p className="text-[#5C6E8A] text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. NEDEN ÖZGÜN LOGO? (Stats + Copy)
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — copy */}
            <div>
              <p className="section-label mb-3">Fark Neden Önemli</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                <span className="gradient-text">Özgün Logo Neden Bu Kadar Kritik?</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: '👁️',
                    title: 'İlk 7 saniyede karar verilir',
                    desc: 'Potansiyel müşteriniz logonuzu görür görmez markanız hakkında bir yargıya varır. Bu izlenimi değiştirmek çok daha pahalıya mal olur.',
                  },
                  {
                    icon: '🏆',
                    title: 'Şablon logo = rakibinizle aynı',
                    desc: 'Online logo üreticileriyle yapılan logolar binlerce firmada görünür. Özgün logo, sizi rakiplerinizden ayıran tek görsel unsurdur.',
                  },
                  {
                    icon: '📈',
                    title: 'Marka değerinizi artırır',
                    desc: 'Güçlü bir kimlik, fiyat rekabetinden sizi çıkarır. İnsanlar markaya güvenir — ürüne değil.',
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-4 flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-[#0A1628] font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-[#5C6E8A] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '%80', label: 'Tüketici marka renk nedeniyle satın aldığını söylüyor', src: 'Colorfast' },
                { val: '7 sn', label: 'Bir marka hakkında ilk izlenim oluşma süresi', src: 'Forbes' },
                { val: '%3x', label: 'Profesyonel kimliğe sahip markalar daha yüksek fiyat alıyor', src: 'Lucidpress' },
                { val: '%94', label: 'Kötü tasarım güven kaybına yol açıyor diyenlerin oranı', src: 'Stanford' },
              ].map((s) => (
                <div key={s.val} className="glass-card p-5 flex flex-col gap-2">
                  <span className="text-3xl font-extrabold font-heading gradient-text">{s.val}</span>
                  <p className="text-[#5C6E8A] text-xs leading-relaxed">{s.label}</p>
                  <span className="text-[#8A9BB5] text-[10px] font-mono">{s.src}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PORTFOLIO SHOWCASE
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Örnek Çalışmalar</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Yaptıklarımızdan Örnekler</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
            Her sektöre, her tona uyum sağlayan özgün tasarımlar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {portfolioItems.map((item) => (
            <div key={item.brand} className="glass-card overflow-hidden group">
              {/* Logo preview area */}
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${item.colors[0]}15, ${item.colors[1]}10)` }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-extrabold font-heading shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})` }}
                >
                  {item.initials}
                </div>
                {/* Color dots */}
                <div className="absolute bottom-3 right-3 flex gap-1">
                  {item.colors.map((c) => (
                    <div
                      key={c}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-[#0A1628] font-bold text-sm mb-0.5">{item.brand}</h4>
                <p className="text-[#8A9BB5] text-xs mb-2">{item.sector}</p>
                <span className="inline-block px-2 py-0.5 bg-[#0072FF]/06 border border-[#0072FF]/12 rounded-full text-[#0072FF] text-[10px] font-medium">
                  {item.style}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#5C6E8A] text-sm mb-4">Sektörünüze özel örnek görmek ister misiniz?</p>
          <a
            href="https://wa.me/905445317980?text=Merhaba%2C%20logo%20portfolio%20örnekleri%20görmek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#0072FF]/20 rounded-xl text-[#0072FF] font-semibold text-sm hover:border-[#0072FF]/40 transition-all"
          >
            <MessageCircle size={15} />
            Portfolio Talep Et
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. MID-PAGE CTA
      ══════════════════════════════════════ */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5B21B6]/05 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#FF6B35]/05 blur-[80px] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Hızlı Başlangıç</p>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#0A1628] mb-2">
                Logonuzu Konuşalım
              </h3>
              <p className="text-[#5C6E8A] text-sm">
                Ücretsiz görüşmede markanızı anlıyoruz, aynı gün teklif hazırlıyoruz.
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
                href="https://wa.me/905445317980?text=Merhaba%2C%20logo%20tasarımı%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#5B21B6]/20 rounded-xl text-[#5B21B6] font-bold text-sm hover:border-[#5B21B6]/40 transition-all"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. SÜREÇ
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Sürecimiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="gradient-text">Nasıl Çalışıyoruz?</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
              Şeffaf, adım adım bir süreç — her aşamada sizi dahil ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className={`glass-card p-6 flex flex-col gap-3 h-full ${step.isLast ? 'border-[#FF6B35]/20 bg-gradient-to-b from-white to-[#FFF5F0]' : ''}`}>
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-5xl font-extrabold font-heading text-[#0072FF]/10 leading-none select-none">
                      {step.step}
                    </span>
                    <span className="px-2.5 py-1 bg-[#0072FF]/08 border border-[#0072FF]/15 rounded-full text-[#0072FF] text-[10px] font-bold font-mono">
                      {step.duration}
                    </span>
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                  <h3 className="text-[#0A1628] font-bold text-sm">{step.title}</h3>
                  <p className="text-[#5C6E8A] text-xs leading-relaxed">{step.desc}</p>
                </div>
                {/* Arrow */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight size={14} className="text-[#0072FF]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. GARANTİLER
      ══════════════════════════════════════ */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Güvencelerimiz</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="gradient-text">Risk Almadan Başlayın</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {guarantees.map((g) => (
            <div key={g.title} className="glass-card p-7 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5B21B6]/10 to-[#0072FF]/05 border border-[#5B21B6]/15 flex items-center justify-center text-2xl">
                {g.icon}
              </div>
              <div>
                <h3 className="text-[#0A1628] font-bold text-sm mb-2 leading-snug">{g.title}</h3>
                <p className="text-[#5C6E8A] text-xs leading-relaxed">{g.desc}</p>
              </div>
              <CheckCircle2 size={16} className="text-[#5B21B6] mt-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. MÜŞTERİ YORUMLARI
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
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
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5B21B6] to-[#0072FF] flex items-center justify-center text-white text-xs font-bold">
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
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. SSS
      ══════════════════════════════════════ */}
      <section className="py-20 max-w-3xl mx-auto px-4">
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
            href="https://wa.me/905445317980?text=Merhaba%2C%20logo%20tasarımı%20hakkında%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#0072FF]/20 rounded-xl text-[#0072FF] font-semibold text-sm hover:border-[#0072FF]/40 transition-all"
          >
            <MessageCircle size={15} />
            WhatsApp&apos;tan Sorun
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. DİĞER HİZMETLER
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Tamamlayıcı Hizmetler</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              <span className="gradient-text">Markanızı Daha Güçlü Yapın</span>
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
        </div>
      </section>

      {/* ══════════════════════════════════════
          12. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B21B6] via-[#3B4FCC] to-[#0072FF]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/05 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-block text-purple-200 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Ücretsiz Danışmanlık
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Logonuzu Tasarlayalım
            <br />
            <span className="text-[#FFD580]">Markanız Fark Yaratsın.</span>
          </h2>
          <p className="text-purple-100/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ücretsiz 15 dakikalık görüşmede markanızı anlıyoruz,
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
              href="https://wa.me/905445317980?text=Merhaba%2C%20logo%20tasarımı%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-bold text-lg transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          <p className="text-purple-200/60 text-xs">
            📞 Ortalama 2 saat içinde geri dönüyoruz. Herhangi bir bağlılık yok.
          </p>
        </div>
      </section>

    </div>
  )
}

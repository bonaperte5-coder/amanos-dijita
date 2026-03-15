'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Star,
  Video,
  Megaphone,
  CalendarDays,
  BarChart3,
  Users,
  Sparkles,
  MessageCircle,
  TrendingUp,
} from 'lucide-react'

/* ─────────── Data ─────────── */

const platforms = [
  { name: 'Instagram', color: '#E1306C' },
  { name: 'TikTok', color: '#010101' },
  { name: 'LinkedIn', color: '#0077B5' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'X (Twitter)', color: '#1DA1F2' },
]

const coreServices = [
  {
    icon: Sparkles,
    title: 'Özgün İçerik Üretimi',
    desc: 'Markanıza özel görsel ve video içerikler — takipçileriniz paylaşmak ister, rakipleriniz kıskandırır.',
    highlight: true,
  },
  {
    icon: Video,
    title: 'Reels & Kısa Video',
    desc: 'Algoritmayı arkaya alan kısa video formatları. Organik erişiminiz katlanarak büyür.',
    highlight: false,
  },
  {
    icon: Megaphone,
    title: 'Meta Reklam Yönetimi',
    desc: 'Facebook & Instagram reklamlarıyla hedef kitlenize ulaşın. Her kuruşun nereye gittiğini bilirsiniz.',
    highlight: true,
  },
  {
    icon: CalendarDays,
    title: 'Strateji & İçerik Takvimi',
    desc: 'Rastgele değil, planlı büyüme. Aylık içerik takvimi ve zamanlı paylaşım stratejisi.',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Topluluk & Hesap Yönetimi',
    desc: 'Yorumlar, mesajlar, etkileşimler — takipçilerinizle siz değil, biz ilgileniyoruz.',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'Analiz & Aylık Raporlama',
    desc: 'Neyin işe yaradığını verilerle görün. Şeffaf raporlar, ölçülebilir büyüme.',
    highlight: false,
  },
]

const references = [
  {
    name: 'Archtwain',
    logo: '/archtwain.png',
    platform: 'Instagram',
    username: 'archtwain',
    url: 'https://www.instagram.com/archtwain',
    sector: 'Mimarlık',
    metric: '+%180 Etkileşim',
  },
  {
    name: 'Koala Bornova',
    logo: '/koala.png',
    platform: 'Instagram',
    username: 'koalabornova',
    url: 'https://www.instagram.com/koalabornova',
    sector: 'Gıda & Kafe',
    metric: '+%240 Erişim',
  },
  {
    name: 'Theragone',
    logo: '/theragone.png',
    platform: 'Instagram',
    username: 'theragonetr',
    url: 'https://www.instagram.com/theragonetr',
    sector: 'Sağlık',
    metric: '+%160 Takipçi',
  },
]

const whyUs = [
  {
    icon: '📅',
    title: 'Aylık onay süreciyle tam kontrol',
    desc: 'Hangi içerik yayınlanacak, önceden görürsünüz. Sürpriz yok.',
  },
  {
    icon: '🎯',
    title: 'Sektörünüze özel strateji',
    desc: 'Her marka aynı değil. Size özel içerik dili, ton ve strateji.',
  },
  {
    icon: '📊',
    title: 'Şeffaf aylık raporlama',
    desc: 'Takipçi, erişim, etkileşim — her metriği raporla görürsünüz.',
  },
  {
    icon: '⚡',
    title: 'Hızlı aksiyon kapasitesi',
    desc: 'Gündem değişti mi? Biz de değişiyoruz. Anlık içerik üretimi.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Keşif & Strateji',
    desc: 'Markanızı, sektörünüzü ve hedef kitlenizi analiz ediyoruz. Rakip incelemesi ve içerik stratejisi hazırlanıyor.',
    icon: '🎯',
    duration: 'Hafta 1',
  },
  {
    step: '02',
    title: 'İçerik Takvimi',
    desc: 'Aylık içerik planı hazırlıyoruz. Onayınızdan önce tek bir içerik yayınlanmıyor.',
    icon: '📅',
    duration: 'Hafta 1–2',
  },
  {
    step: '03',
    title: 'Üretim & Yayın',
    desc: 'Görsel, video, metin — tüm içerikler üretilip zamanında yayınlanıyor.',
    icon: '🎬',
    duration: 'Sürekli',
  },
  {
    step: '04',
    title: 'Analiz & Rapor',
    desc: 'Her ay performans raporu sunuyoruz. Neyin işe yaramadığını düzeltiyor, neyin işe yaradığını büyütüyoruz.',
    icon: '📊',
    duration: 'Aylık',
    isLast: true,
  },
]

const guarantees = [
  {
    icon: '📋',
    title: 'Önceden Onay Süreci',
    desc: 'Aylık içerik takvimi ve her içerik önceden size sunulur. Onaylamadan yayınlanmaz.',
  },
  {
    icon: '📊',
    title: 'Şeffaf Aylık Rapor',
    desc: 'Takipçi büyümesi, erişim, etkileşim — her metrik detaylı raporla paylaşılır.',
  },
  {
    icon: '🎯',
    title: 'Sektöre Özel Strateji',
    desc: 'Hazır şablon içerik yok. Her marka için özel ton, dil ve içerik stratejisi.',
  },
]

const testimonials = [
  {
    name: 'Zeynep Aktaş',
    role: 'Butik Kafe Sahibi',
    avatar: 'ZA',
    text: 'İlk ay takipçilerimiz iki katına çıktı. İçerikleri çok kaliteli, müşterilerimiz Instagram\'dan geliyor artık.',
    rating: 5,
  },
  {
    name: 'Kemal Şahin',
    role: 'E-ticaret Girişimcisi',
    avatar: 'KŞ',
    text: 'Meta reklamlarını devrettim, reklam maliyetim düştü, satışlarım arttı. Aylık raporlar çok şeffaf.',
    rating: 5,
  },
  {
    name: 'Derya Yıldız',
    role: 'Kozmetik Markası',
    avatar: 'DY',
    text: 'Reels içerikleri gerçekten viral oldu. Organik büyüme hiç beklemediğim kadar hızlı oldu.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Sosyal medya yönetimi aylık ne kadar tutuyor?',
    a: 'Fiyat; platform sayısına, aylık içerik adedine, reklam yönetimi dahil olup olmadığına göre değişir. Sabit paket satmıyoruz — ihtiyacınıza özel teklif hazırlıyoruz. Ücretsiz görüşmede net rakam veririz.',
  },
  {
    q: 'İçerikler yayınlanmadan önce onayıma sunulacak mı?',
    a: 'Evet, mutlaka. Her ay içerik takvimi hazırlanır ve onayınız alınır. Tek bir içerik onaysız yayınlanmaz. WhatsApp üzerinden hızlı onay süreci uyguluyoruz.',
  },
  {
    q: 'Kaç platformu yönetebilirsiniz?',
    a: 'Instagram, TikTok, Facebook, LinkedIn ve X (Twitter) platformlarını yönetiyoruz. Hangi platformların size uygun olduğunu görüşmede birlikte belirleyebiliriz.',
  },
  {
    q: 'İçerikler için fotoğraf ve video çekimi yapıyor musunuz?',
    a: 'Evet. Mekan, ürün ve etkinlik çekimleri yapıyoruz. Drone çekimi de hizmetlerimiz arasında. Fotoğraf ve video üretimi ayrıca planlanır.',
  },
  {
    q: 'Meta reklamları da yönetiyor musunuz?',
    a: 'Evet. Facebook ve Instagram reklam hesaplarını bütçe yönetimi, hedefleme ve optimizasyonla birlikte yönetiyoruz. Aylık harcama ve sonuç raporlaması dahildir.',
  },
  {
    q: 'Sonuçları ne zaman görmeye başlarım?',
    a: 'Sosyal medya organik büyümede genellikle ilk 30–60 günde etkileşim artışı başlar. Reklam kampanyalarında daha hızlı sonuç alınabilir. Gerçekçi hedefler için görüşmede konuşalım.',
  },
]

const relatedServices = [
  {
    href: '/web-sitesi',
    emoji: '</>',
    title: 'Web Sitesi Kurma',
    desc: 'Sosyal medya trafiğinizi dönüştürecek profesyonel bir web sitesi.',
  },
  {
    href: '/logo-tasarim',
    emoji: '✦',
    title: 'Logo & Marka Kimliği',
    desc: 'Sosyal medya profilinizi güçlendiren özgün bir marka kimliği.',
  },
  {
    href: '/seo-dijital-pazarlama',
    emoji: '📈',
    title: 'SEO & Dijital Pazarlama',
    desc: "Sosyal medyanın yanında Google'da da görünür olun.",
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

export default function SosyalMedyaPage() {
  return (
    <div>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="orb orb-orange w-[500px] h-[500px] -top-40 -right-40 opacity-35" />
        <div className="orb orb-blue w-[300px] h-[300px] bottom-0 left-0 opacity-30" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6B35]/08 border border-[#FF6B35]/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FF6B35] font-mono">
              Sosyal Medya Yönetimi
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
            Takipçiniz Değil
            <br />
            <span className="gradient-text">Müşteriniz Olsun</span>
          </h1>

          {/* Sub */}
          <p className="text-[#5C6E8A] text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Rastgele paylaşım değil, strateji.
            <br className="hidden md:block" />
            İçerik üretiminden reklam yönetimine — <strong className="text-[#0A1628]">sosyal medyanız büyüsün, siz işinize bakın.</strong>
          </p>

          {/* Platform pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-[#5C6E8A] font-medium shadow-sm"
              >
                {p.name}
              </span>
            ))}
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/iletisim"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-2xl text-white font-bold text-base cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all w-full sm:w-auto justify-center"
            >
              Ücretsiz Teklif Al <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/905000000000?text=Merhaba%2C%20sosyal%20medya%20yönetimi%20hakkında%20bilgi%20almak%20istiyorum."
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
              { icon: '📋', text: 'Önceden İçerik Onayı' },
              { icon: '📊', text: 'Aylık Şeffaf Rapor' },
              { icon: '🎯', text: 'Sektöre Özel Strateji' },
              { icon: '⚡', text: 'Hızlı Başlangıç' },
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
            <span className="text-[#8A9BB5] text-xs font-medium tracking-wider uppercase">Yönettiğimiz Hesaplardan</span>
            {[
              { val: '3+', label: 'Aktif Marka' },
              { val: '+%180', label: 'Ort. Etkileşim Artışı' },
              { val: '5', label: 'Platform' },
              { val: 'Aylık', label: 'Şeffaf Raporlama' },
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
          3. HİZMETLER — Fayda Diliyle
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Hizmet Kapsamı</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Ne Kazanırsınız?</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
            Her hizmet, markanızın büyümesine somut katkı sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreServices.map((s) => (
            <div
              key={s.title}
              className={`glass-card p-6 flex flex-col gap-3 ${
                s.highlight ? 'border-[#FF6B35]/20 shadow-[0_4px_24px_rgba(255,107,53,0.07)]' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                s.highlight
                  ? 'bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C5A]/05 border border-[#FF6B35]/15'
                  : 'bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/05 border border-[#0072FF]/15'
              }`}>
                <s.icon size={18} className={s.highlight ? 'text-[#FF6B35]' : 'text-[#0072FF]'} />
              </div>
              <h3 className="text-[#0A1628] font-bold text-sm leading-snug">{s.title}</h3>
              <p className="text-[#5C6E8A] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. REFERANSLAR (Enhanced)
      ══════════════════════════════════════ */}
      <section className="py-24 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Referanslar</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="gradient-text">Birlikte Büyüdüğümüz Markalar</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
              Gerçek markalar, gerçek büyüme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {references.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex flex-col gap-4 group hover:border-[#0072FF]/30 transition-all"
              >
                {/* Logo + Meta */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                    <Image src={r.logo} alt={r.name} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-[#0A1628] font-bold text-sm">{r.name}</h3>
                    <p className="text-[#8A9BB5] text-xs">{r.sector}</p>
                    <p className="text-[#0072FF] text-xs font-mono">@{r.username}</p>
                  </div>
                </div>

                {/* Metric */}
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#0072FF]/06 to-[#5B21B6]/04 border border-[#0072FF]/12 rounded-xl">
                  <TrendingUp size={14} className="text-[#0072FF] flex-shrink-0" />
                  <span className="text-[#0072FF] font-bold text-sm">{r.metric}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8A9BB5] text-xs">{r.platform}</span>
                  <span className="inline-flex items-center gap-1 text-[#0072FF] text-xs font-semibold group-hover:gap-2 transition-all">
                    Profili Gör <ChevronRight size={11} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#5C6E8A] text-sm">
              Sektörünüzden referans görmek ister misiniz?
            </p>
            <a
              href="https://wa.me/905000000000?text=Merhaba%2C%20sosyal%20medya%20referansları%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-white border border-[#0072FF]/20 rounded-xl text-[#0072FF] font-semibold text-sm hover:border-[#0072FF]/40 transition-all"
            >
              <MessageCircle size={14} />
              WhatsApp&apos;tan Sorun
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. NEDEN BİZ?
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label mb-3">Fark Neden Önemli</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              <span className="gradient-text">Neden Profesyonel Yönetim?</span>
            </h2>
            <p className="text-[#5C6E8A] text-base leading-relaxed mb-8">
              Düzensiz paylaşımlar, kopya içerikler ve sadece ürün tanıtımı artık işe yaramıyor.
              Algoritma, strateji ve özgünlük gerektiriyor. Yanlış yapıldığında marka değerinizi düşürüyor.
            </p>
            <div className="space-y-3">
              {whyUs.map((item) => (
                <div key={item.title} className="glass-card p-4 flex items-start gap-4">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-[#0A1628] font-bold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-[#5C6E8A] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '%73', label: 'Kullanıcı, satın almadan önce markanın sosyal medyasını inceliyor', src: 'Sprout Social' },
              { val: '3.5x', label: 'Tutarlı marka iletişimi dönüşüm oranını artırıyor', src: 'McKinsey' },
              { val: '%80', label: 'Marka bilinirliği sosyal medya sayesinde artıyor', src: 'Hootsuite' },
              { val: '4.9 sa', label: 'Türkiye\'de günlük ortalama sosyal medya kullanım süresi', src: 'DataReportal' },
            ].map((s) => (
              <div key={s.val} className="glass-card p-5 flex flex-col gap-2">
                <span className="text-3xl font-extrabold font-heading gradient-text">{s.val}</span>
                <p className="text-[#5C6E8A] text-xs leading-relaxed">{s.label}</p>
                <span className="text-[#8A9BB5] text-[10px] font-mono">{s.src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. MID-PAGE CTA
      ══════════════════════════════════════ */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FF6B35]/05 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0072FF]/05 blur-[80px] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="section-label mb-2">Hızlı Başlangıç</p>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#0A1628] mb-2">
                Sosyal Medyanızı Konuşalım
              </h3>
              <p className="text-[#5C6E8A] text-sm">
                Ücretsiz görüşmede mevcut durumu analiz edip size özel teklif hazırlıyoruz.
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
                href="https://wa.me/905000000000?text=Merhaba%2C%20sosyal%20medya%20yönetimi%20hakkında%20bilgi%20almak%20istiyorum."
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
              Şeffaf, planlı, sonuç odaklı.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className={`glass-card p-6 flex flex-col gap-3 h-full ${step.isLast ? 'border-[#FF6B35]/20 bg-gradient-to-b from-white to-[#FFF5F0]' : ''}`}>
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
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center text-white text-xs font-bold">
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
            href="https://wa.me/905000000000?text=Merhaba%2C%20sosyal%20medya%20hakkında%20sorum%20var."
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
              <span className="gradient-text">Dijitalde Güçlenin</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#E05A2B] to-[#0072FF]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/05 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-block text-orange-100 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Ücretsiz Danışmanlık
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Sosyal Medyanızı
            <br />
            <span className="text-[#FFD580]">Büyütelim.</span>
          </h2>
          <p className="text-orange-100/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ücretsiz 15 dakikalık görüşmede mevcut durumu analiz ediyor,
            size özel strateji ve teklif hazırlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href="/iletisim"
              className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-slate-50 rounded-2xl text-[#FF6B35] font-bold text-lg shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all w-full sm:w-auto justify-center"
            >
              Ücretsiz Teklif Al <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/905000000000?text=Merhaba%2C%20sosyal%20medya%20yönetimi%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-bold text-lg transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          <p className="text-orange-100/60 text-xs">
            📞 Ortalama 2 saat içinde geri dönüyoruz. Herhangi bir bağlılık yok.
          </p>
        </div>
      </section>

    </div>
  )
}

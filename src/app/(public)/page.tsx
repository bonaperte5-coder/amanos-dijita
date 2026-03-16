import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight, Star, Palette, TrendingUp, Zap, HeartHandshake, Sparkles, Video, BarChart3, MessageCircle } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'

export const metadata: Metadata = {
  title: 'Amanos Dijital — Web Sitesi, Logo, SEO & Sosyal Medya Hizmetleri',
  description: 'İzmir\'den tüm Türkiye\'ye dijital çözümler. Web sitesi kurma, logo tasarımı, SEO ve sosyal medya yönetimi. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://amanosdijital.com' },
  openGraph: {
    title: 'Amanos Dijital — Dijital Çözüm Ortağınız',
    description: 'Web sitesi, logo tasarımı, SEO ve sosyal medya yönetimi. Tek çatı altında dijital büyüme.',
    url: 'https://amanosdijital.com',
    siteName: 'Amanos Dijital',
    locale: 'tr_TR',
    type: 'website',
  },
}

const services = [
  {
    emoji: '</>',
    title: 'Web Sitesi Kurma',
    description: "Hızlı açılan, mobil uyumlu ve modern web siteleri. Kurumsal siteden e-ticarete, portfolyodan landing page'e ihtiyacınıza özel çözümler.",
    href: '/web-sitesi',
    tag: 'En Popüler',
    tagStyle: 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20',
  },
  {
    emoji: '✦',
    title: 'Logo & Marka Kimliği',
    description: 'Markanızın ruhunu yansıtan özgün logolar. Sadece görsel değil; değerlerinizi ve hedef kitlenizi anlatan güçlü bir kimlik.',
    href: '/logo-tasarim',
    tag: null,
    tagStyle: '',
  },
  {
    emoji: '📈',
    title: 'SEO & Dijital Pazarlama',
    description: "Müşterileriniz Google'da sizi arıyor — sizi bulsunlar. Teknik SEO, yerel optimizasyon ve içerik stratejisiyle Google'da üst sıralara taşıyoruz.",
    href: '/seo-dijital-pazarlama',
    tag: 'Google Görünürlüğü',
    tagStyle: 'bg-[#0072FF]/10 text-[#0072FF] border-[#0072FF]/20',
  },
  {
    emoji: '◎',
    title: 'Sosyal Medya Yönetimi',
    description: 'Sosyal medya hesaplarınızı profesyonelce yönetiyoruz. İçerik planlaması, özgün tasarımlar ve topluluk yönetimi.',
    href: '/sosyal-medya',
    tag: null,
    tagStyle: '',
  },
]

const process = [
  {
    step: 1,
    title: 'Projelendirme',
    desc: 'Projenizin amaçlarını ve firmanızın beklentilerini belirleyerek yol haritası oluşturulur.',
  },
  {
    step: 2,
    title: 'Uygulama',
    desc: 'Çıkarılan yol haritası doğrultusunda projenin taslağı hazırlanır ve yazılım ekibimiz tarafından geliştirilir.',
  },
  {
    step: 3,
    title: 'Test Aşaması',
    desc: 'Projenin beklenen özellikleri karşılayıp karşılamadığı test edilir ve yazılım hataları düzeltilir.',
  },
  {
    step: 4,
    title: 'Güncelleme ve Teslim',
    desc: 'Tüm kontroller tamamlandıktan sonra proje yayına alınarak kullanıcıların hizmetine sunulur.',
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
    text: 'Logo tasarımımdan sosyal medya yönetimimize kadar her şeyi üstlendiler. Gerçekten anahtar teslim bir hizmet.',
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

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Intro: İşletmenizi internette büyütelim ── */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#0072FF]/5 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#5B21B6]/5 blur-[80px] pointer-events-none" />
          <div className="relative">
            <p className="section-label mb-4">Dijital Büyüme</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              <span className="gradient-text">İşletmenizi internette büyütelim</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              İnsanlar artık bir ürün veya hizmet aradığında ilk olarak Google&apos;da arama yapıyor.
              Biz işletmeniz için profesyonel web sitesi kuruyoruz ve SEO çalışmalarıyla
              Google&apos;da daha görünür olmanızı sağlıyoruz.
            </p>
            <p className="text-[#0A1628] font-semibold text-lg mb-8">
              Amacımız sadece web sitesi yapmak değil —{' '}
              <span className="gradient-text">işletmenize müşteri kazandırmak.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {[
                { emoji: '👥', text: 'Daha fazla kişi sizi bulur' },
                { emoji: '🤝', text: 'Daha fazla müşteri kazanırsınız' },
                { emoji: '📣', text: 'İşletmenizin bilinirliği artar' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-[#F0F5FF] border border-[#0072FF]/10 rounded-2xl px-5 py-3"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-[#0A1628] font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── Google Sıralaması ── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Google Görünürlüğü</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-[#0A1628]">Müşterileriniz Sizi</span>
            <br />
            <span className="gradient-text">Google&apos;da Bulsun</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-2xl mx-auto">
            Birisi Google&apos;a &quot;[sektörünüz] + [şehriniz]&quot; yazdığında ilk sırada siz çıkın.
            En değerli müşteri, sizi zaten arayan müşteridir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Sol — Google SERP Mockup */}
          <div className="glass-card p-6 relative">
            {/* Google arama çubuğu */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-3 mb-5 shadow-sm">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#5C6E8A" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              <span className="text-[#0A1628] text-sm font-medium">[sektörünüz] [şehriniz]</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
              </div>
            </div>

            {/* 1. Sıra — Müşteri (vurgulu) */}
            <div className="border-2 border-[#0072FF]/35 bg-gradient-to-r from-[#F0F5FF] to-[#EEF3FF] rounded-xl p-4 mb-3 relative shadow-[0_4px_20px_rgba(0,114,255,0.1)]">
              <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 bg-[#0072FF] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">#1</div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#0072FF] to-[#5B21B6] flex-shrink-0" />
                <span className="text-[11px] text-[#5C6E8A]">siteniz.com</span>
                <span className="ml-auto text-[10px] bg-[#0072FF]/10 text-[#0072FF] px-2 py-0.5 rounded-full font-bold">Organik — Reklam değil</span>
              </div>
              <p className="text-[#0072FF] text-sm font-semibold mb-1">İşletmenizin Adı | [Şehir] — Güvenilir & Hızlı</p>
              <p className="text-[#5C6E8A] text-xs leading-relaxed">Profesyonel hizmet, uygun fiyat. Hemen iletişime geçin ve ücretsiz teklif alın...</p>
            </div>

            {/* 2. Sıra — Rakip (soluk) */}
            <div className="rounded-xl p-4 mb-3 opacity-35">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-slate-300 flex-shrink-0" />
                <span className="text-[11px] text-[#5C6E8A]">rakip-firma.com</span>
              </div>
              <div className="h-3 bg-slate-200 rounded w-3/4 mb-2" />
              <div className="h-2 bg-slate-100 rounded w-full mb-1" />
              <div className="h-2 bg-slate-100 rounded w-2/3" />
            </div>

            {/* 3. Sıra — Rakip (çok soluk) */}
            <div className="rounded-xl p-4 opacity-15">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-slate-300 flex-shrink-0" />
                <span className="text-[11px] text-[#5C6E8A]">baska-rakip.com</span>
              </div>
              <div className="h-3 bg-slate-200 rounded w-2/3 mb-2" />
              <div className="h-2 bg-slate-100 rounded w-full" />
            </div>

            {/* Rozet */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Siz burada olabilirsiniz
            </div>
          </div>

          {/* Sag — Faydalar */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#0A1628] mb-3 leading-snug">
                Google&apos;da 1. sayfada olmak şans değil —{' '}
                <span className="gradient-text">strateji meselesi.</span>
              </h3>
              <p className="text-[#5C6E8A] leading-relaxed">
                Potansiyel müşterilerinizin %90&apos;ı Google&apos;da yalnızca ilk sayfayı görüyor.
                Teknik SEO, içerik stratejisi ve yerel optimizasyon ile sizi o sayfaya taşıyoruz.
              </p>
            </div>

            {[
              { label: 'Yerel SEO', desc: '"[meslek] [şehir]" aramalarında ilk sıralarda çıkın. Yakındaki müşteriler sizi bulsun.', color: '#0072FF' },
              { label: 'Teknik SEO', desc: "Hızlı yüklenen, mobil uyumlu ve Google'ın algoritmasına uygun site altyapısı.", color: '#5B21B6' },
              { label: 'İçerik Stratejisi', desc: 'Müşterilerinizin aradığı anahtar kelimelere göre içerik üretimi ve optimizasyonu.', color: '#FF6B35' },
              { label: 'Aylık Raporlama', desc: "Google sıralamalarınızın nasıl yükseldiğini her ay raporlarla takip edin.", color: '#059669' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 glass-card p-4 group hover:border-[#0072FF]/20 transition-colors">
                <div
                  className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}55` }}
                />
                <div>
                  <h4 className="text-[#0A1628] font-semibold text-sm mb-0.5">{item.label}</h4>
                  <p className="text-[#5C6E8A] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <Link
              href="/seo-dijital-pazarlama"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0072FF] to-[#5B21B6] rounded-2xl text-white font-bold text-sm self-start hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(0,114,255,0.3)]"
            >
              SEO Hizmetimizi İncele <ChevronRight size={15} />
            </Link>
          </div>

        </div>
      </section>


      {/* ── Services ── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Hizmetlerimiz</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Ne Yapıyoruz?</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
            İşletmenizin dijital dünyada ihtiyaç duyduğu her şey, tek çatı altında.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <div className="glass-card p-8 h-full cursor-pointer group relative overflow-hidden">
                {service.tag && (
                  <span className={`absolute top-5 right-5 text-[10px] font-bold tracking-wider uppercase border px-2.5 py-1 rounded-full ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                )}
                <div className="flex items-start gap-5">
                  <div className="service-icon-wrap text-2xl">{service.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-heading text-[#0A1628] mb-2">{service.title}</h3>
                    <p className="text-[#5C6E8A] text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[#0072FF] text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Detayları İncele <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Sosyal Medya Yönetimi ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F0] via-[#FFFAF8] to-[#F0F5FF] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">

          {/* Başlık */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6B35]/08 border border-[#FF6B35]/20 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FF6B35] font-mono">Sosyal Medya Yönetimi</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-[#0A1628]">Takipçiniz Değil —</span>
              <br />
              <span className="gradient-text">Müşteriniz Olsun</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-2xl mx-auto">
              Rastgele paylaşım değil, strateji. Instagram&apos;dan TikTok&apos;a içerik üretiminden reklam yönetimine kadar sosyal medyanızı büyütüyoruz.
            </p>
          </div>

          {/* İki Kolon: Hizmetler + İstatistikler */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

            {/* Sol — Hizmet Listesi */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Sparkles, title: 'Özgün İçerik Üretimi', desc: 'Markanıza özel görsel ve video içerikler — takipçiler paylaşmak ister, rakipler kıskandırır.', accent: '#FF6B35' },
                { icon: Video, title: 'Reels & Kısa Video', desc: 'Algoritmayı arkaya alan kısa video formatları. Organik erişiminiz katlanarak büyür.', accent: '#0072FF' },
                { icon: BarChart3, title: 'Meta Reklam Yönetimi', desc: 'Facebook & Instagram reklamlarıyla hedef kitlenize ulaşın. Her kuruşun nereye gittiğini bilirsiniz.', accent: '#5B21B6' },
                { icon: TrendingUp, title: 'Aylık Şeffaf Raporlama', desc: 'Takipçi, erişim, etkileşim — her metriği raporla görürsünüz.', accent: '#059669' },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 flex items-start gap-4 group hover:border-[#FF6B35]/20 transition-colors">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}25` }}
                  >
                    <item.icon size={17} style={{ color: item.accent }} />
                  </div>
                  <div>
                    <h4 className="text-[#0A1628] font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-[#5C6E8A] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mt-2">
                <Link
                  href="/sosyal-medya"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-2xl text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(255,107,53,0.3)]"
                >
                  Detayları İncele <ChevronRight size={15} />
                </Link>
                <a
                  href="https://wa.me/905445317980?text=Merhaba%2C%20sosyal%20medya%20y%C3%B6netimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#0072FF]/20 rounded-2xl text-[#0072FF] font-bold text-sm hover:border-[#0072FF]/40 transition-all"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Sağ — Stat Kartları */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '%73', label: 'Kullanıcı, satın almadan önce markanın sosyal medyasını inceliyor', src: 'Sprout Social' },
                { val: '3.5x', label: 'Tutarlı marka iletişimi dönüşüm oranını artırıyor', src: 'McKinsey' },
                { val: '%80', label: 'Marka bilinirliği sosyal medya sayesinde artıyor', src: 'Hootsuite' },
                { val: '4.9 sa', label: "Türkiye'de günlük ortalama sosyal medya kullanım süresi", src: 'DataReportal' },
              ].map((s) => (
                <div key={s.val} className="glass-card p-5 flex flex-col gap-2">
                  <span className="text-3xl font-extrabold font-heading gradient-text">{s.val}</span>
                  <p className="text-[#5C6E8A] text-xs leading-relaxed">{s.label}</p>
                  <span className="text-[#8A9BB5] text-[10px] font-mono">{s.src}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Referanslar */}
          <div className="text-center mb-10">
            <p className="section-label mb-3">Referanslar</p>
            <h3 className="text-3xl md:text-4xl font-bold font-heading">
              <span className="gradient-text">Birlikte Büyüdüğümüz Markalar</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Archtwain', logo: '/archtwain.png', platform: 'Instagram', username: 'archtwain', url: 'https://www.instagram.com/archtwain', sector: 'Mimarlık', metric: '+%180 Etkileşim' },
              { name: 'Koala Bornova', logo: '/koala.png', platform: 'Instagram', username: 'koalabornova', url: 'https://www.instagram.com/koalabornova', sector: 'Gıda & Kafe', metric: '+%240 Erişim' },
              { name: 'Theragone', logo: '/theragone.png', platform: 'Instagram', username: 'theragonetr', url: 'https://www.instagram.com/theragonetr', sector: 'Sağlık', metric: '+%160 Takipçi' },
            ].map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex flex-col gap-4 group hover:border-[#FF6B35]/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                    <Image src={r.logo} alt={r.name} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[#0A1628] font-bold text-sm">{r.name}</h4>
                    <p className="text-[#8A9BB5] text-xs">{r.sector}</p>
                    <p className="text-[#0072FF] text-xs font-mono">@{r.username}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#FF6B35]/06 to-[#FF8C5A]/04 border border-[#FF6B35]/15 rounded-xl">
                  <TrendingUp size={14} className="text-[#FF6B35] flex-shrink-0" />
                  <span className="text-[#FF6B35] font-bold text-sm">{r.metric}</span>
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

          {/* Sosyal Medya Müşteri Yorumları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: 'Zeynep Aktaş', role: 'Butik Kafe Sahibi', avatar: 'ZA', text: "İlk ay takipçilerimiz iki katına çıktı. İçerikleri çok kaliteli, müşterilerimiz Instagram'dan geliyor artık.", rating: 5 },
              { name: 'Kemal Şahin', role: 'E-ticaret Girişimcisi', avatar: 'KŞ', text: 'Meta reklamlarını devrettim, reklam maliyetim düştü, satışlarım arttı. Aylık raporlar çok şeffaf.', rating: 5 },
              { name: 'Derya Yıldız', role: 'Kozmetik Markası', avatar: 'DY', text: 'Reels içerikleri gerçekten viral oldu. Organik büyüme hiç beklemediğim kadar hızlı oldu.', rating: 5 },
            ].map((t) => (
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

      {/* ── Process ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

            {/* Left — title card */}
            <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#0072FF] to-[#5B21B6] p-10 flex flex-col justify-center text-white min-h-[340px] shadow-[0_8px_32px_rgba(0,114,255,0.2)] relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/5" />
              <div className="relative">
                <p className="text-blue-200 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-4">Sürecimiz</p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-4">
                  Müşterilerimiz İçin Nasıl Çalışıyoruz?
                </h2>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  Her proje, net bir yol haritasıyla başlar. Fikrinizi alıp sahaya hazır bir ürüne dönüştürüyoruz.
                </p>
                <div className="mt-8 flex gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-2 h-2 rounded-full bg-white/35" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — 2×2 grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="glass-card p-6 group hover:border-[#0072FF]/25 hover:shadow-[0_8px_30px_rgba(0,114,255,0.08)] transition-all"
                >
                  <span className="block text-5xl font-extrabold font-heading leading-none text-[#0072FF]/15 group-hover:text-[#0072FF]/30 transition-colors mb-4 select-none">
                    {item.step}
                  </span>
                  <h3 className="text-[#0A1628] font-bold font-heading text-base mb-2">{item.title}</h3>
                  <p className="text-[#5C6E8A] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Neden Amanos Dijital? ── */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — Görsel + Başlık + CTA */}
          <div className="flex flex-col gap-8">
            {/* Görsel */}
            <div className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-[#F0F5FF] to-[#EEF3FF] border border-[#0072FF]/10">
              <div className="absolute inset-0 bg-gradient-to-tl from-[#0072FF]/5 via-transparent to-[#5B21B6]/5 pointer-events-none" />
              <Image
                src="/seo2.png"
                alt="Dijital pazarlama ile işletmenize müşteri kazandırın"
                fill
                className="object-contain p-6"
              />
            </div>
            {/* Başlık + CTA */}
            <div>
              <p className="section-label mb-3">Güven</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                <span className="text-[#0A1628]">Neden</span>{' '}
                <span className="gradient-text">Amanos Dijital?</span>
              </h2>
              <p className="text-[#5C6E8A] text-lg leading-relaxed mb-8">
                Yüzlerce işletme sahibi Google&apos;da bizi aramadan önce ne alacaklarını bilmiyordu.
                Biz her adımda yanınızdayız — teklif aşamasından sonrasına kadar.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-2xl text-white font-bold text-base cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all"
              >
                Ücretsiz Teklif Al <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          {/* Right — Checklist */}
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: Palette, text: 'İşletmenize özel tasarım', desc: 'Hazır şablon yok — her proje sıfırdan.' },
              { icon: TrendingUp, text: "Google uyumlu web siteleri", desc: 'SEO teknik altyapısı kurulmuş şekilde teslim.' },
              { icon: Zap, text: 'Hızlı teslim süresi', desc: 'Ortalama 7 günde yayına alıyoruz.' },
              { icon: HeartHandshake, text: 'Sürekli teknik destek', desc: 'Yayından sonra da yanınızdayız.' },
              { icon: Star, text: 'İşletmenize müşteri kazandırmaya odaklı', desc: 'Sadece site değil, dönüşüm odaklı çözüm.' },
            ].map((item) => (
              <div key={item.text} className="glass-card p-5 flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/5 border border-[#0072FF]/15 flex items-center justify-center flex-shrink-0 group-hover:border-[#0072FF]/30 transition-colors">
                  <item.icon size={17} className="text-[#0072FF]" />
                </div>
                <div>
                  <h4 className="text-[#0A1628] font-semibold text-sm">{item.text}</h4>
                  <p className="text-[#5C6E8A] text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Müşteri Yorumları</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="gradient-text">Ne Dediler?</span>
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
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0072FF] via-[#3B4FCC] to-[#5B21B6]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-block text-blue-200 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Ücretsiz Danışmanlık
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            İşletmenizi dijitale taşımaya
            <br />
            <span className="text-[#FFD580]">hazır mısınız?</span>
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Profesyonel web sitesi ve SEO çözümleri ile işletmenizin internet dünyasında güçlü bir yer edinmesini sağlayalım.
          </p>
          <Link
            href="/iletisim"
            className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 bg-[#FF6B35] hover:bg-[#FF7A45] rounded-2xl text-white font-bold text-lg shadow-[0_8px_32px_rgba(255,107,53,0.45)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.55)] transition-all"
          >
            Ücretsiz Teklif Al <ArrowRight size={20} />
          </Link>
          <p className="text-blue-200/60 text-xs mt-6">Ortalama 2 saat içinde geri dönüyoruz. Herhangi bir bağlılık yok.</p>
        </div>
      </section>
    </div>
  )
}

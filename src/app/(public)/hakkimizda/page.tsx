import type { Metadata } from 'next'
import { Lightbulb, Handshake, Target, Users, Award, Rocket, ArrowRight, ChevronRight, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hakkımızda | Amanos Dijital',
  description: 'İzmir ve Hatay merkezli dijital ajansımız. Yazılım, tasarım, SEO ve sosyal medya alanında deneyimli genç ekibimizi tanıyın.',
  alternates: { canonical: 'https://amanosdijital.com/hakkimizda' },
  openGraph: {
    title: 'Hakkımızda | Amanos Dijital',
    description: 'İzmir ve Hatay merkezli dijital ajansımız. Yazılım, tasarım, SEO ve sosyal medya alanında deneyimli genç ekibimizi tanıyın.',
    url: 'https://amanosdijital.com/hakkimizda',
    siteName: 'Amanos Dijital',
    locale: 'tr_TR',
    type: 'website',
  },
}

/* ─────────── Data ─────────── */

const services = [
  { href: '/web-sitesi', emoji: '</>', title: 'Web Sitesi Kurma', desc: 'Mobil uyumlu, hızlı ve SEO dostu web siteleri.' },
  { href: '/logo-tasarim', emoji: '✦', title: 'Logo & Marka Kimliği', desc: 'Özgün tasarım ve tam marka kimliği paketi.' },
  { href: '/seo-dijital-pazarlama', emoji: '📈', title: 'SEO & Dijital Pazarlama', desc: "Google'da üst sıralara çıkın, organik büyüyün." },
  { href: '/sosyal-medya', emoji: '◎', title: 'Sosyal Medya Yönetimi', desc: 'Profesyonel içerik ve topluluk yönetimi.' },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Yenilikçilik',
    desc: 'Trendi takip etmekle yetinmiyoruz — önce anlıyoruz, sonra uyguluyoruz. Bugünün doğru aracı, yarın işe yaramayabilir. Bu yüzden öğrenmeyi hiç bırakmıyoruz.',
  },
  {
    icon: Handshake,
    title: 'Şeffaflık',
    desc: 'Proje nasıl gidiyor? Her aşamada bilirsiniz. Güzel haberler kadar zor haberleri de zamanında paylaşırız. Sürpriz yok, sözde durulur.',
  },
  {
    icon: Target,
    title: 'Sonuç Odaklılık',
    desc: 'Beğenilen değil, işe yarayan projeler yapıyoruz. Ölçemediğiniz şeyi geliştiremezsiniz — her projede başarı kriterini baştan netleştiriyoruz.',
  },
]

const milestones = [
  {
    year: '2021',
    title: 'Kuruluş',
    desc: 'Büyük ajansların maliyet yapısına ihtiyaç duymadan aynı kaliteyi sunabileceğimize inandık ve Amanos Dijital\'i kurduk.',
  },
  {
    year: '2022',
    title: 'İlk 20 Proje',
    desc: 'KOBİ\'lere odaklanarak İzmir ve Hatay genelinde 20+ projeyi başarıyla teslim ettik. Her proje bir referans, her müşteri bir öğretmen oldu.',
  },
  {
    year: '2023',
    title: 'Tam Hizmet Ajansı',
    desc: 'Grafik tasarım, SEO ve sosyal medya uzmanlarını bünyemize katarak tek çatı altında eksiksiz dijital çözüm sunmaya başladık.',
  },
  {
    year: '2024',
    title: '50+ Proje & Türkiye Geneli',
    desc: 'İzmir ve Hatay\'dan tüm Türkiye\'ye uzandık. 50\'den fazla projeyle büyümeye devam ediyoruz — ve henüz başlangıçtayız.',
  },
]

const team = [
  {
    name: 'Ali Yılmaz',
    role: 'Full-Stack Geliştirici & Kurucu',
    avatar: 'AY',
    exp: '7 yıl deneyim',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Zeynep Kaya',
    role: 'UI/UX & Grafik Tasarımcı',
    avatar: 'ZK',
    exp: '5 yıl deneyim',
    tags: ['Figma', 'Brand Identity', 'Motion'],
  },
  {
    name: 'Emre Şahin',
    role: 'SEO & Dijital Pazarlama',
    avatar: 'EŞ',
    exp: '6 yıl deneyim',
    tags: ['Teknik SEO', 'Google Ads', 'Analytics'],
  },
  {
    name: 'Selin Arslan',
    role: 'Sosyal Medya Uzmanı',
    avatar: 'SA',
    exp: '4 yıl deneyim',
    tags: ['Instagram', 'Meta Ads', 'İçerik'],
  },
]

/* ─────────── Page ─────────── */

export default function HakkimizdaPage() {
  return (
    <div>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="orb orb-blue w-[500px] h-[500px] -top-40 right-0 opacity-40" />
        <div className="orb orb-indigo w-[300px] h-[300px] bottom-0 left-0 opacity-25" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0072FF]/08 border border-[#0072FF]/18 rounded-full mb-6">
            <MapPin size={11} className="text-[#0072FF]" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#0072FF] font-mono">
              İzmir & Hatay · Türkiye Geneli
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            <span className="gradient-text">Büyük Ajans Kalitesi,</span>
            <br />
            <span className="text-[#0A1628]">İnsan Boyutunda Hizmet</span>
          </h1>
          <p className="text-[#5C6E8A] text-xl max-w-2xl mx-auto leading-relaxed">
            Farklı ajanslardan deneyim kazanmış bir ekip olarak bir araya geldik.
            Amacımız tek: işletmenizin dijitalde gerçekten büyümesini sağlamak.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. HİKAYEMİZ
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Story */}
          <div>
            <p className="section-label mb-3">Hikayemiz</p>
            <h2 className="text-4xl font-bold font-heading mb-6">
              <span className="gradient-text">Neden Kurduk?</span>
            </h2>
            <div className="space-y-4 text-[#5C6E8A] leading-relaxed text-base">
              <p>
                Büyük ajansların içinde çalışırken fark ettik: KOBİ&apos;ler ya bütçe yetersizliği nedeniyle kötü hizmet alıyor, ya da bütçeleri olmayan servislere para ödüyordu. İkisi de kabul edilemezdi.
              </p>
              <p>
                Bu boşluğu doldurmak için Amanos Dijital&apos;i kurduk. Büyük ajans uzmanlığını daha esnek, daha ulaşılabilir ve daha hesap verebilir bir yapıda sunmak istedik.
              </p>
              <p>
                Bugün web sitesinden logoya, SEO&apos;dan sosyal medyaya — markanızın dijital dünyada güçlü bir yer edinmesi için ihtiyaç duyduğunuz her şeyi tek çatı altında sunuyoruz.
              </p>
              <p className="font-medium text-[#0A1628]">
                Sadece proje teslim etmiyoruz — uzun vadeli bir büyüme ortağı oluyoruz.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white font-bold cta-glow hover:from-[#FF7A45] transition-all"
              >
                Tanışalım <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, number: '40+', label: 'Mutlu Müşteri', sub: 'İzmir, Hatay ve Türkiye geneli' },
              { icon: Award, number: '50+', label: 'Teslim Edilen Proje', sub: 'Web, logo, SEO, sosyal medya' },
              { icon: Rocket, number: '7 Gün', label: 'Ort. Teslimat', sub: 'Söz verileni teslim ederiz' },
              { icon: Target, number: '%100', label: 'Memnuniyet', sub: 'Her projede öncelik' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/05 border border-[#0072FF]/15 flex items-center justify-center mb-4 group-hover:border-[#0072FF]/30 transition-colors">
                  <item.icon size={18} className="text-[#0072FF]" />
                </div>
                <div className="text-2xl font-bold font-heading gradient-text mb-1">{item.number}</div>
                <div className="text-[#0A1628] font-semibold text-sm">{item.label}</div>
                <div className="text-[#8A9BB5] text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. DEĞERLERİMİZ
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">İlkelerimiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="gradient-text">Neye İnanıyoruz?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/05 border border-[#0072FF]/15 flex items-center justify-center mb-5 group-hover:border-[#0072FF]/35 group-hover:shadow-[0_0_20px_rgba(0,114,255,0.1)] transition-all">
                  <v.icon className="text-[#0072FF]" size={24} />
                </div>
                <h3 className="text-[#0A1628] font-bold font-heading text-lg mb-3">{v.title}</h3>
                <p className="text-[#5C6E8A] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. KİLOMETRE TAŞLARI
      ══════════════════════════════════════ */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Yolculuğumuz</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="gradient-text">Nereden Nereye</span>
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0072FF]/40 via-[#5B21B6]/20 to-transparent pointer-events-none" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="relative flex-shrink-0">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0072FF]/15 to-[#5B21B6]/05 border border-[#0072FF]/25 flex items-center justify-center text-[#0072FF] text-xs font-bold font-mono group-hover:border-[#0072FF]/50 group-hover:shadow-[0_0_15px_rgba(0,114,255,0.15)] transition-all">
                    {m.year.slice(2)}
                  </div>
                </div>
                <div className={`glass-card p-5 flex-1 ${i === milestones.length - 1 ? 'border-[#FF6B35]/20 bg-gradient-to-r from-white to-[#FFF5F0]' : ''}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#0072FF] text-xs font-mono font-bold">{m.year}</span>
                    <span className="w-px h-3 bg-slate-200" />
                    <h4 className="text-[#0A1628] font-bold text-sm">{m.title}</h4>
                    {i === milestones.length - 1 && (
                      <span className="ml-auto px-2 py-0.5 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-[10px] font-bold">
                        Şimdi
                      </span>
                    )}
                  </div>
                  <p className="text-[#5C6E8A] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. EKİBİMİZ
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Ekibimiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-3">
              <span className="gradient-text">Projenizin Arkasındakiler</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-xl mx-auto">
              Her uzmanlık alanında deneyimli, bir arada güçlü.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glass-card p-6 group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0072FF] to-[#5B21B6] flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:shadow-[0_8px_25px_rgba(0,114,255,0.25)] transition-shadow">
                  {member.avatar}
                </div>
                <h4 className="text-[#0A1628] font-bold font-heading text-sm mb-0.5">{member.name}</h4>
                <p className="text-[#8A9BB5] text-xs mb-3">{member.role}</p>
                <span className="inline-block px-2.5 py-1 bg-[#0072FF]/08 border border-[#0072FF]/15 rounded-full text-[#0072FF] text-[10px] font-mono mb-3">
                  {member.exp}
                </span>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 rounded-full text-[#5C6E8A] text-[10px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. HİZMETLERİMİZ
      ══════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Ne Yapıyoruz</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="gradient-text">Hizmetlerimiz</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
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
          7. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0072FF] via-[#3B4FCC] to-[#5B21B6]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/05 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-block text-blue-200 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Hazır mısınız?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Birlikte Büyüyelim
            <br />
            <span className="text-[#FFD580]">Ücretsiz Görüşelim.</span>
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            15 dakikalık ücretsiz görüşmede işletmenizin dijital ihtiyaçlarını anlıyor,
            doğru stratejiyi birlikte belirliyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href="/iletisim"
              className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 bg-[#FF6B35] hover:bg-[#FF7A45] rounded-2xl text-white font-bold text-lg shadow-[0_8px_32px_rgba(255,107,53,0.45)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.55)] transition-all w-full sm:w-auto justify-center"
            >
              Ücretsiz Teklif Al <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/905445317980?text=Merhaba%2C%20dijital%20hizmetler%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-bold text-lg transition-all w-full sm:w-auto justify-center"
            >
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

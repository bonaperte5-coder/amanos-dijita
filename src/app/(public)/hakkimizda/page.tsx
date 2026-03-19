import type { Metadata } from 'next'
import { ArrowRight, Lightbulb, Handshake, Target, Users, Award, Rocket, MapPin, MessageCircle } from 'lucide-react'
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
    current: true,
  },
]

const team = [
  {
    name: 'Cemali Eryılmaz',
    role: 'Kurucu & Full-Stack Geliştirici',
    avatar: 'CE',
    tags: ['Web Geliştirme', 'Yönetim', 'Full-Stack'],
    gradient: 'from-[#0072FF] to-[#5B21B6]',
    tagColor: 'bg-[#0072FF]/08 text-[#0072FF] border-[#0072FF]/15',
  },
  {
    name: 'Samet Talha Tozlu',
    role: 'Full-Stack Geliştirici',
    avatar: 'ST',
    tags: ['Web Geliştirme', 'Full-Stack', 'Yazılım'],
    gradient: 'from-[#3B4FCC] to-[#0072FF]',
    tagColor: 'bg-[#0072FF]/08 text-[#0072FF] border-[#0072FF]/15',
  },
  {
    name: 'Sümeyye Çırak',
    role: 'Grafik Tasarımcı',
    avatar: 'SÇ',
    tags: ['Grafik Tasarım', 'Adobe', 'Canva'],
    gradient: 'from-[#BE185D] to-[#7C3AED]',
    tagColor: 'bg-[#BE185D]/08 text-[#BE185D] border-[#BE185D]/15',
  },
  {
    name: 'Yüksel Günay',
    role: 'Sosyal Medya Uzmanı',
    avatar: 'YG',
    tags: ['Reels Çekimi', 'Instagram Reklamı', 'Video Edit'],
    gradient: 'from-[#FF6B35] to-[#F59E0B]',
    tagColor: 'bg-[#FF6B35]/08 text-[#FF6B35] border-[#FF6B35]/15',
  },
  {
    name: 'Mısra Kanarya',
    role: 'SEO & Dijital Pazarlama',
    avatar: 'MK',
    tags: ['SEO', 'Google Ads', 'İçerik Stratejisi'],
    gradient: 'from-[#059669] to-[#0072FF]',
    tagColor: 'bg-[#059669]/08 text-[#059669] border-[#059669]/15',
  },
]

/* ─────────── Page ─────────── */

export default function HakkimizdaPage() {
  return (
    <div>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="orb orb-blue w-[500px] h-[500px] -top-40 right-0 opacity-35" />
        <div className="orb orb-indigo w-[300px] h-[300px] bottom-0 left-0 opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0072FF]/08 border border-[#0072FF]/18 rounded-full mb-8">
            <MapPin size={11} className="text-[#0072FF]" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#0072FF] font-mono">
              Dijital Ajans · 2021&apos;den Beri
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
            <span className="gradient-text">İşletmenizin Dijital Büyümesi</span>
            <br />
            <span className="text-[#0A1628]">Biz Buradayız</span>
          </h1>

          <p className="text-[#5C6E8A] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            İzmir ve Hatay&apos;dan tüm Türkiye&apos;ye. Küçük bütçe, büyük sonuç — KOBİ&apos;lere özel dijital çözümler.
          </p>

          {/* Trust bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-px bg-white/60 border border-slate-200/80 rounded-2xl overflow-hidden backdrop-blur-sm shadow-sm max-w-lg mx-auto">
            {[
              { number: '40+', label: 'Mutlu Müşteri' },
              { number: '50+', label: 'Teslim Edilen Proje' },
              { number: '2021', label: "Kuruluş Yılı" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex-1 py-4 px-5 text-center ${i < 2 ? 'sm:border-r border-b sm:border-b-0 border-slate-200/80' : ''}`}
              >
                <div className="text-2xl font-extrabold font-heading gradient-text">{item.number}</div>
                <div className="text-[#8A9BB5] text-xs mt-0.5 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. HİKAYEMİZ
      ══════════════════════════════════════ */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Sol — Hikaye */}
          <div>
            <p className="section-label mb-3">Hikayemiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-7">
              <span className="gradient-text">Neden Kurduk?</span>
            </h2>
            <div className="space-y-4 text-[#5C6E8A] leading-relaxed text-base mb-7">
              <p>
                Büyük ajansların içinde çalışırken fark ettik: KOBİ&apos;ler ya bütçe yetersizliği nedeniyle kötü hizmet alıyor, ya da ihtiyaçları olmayan servislere para ödüyordu. İkisi de kabul edilemezdi.
              </p>
              <p>
                Bu boşluğu doldurmak için Amanos Dijital&apos;i kurduk. Büyük ajans uzmanlığını daha esnek, daha ulaşılabilir ve daha hesap verebilir bir yapıda sunmak istedik.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#0072FF] pl-5 mb-8">
              <p className="text-[#0A1628] font-semibold text-base leading-relaxed italic">
                &ldquo;KOBİ&apos;ler büyük ajans kalitesini hak ediyor. Biz bunu mümkün kılmak için buradayız.&rdquo;
              </p>
              <p className="text-[#8A9BB5] text-xs mt-2 font-mono">— Cemali Eryılmaz, Kurucu</p>
            </blockquote>

            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white font-bold cta-glow hover:from-[#FF7A45] transition-all"
            >
              Tanışalım <ArrowRight size={16} />
            </Link>
          </div>

          {/* Sağ — Stat kartları */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, number: '40+', label: 'Mutlu Müşteri', sub: 'İzmir, Hatay ve Türkiye geneli', color: '#0072FF' },
              { icon: Award, number: '50+', label: 'Teslim Edilen Proje', sub: 'Web, logo, SEO, sosyal medya', color: '#5B21B6' },
              { icon: Rocket, number: '7 Gün', label: 'Ort. Teslimat', sub: 'Söz verileni teslim ederiz', color: '#FF6B35' },
              { icon: Target, number: '%100', label: 'Memnuniyet', sub: 'Her projede öncelik', color: '#059669' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 group hover:-translate-y-0.5 transition-transform">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
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
      <section className="py-24 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <p className="section-label mb-3">İlkelerimiz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-3">
              <span className="gradient-text">Nasıl Çalışıyoruz?</span>
            </h2>
            <p className="text-[#5C6E8A] text-lg max-w-md mx-auto">
              Her kararımızın arkasında üç ilke var.
            </p>
          </div>

          {/* Asimetrik layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Öne çıkan değer — tam sol */}
            <div className="glass-card p-10 flex flex-col justify-between group hover:-translate-y-0.5 transition-transform md:row-span-2 border-[#0072FF]/20">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0072FF]/15 to-[#5B21B6]/05 border border-[#0072FF]/20 flex items-center justify-center mb-7">
                  <Target size={22} className="text-[#0072FF]" />
                </div>
                <h3 className="text-[#0A1628] font-bold font-heading text-2xl mb-3">Sonuç Odaklılık</h3>
                <p className="text-[#5C6E8A] text-base leading-relaxed mb-5">
                  Beğenilen değil, işe yarayan projeler yapıyoruz.
                </p>
                <p className="text-[#0A1628]/70 text-sm leading-relaxed border-l-2 border-[#0072FF]/30 pl-4">
                  Her projede başarı kriterini baştan netleştiriyoruz — ölçemediğiniz şeyi büyütemezsiniz.
                </p>
              </div>
              <div className="mt-10 pt-7 border-t border-slate-100">
                <p className="text-[#8A9BB5] text-xs font-mono tracking-wider uppercase">Amanos Dijital Prensibi</p>
              </div>
            </div>

            {/* Sağ üst */}
            <div className="glass-card p-7 group hover:-translate-y-0.5 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B21B6]/10 to-[#0072FF]/05 border border-[#5B21B6]/15 flex items-center justify-center mb-5">
                <Handshake size={18} className="text-[#5B21B6]" />
              </div>
              <h3 className="text-[#0A1628] font-bold font-heading text-lg mb-2">Şeffaflık</h3>
              <p className="text-[#5C6E8A] text-sm leading-relaxed mb-3">Proje boyunca her aşamada bilgi sahibisiniz.</p>
              <p className="text-[#0A1628]/60 text-xs leading-relaxed border-l-2 border-[#5B21B6]/25 pl-3">
                Güzel haberler kadar zor haberleri de zamanında paylaşırız. Sürpriz yok.
              </p>
            </div>

            {/* Sağ alt */}
            <div className="glass-card p-7 group hover:-translate-y-0.5 transition-transform border-[#FF6B35]/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C5A]/05 border border-[#FF6B35]/15 flex items-center justify-center mb-5">
                <Lightbulb size={18} className="text-[#FF6B35]" />
              </div>
              <h3 className="text-[#0A1628] font-bold font-heading text-lg mb-2">Yenilikçilik</h3>
              <p className="text-[#5C6E8A] text-sm leading-relaxed mb-3">Trendi takip etmekle yetinmiyoruz — önce anlıyoruz.</p>
              <p className="text-[#0A1628]/60 text-xs leading-relaxed border-l-2 border-[#FF6B35]/25 pl-3">
                Bugünün doğru aracı yarın işe yaramayabilir. Bu yüzden öğrenmeyi hiç bırakmıyoruz.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. EKİBİMİZ
      ══════════════════════════════════════ */}
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Ekibimiz</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-3">
            <span className="gradient-text">Ekibinizle Tanışın</span>
          </h2>
          <p className="text-[#5C6E8A] text-lg max-w-md mx-auto">
            Her uzmanlık alanında odaklanmış, bir arada güçlü.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card p-6 group hover:-translate-y-0.5 transition-transform flex items-start gap-4"
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:shadow-lg transition-shadow`}>
                {member.avatar}
              </div>

              {/* İçerik */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[#0A1628] font-bold font-heading text-base leading-snug">{member.name}</h4>
                <p className="text-[#8A9BB5] text-xs mb-3 mt-0.5">{member.role}</p>
                <div className="flex flex-wrap gap-1">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 border rounded-full text-[10px] font-medium ${member.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. YOLCULUĞUMUZ
      ══════════════════════════════════════ */}
      <section className="py-24 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4">

          <div className="text-center mb-14">
            <p className="section-label mb-3">Yolculuğumuz</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="gradient-text">Nereden Nereye</span>
            </h2>
          </div>

          <div className="relative">
            {/* Dikey çizgi */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0072FF]/40 via-[#5B21B6]/20 to-transparent pointer-events-none hidden sm:block" />

            <div className="space-y-5">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-5 group">

                  {/* Yıl nokta */}
                  <div className="relative flex-shrink-0 hidden sm:flex items-start pt-1">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-all
                      ${m.current
                        ? 'bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] text-white shadow-[0_4px_15px_rgba(255,107,53,0.3)]'
                        : 'bg-gradient-to-br from-[#0072FF]/12 to-[#5B21B6]/05 border border-[#0072FF]/25 text-[#0072FF] group-hover:border-[#0072FF]/50'
                      }`}
                    >
                      {m.year.slice(2)}
                    </div>
                  </div>

                  {/* Kart */}
                  <div className={`flex-1 glass-card p-6 relative overflow-hidden group-hover:-translate-y-0.5 transition-transform
                    ${m.current ? 'border-[#FF6B35]/25 bg-gradient-to-r from-white to-[#FFF8F5]' : ''}`}
                  >
                    {/* Watermark yıl */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl font-extrabold font-heading text-slate-100 select-none pointer-events-none leading-none">
                      {m.year}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        {/* Mobil için yıl */}
                        <span className={`text-xs font-mono font-bold sm:hidden ${m.current ? 'text-[#FF6B35]' : 'text-[#0072FF]'}`}>{m.year}</span>
                        <h4 className="text-[#0A1628] font-bold text-base">{m.title}</h4>
                        {m.current && (
                          <span className="ml-auto px-2.5 py-0.5 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-[10px] font-bold font-mono flex-shrink-0">
                            Şimdi
                          </span>
                        )}
                      </div>
                      <p className="text-[#5C6E8A] text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0072FF] via-[#3B4FCC] to-[#5B21B6]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/05 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="inline-block text-blue-200 text-xs font-bold tracking-[0.18em] uppercase font-mono mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Ücretsiz · Bağlayıcı Değil · 2 Saat İçinde Dönüş
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Birlikte Büyüyelim
            <br />
            <span className="text-[#FFD580]">Ücretsiz Görüşelim.</span>
          </h2>

          <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            15 dakikalık ücretsiz görüşmede işletmenizin dijital ihtiyaçlarını anlıyor, doğru stratejiyi birlikte belirliyoruz.
          </p>

          {/* Trust sinyalleri */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-8 text-blue-100/70 text-sm">
            {['✓ Ücretsiz ilk görüşme', '✓ 2 saat içinde dönüş', '✓ Herhangi bir bağlılık yok'].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
              <MessageCircle size={20} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

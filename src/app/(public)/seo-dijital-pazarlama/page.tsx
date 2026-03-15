import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO ve Dijital Pazarlama | Amanos Dijital',
  description: "Google'da üst sıralara çıkın. Teknik SEO, içerik stratejisi, Google Ads ve Meta Ads yönetimi.",
  alternates: { canonical: 'https://amanosdijital.com/seo-dijital-pazarlama' },
  openGraph: {
    title: 'SEO ve Dijital Pazarlama | Amanos Dijital',
    description: "Google'da üst sıralara çıkın. Teknik SEO, içerik stratejisi, Google Ads ve Meta Ads yönetimi.",
    url: 'https://amanosdijital.com/seo-dijital-pazarlama',
    siteName: 'Amanos Dijital',
    locale: 'tr_TR',
    type: 'website',
  },
}

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const relatedServices = [
  {
    href: '/web-sitesi',
    emoji: '</>',
    title: 'Web Sitesi Kurma',
    desc: 'SEO uyumlu altyapıyla sıfırdan profesyonel bir web sitesi.',
  },
  {
    href: '/logo-tasarim',
    emoji: '✦',
    title: 'Logo & Marka Kimliği',
    desc: 'Dijital varlığınızı güçlendiren özgün marka tasarımları.',
  },
  {
    href: '/sosyal-medya',
    emoji: '◎',
    title: 'Sosyal Medya Yönetimi',
    desc: 'SEO ile birlikte sosyal medyada da güçlü bir varlık kurun.',
  },
]

const seoServices = [
  '🔍 Anahtar Kelime Araştırması & Strateji',
  '⚙️ Teknik SEO (site hızı, yapısal veri, indekslenme)',
  '✍️ İçerik SEO (blog, landing page optimizasyonu)',
  '🔗 Backlink Stratejisi',
  '📊 Aylık Raporlama & Analiz',
]

const adsServices = [
  '🎯 Google Ads (Arama, Display, YouTube)',
  '📘 Meta Ads (Facebook & Instagram Reklamları)',
  '🛍️ Yeniden Hedefleme (Retargeting) Kampanyaları',
  '📈 A/B Test & Optimizasyon',
  '💰 Bütçe Yönetimi & ROI Takibi',
]

const stats = [
  { num: '%70', desc: 'Organik trafik daha güvenilir algılanır' },
  { num: 'En Yüksek', desc: "SEO yatırımı uzun vadede en yüksek ROI'yi sağlar" },
  { num: '%75', desc: 'Kullanıcıların ilk sayfadan çıkmaz' },
]

export default function SeoPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF] text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="orb orb-blue w-[400px] h-[400px] top-0 left-1/4 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="section-label mb-4">Hizmetlerimiz</p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Google&apos;da Üst Sıralara Çıkın</span>
          </h1>
          <p className="text-[#5C6E8A] text-xl max-w-2xl mx-auto">Organik büyüme ve ölçülebilir reklam sonuçları için buradayız</p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Hizmet Kapsamı</p>
          <h2 className="text-3xl font-bold font-heading text-[#0A1628]">Ne Yapıyoruz?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h2 className="text-lg font-bold font-heading text-[#0A1628] mb-5">SEO Hizmetleri</h2>
            <ul className="space-y-3">
              {seoServices.map((s) => (
                <li key={s} className="text-[#5C6E8A] text-sm flex items-start gap-2">
                  <span className="flex-shrink-0">{s.slice(0, 2)}</span>
                  <span>{s.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-lg font-bold font-heading text-[#0A1628] mb-5">Dijital Reklamcılık</h2>
            <ul className="space-y-3">
              {adsServices.map((s) => (
                <li key={s} className="text-[#5C6E8A] text-sm flex items-start gap-2">
                  <span className="flex-shrink-0">{s.slice(0, 2)}</span>
                  <span>{s.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-[#F0F5FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Verilerle</p>
            <h2 className="text-3xl font-bold font-heading text-[#0A1628]">Rakamlarla SEO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.num} className="glass-card p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{s.num}</div>
                <p className="text-[#5C6E8A] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diğer Hizmetlerimiz ── */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Keşfedin</p>
          <h2 className="text-3xl font-bold font-heading text-[#0A1628]">Diğer Hizmetlerimiz</h2>
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

      {/* ── CTA ── */}
      <section className="py-16 text-center">
        <Link href="/iletisim" className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white font-bold text-lg cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all">
          SEO Analizinizi Ücretsiz Yaptırın <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  )
}

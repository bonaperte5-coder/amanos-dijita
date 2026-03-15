import type { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'İletişim | Amanos Dijital',
  description: 'Ücretsiz danışmanlık için bize ulaşın. Web sitesi, logo tasarım, SEO ve sosyal medya hizmetleri için teklif alın.',
  alternates: { canonical: 'https://amanosdijital.com/iletisim' },
  openGraph: {
    title: 'İletişim | Amanos Dijital',
    description: 'Projenizi konuşalım. Ücretsiz danışmanlık için bize ulaşın.',
    url: 'https://amanosdijital.com/iletisim',
    siteName: 'Amanos Dijital',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function IletisimPage() {
  return (
    <div>
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="orb orb-blue w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label mb-4">İletişime Geçin</p>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            <span className="text-[#0A1628]">Projenizi</span>
            <br />
            <span className="gradient-text">Konuşalım</span>
          </h1>
          <p className="text-[#5C6E8A] text-xl max-w-xl mx-auto">
            Ücretsiz danışmanlık için bize ulaşın. Ortalama 2 saat içinde geri dönüyoruz.
          </p>
        </div>
      </section>
      <ContactContent />
    </div>
  )
}

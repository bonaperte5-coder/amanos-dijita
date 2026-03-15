import Link from 'next/link'
import { Pencil } from 'lucide-react'

const services = [
  { slug: 'web-sitesi', title: 'Web Sitesi Kurma' },
  { slug: 'logo-tasarim', title: 'Logo & Marka Kimliği' },
  { slug: 'seo-dijital-pazarlama', title: 'SEO & Dijital Pazarlama' },
  { slug: 'sosyal-medya', title: 'Sosyal Medya Yönetimi' },
]

export default function HizmetlerPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-white mb-8">Hizmet İçerikleri</h1>
      <div className="space-y-4">
        {services.map((s) => (
          <div key={s.slug} className="glass-card p-4 flex items-center justify-between">
            <h3 className="text-white font-semibold">{s.title}</h3>
            <Link href={`/admin/hizmetler/${s.slug}`} className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-sm text-text-secondary">
              <Pencil size={14} /> Düzenle
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function SliderPage() {
  const sliders = await prisma.slider.findMany({ orderBy: { order: 'asc' } })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold font-heading text-white">Slider Yönetimi</h1>
        <Link href="/admin/slider/new" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg text-white text-sm font-semibold">
          <Plus size={16} /> Yeni Slider
        </Link>
      </div>

      <div className="space-y-4">
        {sliders.length === 0 ? (
          <div className="glass-card p-8 text-center text-text-secondary">
            Henüz slider eklenmemiş.
          </div>
        ) : (
          sliders.map((slider) => (
            <div key={slider.id} className="glass-card p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{slider.title}</h3>
                <p className="text-text-secondary text-sm">{slider.description.substring(0, 80)}...</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded text-xs ${slider.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {slider.isActive ? 'Aktif' : 'Pasif'}
                </span>
                <Link href={`/admin/slider/${slider.id}`} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-sm text-text-secondary">
                  Düzenle
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

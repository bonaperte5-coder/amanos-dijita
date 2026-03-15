import { prisma } from '@/lib/prisma'
import { MessageSquare, Image, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const [unreadMessages, mediaCount, sliderCount] = await Promise.all([
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.media.count(),
    prisma.slider.count({ where: { isActive: true } }),
  ])

  const widgets = [
    { label: 'Okunmamış Mesaj', value: unreadMessages, icon: MessageSquare, href: '/admin/iletisim', color: 'text-orange-400' },
    { label: 'Medya Dosyası', value: mediaCount, icon: Image, href: '/admin/medya', color: 'text-blue-400' },
    { label: 'Aktif Slider', value: sliderCount, icon: SlidersHorizontal, href: '/admin/slider', color: 'text-green-400' },
  ]

  const quickActions = [
    { label: 'Slider Düzenle', href: '/admin/slider' },
    { label: 'Görsel Yükle', href: '/admin/medya' },
    { label: 'SEO Güncelle', href: '/admin/seo' },
    { label: 'Mesajları Gör', href: '/admin/iletisim' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {widgets.map((w) => (
          <Link key={w.label} href={w.href} className="glass-card p-6 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <w.icon className={w.color} size={24} />
              <span className={`text-3xl font-bold ${w.color}`}>{w.value}</span>
            </div>
            <p className="text-text-secondary text-sm">{w.label}</p>
          </Link>
        ))}
      </div>

      <div className="glass-card p-6">
        <h2 className="text-white font-semibold mb-4">Hızlı Erişim</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((a) => (
            <Link key={a.href} href={a.href} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-text-secondary hover:text-white text-sm transition-colors">
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

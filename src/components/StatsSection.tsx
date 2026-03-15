'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: '50+', label: 'Tamamlanan Proje', sub: 'Başarıyla teslim edildi' },
  { number: '40+', label: 'Mutlu Müşteri', sub: 'Uzun vadeli ilişkiler' },
  { number: '7 Gün', label: 'Ortalama Teslimat', sub: 'Hızlı ve zamanında' },
  { number: '%100', label: 'Memnuniyet', sub: 'Garantili kalite' },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 relative border-y border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F0F5FF] via-white to-[#F0F5FF]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="text-[#0A1628] font-semibold mt-2 text-sm">{stat.label}</div>
              <div className="text-[#8A9BB5] text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

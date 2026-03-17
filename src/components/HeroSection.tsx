'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

const words = ['Web Sitesi', 'Logo Tasarım', 'SEO', 'Sosyal Medya']


export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* ── Typewriter ── */
  useEffect(() => {
    const word = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, wordIndex])

  /* ── Canvas particle network ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 20 : 55
    const pts: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,100,255,0.22)'
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,100,255,${0.07 * (1 - dist / 130)})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-[#F8FAFF] to-[#EEF3FF]">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

      {/* Gradient orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#0072FF]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#7C3AED]/7 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#FF6B35]/5 blur-[80px] pointer-events-none" />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#0072FF]/[0.06] animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#0072FF]/[0.04] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#0072FF]/15 text-xs text-[#5C6E8A] mb-8 backdrop-blur-sm shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0072FF] shadow-[0_0_6px_rgba(0,114,255,0.6)] animate-pulse" />
          <span className="font-mono tracking-wider uppercase">Dijital Ajans Hizmetleri</span>
          <span className="w-px h-3 bg-slate-300" />
          <span className="text-[#0A1628] font-semibold">İzmir & Hatay</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold font-heading leading-[1.04] tracking-tight mb-6">
          <span className="text-[#0A1628]">Markanız İçin</span>
          <br />
          <span className="relative inline-block">
            <span className="gradient-text">{displayed}</span>
            <span className="inline-block w-[3px] h-[0.85em] bg-[#0072FF] ml-1 align-middle animate-pulse" />
          </span>
          <br />
          <span className="text-[#0A1628]">Çözümleri</span>
        </h1>

        {/* Sub */}
        <p className="text-[#5C6E8A] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Müşterileriniz Google&apos;da arama yaptığında işletmenizi ilk sıralarda bulsun.
          Web sitesi kurulumundan SEO&apos;ya — dijitaldeki her adımı sizin için yönetiyoruz.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/iletisim"
            className="group btn-shimmer flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-2xl text-white font-bold text-base cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all"
          >
            Ücretsiz Teklif Al
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link href="/hakkimizda" className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 bg-white/80 hover:bg-white hover:border-[#0072FF]/30 transition-all text-[#0A1628] text-base font-medium backdrop-blur-sm shadow-sm hover:shadow-md">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border border-slate-200 group-hover:bg-[#0072FF]/10 group-hover:border-[#0072FF]/20 transition-colors">
              <Play size={12} fill="#0A1628" className="ml-0.5 group-hover:fill-[#0072FF]" />
            </span>
            Nasıl Çalışıyoruz?
          </Link>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#7A8FAD]">
          {[
            '50+ Tamamlanan Proje',
            "Google'da Üst Sıra Odaklı",
            '%100 Müşteri Memnuniyeti',
            'Ücretsiz Revizyon',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle size={12} className="text-[#0072FF]" />
              {item}
            </span>
          ))}
        </div>

        {/* Floating cards */}
        <div className="hidden lg:block">
          <div className="absolute left-[2%] top-[30%] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg px-4 py-3 text-left animate-float" style={{ animationDelay: '0s' }}>
            <p className="text-[10px] text-[#7A8FAD] font-mono mb-1">YENİ PROJE</p>
            <p className="text-[#0A1628] text-sm font-semibold">E-ticaret Sitesi</p>
            <p className="text-[#0072FF] text-[10px] mt-1">✓ 7 günde teslim</p>
          </div>
          <div className="absolute right-[2%] top-[35%] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg px-4 py-3 text-left animate-float" style={{ animationDelay: '1.5s' }}>
            <p className="text-[10px] text-[#7A8FAD] font-mono mb-1">GOOGLE SIRALAMASI</p>
            <div className="flex items-end gap-1">
              <span className="text-[#0072FF] text-xl font-bold">↑ 312%</span>
            </div>
            <p className="text-[#7A8FAD] text-[10px] mt-1">Organik trafik artışı</p>
          </div>
          <div className="absolute left-[18%] bottom-[18%] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg px-3 py-2.5 text-left animate-float" style={{ animationDelay: '3s' }}>
            <div className="flex gap-0.5 mb-1">
              {[1,2,3,4,5].map(i => <span key={i} className="text-[#FF6B35] text-[10px]">★</span>)}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#0072FF] to-[#5B21B6] flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">AK</div>
              <p className="text-[#0A1628] text-[10px] font-semibold">Ayşe K. — Butik Sahibi</p>
            </div>
          </div>
          <div className="absolute right-[3%] bottom-[22%] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg px-4 py-3 text-left animate-float" style={{ animationDelay: '2.2s' }}>
            <p className="text-[10px] text-[#7A8FAD] font-mono mb-1.5">YENİ MÜŞTERİ</p>
            <p className="text-[#0A1628] text-sm font-semibold">Kurumsal Web Sitesi</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <p className="text-emerald-600 text-[10px] font-medium">Proje başladı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8FAFF] to-transparent pointer-events-none" />

    </section>
  )
}

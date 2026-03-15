'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import AmanosLogo from './AmanosLogo'

const services = [
  { label: '</> Web Sitesi Kurma', href: '/web-sitesi' },
  { label: '✦ Logo & Marka Kimliği', href: '/logo-tasarim' },
  { label: '↗ SEO & Dijital Pazarlama', href: '/seo-dijital-pazarlama' },
  { label: '◎ Sosyal Medya Yönetimi', href: '/sosyal-medya' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group gap-0.5">
            <AmanosLogo className="w-12 h-8 group-hover:drop-shadow-[0_0_8px_rgba(0,198,255,0.5)] transition-all" />
            <span className="text-[11px] font-bold tracking-[0.18em] gradient-text uppercase leading-none">Amanos Dijital</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Ana Sayfa</NavLink>
            <div className="flex items-center gap-1 mx-1 px-2 py-1 rounded-xl bg-slate-50 border border-slate-200/80">
              {services.map((s) => (
                <ServiceLink key={s.href} href={s.href}>{s.label}</ServiceLink>
              ))}
            </div>
            <NavLink href="/hakkimizda">Hakkımızda</NavLink>
            <NavLink href="/iletisim">İletişim</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/iletisim"
              className="btn-shimmer px-5 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white text-sm font-semibold cta-glow hover:from-[#FF7A45] hover:to-[#FF9C6A] transition-all"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-[#0A1628] transition-colors hover:bg-slate-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-xl border-t border-slate-200/80 px-4 py-4 space-y-1">
          <MobileLink href="/" onClick={() => setIsOpen(false)}>Ana Sayfa</MobileLink>
          {services.map((s) => (
            <MobileLink key={s.href} href={s.href} onClick={() => setIsOpen(false)}>{s.label}</MobileLink>
          ))}
          <MobileLink href="/hakkimizda" onClick={() => setIsOpen(false)}>Hakkımızda</MobileLink>
          <MobileLink href="/iletisim" onClick={() => setIsOpen(false)}>İletişim</MobileLink>

          <div className="pt-2">
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white text-sm font-semibold text-center cta-glow"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function ServiceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 text-[#5C6E8A] hover:text-[#0072FF] text-xs font-medium rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-[#0072FF]/15 transition-all whitespace-nowrap"
    >
      {children}
    </Link>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-[#5C6E8A] hover:text-[#0A1628] transition-colors text-xs rounded-lg hover:bg-slate-100 group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#0072FF] to-[#5B21B6] rounded-full group-hover:w-4/5 transition-all duration-300" />
    </Link>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 text-[#5C6E8A] hover:text-[#0A1628] rounded-xl hover:bg-slate-100 transition-colors text-sm"
    >
      {children}
    </Link>
  )
}

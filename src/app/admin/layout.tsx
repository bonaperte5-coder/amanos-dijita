'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Sliders, Briefcase, Image, Search, MessageSquare, Settings, LogOut } from 'lucide-react'

const sidebarItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Slider', href: '/admin/slider', icon: Sliders },
  { label: 'Hizmetler', href: '/admin/hizmetler', icon: Briefcase },
  { label: 'Medya', href: '/admin/medya', icon: Image },
  { label: 'SEO', href: '/admin/seo', icon: Search },
  { label: 'Mesajlar', href: '/admin/iletisim', icon: MessageSquare },
  { label: 'Ayarlar', href: '/admin/ayarlar', icon: Settings },
]

function AdminSidebar() {
  const pathname = usePathname()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin'
  }

  return (
    <aside className="w-64 min-h-screen bg-[#0D1117] border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <span className="text-xl font-bold gradient-text">Amanos Dijital Admin</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-[#00C6FF]/10 text-[#00C6FF] border-l-2 border-[#00C6FF]'
                  : 'text-[#8A9BB5] hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 text-[#8A9BB5] hover:text-red-400 text-sm w-full transition-colors"
        >
          <LogOut size={18} /> Çıkış
        </button>
      </div>
    </aside>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin'

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 bg-[#161B22] p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}

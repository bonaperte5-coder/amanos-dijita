'use client'
import { useState } from 'react'

const pages = [
  { label: 'Ana Sayfa', slug: 'home' },
  { label: 'Hakkımızda', slug: 'hakkimizda' },
  { label: 'Web Sitesi', slug: 'web-sitesi' },
  { label: 'Logo Tasarım', slug: 'logo-tasarim' },
  { label: 'SEO Hizmeti', slug: 'seo-dijital-pazarlama' },
  { label: 'Sosyal Medya', slug: 'sosyal-medya' },
]

export default function SeoPage() {
  const [activeTab, setActiveTab] = useState('home')
  const [form, setForm] = useState({ title: '', description: '', robots: 'index,follow' })

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-white mb-8">SEO Ayarları</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {pages.map((p) => (
          <button
            key={p.slug}
            onClick={() => setActiveTab(p.slug)}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${activeTab === p.slug ? 'bg-[#00C6FF]/20 text-[#00C6FF]' : 'bg-white/5 text-text-secondary hover:text-white'}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="glass-card p-6 space-y-4">
        <div>
          <label className="block text-text-secondary text-sm mb-1">Sayfa Başlığı (max 60 karakter)</label>
          <input
            type="text"
            maxLength={60}
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF]"
          />
          <p className="text-text-secondary text-xs mt-1">{form.title.length}/60</p>
        </div>
        <div>
          <label className="block text-text-secondary text-sm mb-1">Meta Açıklama (max 160 karakter)</label>
          <textarea
            maxLength={160}
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF] resize-none"
          />
          <p className="text-text-secondary text-xs mt-1">{form.description.length}/160</p>
        </div>

        {/* Google Preview */}
        {form.title && (
          <div className="bg-white rounded-lg p-4">
            <p className="text-blue-600 text-lg">{form.title}</p>
            <p className="text-green-700 text-sm">https://digiajans.com/{activeTab === 'home' ? '' : activeTab}</p>
            <p className="text-gray-600 text-sm">{form.description}</p>
          </div>
        )}

        <button className="px-6 py-2 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg text-white font-semibold">
          Kaydet & Yayınla
        </button>
      </div>
    </div>
  )
}

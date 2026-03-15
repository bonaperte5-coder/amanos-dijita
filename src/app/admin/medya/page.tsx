'use client'
import { useState } from 'react'
import { Upload } from 'lucide-react'

export default function MedyaPage() {
  const [dragging, setDragging] = useState(false)

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-white mb-8">Medya Kütüphanesi</h1>

      {/* Upload Area */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false) }}
        className={`glass-card p-12 text-center mb-8 border-2 border-dashed transition-colors ${dragging ? 'border-[#00C6FF] bg-[#00C6FF]/5' : 'border-white/10'}`}
      >
        <Upload className="mx-auto text-text-secondary mb-4" size={40} />
        <p className="text-text-secondary">Görselleri buraya sürükleyin veya</p>
        <label className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg text-white text-sm cursor-pointer">
          Dosya Seç
          <input type="file" accept="image/*" multiple className="hidden" />
        </label>
        <p className="text-text-secondary text-xs mt-2">JPG, PNG, WebP, SVG, GIF — Maks 5MB</p>
      </div>

      {/* Media Grid */}
      <div className="glass-card p-6">
        <p className="text-text-secondary text-center">Henüz görsel yüklenmemiş.</p>
      </div>
    </div>
  )
}

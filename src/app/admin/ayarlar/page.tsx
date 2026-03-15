'use client'
import { useState } from 'react'

export default function AyarlarPage() {
  const [contact, setContact] = useState({ phone: '', email: '', address: '', workingHours: '' })
  const [social, setSocial] = useState({ instagram: '', linkedin: '', twitter: '', facebook: '', tiktok: '' })

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-white mb-8">Genel Ayarlar</h1>

      <div className="space-y-6">
        <div className="glass-card p-6">
          <h2 className="text-white font-semibold mb-4">İletişim Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: 'phone', label: 'Telefon' },
              { key: 'email', label: 'E-posta' },
              { key: 'address', label: 'Adres' },
              { key: 'workingHours', label: 'Çalışma Saatleri' },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-text-secondary text-sm mb-1">{f.label}</label>
                <input
                  type="text"
                  value={contact[f.key as keyof typeof contact]}
                  onChange={e => setContact({ ...contact, [f.key]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-white font-semibold mb-4">Sosyal Medya Linkleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['instagram', 'linkedin', 'twitter', 'facebook', 'tiktok'].map((platform) => (
              <div key={platform}>
                <label className="block text-text-secondary text-sm mb-1 capitalize">{platform}</label>
                <input
                  type="url"
                  value={social[platform as keyof typeof social]}
                  onChange={e => setSocial({ ...social, [platform]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00C6FF]"
                  placeholder={`https://${platform}.com/...`}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] rounded-lg text-white font-bold">
          Kaydet
        </button>
      </div>
    </div>
  )
}

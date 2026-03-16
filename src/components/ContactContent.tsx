'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '0544 531 7980',
    sub: 'Haftaiçi 09:00 — 18:00',
    href: 'tel:+905445317980',
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@amanosdijital.com',
    sub: 'Ortalama 2 saat içinde yanıt',
    href: 'mailto:info@amanosdijital.com',
  },
  {
    icon: MapPin,
    label: 'Konum',
    value: 'İzmir, Türkiye',
    sub: 'Online görüşme de mümkün',
    href: '#',
  },
]

const subjects = [
  'Web Sitesi Kurma',
  'Logo & Marka Kimliği',
  'SEO & Dijital Pazarlama',
  'Sosyal Medya Yönetimi',
  'Diğer',
]

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* Left — Info */}
        <div className="lg:col-span-2 space-y-5">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="glass-card p-5 flex items-start gap-4 block group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/5 border border-[#0072FF]/15 flex items-center justify-center flex-shrink-0 group-hover:border-[#0072FF]/35 transition-colors">
                <info.icon size={18} className="text-[#0072FF]" />
              </div>
              <div>
                <p className="text-[#8A9BB5] text-xs mb-0.5">{info.label}</p>
                <p className="text-[#0A1628] font-semibold text-sm">{info.value}</p>
                <p className="text-[#8A9BB5] text-xs mt-1">{info.sub}</p>
              </div>
            </a>
          ))}

          {/* Response time */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={15} className="text-[#0072FF]" />
              <span className="text-[#0A1628] font-semibold text-sm">Yanıt Sürelerimiz</span>
            </div>
            <div className="space-y-2">
              {[
                { label: 'E-posta', value: '~2 saat' },
                { label: 'Telefon', value: 'Anında' },
                { label: 'Teklif Hazırlama', value: '24 saat' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-xs">
                  <span className="text-[#5C6E8A]">{r.label}</span>
                  <span className="text-[#0072FF] font-mono font-semibold">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/905445317980"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#25D366]/40 transition-colors">
              <MessageSquare size={18} className="text-[#25D366]" />
            </div>
            <div className="flex-1">
              <p className="text-[#0A1628] font-semibold text-sm">WhatsApp&apos;tan Yaz</p>
              <p className="text-[#8A9BB5] text-xs">Hızlı iletişim için</p>
            </div>
            <ArrowRight size={15} className="text-[#8A9BB5] group-hover:text-[#0072FF] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-3">
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold font-heading text-[#0A1628] mb-1">Mesaj Gönderin</h2>
            <p className="text-[#8A9BB5] text-sm mb-7">Tüm alanları doldurun, en kısa sürede dönüş yapalım.</p>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0072FF]/10 to-[#5B21B6]/5 border border-[#0072FF]/20 flex items-center justify-center mx-auto mb-4 text-3xl text-[#0072FF]">
                  ✓
                </div>
                <h3 className="text-[#0A1628] font-bold font-heading text-xl mb-2">Mesajınız Alındı!</h3>
                <p className="text-[#5C6E8A] text-sm">Ortalama 2 saat içinde geri dönüş yapacağız.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[#0072FF] text-sm hover:underline"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5C6E8A] text-xs font-medium mb-2 tracking-wide uppercase">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input-pro"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5C6E8A] text-xs font-medium mb-2 tracking-wide uppercase">E-posta</label>
                    <input
                      type="email"
                      required
                      placeholder="ornek@mail.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input-pro"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#5C6E8A] text-xs font-medium mb-2 tracking-wide uppercase">Hizmet Türü</label>
                  <select
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="input-pro appearance-none"
                  >
                    <option value="" disabled>Bir hizmet seçin...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#5C6E8A] text-xs font-medium mb-2 tracking-wide uppercase">Mesajınız</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="input-pro resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    Bir hata oluştu. Lütfen tekrar deneyin veya direkt e-posta gönderin.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-shimmer w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-xl text-white font-bold cta-glow hover:from-[#FF7A45] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Mesajı Gönder
                    </>
                  )}
                </button>

                <p className="text-[#8A9BB5] text-xs text-center">
                  Bilgileriniz üçüncü taraflarla paylaşılmaz. Ortalama yanıt süresi 2 saattir.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

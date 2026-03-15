import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-white mb-8">İletişim Mesajları</h1>

      <div className="space-y-3">
        {messages.length === 0 ? (
          <div className="glass-card p-8 text-center text-text-secondary">Henüz mesaj yok.</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`glass-card p-4 ${!msg.isRead ? 'border-[#00C6FF]/30' : ''}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-semibold ${!msg.isRead ? 'text-white' : 'text-text-secondary'}`}>{msg.name}</span>
                    {!msg.isRead && <span className="w-2 h-2 rounded-full bg-[#00C6FF]" />}
                  </div>
                  <p className="text-text-secondary text-sm">{msg.email}</p>
                  <p className="text-text-secondary text-sm font-medium mt-1">{msg.subject}</p>
                  <p className="text-text-secondary text-sm mt-1 line-clamp-2">{msg.message}</p>
                </div>
                <div className="text-right text-xs text-text-secondary whitespace-nowrap">
                  {new Date(msg.createdAt).toLocaleDateString('tr-TR')}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

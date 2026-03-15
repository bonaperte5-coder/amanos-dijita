// Amanos Dağları'ndan ilham alan minimal dağ silüeti logosu
export default function AmanosLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="peakGrad" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#0058FF" />
        </linearGradient>
        <linearGradient id="peakGradMid" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0058FF" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="peakGradFar" x1="0" y1="0" x2="48" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0058FF" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Arka plan dağlar — uzak sıra */}
      <polyline
        points="0,32 8,20 14,26 20,14 26,22 32,16 38,24 44,18 48,22 48,32"
        stroke="url(#peakGradFar)"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Orta plan — ikinci sıra */}
      <polyline
        points="2,32 10,22 16,28 22,16 28,24 34,12 40,20 46,26 48,24 48,32"
        stroke="url(#peakGradMid)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ön plan — ana zirve */}
      <polyline
        points="0,32 6,26 12,30 20,10 28,28 34,20 42,30 48,26 48,32"
        stroke="url(#peakGrad)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ana zirve kar/parlaklık noktası */}
      <circle cx="20" cy="10" r="1.2" fill="#00C6FF" opacity="0.85" />

      {/* Ufuk çizgisi */}
      <line
        x1="0" y1="32" x2="48" y2="32"
        stroke="url(#peakGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

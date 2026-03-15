// Titus Tüneli'nden ilham alan logo — Roma kemer mimarisi
export default function TitusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="archGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#0058FF" />
        </linearGradient>
        <linearGradient id="archGradDim" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0058FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Dış kemer — tünel girişi */}
      <path
        d="M4 30 L4 16 A14 14 0 0 1 32 16 L32 30"
        stroke="url(#archGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* İç kemer — derinlik hissi */}
      <path
        d="M8 30 L8 18 A10 10 0 0 1 28 18 L28 30"
        stroke="url(#archGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />

      {/* En iç kemer — perspektif */}
      <path
        d="M12 30 L12 20 A6 6 0 0 1 24 20 L24 30"
        stroke="url(#archGradDim)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* Zemin çizgisi */}
      <line
        x1="2" y1="30" x2="34" y2="30"
        stroke="url(#archGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Tünel içi parıltı — ışık noktası */}
      <circle cx="18" cy="22" r="1.5" fill="url(#archGrad)" opacity="0.7" />

      {/* Kemer taşı detayı — kilit taşı */}
      <path
        d="M16 12 L18 9 L20 12"
        stroke="url(#archGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

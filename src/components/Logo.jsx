export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#C4964A" />
      <path
        d="M9 33 L16 13 L22 27 L28 13 L35 33"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="22" cy="12" r="3.5" fill="white" opacity="0.92" />
    </svg>
  )
}

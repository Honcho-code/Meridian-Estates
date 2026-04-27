import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

const ICONS = {
  success: <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />,
  error:   <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />,
  info:    <Info size={16} className="text-gold shrink-0 mt-0.5" />,
}

const BORDER = {
  success: 'border-l-emerald-500',
  error:   'border-l-red-500',
  info:    'border-l-gold',
}

export default function Toast({ toast, onRemove }) {
  return (
    <div
      className={`
        flex items-start gap-3 bg-white rounded-xl px-4 py-3.5 shadow-xl
        border-l-4 ${BORDER[toast.type]}
        animate-fade-in pointer-events-auto max-w-sm
      `}
    >
      {ICONS[toast.type]}
      <p className="flex-1 text-sm text-ink leading-relaxed">{toast.message}</p>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-ink-muted hover:text-ink transition-colors mt-0.5"
        aria-label="Dismiss"
      >
        <X size={13} />
      </button>
    </div>
  )
}

export function ToastContainer({ toasts, onRemove }) {
  return (
    <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 pointer-events-none">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onRemove={onRemove} />
      ))}
    </div>
  )
}

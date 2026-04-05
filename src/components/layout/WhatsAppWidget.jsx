import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/33651669161?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mes%20diagnostics%20immobiliers.'

export default function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110 active:scale-95 h-14 w-14 sm:h-16 sm:w-16"
      aria-label="Contactez-moi sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />

      {/* Tooltip desktop */}
      <span className="hidden sm:block absolute right-full mr-3 whitespace-nowrap rounded-[--radius-sm] bg-stone-800 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
        Contactez-moi sur WhatsApp
      </span>
    </a>
  )
}

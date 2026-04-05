import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ show, type = 'success', message, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2"
        >
          <div className={`flex items-center gap-3 rounded-full px-4 py-3 shadow-lg text-sm font-medium text-white ${
            type === 'success' ? 'bg-success' : 'bg-danger'
          }`}>
            {type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            <span>{message}</span>
            <button onClick={onClose} className="ml-2 hover:opacity-80" aria-label="Fermer">
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

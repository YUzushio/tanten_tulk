import { motion } from 'framer-motion'

interface TextAreaProps {
  text: string
  isVisible: boolean
  onNextPage: () => void
  onHide: (fadeOut: boolean) => void
  swipeFrom: 'LEFT' | 'RIGHT'
}

export const TextArea: React.FC<TextAreaProps> = ({ text, isVisible, onNextPage, onHide, swipeFrom }) => {
  const position = swipeFrom === 'LEFT' ? 'left-0' : 'right-0'
  const initialX = swipeFrom === 'LEFT' ? '-100%' : '100%'

  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      animate={{ x: isVisible ? 0 : initialX, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`text-area absolute inset-y-0 w-1/3 bg-gray-800 bg-opacity-80 p-4 overflow-y-auto text-white ${position}`}
    >
      <div className="h-full pb-16">
        <p className="mb-4">{text}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onHide(true)
          onNextPage()
        }}
        className="absolute bottom-4 right-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
      >
        →
      </button>
    </motion.div>
  )
}


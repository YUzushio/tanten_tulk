import { motion } from 'framer-motion'

interface TextAreaProps {
  text: string
  isVisible: boolean
  onNextPage: () => void
}

export const TextArea: React.FC<TextAreaProps> = ({ text, isVisible, onNextPage }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isVisible ? '0%' : '100%' }}
      transition={{ duration: 0.5 }}
      className="absolute right-0 top-0 bottom-0 w-1/3 bg-black bg-opacity-80 text-white p-4 overflow-y-auto"
    >
      <p className="mb-4">{text}</p>
      <button
        onClick={onNextPage}
        className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-4 py-2 rounded"
      >
        →
      </button>
    </motion.div>
  )
}


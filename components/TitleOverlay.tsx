import { motion } from 'framer-motion'

interface TitleOverlayProps {
  title: string
  isVisible: boolean
}

export const TitleOverlay: React.FC<TitleOverlayProps> = ({ title, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-4xl font-serif text-white">{title}</h2>
    </motion.div>
  )
}


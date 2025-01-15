import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TitleOverlayProps {
  title: string
  isVisible: boolean
  onAnimationStart: () => void
  onAnimationComplete: () => void
}

export const TitleOverlay: React.FC<TitleOverlayProps> = ({ 
  title, 
  isVisible, 
  onAnimationStart,
  onAnimationComplete 
}) => {
  useEffect(() => {
    if (isVisible) {
      onAnimationStart()
    }
  }, [isVisible, onAnimationStart])

  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { delay: 0.4, duration: 0.5 }
          }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20"
        >
          <h2 className="text-4xl font-serif text-white">{title}</h2>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


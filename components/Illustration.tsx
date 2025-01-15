import Image from 'next/image'
import { motion } from 'framer-motion'

interface IllustrationProps {
  src: string
  alt: string
}

export const Illustration: React.FC<IllustrationProps> = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      <Image src={src || "/placeholder.svg"} alt={alt} layout="fill" objectFit="cover" />
    </motion.div>
  )
}


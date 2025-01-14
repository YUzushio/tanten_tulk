import { VolumeX, Volume2 } from 'lucide-react'

interface MuteButtonProps {
  isMuted: boolean
  onToggle: () => void
}

export const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 left-4 z-10 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  )
}


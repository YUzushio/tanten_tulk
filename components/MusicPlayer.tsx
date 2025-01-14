import { useEffect, useRef } from 'react'
import { Howl } from 'howler'

interface MusicPlayerProps {
  src: string
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      loop: true,
      volume: 0.5,
    })

    soundRef.current.play()

    return () => {
      if (soundRef.current) {
        soundRef.current.stop()
      }
    }
  }, [src])

  return null
}


import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

interface MusicPlayerProps {
  src: string
  isMuted: boolean
  isPlaying: boolean
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ src, isMuted, isPlaying }) => {
  const soundRef = useRef<Howl | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      loop: true,
      volume: 0.5,
      onload: () => setIsLoaded(true),
    })

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [src])

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.mute(isMuted)
    }
  }, [isMuted])

  useEffect(() => {
    if (isLoaded && soundRef.current) {
      if (isPlaying) {
        soundRef.current.play()
      } else {
        soundRef.current.pause()
      }
    }
  }, [isPlaying, isLoaded])

  return null
}


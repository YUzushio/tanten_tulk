'use client'

import { useState, useEffect } from 'react'
import { Illustration } from '../../components/Illustration'
import { TitleOverlay } from '../../components/TitleOverlay'
import { TextArea } from '../../components/TextArea'
import { MusicPlayer } from '../../components/MusicPlayer'
import { MuteButton } from '../../components/MuteButton'
import { pages } from '../../data/Contents'

export default function StoryPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTitle, setShowTitle] = useState(true)
  const [showText, setShowText] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    // BGMを自動的に開始
    setIsPlaying(true)
  }, [])

  const handleClick = () => {
    if (showTitle) {
      setShowTitle(false)
    } else if (!showText) {
      setShowText(true)
    }
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
      setShowTitle(true)
      setShowText(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="relative w-screen h-screen" onClick={handleClick}>
      <MusicPlayer src="/music/bgm.mp3" isMuted={isMuted} isPlaying={isPlaying} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
      <Illustration src={pages[currentPage].image} alt={pages[currentPage].title} />
      <TitleOverlay title={pages[currentPage].title} isVisible={showTitle} />
      <TextArea
        text={pages[currentPage].text}
        isVisible={showText}
        onNextPage={nextPage}
      />
    </div>
  )
}


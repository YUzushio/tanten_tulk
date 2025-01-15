'use client'

import { useState, useEffect, useCallback } from 'react'
import { Illustration } from '../../components/Illustration'
import { TitleOverlay } from '../../components/TitleOverlay'
import { TextArea } from '../../components/TextArea'
import { MusicPlayer } from '../../components/MusicPlayer'
import { MuteButton } from '../../components/MuteButton'
import { LanguageSelector } from '../../components/LanguageSelector'
import { pages } from '../../data/Contents'

export default function StoryPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTitle, setShowTitle] = useState(true)
  const [showText, setShowText] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [language, setLanguage] = useState<'ja' | 'en'>('ja')
  const [isTitleAnimating, setIsTitleAnimating] = useState(true)

  useEffect(() => {
    setIsPlaying(true)
  }, [])

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const isTextAreaClick = (event.target as HTMLElement).closest('.text-area') !== null;

    if (!isTitleAnimating) {
      if (!showText && !isTextAreaClick) {
        setShowText(true);
      } else if (showText && !isTextAreaClick) {
        setShowText(false);
      }
    }
  }, [showText, isTitleAnimating]);

  const nextPage = useCallback(() => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1)
      setShowTitle(true)
      setShowText(false)
      setIsTitleAnimating(true)
    }
  }, [currentPage])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  const handleTitleAnimationStart = useCallback(() => {
    setIsTitleAnimating(true)
  }, [])

  const handleTitleAnimationComplete = useCallback(() => {
    setIsTitleAnimating(false)
    setShowTitle(false)
  }, [])

  const handleHideTextArea = useCallback(() => {
    setShowText(false);
  }, []);

  useEffect(() => {
    if (showTitle) {
      const timer = setTimeout(() => {
        setShowTitle(false)
      }, 1700) // 400ms delay + 500ms for fade in + 300ms display + 500ms for fade out
      return () => clearTimeout(timer)
    }
  }, [showTitle])

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-black" onClick={handleClick}>
      <div className="h-10 bg-black z-10 flex justify-end items-center px-4">
        <LanguageSelector 
          language={language} 
          setLanguage={setLanguage}
        />
      </div>
      <div className="flex-grow relative w-full" style={{ aspectRatio: '16/9' }}>
        <MusicPlayer src="/music/bgm.mp3" isMuted={isMuted} isPlaying={isPlaying} />
        <MuteButton 
          isMuted={isMuted} 
          onToggle={toggleMute}
        />
        <Illustration src={pages[currentPage].image} alt={pages[currentPage].title[language]} />
        <TitleOverlay
          title={pages[currentPage].title[language]}
          isVisible={showTitle}
          onAnimationStart={handleTitleAnimationStart}
          onAnimationComplete={handleTitleAnimationComplete}
        />
        <TextArea
          text={pages[currentPage].text[language]}
          isVisible={showText}
          onNextPage={nextPage}
          onHide={handleHideTextArea}
          swipeFrom={pages[currentPage].swipeFrom as 'LEFT' | 'RIGHT'}
        />
      </div>
      <div className="h-10 bg-black z-10"></div>
    </div>
  )
}


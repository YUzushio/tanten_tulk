'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { LanguageSelector } from '../components/LanguageSelector'

export default function SplashPage() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja')
  const content: { [key in 'ja' | 'en']: { warning: string; button: string } } = {
    ja: {
      warning: 'ここから先のコンテンツには音声再生が含まれます。音量にご注意ください。',
      button: '開く'
    },
    en: {
      warning: 'The following content includes audio playback. Please be mindful of your volume.',
      button: 'Open'
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-80 text-white">
      <div className="absolute top-4 right-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      <Image
        src="/placeholder.svg?height=150&width=300"
        alt="Title Logo"
        width={300}
        height={150}
        className="mb-8"
      />
      <p className="text-center mb-6 max-w-md">
        {content[language].warning}
      </p>
      <Link href="/story">
        <Button variant="inverse">{content[language].button}</Button>
      </Link>
    </div>
  )
}


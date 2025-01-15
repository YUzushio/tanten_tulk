import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/Button'

export default function SplashPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/images/title-logo.png"
        alt="タイトルロゴ"
        width={300}
        height={150}
        className="mb-8"
      />
      <p className="text-center mb-6 max-w-md">
        ここから先のコンテンツには音声再生が含まれます。音量にご注意ください。
      </p>
      <Link href="/story">
        <Button>開く</Button>
      </Link>
    </div>
  )
}


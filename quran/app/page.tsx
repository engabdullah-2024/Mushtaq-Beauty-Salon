// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h2 className="text-4xl font-bold mb-4 text-green-700">📖 Quran Clone</h2>
      <p className="text-gray-600 mb-6 max-w-xl">
        Read and listen to the Quran with Arabic text, English translation, and audio. Browse all 114 Surahs from the Holy Quran.
      </p>
      <Link href="/surah">
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          Start Reading
        </button>
      </Link>
    </div>
  )
}

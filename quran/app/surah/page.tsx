// app/surah/page.tsx
import Link from 'next/link'

interface Surah {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
}

async function getSurahs() {
  const res = await fetch('https://api.alquran.cloud/v1/surah')
  const data = await res.json()
  return data.data as Surah[]
}

export default async function SurahPage() {
  const surahs = await getSurahs()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {surahs.map((surah) => (
        <Link key={surah.number} href={`/surah/${surah.number}`}>
          <div className="bg-white shadow rounded-xl p-4 hover:bg-green-50">
            <h3 className="text-lg font-bold text-green-700">{surah.englishName}</h3>
            <p className="text-sm text-gray-500">{surah.englishNameTranslation}</p>
            <p className="text-right text-xl text-black">{surah.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

// app/surah/[id]/page.tsx
interface Ayah {
  number: number
  text: string
  audio: string
  numberInSurah: number
  juz: number
}

async function getAyahs(id: string) {
  const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
  const data = await res.json()
  return data.data.ayahs as Ayah[]
}

export default async function SurahDetail({ params }: { params: { id: string } }) {
  const ayahs = await getAyahs(params.id)

  return (
    <div className="space-y-4 mt-6">
      {ayahs.map((ayah) => (
        <div key={ayah.number} className="bg-white p-4 rounded-xl shadow">
          <p className="text-lg text-right font-semibold">{ayah.text}</p>
          <audio controls className="w-full mt-2">
            <source src={ayah.audio} type="audio/mp3" />
          </audio>
        </div>
      ))}
    </div>
  )
}

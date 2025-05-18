import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Surah = () => {
  const { number } = useParams()
  const [surahData, setSurahData] = useState(null)

  useEffect(() => {
    const fetchSurah = async () => {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}`)
      const data = await res.json()
      setSurahData(data.data)
    }
    fetchSurah()
  }, [number])

  if (!surahData) return <p className="text-center mt-10">Loading Surah...</p>

  return (
    <div>
     
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-700">{surahData.englishName}</h2>
          <p className="text-gray-600">{surahData.englishNameTranslation}</p>
          <p className="text-3xl font-arabic mt-2">{surahData.name}</p>
        </div>
        <div className="space-y-6">
          {surahData.ayahs.map((ayah) => (
            <div key={ayah.number} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <p className="text-lg text-right font-arabic leading-relaxed">{ayah.text}</p>
              <p className="text-sm text-gray-500 mt-2 text-left">Verse: {ayah.numberInSurah}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Surah

import React from 'react';
import { useEffect, useState } from 'react'

import SurahCard from '../components/SurahCard '
import SearchBar from '../components/SearchBar '

const Home = () => {
  const [surahs, setSurahs] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchSurahs = async () => {
      const res = await fetch('https://api.alquran.cloud/v1/surah')
      const data = await res.json()
      setSurahs(data.data)
    }
    fetchSurahs()
  }, [])

  const filteredSurahs = surahs.filter((surah) =>
    surah.englishName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      
      <div className="max-w-6xl mx-auto px-4 py-10">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSurahs.map((surah) => (
            <SurahCard key={surah.number} surah={surah} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

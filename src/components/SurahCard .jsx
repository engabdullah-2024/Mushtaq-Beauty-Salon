import React from 'react';
import { Link } from 'react-router-dom'

const SurahCard = ({ surah }) => {
  return (
    <Link to={`/surah/${surah.number}`} className="transform hover:scale-105 transition duration-300">
      <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl text-center">
        <h3 className="text-xl font-bold text-green-700">{surah.englishName}</h3>
        <p className="text-sm text-gray-500 mb-1">{surah.englishNameTranslation}</p>
        <p className="text-lg font-semibold text-gray-800">{surah.name}</p>
        <p className="text-xs text-gray-400 mt-2">Verses: {surah.numberOfAyahs}</p>
      </div>
    </Link>
  )
}

export default SurahCard

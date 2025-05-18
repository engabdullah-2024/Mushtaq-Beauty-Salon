// Surah.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Surah = () => {
  const { number } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await fetch(`https://api.quran.gading.dev/surah/${number}`);
        const data = await response.json();
        setSurah(data.data);
      } catch (error) {
        console.error('Failed to fetch Surah:', error);
      }
    };

    fetchSurah();
  }, [number]);

  if (!surah) {
    return <div className="text-center py-10">Loading Surah...</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">{surah.name.long}</h2>
        <p className="text-gray-700 text-lg mt-2">
          English: {surah.name.transliteration?.en}
        </p>
        <p className="text-sm text-gray-600">
          Revelation: {surah.revelation?.en} | Verses: {surah.numberOfVerses}
        </p>
      </div>

      <div className="space-y-6">
        {surah.verses.map((ayah) => (
          <div key={ayah.number.inSurah} className="bg-white p-4 rounded shadow">
            <p className="text-right text-2xl font-arabic">{ayah.text.arab}</p>
            <p className="mt-2 text-gray-700 italic">{ayah.translation.en}</p>

            {/* Audio player */}
            <audio controls className="mt-2 w-full">
              <source src={ayah.audio.primary} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surah;

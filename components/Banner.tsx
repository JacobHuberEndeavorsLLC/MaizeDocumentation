// components/Banner.tsx
import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [version, setVersion] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fetch the version when the component mounts
    fetch('https://api.github.com/repos/cobmin/maize/releases')
      .then(res => res.json())
      .then(releases => {
        if (releases && releases.length > 0) {
          setVersion(releases[0].tag_name);
        }
      })
      .catch(console.error);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-[#21a238] text-white text-sm font-bold px-4 py-2 flex items-center">
      <div className="flex-grow text-center">
        <a href={`https://github.com/cobmin/Maize/releases/tag/${version}`} target="_blank" rel="noopener noreferrer">
          Maize {version} is out 🌽 Download now ✅
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="bg-transparent text-white"
      >
        ✕
      </button>
    </div>
  );
};

export default Banner;
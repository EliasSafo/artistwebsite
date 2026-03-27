import React from 'react';
import { useDocumentTitle } from '../hooks';
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';

export const Home: React.FC = () => {
  useDocumentTitle('Malaïka - Official Website');

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative overflow-hidden bg-dark-bg min-h-screen h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}Pictures/MLK%2027_Original.PNG)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark-bg/20" aria-hidden="true"></div>
        {/* Social links moved to bottom right */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          <div className="flex flex-col gap-3 bg-dark-bg/80 p-3 rounded-xl shadow-lg">
            <a href="https://instagram.com/malaikamusic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="w-8 h-8 text-white hover:text-pink-400 transition" />
            </a>
            <a href="https://tiktok.com/@malaikamusic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="w-8 h-8 text-white hover:text-black transition" />
            </a>
            <a href="https://open.spotify.com/artist/3gdZY0Ui68OFFeZ27EpGZo" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
              <FaSpotify className="w-8 h-8 text-white hover:text-green-400 transition" />
            </a>
            <a href="http://youtube.com/@official.malaïka" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="w-8 h-8 text-white hover:text-red-500 transition" />
            </a>
            <a href="https://music.apple.com/de/artist/malaïka/1779775258?l=en-GB" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
              <FaApple className="w-8 h-8 text-white hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

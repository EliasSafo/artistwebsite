import React from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { Card } from '../components/Card.tsx';

export const About: React.FC = () => {
  useDocumentTitle('About - Malaïka');

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle>About Malaïka</SectionTitle>

      {/* Press Photo */}
      <div className="mb-12">
        <img
          src={`${import.meta.env.BASE_URL}Pictures/EMZ_3320_Original.jpg`}
          alt="Malaïka press photo"
          className="w-full h-96 object-cover object-top md:object-[center_30%] rounded-xl shadow-2xl"
        />
      </div>

      {/* Short Bio */}
      <Card className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Bio</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Malaïka Naa Lamley Aryee-Boi (stage name Malaïka) is a Ghanaian-German-Cameroonian singer and creative currently based in Accra.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Her passion for music started very early in life, shaped heavily by her parents’ love for everything from soul, funk and R&B to zouk, makossa and afrobeat.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          She is moved by music she describes as ‘feeling like a warm hug,’ having been influenced by soulful women artists such as Jill Scott, India Arie & Cleo Sol.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Malaïka explores a sound that is soft and honest and free, a reflection of the world she would like to see.
        </p>
      </Card>
    </div>
  );
};

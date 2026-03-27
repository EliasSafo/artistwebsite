import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ReleaseCard } from '../components/ReleaseCard.tsx';
import { fetchMusicReleases } from '../data/loadMusic';
import { Release } from '../types';

export const Music: React.FC = () => {
  useDocumentTitle('Music - malaïka');

  const [filter, setFilter] = useState<'all' | 'album' | 'single' | 'ep'>('all');
  const [allReleases, setAllReleases] = useState<Release[]>([]);
  const [filteredReleases, setFilteredReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchMusicReleases()
      .then((releases) => {
        setAllReleases(releases);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load music releases.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (filter === 'all') {
        setFilteredReleases(allReleases);
      } else {
        setFilteredReleases(allReleases.filter((release) => release.type === filter));
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [filter, allReleases]);

  const filterButtons: { label: string; value: typeof filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Albums', value: 'album' },
    { label: 'Singles', value: 'single' },
    { label: 'EPs', value: 'ep' },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle subtitle="Stream and download the latest tracks">
        Discography
      </SectionTitle>

      <div className="flex flex-wrap gap-3 mb-8">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setFilter(button.value)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === button.value
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
            }`}
            aria-pressed={filter === button.value}
          >
            {button.label}
          </button>
        ))}
      </div>

      {loading && <p className="text-gray-400 text-lg">Loading releases...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      {!loading && !error && filteredReleases.length === 0 && (
        <p className="text-gray-400 text-lg">No releases found in this category.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredReleases.map((release) => (
          <ReleaseCard key={release.id || release.slug} release={release} />
        ))}
      </div>
    </div>
  );
};
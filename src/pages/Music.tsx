import React, { useState, useEffect, useMemo } from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ReleaseCard } from '../components/ReleaseCard.tsx';
import { getMusicReleases } from '../data/loadMusic.ts';
import { Release } from '../types';

export const Music: React.FC = () => {
  useDocumentTitle('Music - MALAIKA');

  const [filter, setFilter] = useState<'all' | 'album' | 'single' | 'ep'>('all');
  const [filteredReleases, setFilteredReleases] = useState<(Release & { slug: string })[]>([]);
  const [loading, setLoading] = useState(true);

  const allReleases = useMemo(() => getMusicReleases(), []);

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
  console.log({ allReleases, filteredReleases, loading, filter });
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
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                  aria-pressed={filter === button.value}
              >
                {button.label}
              </button>
          ))}
        </div>

        {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                  <div
                      key={i}
                      className="bg-dark-card rounded-xl h-64 animate-pulse border border-white/5"
                  />
              ))}
            </div>
        ) : filteredReleases.length > 0 ? (
            <div className="space-y-6">
              {filteredReleases.map((release) => (
                  <ReleaseCard key={release.slug} release={release} />
              ))}
            </div>
        ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No releases found in this category.</p>
            </div>
        )}
      </div>
  );
};
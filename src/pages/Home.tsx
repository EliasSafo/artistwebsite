import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks';
import { Button } from '../components/Button.tsx';
import { Card } from '../components/Card.tsx';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { TourDateRow } from '../components/TourDateRow.tsx';
import { MerchItemCard } from '../components/MerchItemCard.tsx';
import { fetchMusicReleases } from '../data/loadMusic';
import { fetchTourDates } from '../data/tour';
import { fetchMerchItems } from '../data/merch';
import { Release, TourDate, MerchItem } from '../types';

export const Home: React.FC = () => {
  useDocumentTitle('Malaïka - Official Website');

  // State for async data
  const [latestRelease, setLatestRelease] = useState<Release | null>(null);
  const [releaseLoading, setReleaseLoading] = useState(true);
  const [releaseError, setReleaseError] = useState<string | null>(null);

  const [upcomingTourDates, setUpcomingTourDates] = useState<TourDate[]>([]);
  const [tourLoading, setTourLoading] = useState(true);
  const [tourError, setTourError] = useState<string | null>(null);

  const [featuredMerch, setFeaturedMerch] = useState<MerchItem[]>([]);
  const [merchLoading, setMerchLoading] = useState(true);
  const [merchError, setMerchError] = useState<string | null>(null);

  useEffect(() => {
    setReleaseLoading(true);
    fetchMusicReleases()
      .then((releases) => {
        if (releases && releases.length > 0) {
          // Sort by releaseDate descending
          const sorted = [...releases].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
          setLatestRelease(sorted[0]);
        }
        setReleaseLoading(false);
      })
      .catch(() => {
        setReleaseError('Failed to load latest release.');
        setReleaseLoading(false);
      });
  }, []);

  useEffect(() => {
    setTourLoading(true);
    fetchTourDates()
      .then((dates) => {
        const now = new Date();
        const upcoming = dates.filter((d: TourDate) => new Date(d.date) >= now)
          .sort((a: TourDate, b: TourDate) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setUpcomingTourDates(upcoming.slice(0, 3));
        setTourLoading(false);
      })
      .catch(() => {
        setTourError('Failed to load tour dates.');
        setTourLoading(false);
      });
  }, []);

  useEffect(() => {
    setMerchLoading(true);
    fetchMerchItems()
      .then((items) => {
        setFeaturedMerch(items.slice(0, 3));
        setMerchLoading(false);
      })
      .catch(() => {
        setMerchError('Failed to load merch.');
        setMerchLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative overflow-hidden bg-gray-900 py-20 md:py-32 flex items-center justify-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}Pictures/DSC04385_Original.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
            Malaïka
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow">
            Electronic music artist blending synthwave, pop, and indie vibes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/music">
              <Button size="lg" variant="primary">
                Listen Now
              </Button>
            </Link>
            <Link to="/tour">
              <Button size="lg" variant="secondary">
                Tour Dates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Latest Release</SectionTitle>
        {releaseLoading ? (
          <Card><p className="text-gray-400 text-center py-8">Loading latest release...</p></Card>
        ) : releaseError ? (
          <Card><p className="text-red-500 text-center py-8">{releaseError}</p></Card>
        ) : latestRelease ? (
          <Card hover>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={latestRelease.coverArt}
                alt={`${latestRelease.title} cover art`}
                className="w-full md:w-64 h-64 object-cover rounded-lg shadow-2xl"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {latestRelease.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6 uppercase tracking-wider">
                  {latestRelease.type} • {new Date(latestRelease.releaseDate).getFullYear()}
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {latestRelease.streamingLinks?.spotify && (
                    <a
                      href={latestRelease.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary">🎧 Spotify</Button>
                    </a>
                  )}
                  {latestRelease.streamingLinks?.apple && (
                    <a
                      href={latestRelease.streamingLinks.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">🍎 Apple Music</Button>
                    </a>
                  )}
                  {latestRelease.streamingLinks?.youtube && (
                    <a
                      href={latestRelease.streamingLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">📺 YouTube</Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ) : null}
      </section>

      {/* Featured Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Featured Video</SectionTitle>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oWGf-00kLTc"
            title="Featured Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle>Upcoming Shows</SectionTitle>
          <Link to="/tour">
            <Button variant="ghost" size="sm">
              View All →
            </Button>
          </Link>
        </div>
        {tourLoading ? (
          <Card><p className="text-gray-400 text-center py-8">Loading tour dates...</p></Card>
        ) : tourError ? (
          <Card><p className="text-red-500 text-center py-8">{tourError}</p></Card>
        ) : upcomingTourDates.length > 0 ? (
          <div className="space-y-4">
            {upcomingTourDates.map((date) => (
              <TourDateRow key={date._id || date.id} tourDate={date} />
            ))}
          </div>
        ) : (
          <Card>
            <p className="text-gray-400 text-center py-8">
              No upcoming shows at the moment. Check back soon!
            </p>
          </Card>
        )}
      </section>

      {/* Featured Merch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle>Featured Merch</SectionTitle>
          <Link to="/merch">
            <Button variant="ghost" size="sm">
              Shop All →
            </Button>
          </Link>
        </div>
        {merchLoading ? (
          <Card><p className="text-gray-400 text-center py-8">Loading merch...</p></Card>
        ) : merchError ? (
          <Card><p className="text-red-500 text-center py-8">{merchError}</p></Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMerch.map((item) => (
              <MerchItemCard
                key={item._id || item.id}
                item={item}
                onAddToCart={() => {
                  window.location.href = '/merch';
                }}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

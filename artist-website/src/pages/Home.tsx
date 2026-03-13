import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { TourDateRow } from '../components/TourDateRow';
import { MerchItemCard } from '../components/MerchItemCard';
import { latestRelease } from '../data/music';
import { upcomingTourDates } from '../data/tour';
import { featuredMerch } from '../data/merch';

export const Home: React.FC = () => {
  useDocumentTitle('MALAIKA - Official Website');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-dark-bg py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            MALAIKA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Electronic music artist blending synthwave, pop, and indie vibes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/music">
              <Button size="lg" variant="primary">
                🎧 Listen Now
              </Button>
            </Link>
            <Link to="/tour">
              <Button size="lg" variant="secondary">
                📅 Tour Dates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Latest Release</SectionTitle>
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
                {latestRelease.streamingLinks.spotify && (
                  <a
                    href={latestRelease.streamingLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">🎧 Spotify</Button>
                  </a>
                )}
                {latestRelease.streamingLinks.apple && (
                  <a
                    href={latestRelease.streamingLinks.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">🍎 Apple Music</Button>
                  </a>
                )}
                {latestRelease.streamingLinks.youtube && (
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
      </section>

      {/* Featured Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Featured Video</SectionTitle>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="NOVA - Latest Music Video"
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
        {upcomingTourDates.length > 0 ? (
          <div className="space-y-4">
            {upcomingTourDates.slice(0, 3).map((date) => (
              <TourDateRow key={date.id} tourDate={date} />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMerch.map((item) => (
            <MerchItemCard
              key={item.id}
              item={item}
              onAddToCart={() => {
                // This will be handled by the Merch page
                window.location.href = '/merch';
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

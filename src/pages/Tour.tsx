import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { TourDateRow } from '../components/TourDateRow.tsx';
import { fetchTourDates } from '../data/tour';
import { TourDate } from '../types';
import { Card } from '../components/Card.tsx';

export const Tour: React.FC = () => {
  useDocumentTitle('Tour Dates - malaïka');
  const [showPast, setShowPast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [upcoming, setUpcoming] = useState<TourDate[]>([]);
  const [past, setPast] = useState<TourDate[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchTourDates()
      .then((dates) => {
        const now = new Date();
        const upcomingDates = dates.filter((d: TourDate) => new Date(d.date) >= now)
          .sort((a: TourDate, b: TourDate) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const pastDates = dates.filter((d: TourDate) => new Date(d.date) < now)
          .sort((a: TourDate, b: TourDate) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setUpcoming(upcomingDates);
        setPast(pastDates);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load tour dates.');
        setLoading(false);
      });
  }, []);

  const displayDates = showPast ? past : upcoming;

  return (
    <div className="min-h-screen">
      {/* Tour Banner with Background Image */}
      <section
        className="relative overflow-hidden bg-dark-bg py-20 md:py-28 flex items-center justify-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}Pictures/EMZ_3625_Original.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark-bg/60" aria-hidden="true"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Tour Dates</h1>
          <p className="text-xl text-gray-200 drop-shadow">Catch Malaïka live on tour and experience the music in person.</p>
        </div>
      </section>

      <SectionTitle subtitle="Catch malaïka live on tour">
        Tour Dates
      </SectionTitle>

      {/* Toggle Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setShowPast(false)}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            !showPast
              ? 'bg-primary text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
          aria-pressed={!showPast}
        >
          Upcoming ({upcoming.length})
        </button>
        <button
          onClick={() => setShowPast(true)}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            showPast
              ? 'bg-primary text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
          aria-pressed={showPast}
        >
          Past ({past.length})
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400 text-lg">Loading tour dates...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : displayDates.length === 0 ? (
        <p className="text-gray-400 text-lg">No tour dates found.</p>
      ) : (
        <div className="space-y-6">
          {displayDates.map((tourDate) => (
            <TourDateRow key={tourDate._id || tourDate.id} tourDate={tourDate} />
          ))}
        </div>
      )}

      {/* Newsletter Signup */}
      {!showPast && (
        <Card className="mt-12">
          <div className="text-center py-8">
            <h3 className="text-white text-2xl font-bold mb-3">
              Never Miss a Show
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get notified when new tour dates are announced
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-dark-bg border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email address"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-medium rounded-lg px-6 py-3 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

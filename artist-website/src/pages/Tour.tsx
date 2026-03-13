import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle';
import { TourDateRow } from '../components/TourDateRow';
import { upcomingTourDates, pastTourDates } from '../data/tour';
import { Card } from '../components/Card';

export const Tour: React.FC = () => {
  useDocumentTitle('Tour Dates - MALAIKA');
  const [showPast, setShowPast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [showPast]);

  const displayDates = showPast ? pastTourDates : upcomingTourDates;

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle subtitle="Catch MALAIKA live on tour">
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
          Upcoming ({upcomingTourDates.length})
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
          Past ({pastTourDates.length})
        </button>
      </div>

      {/* Tour Dates List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-dark-card rounded-lg h-24 animate-pulse border border-white/5"
            />
          ))}
        </div>
      ) : displayDates.length > 0 ? (
        <div className="space-y-4">
          {displayDates.map((date) => (
            <TourDateRow key={date.id} tourDate={date} />
          ))}
        </div>
      ) : (
        <Card>
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-2">
              {showPast ? 'No past shows recorded.' : 'No upcoming shows at the moment.'}
            </p>
            <p className="text-gray-500 text-sm">
              {!showPast && 'Check back soon for new tour announcements!'}
            </p>
          </div>
        </Card>
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

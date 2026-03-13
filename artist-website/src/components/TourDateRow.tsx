import React from 'react';
import { TourDate } from '../types';
import { Button } from './Button';

interface TourDateRowProps {
  tourDate: TourDate;
}

export const TourDateRow: React.FC<TourDateRowProps> = ({ tourDate }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
    };
  };

  const date = formatDate(tourDate.date);

  return (
    <div className="bg-dark-card border border-white/10 rounded-lg p-4 md:p-6 hover:border-primary/50 transition-all group">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Date */}
        <div className="flex-shrink-0 text-center bg-primary/10 rounded-lg p-4 w-20 group-hover:bg-primary/20 transition-colors">
          <div className="text-primary text-xs font-semibold">{date.month}</div>
          <div className="text-white text-2xl font-bold">{date.day}</div>
          <div className="text-gray-400 text-xs">{date.weekday}</div>
        </div>

        {/* Venue Info */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg mb-1">
            {tourDate.city}, {tourDate.country}
          </h3>
          <p className="text-gray-400">{tourDate.venue}</p>
        </div>

        {/* Ticket Button */}
        <div className="flex-shrink-0">
          {tourDate.soldOut ? (
            <div className="px-6 py-3 bg-white/5 rounded-lg text-gray-400 font-medium">
              Sold Out
            </div>
          ) : tourDate.ticketLink ? (
            <a
              href={tourDate.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="md" variant="primary">
                Get Tickets
              </Button>
            </a>
          ) : (
            <div className="px-6 py-3 bg-white/5 rounded-lg text-gray-400 font-medium">
              Past Show
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


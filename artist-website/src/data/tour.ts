import { TourDate } from '../types';

export const tourDates: TourDate[] = [
  {
    id: '1',
    date: '2026-04-15',
    city: 'Los Angeles',
    venue: 'The Greek Theatre',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example1',
  },
  {
    id: '2',
    date: '2026-04-18',
    city: 'San Francisco',
    venue: 'The Fillmore',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example2',
  },
  {
    id: '3',
    date: '2026-04-22',
    city: 'Seattle',
    venue: 'Paramount Theatre',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example3',
    soldOut: true,
  },
  {
    id: '4',
    date: '2026-04-25',
    city: 'Portland',
    venue: 'Crystal Ballroom',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example4',
  },
  {
    id: '5',
    date: '2026-05-01',
    city: 'Denver',
    venue: 'Red Rocks Amphitheatre',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example5',
  },
  {
    id: '6',
    date: '2026-05-05',
    city: 'Chicago',
    venue: 'Riviera Theatre',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example6',
  },
  {
    id: '7',
    date: '2026-05-10',
    city: 'New York',
    venue: 'Terminal 5',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example7',
  },
  {
    id: '8',
    date: '2026-05-14',
    city: 'Boston',
    venue: 'House of Blues',
    country: 'USA',
    ticketLink: 'https://ticketmaster.com/example8',
  },
  {
    id: '9',
    date: '2026-05-18',
    city: 'Toronto',
    venue: 'Danforth Music Hall',
    country: 'Canada',
    ticketLink: 'https://ticketmaster.ca/example9',
  },
  {
    id: '10',
    date: '2026-05-22',
    city: 'Montreal',
    venue: 'MTELUS',
    country: 'Canada',
    ticketLink: 'https://ticketmaster.ca/example10',
  },
  // Past dates
  {
    id: '11',
    date: '2025-12-10',
    city: 'Austin',
    venue: 'Stubb\'s BBQ',
    country: 'USA',
  },
  {
    id: '12',
    date: '2025-11-28',
    city: 'Nashville',
    venue: 'Ryman Auditorium',
    country: 'USA',
  },
];

export const upcomingTourDates = tourDates.filter(
  date => new Date(date.date) >= new Date()
).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

export const pastTourDates = tourDates.filter(
  date => new Date(date.date) < new Date()
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


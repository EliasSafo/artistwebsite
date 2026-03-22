import { TourDate } from '../types';

const SANITY_PROJECT_ID = 'vrrwwb5o';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2023-03-22';
const SANITY_API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

const TOUR_QUERY = encodeURIComponent(`*[_type == "tour"]{..., _id, _createdAt}`);

export async function fetchTourDates() {
  const url = `${SANITY_API_URL}?query=${TOUR_QUERY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch tour dates from Sanity');
  const data = await res.json();
  return data.result;
}

export const upcomingTourDates = fetchTourDates().then((tourDates: TourDate[]) =>
  tourDates.filter((date: TourDate) => new Date(date.date) >= new Date())
    .sort((a: TourDate, b: TourDate) => new Date(a.date).getTime() - new Date(b.date).getTime())
);

export const pastTourDates = fetchTourDates().then((tourDates: TourDate[]) =>
  tourDates.filter((date: TourDate) => new Date(date.date) < new Date())
    .sort((a: TourDate, b: TourDate) => new Date(b.date).getTime() - new Date(a.date).getTime())
);

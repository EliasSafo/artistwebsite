import { Release } from '../types';

// Replace with your actual Sanity project ID and dataset
const SANITY_PROJECT_ID = 'vrrwwb5o';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2023-03-22';
const SANITY_API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

// GROQ query to fetch all music releases
const MUSIC_QUERY = encodeURIComponent(`*[_type == "music"]{..., _id, _createdAt}`);

export async function fetchMusicReleases(): Promise<Release[]> {
  const url = `${SANITY_API_URL}?query=${MUSIC_QUERY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch music releases from Sanity');
  const data = await res.json();
  return data.result as Release[];
}

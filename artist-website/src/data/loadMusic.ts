import matter from 'gray-matter';
import { Release } from '../types';

// Vite will import all markdown files as raw strings
function getMusicReleases(): (Release & { slug: string })[] {
  const modules = import.meta.glob('/content/music/*.md', { as: 'raw', eager: true });
  return Object.entries(modules)
    .map(([filePath, raw]) => {
      const { data, content } = matter(raw as string);
      // Validate required fields
      if (
        typeof data.id === 'string' &&
        typeof data.title === 'string' &&
        (data.type === 'album' || data.type === 'single' || data.type === 'ep') &&
        typeof data.releaseDate === 'string' &&
        typeof data.coverArt === 'string' &&
        typeof data.streamingLinks === 'object'
      ) {
        return {
          id: data.id,
          title: data.title,
          type: data.type,
          releaseDate: data.releaseDate,
          coverArt: data.coverArt,
          streamingLinks: data.streamingLinks,
          tracklist: data.tracklist || [],
          slug: filePath.split('/').pop()?.replace('.md', '') || '',
          content,
        };
      }
      return null;
    })
    .filter(Boolean) as (Release & { slug: string })[];
}

export { getMusicReleases };

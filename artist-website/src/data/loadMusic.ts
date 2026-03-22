import { Release } from '../types';

function getMusicReleases(): (Release & { slug: string })[] {
  const modules = import.meta.glob('/content/music/*.json', {
    query: '?json',
    import: 'default',
    eager: true,
  });

  return Object.entries(modules).map(([filePath, data]) => {
    const release = data as Release;
    const slug = filePath.split('/').pop()?.replace('.json', '') || '';

    return {
      ...release,
      streamingLinks: release.streamingLinks ?? {
        spotify: '',
        apple: '',
        youtube: '',
      },
      slug,
    };
  });
}

export { getMusicReleases };
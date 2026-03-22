import { Release } from '../types';

export const releases: Release[] = [
  {
    id: '1',
    _id: '1',
    title: 'Midnight Dreams',
    type: 'album',
    releaseDate: '2026-01-15',
    coverArt: 'https://images.unsplash.com/photo-1614149162883-504ce0b44d1d?w=400&h=400&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/artist/3gdZY0Ui68OFFeZ27EpGZo',
      apple: 'https://music.apple.com/de/artist/malaïka/1779775258?l=en-GB',
      youtube: 'http://youtube.com/@official.malaïka',
    },
    tracklist: [
      'Intro',
      'Starlight',
      'Midnight Dreams',
      'Lost in Time',
      'Echo Chamber',
      'Neon Nights',
      'Fade Away',
      'Digital Love',
      'Outro'
    ]
  },
  {
    id: '2',
    _id: '2',
    title: 'Electric Hearts',
    type: 'single',
    releaseDate: '2025-11-20',
    coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/artist/3gdZY0Ui68OFFeZ27EpGZo',
      apple: 'https://music.apple.com/de/artist/malaïka/1779775258?l=en-GB',
      youtube: 'http://youtube.com/@official.malaïka',
    }
  },
  {
    id: '3',
    _id: '3',
    title: 'Sunset Boulevard',
    type: 'ep',
    releaseDate: '2025-08-10',
    coverArt: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/artist/3gdZY0Ui68OFFeZ27EpGZo',
      apple: 'https://music.apple.com/de/artist/malaïka/1779775258?l=en-GB',
      youtube: 'http://youtube.com/@official.malaïka',
    },
    tracklist: [
      'Golden Hour',
      'Sunset Boulevard',
      'California Dreaming',
      'Ocean Waves',
      'Coastal Drive'
    ]
  },
  {
    id: '4',
    _id: '4',
    title: 'Neon Lights',
    type: 'single',
    releaseDate: '2025-06-05',
    coverArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/artist/3gdZY0Ui68OFFeZ27EpGZo',
      apple: 'https://music.apple.com/de/artist/malaïka/1779775258?l=en-GB',
      youtube: 'http://youtube.com/@official.malaïka',
    }
  },
  {
    id: '5',
    _id: '5',
    title: 'Origins',
    type: 'album',
    releaseDate: '2024-03-22',
    coverArt: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/artist/3gdZY0Ui68OFFeZ27EpGZo',
      apple: 'https://music.apple.com/de/artist/malaïka/1779775258?l=en-GB',
      youtube: 'http://youtube.com/@official.malaïka',
    },
    tracklist: [
      'Genesis',
      'First Light',
      'Awakening',
      'Journey',
      'Reflections',
      'Horizons',
      'Metamorphosis',
      'Dawn',
      'Origins',
      'New Beginning'
    ]
  }
];

export const latestRelease = releases[0];

import React from 'react';
import { Release } from '../types';
import { Card } from './Card.tsx';
import { Button } from './Button.tsx';

interface ReleaseCardProps {
  release: Release;
}

export const ReleaseCard: React.FC<ReleaseCardProps> = ({ release }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
      <Card hover className="group">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
                src={release.coverArt}
                alt={`${release.title} cover art`}
                className="w-full md:w-48 h-48 object-cover rounded-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-shadow"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {release.title}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {release.type}
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              Released {formatDate(release.releaseDate)}
            </p>

            {release.tracklist && release.tracklist.length > 0 && (
                <div className="mb-4">
                  <p className="text-white font-semibold mb-2">Tracklist:</p>
                  <ol className="text-gray-400 text-sm space-y-1">
                    {release.tracklist.map((track, index) => (
                        <li key={index}>
                          {index + 1}. {track}
                        </li>
                    ))}
                  </ol>
                </div>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
              {release.streamingLinks?.spotify && (
                  <a
                      href={release.streamingLinks.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="secondary">
                      🎧 Spotify
                    </Button>
                  </a>
              )}

              {release.streamingLinks?.apple && (
                  <a
                      href={release.streamingLinks.apple}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="secondary">
                      🍎 Apple Music
                    </Button>
                  </a>
              )}

              {release.streamingLinks?.youtube && (
                  <a
                      href={release.streamingLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="secondary">
                      📺 YouTube
                    </Button>
                  </a>
              )}
            </div>
          </div>
        </div>
      </Card>
  );
};
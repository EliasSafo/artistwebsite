import React from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  useDocumentTitle('About - MALAIKA');

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle>About MALAIKA</SectionTitle>

      {/* Press Photo */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop"
          alt="MALAIKA press photo"
          className="w-full h-96 object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Short Bio */}
      <Card className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Bio</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          MALAIKA is an electronic music artist pushing the boundaries of synthwave, indie pop,
          and alternative soundscapes. Known for dreamy melodies, ethereal vocals, and
          atmospheric production, MALAIKA creates sonic experiences that transport listeners
          to neon-lit dreamscapes.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Since debuting in 2024, MALAIKA has captivated audiences worldwide with critically
          acclaimed releases and electrifying live performances. With millions of streams
          and a rapidly growing fanbase, MALAIKA is one of the most exciting emerging voices
          in electronic music.
        </p>
      </Card>

      {/* Extended Bio */}
      <Card className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">The Story</h3>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Born from a love of 80s synth music and modern electronic production, MALAIKA emerged
            in the underground music scene with a unique sound that bridges nostalgia and innovation.
            The project began in a small bedroom studio, where countless nights were spent crafting 
            the perfect blend of vintage synthesizers and contemporary beats.
          </p>
          <p>
            The debut album "Origins" introduced the world to MALAIKA's signature sound—a mesmerizing
            fusion of pulsing basslines, shimmering synths, and introspective lyrics. The album's
            success led to sold-out shows across North America and festival appearances at major 
            electronic music events.
          </p>
          <p>
            Following up with the "Sunset Boulevard" EP and hit singles like "Electric Hearts" and 
            "Neon Lights," MALAIKA has continued to evolve while staying true to the core aesthetic
            that fans love. The latest album "Midnight Dreams" represents the culmination of this
            artistic journey, featuring MALAIKA's most ambitious and polished work to date.
          </p>
          <p>
            When not in the studio or on tour, MALAIKA is an advocate for mental health awareness
            and environmental sustainability, often incorporating these themes into music and
            public appearances. The future is bright for MALAIKA, with new collaborations, tours,
            and releases on the horizon.
          </p>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">50M+</div>
          <div className="text-gray-400">Streams</div>
        </Card>
        <Card className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">100+</div>
          <div className="text-gray-400">Shows</div>
        </Card>
        <Card className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">5</div>
          <div className="text-gray-400">Releases</div>
        </Card>
        <Card className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">2024</div>
          <div className="text-gray-400">Est.</div>
        </Card>
      </div>

      {/* Press Kit */}
      <Card>
        <h3 className="text-2xl font-bold text-white mb-4">Press / EPK</h3>
        <p className="text-gray-300 mb-6">
          Download the official Electronic Press Kit including high-resolution photos, 
          bio, technical rider, and more.
        </p>
        <a
          href="/press-kit.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">
            📥 Download Press Kit
          </Button>
        </a>
      </Card>
    </div>
  );
};

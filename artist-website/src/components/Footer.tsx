import React from 'react';
import { Link } from 'react-router-dom';
import { socials } from '../data/socials';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (icon: string) => {
    const icons: { [key: string]: string } = {
      instagram: '📷',
      twitter: '🐦',
      tiktok: '🎵',
      spotify: '🎧',
      youtube: '📺',
      apple: '🍎',
    };
    return icons[icon] || '🔗';
  };

  return (
    <footer className="bg-dark-card border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MALAIKA</h3>
            <p className="text-gray-400">
              Electronic music artist blending synthwave, pop, and indie vibes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/music" className="text-gray-400 hover:text-primary transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/tour" className="text-gray-400 hover:text-primary transition-colors">
                  Tour Dates
                </Link>
              </li>
              <li>
                <Link to="/merch" className="text-gray-400 hover:text-primary transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg p-3 transition-all"
                  aria-label={social.platform}
                  title={social.platform}
                >
                  <span className="text-xl">{getSocialIcon(social.icon)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MALAIKA. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

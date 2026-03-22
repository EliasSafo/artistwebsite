import React, { useState } from 'react';
import { useDocumentTitle } from '../hooks';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { Card } from '../components/Card.tsx';
import { Button } from '../components/Button.tsx';
import { socials } from '../data/socials.ts';

export const Contact: React.FC = () => {
  useDocumentTitle('Contact - MALAIKA');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle subtitle="Get in touch for bookings and inquiries">
        Contact
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold text-white mb-4">📧 General Inquiries</h3>
            <a
              href="mailto:info@malaikamusic.com"
              className="text-primary hover:text-primary-light text-lg transition-colors"
            >
              info@malaikamusic.com
            </a>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-4">🎤 Booking</h3>
            <p className="text-gray-300 mb-2">For live performances and events:</p>
            <a
              href="mailto:booking@malaikamusic.com"
              className="text-primary hover:text-primary-light text-lg transition-colors"
            >
              booking@malaikamusic.com
            </a>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-4">💼 Management</h3>
            <p className="text-gray-300 mb-2">Sarah Johnson</p>
            <p className="text-gray-300 mb-2">Stellar Music Management</p>
            <a
              href="mailto:sarah@stellarmusic.com"
              className="text-primary hover:text-primary-light transition-colors"
            >
              sarah@stellarmusic.com
            </a>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-4">🌐 Social Media</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {isSubmitted && (
              <div className="mb-6 bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-300">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-dark-bg border ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-dark-bg border ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full bg-dark-bg border ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>

              <p className="text-gray-400 text-sm text-center">
                * Required fields
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

import type { Destination } from '../types/travel'

/**
 * SAMPLE / DEMO DATA — not for travel decisions.
 * Replace each record with verified text, a real source_url, and a last_verified date.
 */
export const SAMPLE_DESTINATIONS: Destination[] = [
  {
    id: 'yangon',
    name: 'Yangon',
    city: 'Yangon',
    category: 'City',
    short_description:
      '[SAMPLE] Placeholder summary for Yangon. Replace with a verified description.',
    full_description:
      '[SAMPLE] Full destination text has not been verified yet. Do not treat this as travel advice.',
    image_url:
      'https://placehold.co/800x520/1f5c56/faf7f2?text=Yangon%20(sample)',
    map_url: 'https://www.openstreetmap.org/search?query=Yangon',
    source_url: 'https://example.com/sample-placeholder-yangon',
    last_verified: null,
    status: 'sample',
  },
  {
    id: 'bagan',
    name: 'Bagan',
    city: 'Bagan',
    category: 'Heritage',
    short_description:
      '[SAMPLE] Placeholder summary for Bagan. Replace with a verified description.',
    full_description:
      '[SAMPLE] Full destination text has not been verified yet. Do not treat this as travel advice.',
    image_url:
      'https://placehold.co/800x520/164842/faf7f2?text=Bagan%20(sample)',
    map_url: 'https://www.openstreetmap.org/search?query=Bagan%20Myanmar',
    source_url: 'https://example.com/sample-placeholder-bagan',
    last_verified: null,
    status: 'sample',
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    city: 'Mandalay',
    category: 'City',
    short_description:
      '[SAMPLE] Placeholder summary for Mandalay. Replace with a verified description.',
    full_description:
      '[SAMPLE] Full destination text has not been verified yet. Do not treat this as travel advice.',
    image_url:
      'https://placehold.co/800x520/3f6212/faf7f2?text=Mandalay%20(sample)',
    map_url: 'https://www.openstreetmap.org/search?query=Mandalay',
    source_url: 'https://example.com/sample-placeholder-mandalay',
    last_verified: null,
    status: 'sample',
  },
  {
    id: 'inle-lake',
    name: 'Inle Lake',
    city: 'Nyaungshwe',
    category: 'Nature',
    short_description:
      '[SAMPLE] Placeholder summary for Inle Lake. Replace with a verified description.',
    full_description:
      '[SAMPLE] Full destination text has not been verified yet. Do not treat this as travel advice.',
    image_url:
      'https://placehold.co/800x520/1d4ed8/faf7f2?text=Inle%20Lake%20(sample)',
    map_url: 'https://www.openstreetmap.org/search?query=Inle%20Lake',
    source_url: 'https://example.com/sample-placeholder-inle-lake',
    last_verified: null,
    status: 'sample',
  },
]

import type { Metadata } from 'next';
import { GalleryView } from '@/components/gallery/GalleryView';

export const metadata: Metadata = {
  title: 'Operations Hub & Fleet Gallery',
  description:
    'Explore photo and video highlights of Economic Courier Bhilwara: central parcel intake counter, sorting hub operations, and express dispatch fleet.',
  keywords: [
    'economic courier gallery bhilwara',
    'ecs express reels',
    'courier operations bhilwara',
    'textile parcel packaging bhilwara',
    'courier booking counter bhilwara',
    'courier sorting team bhilwara',
    'bhilwara courier photos',
    'economic courier video reels',
    'pur road courier hub',
    'new cloth market courier',
    'courier delivery rajasthan photos',
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Operations Hub & Fleet Gallery | Economic Courier Bhilwara',
    description:
      'Genuine ground operations archive: walk-in intake counter, parcel sorting, textile swatch packaging lab, and express fleet dispatch in Bhilwara.',
    url: '/gallery',
    type: 'website',
    images: [
      {
        url: '/assets/gallery/gallery-operations-hero.webp',
        width: 3072,
        height: 1728,
        alt: 'Economic Courier Bhilwara Central Operations Hub, Air Cargo Flight & Commercial Delivery Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Hub & Fleet Gallery | Economic Courier Bhilwara',
    description:
      'Authentic video reels and verified operations archive from Economic Courier Bhilwara.',
    images: ['/assets/gallery/gallery-operations-hero.webp'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.economiccourierbhilwara.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Operations Gallery',
          item: 'https://www.economiccourierbhilwara.in/gallery',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.economiccourierbhilwara.in/#business',
      name: 'Economic Courier / eCS World Wide Express',
      alternateName: 'Economic Courier Bhilwara',
      image: 'https://www.economiccourierbhilwara.in/assets/gallery/gallery-operations-hero.webp',
      telephone: '+91 89551 44444',
      url: 'https://www.economiccourierbhilwara.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite New Cloth Market',
        addressLocality: 'Bhilwara',
        addressRegion: 'Rajasthan',
        postalCode: '311001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.3444,
        longitude: 74.6366,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '20:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '10:00',
          closes: '14:00',
        },
      ],
    },
    {
      '@type': 'ImageGallery',
      name: 'Economic Courier Bhilwara Operations Gallery',
      description:
        'Ground photographs and real video reels showcasing dispatch operations, parcel sorting, textile packaging, and linehaul fleet at Bhilwara Hub.',
      url: 'https://www.economiccourierbhilwara.in/gallery',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
    },
    {
      '@type': 'VideoObject',
      name: 'Inside the Bhilwara Hub: Counter Intake & Weight Verification',
      description:
        'Direct walk-in intake, calibrated electronic scale verification, and parcel logging at Economic Courier Bhilwara hub opposite New Cloth Market.',
      thumbnailUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-inside-ecs.jpg',
      uploadDate: '2026-11-01T09:30:00+05:30',
      contentUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-1-inside-ecs.mp4',
      embedUrl: 'https://www.economiccourierbhilwara.in/gallery',
      duration: 'PT18S',
      inLanguage: 'hi-IN',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
    },
    {
      '@type': 'VideoObject',
      name: '#TeamECS Ground Crew & Parcel Sorting',
      description:
        'Dedicated courier operations crew sorting domestic and international parcels for evening dispatch in Bhilwara.',
      thumbnailUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-team.jpg',
      uploadDate: '2026-11-01T10:00:00+05:30',
      contentUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-2-team.mp4',
      embedUrl: 'https://www.economiccourierbhilwara.in/gallery',
      duration: 'PT22S',
      inLanguage: 'hi-IN',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
    },
    {
      '@type': 'VideoObject',
      name: 'Industrial Fabric Packaging & Waterproof Sealing',
      description:
        'Specialized textile sample packaging with moisture-proof poly-wrap and strapping for fabric swatches and shade cards.',
      thumbnailUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-packing.jpg',
      uploadDate: '2026-11-01T11:00:00+05:30',
      contentUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-3-packing.mp4',
      embedUrl: 'https://www.economiccourierbhilwara.in/gallery',
      duration: 'PT19S',
      inLanguage: 'hi-IN',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
    },
    {
      '@type': 'VideoObject',
      name: 'Evening Linehaul Dispatch to Western India',
      description:
        'Night express cargo vehicle loading and dispatch connecting Bhilwara to Jaipur, Ahmedabad, Surat, and Mumbai.',
      thumbnailUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-dispatch.jpg',
      uploadDate: '2026-11-01T18:00:00+05:30',
      contentUrl: 'https://www.economiccourierbhilwara.in/assets/social/reel-4-dispatch.mp4',
      embedUrl: 'https://www.economiccourierbhilwara.in/gallery',
      duration: 'PT25S',
      inLanguage: 'hi-IN',
      publisher: {
        '@id': 'https://www.economiccourierbhilwara.in/#business',
      },
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryView />
    </>
  );
}

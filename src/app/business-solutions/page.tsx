import type { Metadata } from 'next';
import { BusinessSolutionsView } from '@/components/business/BusinessSolutionsView';

export const metadata: Metadata = {
  title: 'Commercial & B2B Logistics',
  description:
    'Corporate logistics & commercial courier accounts for Bhilwara mills, manufacturers, and retailers: scheduled pickups, bulk parcel dispatches & trade billing.',
  keywords: [
    'business courier bhilwara',
    'commercial logistics bhilwara',
    'corporate parcel dispatch bhilwara',
    'b2b courier rajasthan',
    'trade account courier bhilwara',
    'economic courier business solutions',
    'riico industrial area courier pickup',
    'commercial freight dispatch bhilwara',
    'bulk parcel shipping bhilwara',
  ],
  alternates: {
    canonical: '/business-solutions',
  },
  openGraph: {
    title: 'Commercial & B2B Logistics | Economic Courier Bhilwara',
    description:
      'Structured courier logistics for Bhilwara commerce: supporting textile weaving mills, garment units, retail merchants, and corporate industrial offices.',
    url: '/business-solutions',
    type: 'website',
    images: [
      {
        url: '/assets/og/economic-courier-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Courier Bhilwara Commercial Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial & B2B Logistics | Economic Courier Bhilwara',
    description:
      'Structured courier logistics for Bhilwara commerce: sample swatches, commercial parcels, and confidential business documents.',
    images: ['/assets/og/economic-courier-social.jpg'],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Bhilwara, Rajasthan, India',
    'geo.position': '25.3444;74.6366',
    ICBM: '25.3444, 74.6366',
  },
};

const businessJsonLd = {
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
          name: 'Business Solutions',
          item: 'https://www.economiccourierbhilwara.in/business-solutions',
        },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'B2B & Commercial Freight Logistics',
      provider: {
        '@type': 'DeliveryService',
        name: 'Economic Courier / eCS World Wide Express',
        url: 'https://www.economiccourierbhilwara.in',
        telephone: '+91 89551 44444',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bhilwara',
      },
      description:
        'Corporate billing and scheduled linehaul pickups for Bhilwara industrial enterprises across RIICO, Hamirgarh, and Pur Road sectors.',
    },
  ],
};

export default function BusinessSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <BusinessSolutionsView />
    </>
  );
}


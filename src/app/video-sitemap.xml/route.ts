import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://www.economiccourierbhilwara.in');

  const videos = [
    {
      title: 'Inside the Bhilwara Hub: Counter Intake & Weight Verification',
      description:
        'Direct walk-in intake, calibrated electronic scale verification, and parcel logging at Economic Courier Bhilwara hub opposite New Cloth Market.',
      thumbnail: `${baseUrl}/assets/social/reel-inside-ecs.jpg`,
      contentUrl: `${baseUrl}/assets/social/reel-1-inside-ecs.mp4`,
      duration: 18,
      pubDate: '2026-11-01T09:30:00+05:30',
    },
    {
      title: 'TeamECS Ground Crew & Parcel Sorting',
      description:
        'Dedicated courier operations crew sorting domestic and international parcels for evening dispatch in Bhilwara.',
      thumbnail: `${baseUrl}/assets/social/reel-team.jpg`,
      contentUrl: `${baseUrl}/assets/social/reel-2-team.mp4`,
      duration: 22,
      pubDate: '2026-11-01T10:00:00+05:30',
    },
    {
      title: 'Industrial Fabric Packaging & Waterproof Sealing',
      description:
        'Specialized textile sample packaging with moisture-proof poly-wrap and strapping for fabric swatches and shade cards.',
      thumbnail: `${baseUrl}/assets/social/reel-packing.jpg`,
      contentUrl: `${baseUrl}/assets/social/reel-3-packing.mp4`,
      duration: 19,
      pubDate: '2026-11-01T11:00:00+05:30',
    },
    {
      title: 'Evening Linehaul Dispatch to Western India',
      description:
        'Night express cargo vehicle loading and dispatch connecting Bhilwara to Jaipur, Ahmedabad, Surat, and Mumbai.',
      thumbnail: `${baseUrl}/assets/social/reel-dispatch.jpg`,
      contentUrl: `${baseUrl}/assets/social/reel-4-dispatch.mp4`,
      duration: 25,
      pubDate: '2026-11-01T18:00:00+05:30',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${baseUrl}/gallery</loc>
${videos
  .map(
    (v) => `    <video:video>
      <video:thumbnail_loc>${v.thumbnail}</video:thumbnail_loc>
      <video:title>${v.title.replace(/&/g, '&amp;')}</video:title>
      <video:description>${v.description.replace(/&/g, '&amp;')}</video:description>
      <video:content_loc>${v.contentUrl}</video:content_loc>
      <video:duration>${v.duration}</video:duration>
      <video:publication_date>${v.pubDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:uploader info="${baseUrl}">Economic Courier Bhilwara</video:uploader>
    </video:video>`
  )
  .join('\n')}
  </url>
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}

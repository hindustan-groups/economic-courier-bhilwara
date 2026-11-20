'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  Film,
  ArrowRight,
  X,
  Maximize2,
  MessageCircle,
  Building2,
  Truck,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  LayoutGrid,
  Rows,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';
import { getMediaUrl } from '@/lib/cloudinary';

// ─── Video Reels Data ──────────────────────────────────────────────────────────
export interface GalleryVideo {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  videoUrl: string;
  posterUrl: string;
  location: string;
}

const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: 'reel-1',
    title: 'Economic Courier Bhilwara Hub Visit',
    tag: 'HUB WALKTHROUGH',
    subtitle: 'Walk-in booking counter & sorting floor opposite New Cloth Market',
    videoUrl: '/assets/social/reel-1-bhilwara-visit.mp4',
    posterUrl: '/assets/social/reel-1-bhilwara-visit.jpg',
    location: 'Opp. New Cloth Market, Bhilwara',
  },
  {
    id: 'reel-2',
    title: 'International Air Cargo & Customs Desk',
    tag: 'GLOBAL EXPRESS',
    subtitle: 'Worldwide air parcel packing, export documents & express courier',
    videoUrl: '/assets/social/reel-2-international.mp4',
    posterUrl: '/assets/social/reel-2-international.jpg',
    location: 'eCS International Desk, Bhilwara',
  },
  {
    id: 'reel-3',
    title: 'Counter Booking & Consignment Handover',
    tag: 'RAILWAY STATION AREA',
    subtitle: 'Consignment weighing, printed docket receipt & booking intake',
    videoUrl: '/assets/social/reel-3-railway-station.mp4',
    posterUrl: '/assets/social/reel-3-railway-station.jpg',
    location: 'Pur Road / Railway Station Sector',
  },
  {
    id: 'reel-4',
    title: 'Textile Fabric Sample & Box Packaging',
    tag: 'COMMERCIAL DISPATCH',
    subtitle: 'Tamper-evident packaging, strapping & evening linehaul dispatch',
    videoUrl: '/assets/social/reel-4-bhilwara-hub.mp4',
    posterUrl: '/assets/social/reel-4-bhilwara-hub.jpg',
    location: 'Central Bhilwara Dispatch Facility',
  },
];

// ─── Photo Gallery Data (Authentic High-Resolution Operations Archive) ────────
export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'hub' | 'textile' | 'fleet';
  imageSrc: string;
  aspect: 'landscape' | 'portrait';
  width: number;
  height: number;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Economic Courier Central Hub Storefront & Walk-in Booking Entrance',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-storefront-day-entrance.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-2',
    title: 'Founder Chandra Shekhar Panecha at Bhilwara Central Counter Desk',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-founder-central-counter-desk.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-3',
    title: 'Hub Main Entrance Facade & Heritage Arch Architecture',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-entrance-facade-lattice.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-4',
    title: 'Pur Road Textile Market Corridor & Central Branch Lane',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-textile-market-corridor-view.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-5',
    title: 'Founder Chandra Shekhar Panecha at Hub Storefront Entrance',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-founder-storefront-entrance.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-6',
    title: 'Official eCS World Wide Express Dispatch Hub Banner & Helplines',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-ecs-dispatch-hub-banner.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-7',
    title: 'Customer Service Reception & Computerized Docket Entry Desk',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-booking-reception-executive-desk.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-8',
    title: 'Founder Chandra Shekhar Panecha — 35+ Years Logistics Leadership',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-founder-textile-market-courtyard.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-9',
    title: 'Consignment Sorting Shelves & Regional Route Pigeonholes',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-sorting-shelves-pigeonholes.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-10',
    title: 'Heavy Consignment Electronic Platform Scale & Staging Bay',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-electronic-platform-scale.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-11',
    title: 'Digital Booking Workstation, Electronic Scale & Docket Generation',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-digital-booking-scale-workstation.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-12',
    title: 'Central Operations Control & Computerized Booking Desk',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-operations-executive-computer-desk.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-13',
    title: 'Textile Sample Bale Staging & Evening Linehaul Dispatch Bay',
    category: 'textile',
    imageSrc: '/assets/gallery/gallery-textile-sample-bale-staging.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-14',
    title: 'Consignment Barcode Verification & Safe Parcel Inspection',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-consignment-barcode-inspection.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-15',
    title: 'Central Hub Booking Courtyard & Express Parcel Intake',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-central-courtyard-intake.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-16',
    title: 'Founder Reviewing Consignment Manifests & Writing Booking Dockets',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-founder-docket-processing.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
  {
    id: 'photo-17',
    title: 'Express Air Waybill Verification & Dispatch Clearance',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-founder-waybill-clearance.webp',
    aspect: 'portrait',
    width: 1200,
    height: 1600,
  },
  {
    id: 'photo-18',
    title: 'Express Courier Handoff & Customer Counter Booking Intake',
    category: 'fleet',
    imageSrc: '/assets/gallery/gallery-express-counter-parcel-handoff.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-19',
    title: 'Authorized Global Courier Network & Service Partner Showcase',
    category: 'fleet',
    imageSrc: '/assets/gallery/gallery-carrier-partner-network-pillar.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-20',
    title: 'High-Visibility Storefront Signage & Walk-in Booking Counter',
    category: 'hub',
    imageSrc: '/assets/gallery/gallery-storefront-signage-angle.webp',
    aspect: 'portrait',
    width: 900,
    height: 1600,
  },
  {
    id: 'photo-21',
    title: 'Express Network Hub & Dedicated Booking Counter Signage',
    category: 'fleet',
    imageSrc: '/assets/gallery/gallery-express-network-counter-signage.webp',
    aspect: 'landscape',
    width: 1600,
    height: 900,
  },
];

// ─── Reusable Editorial Photo Card Component (Pinterest Masonry Card) ─────────
interface EditorialPhotoCardProps {
  photo: GalleryPhoto;
  index: number;
  priority?: boolean;
  onSelect: (index: number) => void;
}

function EditorialPhotoCard({
  photo,
  index,
  priority = false,
  onSelect,
}: EditorialPhotoCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={`View photograph: ${photo.title}`}
      className="group relative block w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/90 hover:border-[#DC2626]/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer select-none text-left p-0 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626]"
    >
      <Image
        src={getMediaUrl(photo.imageSrc, { type: 'image' })}
        alt={photo.title}
        title={photo.title}
        width={photo.width}
        height={photo.height}
        priority={priority || index < 4}
        loading={priority || index < 4 ? undefined : 'lazy'}
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out block"
      />

      {/* Subtle bottom title overlay on mobile / hover on desktop */}
      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-[11px] sm:text-xs text-white font-bold line-clamp-1 leading-snug">
          {photo.title}
        </p>
      </div>

      {/* Pure Editorial Hover Veil & Maximize Icon */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white shadow-md">
          <Maximize2 className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );
}

// ─── Single Video Reel Card Component ─────────────────────────────────────────
interface VideoCardProps {
  video: GalleryVideo;
  activeVideoId: string | null;
  onActivate: (id: string) => void;
}

function VideoCard({ video, activeVideoId, onActivate }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const isActive = activeVideoId === video.id;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      el.muted = isMuted;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          el.muted = true;
          el.play().catch(() => {});
        });
      }
    } else {
      el.pause();
      el.muted = true;
    }
  }, [isActive, isMuted]);

  const handleTogglePlay = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (!isActive) {
      setIsMuted(false);
      onActivate(video.id);
    } else {
      if (isPlaying) {
        el.pause();
      } else {
        el.muted = isMuted;
        el.play().catch(() => {});
      }
    }
  };

  const handleToggleVoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (!isActive) {
      setIsMuted(false);
      onActivate(video.id);
    } else {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      el.muted = nextMuted;
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleTogglePlay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTogglePlay();
        }
      }}
      aria-label={`Play or pause video: ${video.title}`}
      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 transition-all duration-300 cursor-pointer select-none shadow-md hover:shadow-xl hover:-translate-y-1 ${
        isActive && isPlaying
          ? 'border-[#DC2626] ring-2 ring-[#DC2626]/40 shadow-[0_12px_32px_rgba(220,38,38,0.22)]'
          : 'border-slate-800 hover:border-red-400'
      }`}
      style={{ aspectRatio: '9/16' }}
    >
      {/* HTML5 Video */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        poster={video.posterUrl}
        playsInline
        loop
        muted={!isActive || isMuted}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Center Paused Button Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none bg-slate-950/20 transition-all">
          <div className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-current ml-0.5 text-slate-950" />
          </div>
        </div>
      )}

      {/* Sleek Floating Bottom Controls Pill (Pure Icons, Zero Text Tags) */}
      <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between z-10 pointer-events-auto">
        <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-lg">
          <button
            type="button"
            onClick={handleTogglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center cursor-pointer shadow-xs hover:bg-slate-100 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 fill-current text-[#DC2626]" />
            ) : (
              <Play className="w-3 h-3 fill-current ml-0.5 text-slate-950" />
            )}
          </button>

          <button
            type="button"
            onClick={handleToggleVoice}
            aria-label={isMuted || !isActive ? 'Unmute Voice' : 'Mute Voice'}
            className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              isMuted || !isActive
                ? 'bg-slate-800 text-slate-300'
                : 'bg-[#DC2626] text-white'
            }`}
          >
            {isMuted || !isActive ? (
              <VolumeX className="w-3 h-3" />
            ) : (
              <Volume2 className="w-3 h-3" />
            )}
          </button>
        </div>

        <a
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-7 h-7 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#DC2626] transition-colors shadow-lg"
          title="Open on Instagram"
          aria-label="Open on Instagram"
        >
          <InstagramIcon size={13} />
        </a>
      </div>
    </div>
  );
}

// ─── Main GalleryView Component ───────────────────────────────────────────────
export function GalleryView() {
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'photos' | 'hub' | 'fleet'>('all');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mobileLayout, setMobileLayout] = useState<'grid' | 'feed'>('grid');

  // Touch Swipe coordinates for phone gallery sliding
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Filter photos
  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeTab === 'all' || activeTab === 'photos') return true;
    if (activeTab === 'hub') return photo.category === 'hub';
    if (activeTab === 'fleet') return photo.category === 'fleet' || photo.category === 'textile';
    return false;
  });

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
    );
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  };

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  // Touch Swipe Handlers for mobile phone slide experience
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNextPhoto();
    } else if (distance < -minSwipeDistance) {
      handlePrevPhoto();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const showReels = activeTab === 'all' || activeTab === 'reels';
  const showPhotos = activeTab === 'all' || activeTab === 'photos' || activeTab === 'hub' || activeTab === 'fleet';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-16">
      {/* =========================================================================
          1. HERO SECTION WITH PURE PANORAMIC VISUAL BANNER (NO TEXT OVERLAY)
          ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-10 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Full-Width Panoramic Visual Banner Card (Pure Image Only) */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-950 aspect-[16/9]">
            <Image
              src={getMediaUrl('/assets/gallery/gallery-operations-hero.webp', { type: 'image', quality: 100 })}
              alt="Economic Courier & eCS World Wide Express Bhilwara Central Operations Hub, Air Cargo Flight, Commercial Freight Trucks & Fleet Delivery"
              title="Economic Courier Bhilwara — Express Doorstep & Global Air Logistics Network"
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1240px) 100vw, 1560px"
              className="object-cover object-center"
            />
          </div>

          {/* Screen Reader & SEO Heading */}
          <h1 className="sr-only">
            Ground Operations Gallery &amp; Video Reels | Economic Courier Bhilwara
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="sticky top-[67px] sm:top-[71px] lg:top-[75px] z-30 py-2.5 sm:py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-3">
          {/* 1. Mobile App Native Dropdown Picker (Single Sleek Row • No Stacking) */}
          <div className="block sm:hidden w-full">
            <div className="relative flex items-center">
              <div className="absolute left-3.5 flex items-center gap-1.5 pointer-events-none text-[#DC2626]">
                <Filter className="w-4 h-4 text-[#DC2626]" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Filter:
                </span>
              </div>
              <select
                id="gallery-category-select"
                aria-label="Filter gallery media category"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value as 'all' | 'reels' | 'photos' | 'hub' | 'fleet')}
                className="w-full pl-[78px] pr-10 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 border border-slate-200 text-xs font-bold text-slate-900 shadow-2xs appearance-none focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] transition-all cursor-pointer font-sans"
              >
                <option value="all">All Media ({GALLERY_VIDEOS.length + GALLERY_PHOTOS.length})</option>
                <option value="reels">Video Reels ({GALLERY_VIDEOS.length})</option>
                <option value="photos">Photos ({GALLERY_PHOTOS.length})</option>
                <option value="hub">Hub &amp; Office Counter</option>
                <option value="fleet">Fleet &amp; Textiles</option>
              </select>
              <div className="absolute right-3.5 flex items-center pointer-events-none text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 2. Desktop / Tablet Horizontal Category Filter Pills */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Media ({GALLERY_VIDEOS.length + GALLERY_PHOTOS.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reels')}
              className={`shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'reels'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Video Reels ({GALLERY_VIDEOS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photos ({GALLERY_PHOTOS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('hub')}
              className={`shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hub'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Hub &amp; Office</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('fleet')}
              className={`shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'fleet'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Fleet &amp; Textiles</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Bhilwara Operations Archive</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. REAL VIDEO REELS SECTION
          ========================================================================= */}
      {showReels && (
        <section className="py-8 sm:py-12">
          <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                  <Film className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>AUTHENTIC VIDEO FOOTAGE</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1E3A8A] tracking-tight">
                  Featured <span className="text-[#DC2626]">Operations Reels</span>
                </h2>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Tap any reel to play with live voice &bull; Follow on Instagram
              </p>
            </div>

            {/* Video Reels Grid: 2 cols on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {GALLERY_VIDEOS.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  activeVideoId={activeVideoId}
                  onActivate={(id) => setActiveVideoId(id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          4. PHOTO GALLERY SECTION (PREMIUM EDITORIAL PHOTO SHOWCASE)
          ========================================================================= */}
      {showPhotos && (
        <section className="py-8 sm:py-12">
          <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                  <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>OPERATIONS PHOTOGRAPHY ARCHIVE</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1E3A8A] tracking-tight">
                  Ground Operations <span className="text-[#DC2626]">Photos</span> ({filteredPhotos.length})
                </h2>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <p className="text-xs text-slate-500 font-medium hidden sm:block">
                  Tap any photo to view full-screen &bull; Swipe to browse
                </p>

                {/* Mobile View Toggle: 2-Column App Grid vs 1-Column Feed */}
                <div className="flex sm:hidden items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => setMobileLayout('grid')}
                    aria-label="App 2-Column Grid View"
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      mobileLayout === 'grid'
                        ? 'bg-white text-[#DC2626] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>2-Grid</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileLayout('feed')}
                    aria-label="Single Column Feed View"
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      mobileLayout === 'feed'
                        ? 'bg-white text-[#DC2626] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Rows className="w-3.5 h-3.5" />
                    <span>Feed</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pinterest-Style Responsive Multi-Column Masonry Layout */}
            <div
              className={`${
                mobileLayout === 'feed'
                  ? 'columns-1 gap-4'
                  : 'columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 lg:gap-5'
              } [column-fill:_balance]`}
            >
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  className="break-inside-avoid mb-3 sm:mb-4 lg:mb-5 block w-full"
                >
                  <EditorialPhotoCard
                    photo={photo}
                    index={idx}
                    priority={idx < 4}
                    onSelect={setLightboxIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          5. COMPACT BENTO CALL TO ACTION
          ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/30 border border-red-500/40 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>WALK-IN DISPATCH COUNTER</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Visit Our Bhilwara Hub or Book Doorstep Pickup
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Located opposite New Cloth Market. Walk in for instant parcel weighing, tamper-evident
                textile packaging, and daily scheduled dispatches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Prepare Consignment Inquiry</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20have%20an%20inquiry%20regarding%20parcel%20dispatch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PHONE-STYLE FULL-SCREEN PHOTO VIEWER (SWIPE / SLIDE • PURE PHOTOS)
          ========================================================================= */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen photo view"
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setLightboxIndex(null);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setLightboxIndex(null);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-black/96 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar: Counter & Close Only (No text tags, no buttons) */}
          <div
            className="flex items-center justify-between z-20 w-full max-w-6xl mx-auto px-2"
          >
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 font-mono text-xs font-bold tracking-widest border border-white/10">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(filteredPhotos.length).padStart(2, '0')}
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Carousel Area */}
          <div
            className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-auto px-2 sm:px-14 overflow-hidden"
          >
            {/* Desktop Previous Button */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="hidden sm:flex absolute left-2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white items-center justify-center transition-all cursor-pointer border border-white/15 backdrop-blur-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center">
              <Image
                src={getMediaUrl(filteredPhotos[lightboxIndex].imageSrc, { type: 'image' })}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Desktop Next Button */}
            <button
              type="button"
              onClick={handleNextPhoto}
              className="hidden sm:flex absolute right-2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white items-center justify-center transition-all cursor-pointer border border-white/15 backdrop-blur-md"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Touch Navigation Indicators */}
          <div
            className="flex flex-col items-center gap-2 z-20 w-full max-w-md mx-auto pb-1 text-center"
          >
            {/* Mobile Swipe Buttons (For Easy 1-Tap Thumb Navigation) */}
            <div className="flex sm:hidden items-center justify-center gap-6">
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="px-4 py-2 rounded-full bg-white/10 active:bg-white/25 text-white text-xs font-bold flex items-center gap-1 border border-white/15"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <span className="text-[11px] text-white/50 font-medium">Swipe to browse</span>

              <button
                type="button"
                onClick={handleNextPhoto}
                className="px-4 py-2 rounded-full bg-white/10 active:bg-white/25 text-white text-xs font-bold flex items-center gap-1 border border-white/15"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="hidden sm:block text-[11px] text-white/40 font-medium tracking-wide">
              Use arrow keys or click arrows to slide &bull; Tap outside to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryView;

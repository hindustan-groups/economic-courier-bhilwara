import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, Package, MapPin, ArrowRight, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found on Economic Courier Bhilwara.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    {
      title: 'Home',
      description: 'Return to our homepage and explore courier services.',
      href: '/',
      icon: Home,
    },
    {
      title: 'Track Shipment',
      description: 'Check consignment status with your AWB or docket number.',
      href: '/track-shipment',
      icon: Search,
    },
    {
      title: 'Courier & Cargo Services',
      description: 'Priority domestic parcels, worldwide air cargo & freight.',
      href: '/services',
      icon: Package,
    },
    {
      title: 'Textile Sample Logistics',
      description: 'Specialized fabric swatches & shade card shipping from Bhilwara.',
      href: '/textile-logistics',
      icon: Truck,
    },
    {
      title: 'Contact Bhilwara Hub',
      description: 'Reach our Pur Road counter or request doorstep parcel pickup.',
      href: '/contact',
      icon: MapPin,
    },
  ];

  return (
    <main className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626]">
            Error 404 &bull; Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Shipment Route Not Found
          </h1>
          <p className="text-base text-slate-600 max-w-lg mx-auto">
            The page you are looking for might have been relocated, removed, or the URL may have been mistyped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#DC2626]/40 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-500">
          <p>
            Need urgent courier assistance? Call our Pur Road intake counter at{' '}
            <a href="tel:+918955144444" className="font-semibold text-slate-700 hover:text-[#DC2626]">
              +91 89551 44444
            </a>{' '}
            (Opposite New Cloth Market, Bhilwara).
          </p>
        </div>
      </div>
    </main>
  );
}

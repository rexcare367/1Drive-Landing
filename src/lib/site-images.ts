import heroHighway from "@/assets/hero-highway.jpg";

export type SiteImage = {
  src: string;
  alt: string;
};

export type HeroSlide = SiteImage & {
  title: string;
  subtitle: string;
};

/**
 * Central image catalog — every photo ID is unique across the site.
 * Themes: trucks, fleet, roads, drivers, tracking, logistics.
 */
export const siteImages = {
  hero: [
    {
      src: heroHighway,
      alt: "Highway with freight truck",
      title: "1Drive TMS",
      subtitle: "Fleet operations, simplified.",
    },
    {
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",
      alt: "Commercial semi truck on the road",
      title: "On the Road",
      subtitle: "Keep every truck moving with confidence.",
    },
    {
      src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80",
      alt: "Delivery truck fleet parked",
      title: "Your Fleet",
      subtitle: "One view of every vehicle and driver.",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80",
      alt: "Truck driver at the wheel",
      title: "For Drivers",
      subtitle: "Clock in, track trips, request PTO.",
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
      alt: "Warehouse logistics and freight loading",
      title: "For Managers",
      subtitle: "Live GPS, dispatch, and trip planning.",
    },
  ] satisfies HeroSlide[],

  featuresMobile: [
    {
      src: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80",
      alt: "Transit driver ready for the road",
    },
    {
      src: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=800&q=80",
      alt: "Long-haul highway stretch",
    },
  ] satisfies SiteImage[],

  featuresWeb: [
    {
      src: "/gps.png",
      alt: "Web dashboard live fleet map",
    },
    {
      src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
      alt: "Route planning map overview",
    },
    {
      src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
      alt: "Warehouse inventory operations",
    },
    {
      src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80",
      alt: "Freight loading dock activity",
    },
  ] satisfies SiteImage[],

  drivers: [
    {
      src: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80",
      alt: "Semi truck on open interstate",
    },
    {
      src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80",
      alt: "Freight truck traveling at dusk",
    },
    {
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
      alt: "Truck cabin and dashboard view",
    },
    {
      src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      alt: "Delivery van on city route",
    },
  ] satisfies SiteImage[],

  fleet: [
    {
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
      alt: "Palletized freight ready for dispatch",
    },
  ] satisfies SiteImage[],

  tracking: [
    {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      alt: "Travel route planning flat lay",
    },
  ] satisfies SiteImage[],

  about: [
    {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      alt: "Travel route planning flat lay",
    },
    {
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
      alt: "Palletized freight ready for dispatch",
    },
    {
      src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1920&q=80",
      alt: "Forklift moving warehouse freight",
    },
    {
      src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80",
      alt: "Cargo ship and port logistics",
    },
  ] satisfies SiteImage[],

  contact: [
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80",
      alt: "Operations team ready to help",
    },
  ] satisfies SiteImage[],
} as const;

export const APP_URL = "https://app.1drivetms.com/";

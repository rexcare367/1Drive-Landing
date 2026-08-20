import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Bot,
  Brain,
  Briefcase,
  CalendarDays,
  CalendarOff,
  ClipboardCheck,
  Clock,
  FileText,
  Fingerprint,
  Fuel,
  KeyRound,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Navigation,
  PenLine,
  Radio,
  Route,
  ScanLine,
  Shield,
  Smartphone,
  Truck,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import { siteImages, type SiteImage } from "@/lib/site-images";

export type TechItem = {
  name: string;
  note?: string;
};

export type TechGroup = {
  label: string;
  items: TechItem[];
};

export type ProductFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FeatureGroup = {
  label: string;
  features: ProductFeature[];
};

export type Product = {
  id: "dashboard" | "mobile";
  path: string;
  eyebrow: string;
  name: string;
  headline: string;
  headlineAccent: string;
  summary: string;
  audience: string;
  tone: "primary" | "accent";
  heroImages: readonly SiteImage[];
  primaryCta: { label: string; href: string; external?: boolean };
  highlights: ProductFeature[];
  tech: TechGroup[];
  featureGroups: FeatureGroup[];
};

export const dashboardProduct: Product = {
  id: "dashboard",
  path: "/dashboard",
  eyebrow: "Web Dashboard",
  name: "Manager Dashboard",
  headline: "The command center for",
  headlineAccent: "fleet operations",
  summary:
    "A web console for dispatchers and managers — employees, trips, trucks, time, payroll, Motive telematics, and AI in one workspace.",
  audience: "Built for managers, dispatch, and payroll",
  tone: "primary",
  heroImages: siteImages.featuresWeb,
  primaryCta: { label: "Open Dashboard", href: "/dashboard" },
  highlights: [
    {
      icon: MapPin,
      title: "Live fleet visibility",
      description:
        "Watch active drivers and vehicles on the map with Motive live tracking and geofences.",
    },
    {
      icon: Route,
      title: "Trip planning & dispatch",
      description:
        "Build multi-stop trips on Google Maps, assign drivers, and track progress from dispatch.",
    },
    {
      icon: Users,
      title: "Employees & schedules",
      description:
        "Manage the roster, roles, and day-to-day schedules across every contract.",
    },
    {
      icon: Clock,
      title: "Time clock & timesheets",
      description:
        "Review GPS-backed punches, approve timesheets, and keep hours payroll-ready.",
    },
    {
      icon: Wallet,
      title: "Payroll & reports",
      description:
        "Run payroll workflows and export operational reports without leaving the console.",
    },
    {
      icon: Bot,
      title: "AI assistant",
      description:
        "Ask fleet questions against your knowledge base — from policies to trip history.",
    },
  ],
  tech: [
    {
      label: "App platform",
      items: [
        { name: "Next.js 15" },
        { name: "React 19" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Radix UI" },
      ],
    },
    {
      label: "State & forms",
      items: [
        { name: "Redux Toolkit" },
        { name: "Zustand" },
        { name: "React Hook Form" },
        { name: "Zod" },
      ],
    },
    {
      label: "Maps & data",
      items: [
        { name: "Google Maps" },
        { name: "Supabase" },
        { name: "Firebase" },
        { name: "AWS S3" },
      ],
    },
    {
      label: "Backend & AI",
      items: [
        { name: "Next.js API" },
        { name: "Redis / BullMQ" },
        { name: "OpenAI" },
        { name: "Twilio" },
        { name: "SendGrid" },
      ],
    },
  ],
  featureGroups: [
    {
      label: "Fleet & dispatch",
      features: [
        {
          icon: LayoutDashboard,
          title: "Operations overview",
          description:
            "A home dashboard of active work, recent activity, and the metrics managers check first.",
        },
        {
          icon: Route,
          title: "Trips",
          description:
            "Plan routes, group jobs, assign drivers, and follow each stop through completion.",
        },
        {
          icon: Truck,
          title: "Trucks",
          description:
            "Vehicle profiles, maintenance, repair logs, and usage trends in one place.",
        },
        {
          icon: ClipboardCheck,
          title: "Inspections",
          description:
            "Review driver-submitted pre-trip and post-trip inspections from the office.",
        },
      ],
    },
    {
      label: "People & time",
      features: [
        {
          icon: Users,
          title: "Employees",
          description:
            "Directory, roles, and permissions so the right people see the right contracts.",
        },
        {
          icon: CalendarDays,
          title: "Schedules",
          description:
            "Publish and adjust driver schedules without chasing texts or paper.",
        },
        {
          icon: Clock,
          title: "Time clock",
          description:
            "Timesheets tied to GPS punches, trip logs, and approval status.",
        },
        {
          icon: CalendarOff,
          title: "PTO",
          description:
            "Inbox for time-off requests with approve, reject, and remaining-balance context.",
        },
        {
          icon: Briefcase,
          title: "HCR documents",
          description:
            "Highway contract route paperwork stored next to the crews who run it.",
        },
        {
          icon: Shield,
          title: "Safety",
          description:
            "Driver safety scores and coaching context surfaced alongside daily operations.",
        },
      ],
    },
    {
      label: "Motive telematics",
      features: [
        {
          icon: Radio,
          title: "Live tracking",
          description:
            "Motive-connected vehicles on a live map for dispatch while trips are in motion.",
        },
        {
          icon: Truck,
          title: "Vehicles, assets & groups",
          description:
            "Fleet roster from Motive — vehicles, assets, groups, and company records.",
        },
        {
          icon: MapPin,
          title: "Geofences",
          description:
            "Yard and stop boundaries so arrivals and departures are visible to operations.",
        },
        {
          icon: Shield,
          title: "Motive safety",
          description:
            "Safety events, driver behavior, and performance views pulled from Motive.",
        },
      ],
    },
    {
      label: "Finance & communication",
      features: [
        {
          icon: Wallet,
          title: "Payroll",
          description:
            "Review hours and move approved time into payroll without a separate spreadsheet trail.",
        },
        {
          icon: FileText,
          title: "Reports",
          description:
            "Operational exports for leadership — hours, trips, and fleet activity.",
        },
        {
          icon: CalendarDays,
          title: "Calendar",
          description:
            "Shared team calendar for schedules, PTO, and operational milestones.",
        },
        {
          icon: MessageSquare,
          title: "Chat",
          description:
            "In-app messaging between office and drivers without leaving 1Drive.",
        },
        {
          icon: Bot,
          title: "AI assistant",
          description:
            "A fleet assistant that can answer questions against your operational knowledge.",
        },
        {
          icon: Brain,
          title: "AI knowledge",
          description:
            "Upload and organize policies and SOPs the assistant can actually use.",
        },
      ],
    },
  ],
};

export const mobileProduct: Product = {
  id: "mobile",
  path: "/mobile",
  eyebrow: "Driver Mobile App",
  name: "Driver App",
  headline: "Built for the cab,",
  headlineAccent: "not the office",
  summary:
    "A native iOS and Android app for drivers — clock in, run trips, inspect the truck, request PTO, and stay in sync with dispatch.",
  audience: "Built for drivers on the route",
  tone: "accent",
  heroImages: siteImages.featuresMobile,
  primaryCta: { label: "Download the App", href: "/#download" },
  highlights: [
    {
      icon: Clock,
      title: "GPS clock in / out",
      description:
        "Start and end the shift from the phone with location-backed time the office can trust.",
    },
    {
      icon: Navigation,
      title: "Trips & turn-by-turn",
      description:
        "See assigned trips, pick the vehicle, and navigate with Google Maps Navigation.",
    },
    {
      icon: ClipboardCheck,
      title: "Pre-trip & post-trip",
      description:
        "Walk the truck with a guided checklist, photos, and a signature before you roll.",
    },
    {
      icon: CalendarOff,
      title: "PTO from the road",
      description:
        "Request personal or sick leave and track pending, approved, and rejected status.",
    },
    {
      icon: FileText,
      title: "Timesheets & payroll",
      description:
        "Review hours, submit timesheets, and complete payroll steps without paperwork.",
    },
    {
      icon: Bot,
      title: "Fleet assistant",
      description:
        "Ask the in-app AI for help — by text or voice — while you are still on the clock.",
    },
  ],
  tech: [
    {
      label: "App platform",
      items: [
        { name: "Expo 54" },
        { name: "React Native" },
        { name: "TypeScript" },
        { name: "Expo Router" },
      ],
    },
    {
      label: "State & forms",
      items: [
        { name: "Redux" },
        { name: "React Hook Form" },
        { name: "Zod" },
      ],
    },
    {
      label: "Auth",
      items: [
        { name: "Firebase Auth" },
        { name: "Google Sign-In" },
        { name: "Sign in with Apple" },
        { name: "PIN lock" },
      ],
    },
    {
      label: "Location & UX",
      items: [
        { name: "Google Navigation SDK" },
        { name: "Background Geolocation" },
        { name: "Reanimated" },
        { name: "Lottie" },
      ],
    },
  ],
  featureGroups: [
    {
      label: "On the road",
      features: [
        {
          icon: Clock,
          title: "Clock in / out",
          description:
            "Shift start and end from Home, with GPS so timesheets match where the work happened.",
        },
        {
          icon: Truck,
          title: "Assigned trips",
          description:
            "Open today’s trips, select the truck (including Motive vehicles), and stay on the route.",
        },
        {
          icon: Navigation,
          title: "Turn-by-turn navigation",
          description:
            "Google Maps Navigation SDK guidance without bouncing out of the driver app.",
        },
        {
          icon: MapPin,
          title: "Live trip map",
          description:
            "See the current run on the map while dispatch follows the same trip from the dashboard.",
        },
        {
          icon: Fuel,
          title: "Fuel receipts",
          description:
            "Snap and submit fuel receipts so accounting is not waiting on a glove-box pile.",
        },
        {
          icon: ScanLine,
          title: "Scan tag",
          description:
            "Scan on-truck tags to confirm the right vehicle before the wheels move.",
        },
      ],
    },
    {
      label: "Inspections",
      features: [
        {
          icon: ClipboardCheck,
          title: "Pre-trip inspection",
          description:
            "Cab, lights, wheels, fluids, engine, trailer, photos, and a driver signature — in order.",
        },
        {
          icon: PenLine,
          title: "Post-trip inspection",
          description:
            "Close the day with the same checklist plus a post-trip signature on the device.",
        },
      ],
    },
    {
      label: "Time, PTO & pay",
      features: [
        {
          icon: FileText,
          title: "Timesheets",
          description:
            "Review the week, submit hours, and open timesheet detail without a paper log.",
        },
        {
          icon: CalendarOff,
          title: "PTO requests",
          description:
            "Personal leave and sick leave forms, plus pending / approved / rejected queues.",
        },
        {
          icon: Wallet,
          title: "Payroll",
          description:
            "Employee payroll submission and manager approval flows on the same app.",
        },
        {
          icon: Bell,
          title: "Notifications",
          description:
            "Schedule changes, approvals, and trip updates delivered to the phone.",
        },
      ],
    },
    {
      label: "Safety & account",
      features: [
        {
          icon: Shield,
          title: "Safety score",
          description:
            "Motive safety score on Home, with history so coaching is not a surprise.",
        },
        {
          icon: Video,
          title: "Dashcam & training",
          description:
            "Watch assigned dashcam and training videos from the app, not a separate portal.",
        },
        {
          icon: Bot,
          title: "Fleet assistant",
          description:
            "In-app AI chat with optional voice — answers grounded in your fleet knowledge.",
        },
        {
          icon: Fingerprint,
          title: "Google & Apple sign-in",
          description:
            "Firebase auth with Google and Sign in with Apple, plus PIN lock on the device.",
        },
        {
          icon: KeyRound,
          title: "Profile & security",
          description:
            "Update profile, password, phone, and PIN without calling the office.",
        },
        {
          icon: Smartphone,
          title: "Late slips",
          description:
            "File a late slip from the phone when the route does not go as planned.",
        },
      ],
    },
  ],
};

export const products = [dashboardProduct, mobileProduct] as const;

/**
 * Weena Decor - Constants and Configuration
 * Brand colors, contact info, and app-wide constants
 */

// Brand Colors (matching globals.css)
export const BRAND_COLORS = {
  primary: {
    DEFAULT: '#8ec095',
    light: '#a8d1af',
    dark: '#74a67b',
  },
  secondary: {
    DEFAULT: '#d69775',
    light: '#e5b599',
    dark: '#c77d5b',
  },
  neutral: {
    DEFAULT: '#f3ede3',
    light: '#f9f6f0',
    dark: '#e6dccf',
  },
  dark: '#2c2c2c',
  light: '#ffffff',
} as const

// Contact Information
export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+33 6 26 55 22 75',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@weena-decor.fr',
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '45 Rue Fragonard',
  city: 'Bruges',
  postalCode: '33520',
  country: 'France',
  fullAddress: '45 Rue Fragonard, 33520 Bruges, France',
} as const

// Business Information
export const BUSINESS_INFO = {
  name: 'Weena Decor',
  tagline: 'Créer des espaces qui vous ressemblent',
  description:
    'Amoureuse de belles finitions et ambiances harmonieuses, je vous accompagne dans vos projets de peinture, papier peint et décors muraux.',
  shortDescription:
    'Artisan peintre à Bordeaux spécialisée en décoration intérieure.',
  keywords: [
    'peinture bordeaux',
    'décoration intérieure',
    'artisan peintre',
    'papier peint',
    'décors muraux',
    'peinture boiseries',
    'bordeaux',
    'bruges',
    'gironde',
  ],
  interventionZone: 'Bordeaux et agglomération',
  serviceRadius: '30km',
} as const

// Services
export const SERVICES = [
  {
    id: 'peinture-interieure',
    title: 'Peinture Intérieure',
    shortDescription: 'Murs, plafonds, finitions soignées',
    icon: 'paintbrush',
    slug: 'peinture-interieure',
  },
  {
    id: 'peinture-boiseries',
    title: 'Peinture des Boiseries',
    shortDescription: 'Portes, fenêtres, escaliers',
    icon: 'door-closed',
    slug: 'peinture-boiseries',
  },
  {
    id: 'papier-peint',
    title: 'Pose de Papier Peint',
    shortDescription: 'Tous types de revêtements muraux',
    icon: 'wallpaper',
    slug: 'papier-peint',
  },
  {
    id: 'decors-muraux',
    title: 'Décors Muraux',
    shortDescription: "Effets, trompe-l'œil, patines",
    icon: 'palette',
    slug: 'decors-muraux',
  },
] as const

// Navigation Menu
export const NAV_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const

// Social Links (to be updated when available)
export const SOCIAL_LINKS = {
  facebook: '',
  instagram: '',
  linkedin: '',
} as const

// Project Categories
export const PROJECT_CATEGORIES = [
  { id: 'peinture', label: 'Peinture' },
  { id: 'papier-peint', label: 'Papier Peint' },
  { id: 'decor', label: 'Décors Muraux' },
  { id: 'boiseries', label: 'Boiseries' },
] as const

// Form Options
export const PROJECT_TYPES = [
  { value: 'peinture', label: 'Peinture' },
  { value: 'papier-peint', label: 'Papier Peint' },
  { value: 'decor', label: 'Décors Muraux' },
  { value: 'autre', label: 'Autre' },
] as const

export const PROPERTY_TYPES = [
  { value: 'maison', label: 'Maison' },
  { value: 'appartement', label: 'Appartement' },
  { value: 'local-commercial', label: 'Local Commercial' },
] as const

export const PROJECT_CONDITIONS = [
  { value: 'neuf', label: 'Neuf' },
  { value: 'renovation', label: 'Rénovation' },
] as const

export const PROJECT_TIMELINES = [
  { value: 'urgent', label: 'Urgent (< 1 mois)' },
  { value: '1-month', label: '1-2 mois' },
  { value: '3-months', label: '3-6 mois' },
  { value: 'flexible', label: 'Flexible' },
] as const

// Site Configuration
export const SITE_CONFIG = {
  name: BUSINESS_INFO.name,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    github: '',
    twitter: '',
  },
} as const

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
} as const

// Max File Sizes (in bytes)
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
] as const

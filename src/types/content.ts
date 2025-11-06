/**
 * TypeScript types for MDX content
 */

export type ProjectCategory = 'peinture' | 'papier-peint' | 'decor' | 'boiseries'

export type ClientType = 'particulier' | 'professionnel'

export interface PortfolioProject {
  slug: string
  title: string
  description: string
  image: string
  date: string
  category: ProjectCategory
  featured?: boolean
  client?: ClientType | string
  location?: string
  duration?: string
  surface?: string
  tags?: string[]
}

export interface ServiceContent {
  slug: string
  title: string
  description: string
  image: string
  icon?: string
  featured?: boolean
  order?: number
}

export interface Testimonial {
  id: string
  name: string
  location?: string
  project?: string
  rating?: number
  text: string
  image?: string
  date?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  email?: string
  phone?: string
}

// Gallery Image
export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

// Before/After Images
export interface BeforeAfterImages {
  before: string
  after: string
  alt?: string
}

// MDX Component Props Types
export interface GalleryProps {
  images: string[] | GalleryImage[]
  alt?: string
  columns?: 2 | 3 | 4
}

export interface BeforeAfterProps {
  before: string
  after: string
  alt?: string
}

export interface CalloutProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  children: React.ReactNode
}

export interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  href?: string
}

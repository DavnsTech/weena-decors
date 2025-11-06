/**
 * TypeScript types for forms and API
 */

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FormState {
  status: FormStatus
  message?: string
  errors?: Record<string, string[]>
}

export type ProjectType = 'peinture' | 'papier-peint' | 'decor' | 'autre'

export type PropertyType = 'maison' | 'appartement' | 'local-commercial'

export type ProjectCondition = 'neuf' | 'renovation'

export type ProjectTimeline = 'urgent' | '1-month' | '3-months' | 'flexible'

// Contact Form
export interface ContactFormInputs {
  name: string
  email: string
  phone: string
  message: string
}

// Quote Form (Multi-step)
export interface QuoteFormInputs {
  // Step 1: Project type
  projectType: ProjectType

  // Step 2: Project details
  surface?: number
  propertyType?: PropertyType
  rooms?: number
  condition?: ProjectCondition

  // Step 3: Contact information
  name: string
  email: string
  phone: string
  address: string
  city?: string
  postalCode?: string
  timeline: ProjectTimeline

  // Step 4: Description
  description: string

  // RGPD
  gdprConsent: boolean
}

// Quote Form Step Props
export interface QuoteFormStepProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrev: () => void
  onSubmit: () => void
}

// API Request/Response Types
export interface ApiContactRequest {
  type: 'contact' | 'quote'
  name: string
  email: string
  phone: string
  message: string
  projectType?: string
  surface?: number
  address?: string
  city?: string
  postalCode?: string
  propertyType?: string
  rooms?: number
  condition?: string
  timeline?: string
  description?: string
}

export interface ApiResponse<T = Record<string, unknown>> {
  success: boolean
  message?: string
  data?: T
  error?: string
  details?: Record<string, unknown>
}

// Newsletter Subscription
export interface NewsletterFormInputs {
  email: string
  consent: boolean
}

/**
 * Zod validation schemas for forms
 * Used for both client-side and server-side validation
 */
import { z } from 'zod'

// Phone number regex (French format)
const phoneRegex = /^[\d\s\+\(\)-]+$/

/**
 * Contact Form Schema
 * Simple contact form validation
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .min(10, 'Téléphone invalide')
    .regex(phoneRegex, 'Format de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Quote Form Schema (Multi-step)
 * Comprehensive quote request form validation
 */
export const quoteFormSchema = z.object({
  // Step 1: Project type
  projectType: z
    .enum(['peinture', 'papier-peint', 'decor', 'autre'])
    .describe('Veuillez sélectionner un type de projet'),

  // Step 2: Project details
  surface: z.number().min(1, 'La surface doit être supérieure à 0').optional(),
  propertyType: z.enum(['maison', 'appartement', 'local-commercial']).optional(),
  rooms: z.number().min(1, 'Le nombre de pièces doit être au moins 1').optional(),
  condition: z.enum(['neuf', 'renovation']).optional(),

  // Step 3: Contact information
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .min(10, 'Téléphone invalide')
    .regex(phoneRegex, 'Format de téléphone invalide'),
  address: z.string().min(5, 'Adresse invalide'),
  city: z.string().min(2, 'Ville invalide').optional(),
  postalCode: z.string().min(5, 'Code postal invalide').optional(),
  timeline: z.enum(['urgent', '1-month', '3-months', 'flexible']),

  // Step 4: Description
  description: z
    .string()
    .min(20, 'Veuillez décrire votre projet (minimum 20 caractères)'),

  // RGPD Consent
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, 'Vous devez accepter la politique de confidentialité'),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

/**
 * API Contact Request Schema
 * Schema for API route validation
 */
export const apiContactSchema = z.object({
  type: z.enum(['contact', 'quote']),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),

  // Optional fields for quote
  projectType: z.string().optional(),
  surface: z.number().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  propertyType: z.string().optional(),
  rooms: z.number().optional(),
  condition: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().optional(),
})

export type ApiContactRequest = z.infer<typeof apiContactSchema>

/**
 * Newsletter Subscription Schema (future use)
 */
export const newsletterSchema = z.object({
  email: z.string().email('Email invalide'),
  consent: z
    .boolean()
    .refine((val) => val === true, 'Vous devez accepter de recevoir notre newsletter'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

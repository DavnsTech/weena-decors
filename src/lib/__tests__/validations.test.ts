/**
 * Unit tests for Zod validation schemas
 * Tests: contactFormSchema, quoteFormSchema
 */
import { describe, it, expect } from 'vitest'
import { contactFormSchema, quoteFormSchema } from '../validations'

describe('contactFormSchema', () => {
  it('should validate correct contact form data', () => {
    const validData = {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      phone: '+33626552275',
      message: 'Bonjour, je souhaite un devis',
    }

    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject name too short', () => {
    const invalidData = {
      name: 'J',
      email: 'jean@example.com',
      phone: '+33626552275',
      message: 'Message test',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toContain('au moins 2 caractères')
    }
  })

  it('should reject invalid email', () => {
    const invalidData = {
      name: 'Jean Dupont',
      email: 'invalid-email',
      phone: '+33626552275',
      message: 'Message test',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Email invalide')
    }
  })

  it('should reject phone too short', () => {
    const invalidData = {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      phone: '123',
      message: 'Message test',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should reject message too short', () => {
    const invalidData = {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      phone: '+33626552275',
      message: 'Court',
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})

describe('quoteFormSchema', () => {
  it('should validate correct quote form data', () => {
    const validData = {
      projectType: 'peinture' as const,
      surface: 80,
      propertyType: 'appartement' as const,
      rooms: 3,
      condition: 'renovation' as const,
      name: 'Marie Lefebvre',
      email: 'marie@example.com',
      phone: '+33626552275',
      address: '45 Rue Fragonard',
      city: 'Bruges',
      postalCode: '33520',
      timeline: '1-month' as const,
      description: 'Je souhaite repeindre mon appartement avec des couleurs modernes',
      gdprConsent: true,
    }

    const result = quoteFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject invalid project type', () => {
    const invalidData = {
      projectType: 'invalid',
      name: 'Marie Lefebvre',
      email: 'marie@example.com',
      phone: '+33626552275',
      address: '45 Rue Fragonard',
      timeline: '1-month',
      description: 'Description du projet de rénovation complète',
      gdprConsent: true,
    }

    const result = quoteFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should reject surface zero or negative', () => {
    const invalidData = {
      projectType: 'peinture',
      surface: 0,
      name: 'Marie Lefebvre',
      email: 'marie@example.com',
      phone: '+33626552275',
      address: '45 Rue Fragonard',
      timeline: '1-month',
      description: 'Description du projet de rénovation complète',
      gdprConsent: true,
    }

    const result = quoteFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should reject description too short', () => {
    const invalidData = {
      projectType: 'peinture',
      name: 'Marie Lefebvre',
      email: 'marie@example.com',
      phone: '+33626552275',
      address: '45 Rue Fragonard',
      timeline: '1-month',
      description: 'Court',
      gdprConsent: true,
    }

    const result = quoteFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toContain('minimum 20 caractères')
    }
  })

  it('should reject without GDPR consent', () => {
    const invalidData = {
      projectType: 'peinture',
      name: 'Marie Lefebvre',
      email: 'marie@example.com',
      phone: '+33626552275',
      address: '45 Rue Fragonard',
      timeline: '1-month',
      description: 'Description complète du projet de rénovation',
      gdprConsent: false,
    }

    const result = quoteFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should accept optional fields', () => {
    const minimalData = {
      projectType: 'peinture' as const,
      name: 'Marie Lefebvre',
      email: 'marie@example.com',
      phone: '+33626552275',
      address: '45 Rue Fragonard',
      timeline: '1-month' as const,
      description: 'Description complète du projet de rénovation',
      gdprConsent: true,
    }

    const result = quoteFormSchema.safeParse(minimalData)
    expect(result.success).toBe(true)
  })
})

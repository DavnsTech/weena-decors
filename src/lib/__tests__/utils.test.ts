/**
 * Unit tests for utility functions
 * Tests: cn, formatPhoneNumber, formatDate, truncate, slugify
 */
import { describe, it, expect } from 'vitest'
import { cn, formatPhoneNumber, formatDate, truncate, slugify } from '../utils'

describe('cn - className merge utility', () => {
  it('should merge class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('should handle conditional classes', () => {
    expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3')
  })

  it('should merge Tailwind conflicting classes', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6')
  })

  it('should handle empty inputs', () => {
    expect(cn()).toBe('')
  })
})

describe('formatPhoneNumber', () => {
  it('should format French phone number correctly', () => {
    expect(formatPhoneNumber('+33626552275')).toBe('+33 6 26 55 22 75')
  })

  it('should format phone number without + prefix', () => {
    expect(formatPhoneNumber('33626552275')).toBe('+33 6 26 55 22 75')
  })

  it('should return original if format does not match', () => {
    expect(formatPhoneNumber('123')).toBe('123')
  })

  it('should handle phone with spaces', () => {
    expect(formatPhoneNumber('33 6 26 55 22 75')).toBe('+33 6 26 55 22 75')
  })
})

describe('formatDate', () => {
  it('should format date string in French format', () => {
    const result = formatDate('2025-01-15')
    expect(result).toMatch(/15 janvier 2025/)
  })

  it('should format Date object', () => {
    const date = new Date('2025-01-15')
    const result = formatDate(date)
    expect(result).toMatch(/15 janvier 2025/)
  })

  it('should handle different months', () => {
    const result = formatDate('2025-12-25')
    expect(result).toMatch(/25 décembre 2025/)
  })
})

describe('truncate', () => {
  it('should truncate long text', () => {
    expect(truncate('Hello World Test', 10)).toBe('Hello Worl...')
  })

  it('should not truncate short text', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })

  it('should handle exact length', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })

  it('should handle empty string', () => {
    expect(truncate('', 10)).toBe('')
  })
})

describe('slugify', () => {
  it('should convert string to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('should remove accents', () => {
    expect(slugify('Rénovation Appartement')).toBe('renovation-appartement')
  })

  it('should handle special characters', () => {
    expect(slugify("Projet d'été 2025!")).toBe('projet-d-ete-2025')
  })

  it('should remove leading/trailing hyphens', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world')
  })

  it('should handle multiple spaces', () => {
    expect(slugify('Hello    World')).toBe('hello-world')
  })

  it('should handle uppercase', () => {
    expect(slugify('HELLO WORLD')).toBe('hello-world')
  })
})

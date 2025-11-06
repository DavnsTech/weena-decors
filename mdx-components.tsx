/**
 * MDX Components Configuration
 * Define custom components that can be used in MDX files
 */
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components will be added here as we build them
    // Example: Gallery, BeforeAfter, Callout, ServiceCard
    ...components,
  }
}

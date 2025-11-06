/**
 * MDX utilities for content management
 * Parse and retrieve MDX content from filesystem
 */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface MDXMeta {
  slug: string
  title: string
  description: string
  image: string
  date: string
  category: string
  featured?: boolean
  client?: string
  location?: string
  duration?: string
  surface?: string
  tags?: string[]
  [key: string]: unknown
}

/**
 * Get all MDX files from a directory
 * @param directory - 'portfolio' or 'services'
 * @returns Array of MDX metadata sorted by date (newest first)
 */
export async function getAllMDXFiles(
  directory: 'portfolio' | 'services'
): Promise<MDXMeta[]> {
  const dirPath = path.join(contentDirectory, directory)

  // Check if directory exists
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory ${dirPath} does not exist yet`)
    return []
  }

  const files = fs.readdirSync(dirPath)

  const allData = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(dirPath, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        ...data,
      } as MDXMeta
    })

  // Sort by date (newest first)
  return allData.sort((a, b) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get MDX content by slug
 * @param slug - File slug (filename without .mdx extension)
 * @param directory - 'portfolio' or 'services'
 * @returns Object with metadata and content
 */
export async function getMDXContent(
  slug: string,
  directory: 'portfolio' | 'services'
): Promise<{ meta: MDXMeta; content: string }> {
  const fullPath = path.join(contentDirectory, directory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: {
      slug,
      ...data,
    } as MDXMeta,
    content,
  }
}

/**
 * Get featured portfolio projects
 * @returns Array of featured projects
 */
export async function getFeaturedProjects(): Promise<MDXMeta[]> {
  const allProjects = await getAllMDXFiles('portfolio')
  return allProjects.filter((project) => project.featured === true)
}

/**
 * Get projects by category
 * @param category - Project category to filter by
 * @returns Array of projects in the specified category
 */
export async function getProjectsByCategory(category: string): Promise<MDXMeta[]> {
  const allProjects = await getAllMDXFiles('portfolio')
  return allProjects.filter((project) => project.category === category)
}

/**
 * Get all unique categories from portfolio
 * @returns Array of unique category names
 */
export async function getProjectCategories(): Promise<string[]> {
  const allProjects = await getAllMDXFiles('portfolio')
  const categories = allProjects
    .map((project) => project.category)
    .filter((category): category is string => Boolean(category))
  return [...new Set(categories)]
}

/**
 * Get all unique tags from portfolio
 * @returns Array of unique tag names
 */
export async function getProjectTags(): Promise<string[]> {
  const allProjects = await getAllMDXFiles('portfolio')
  const tags = allProjects
    .flatMap((project) => project.tags || [])
    .filter((tag): tag is string => Boolean(tag))
  return [...new Set(tags)]
}

/**
 * Get related projects based on category and tags
 * @param currentSlug - Current project slug to exclude
 * @param category - Project category
 * @param tags - Project tags
 * @param limit - Maximum number of related projects to return
 * @returns Array of related projects
 */
export async function getRelatedProjects(
  currentSlug: string,
  category: string,
  tags: string[] = [],
  limit: number = 3
): Promise<MDXMeta[]> {
  const allProjects = await getAllMDXFiles('portfolio')

  // Exclude current project
  const otherProjects = allProjects.filter((project) => project.slug !== currentSlug)

  // Score each project based on similarity
  const scoredProjects = otherProjects.map((project) => {
    let score = 0

    // Same category = +3 points
    if (project.category === category) score += 3

    // Shared tags = +1 point per tag
    if (project.tags && tags.length > 0) {
      const sharedTags = project.tags.filter((tag) => tags.includes(tag))
      score += sharedTags.length
    }

    return { project, score }
  })

  // Sort by score (highest first) and return top results
  return scoredProjects
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.project)
}

/**
 * Check if MDX content exists
 * @param slug - File slug
 * @param directory - 'portfolio' or 'services'
 * @returns Boolean indicating if file exists
 */
export function mdxFileExists(slug: string, directory: 'portfolio' | 'services'): boolean {
  const fullPath = path.join(contentDirectory, directory, `${slug}.mdx`)
  return fs.existsSync(fullPath)
}

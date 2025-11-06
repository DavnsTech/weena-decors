# 🏛️ ARCHITECTURE - Weena Decor

> **Document de référence pour l'implémentation du site web Weena Decor**  
> Version: 1.0 | Date: 2025-11-06 | Status: ✅ Prêt pour exécution

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Stack technique](#stack-technique)
3. [Structure du projet](#structure-du-projet)
4. [Conventions et patterns](#conventions-et-patterns)
5. [Liste complète des fichiers à créer](#liste-complète-des-fichiers-à-créer)
6. [Configuration des outils](#configuration-des-outils)
7. [Design System](#design-system)
8. [Gestion du contenu (MDX)](#gestion-du-contenu-mdx)
9. [API et Backend](#api-et-backend)
10. [SEO et Performance](#seo-et-performance)
11. [Déploiement](#déploiement)
12. [Workflow de développement](#workflow-de-développement)

---

## Vue d'ensemble

### Contexte Business

**Entreprise:** Weena Decor  
**Secteur:** Décoration en bâtiment, peinture, travaux de peinture, peinture des boiseries  
**Public cible:** Particuliers et professionnels  
**Zone:** Bordeaux et agglomération (33)

**Services:**
- Peinture intérieure (murs, plafonds)
- Peinture des boiseries (portes, fenêtres, escaliers)
- Pose de papier peint
- Décors muraux (effets, trompe-l'œil, patines)
- Conseil en couleurs et matières

### Objectifs du site

1. ✅ Présence en ligne professionnelle et esthétique
2. ✅ Showcase des réalisations (portfolio)
3. ✅ Faciliter les demandes de devis
4. ✅ Refléter les valeurs de qualité et créativité
5. ✅ Optimisation SEO pour le référencement local

### Décisions architecturales clés

| Décision | Choix | Raison |
|----------|-------|--------|
| **Framework** | Next.js 14+ (App Router) | SSG, SEO optimal, performance, Server Components |
| **Styling** | Tailwind CSS | Rapidité, cohérence, customisation facile |
| **Content** | MDX (Markdown + JSX) | Simple, Git-based, pas de DB nécessaire |
| **Forms** | React Hook Form + Zod | Validation robuste, DX excellent |
| **Language** | TypeScript | Type safety, meilleure maintenabilité |
| **Deployment** | Vercel | Intégration native Next.js, déploiement simple |

---

## Stack technique

### Core Technologies

```json
{
  "framework": "Next.js 14+",
  "language": "TypeScript 5+",
  "styling": "Tailwind CSS 3+",
  "content": "MDX (@next/mdx)",
  "forms": "React Hook Form + Zod",
  "icons": "Lucide React",
  "fonts": "next/font (Google Fonts)"
}
```

### Dependencies (package.json)

#### Production

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.2.0",
    
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.10",
    "@tailwindcss/forms": "^0.5.7",
    
    "@next/mdx": "^14.0.0",
    "@mdx-js/loader": "^3.0.0",
    "@mdx-js/react": "^3.0.0",
    
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.4",
    
    "lucide-react": "^0.300.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    
    "resend": "^3.0.0",
    "gray-matter": "^4.0.3",
    "next-mdx-remote": "^4.4.1"
  }
}
```

#### Development

```json
{
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.1.1",
    "prettier-plugin-tailwindcss": "^0.5.10",
    
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

---

## Structure du projet

### Architecture des dossiers

```
/workspace
├── .cursor/
│   └── scratchpad.md                 # Suivi du projet (planning, tasks)
│
├── .github/                          # GitHub Actions (CI/CD)
│   └── workflows/
│       └── deploy.yml
│
├── public/                           # Assets statiques
│   ├── images/
│   │   ├── logo.svg                 # Logo Weena Decor
│   │   ├── og-image.jpg             # Open Graph image
│   │   ├── hero/                    # Images hero section
│   │   │   ├── hero-1.jpg
│   │   │   └── hero-2.jpg
│   │   ├── services/                # Images services
│   │   │   ├── peinture-interieure.jpg
│   │   │   ├── boiseries.jpg
│   │   │   ├── papier-peint.jpg
│   │   │   └── decors-muraux.jpg
│   │   └── portfolio/               # Photos réalisations
│   │       ├── projet-1/
│   │       │   ├── main.jpg
│   │       │   ├── detail-1.jpg
│   │       │   └── detail-2.jpg
│   │       └── ...
│   ├── fonts/                        # Fonts custom (si nécessaire)
│   ├── favicon.ico
│   └── robots.txt                    # Généré ou statique
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # ✅ Root layout (Header/Footer)
│   │   ├── page.tsx                 # ✅ Homepage
│   │   ├── globals.css              # ✅ Styles Tailwind
│   │   ├── not-found.tsx            # ✅ Custom 404 page
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx             # Page liste services
│   │   │
│   │   ├── portfolio/
│   │   │   ├── page.tsx             # Galerie portfolio
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Page projet individuel
│   │   │
│   │   ├── a-propos/
│   │   │   └── page.tsx             # Page à propos
│   │   │
│   │   ├── devis/
│   │   │   └── page.tsx             # Formulaire devis
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx             # Page contact
│   │   │
│   │   ├── mentions-legales/
│   │   │   └── page.tsx             # Mentions légales
│   │   │
│   │   ├── politique-confidentialite/
│   │   │   └── page.tsx             # Politique RGPD
│   │   │
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # API route formulaires
│   │   │
│   │   ├── sitemap.ts               # Génération sitemap.xml
│   │   └── robots.ts                # Génération robots.txt
│   │
│   ├── components/
│   │   ├── ui/                      # Composants UI réutilisables
│   │   │   ├── Button.tsx           # ✅ Bouton avec variants
│   │   │   ├── Card.tsx             # ✅ Card container
│   │   │   ├── Input.tsx            # ✅ Input avec validation
│   │   │   ├── Textarea.tsx         # ✅ Textarea
│   │   │   ├── Badge.tsx            # ✅ Badge/tag
│   │   │   ├── Container.tsx        # ✅ Container layout
│   │   │   └── Loading.tsx          # Loading spinner
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx           # ✅ Header avec navigation
│   │   │   ├── Footer.tsx           # ✅ Footer complet
│   │   │   ├── Navigation.tsx       # ✅ Navigation component
│   │   │   └── MobileMenu.tsx       # Menu mobile hamburger
│   │   │
│   │   ├── sections/                # Sections de pages
│   │   │   ├── Hero.tsx             # Hero section homepage
│   │   │   ├── ServicesPreview.tsx  # Services aperçu
│   │   │   ├── PortfolioPreview.tsx # Portfolio aperçu
│   │   │   ├── AboutPreview.tsx     # À propos aperçu
│   │   │   ├── Testimonials.tsx     # Témoignages
│   │   │   ├── InterventionZone.tsx # Zone d'intervention
│   │   │   └── CTASection.tsx       # Call-to-action sections
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx      # Formulaire contact simple
│   │   │   ├── QuoteForm.tsx        # Formulaire devis multi-étapes
│   │   │   ├── FormStep.tsx         # Composant step pour multi-form
│   │   │   └── ProgressBar.tsx      # Barre de progression
│   │   │
│   │   └── mdx/                     # Composants MDX custom
│   │       ├── Gallery.tsx          # Galerie d'images
│   │       ├── BeforeAfter.tsx      # Slider avant/après
│   │       ├── Callout.tsx          # Encarts info
│   │       └── ServiceCard.tsx      # Card service
│   │
│   ├── content/                     # Contenu Markdown
│   │   ├── services/
│   │   │   ├── peinture-interieure.mdx
│   │   │   ├── peinture-boiseries.mdx
│   │   │   ├── papier-peint.mdx
│   │   │   ├── decors-muraux.mdx
│   │   │   └── conseil-couleurs.mdx
│   │   │
│   │   ├── portfolio/
│   │   │   ├── projet-1-appartement-bordeaux.mdx
│   │   │   ├── projet-2-maison-bruges.mdx
│   │   │   ├── projet-3-local-commercial.mdx
│   │   │   └── ...
│   │   │
│   │   └── about.mdx                # Contenu à propos (optionnel)
│   │
│   ├── lib/                         # Utilities et helpers
│   │   ├── mdx.ts                   # ✅ MDX parsing utilities
│   │   ├── constants.ts             # ✅ Constantes (brand colors, contact)
│   │   ├── utils.ts                 # ✅ Helpers (cn, formatters)
│   │   ├── validations.ts           # ✅ Zod schemas
│   │   └── email.ts                 # Email sending utilities
│   │
│   └── types/                       # TypeScript types
│       ├── content.ts               # Types pour MDX content
│       ├── forms.ts                 # Types formulaires
│       └── index.ts                 # Export central
│
├── .env.local                        # Variables d'environnement (NOT in git)
├── .env.example                      # Template .env
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js                    # ✅ Config Next.js + MDX
├── tailwind.config.ts                # ✅ Config Tailwind + palette
├── tsconfig.json                     # ✅ Config TypeScript
├── postcss.config.js
├── package.json
├── package-lock.json
├── README.md                         # ✅ Documentation projet
└── ARCHITECTURE.md                   # ✅ Ce document
```

---

## Conventions et patterns

### Naming Conventions

#### Fichiers et dossiers

```
✅ kebab-case pour les routes:     app/a-propos/page.tsx
✅ PascalCase pour les composants:  components/ui/Button.tsx
✅ camelCase pour les utilities:    lib/utils.ts
✅ kebab-case pour les MDX:         content/portfolio/projet-1.mdx
```

#### Variables et fonctions

```typescript
// ✅ camelCase pour variables et fonctions
const userName = "Weena"
function getUserData() {}

// ✅ PascalCase pour types et interfaces
interface UserProfile {}
type ServiceType = "peinture" | "papier-peint"

// ✅ UPPER_SNAKE_CASE pour constantes
const MAX_FILE_SIZE = 5000000
const BRAND_COLORS = { ... }
```

### Component Patterns

#### Structure d'un composant

```typescript
// 1. Imports
import { FC } from 'react'
import { cn } from '@/lib/utils'

// 2. Types
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

// 3. Component
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
}) => {
  return (
    <button className={cn(
      'base-styles',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}>
      {children}
    </button>
  )
}

// 4. Styles constants (si nécessaire)
const variantStyles = {
  primary: 'bg-brand-primary text-white',
  secondary: 'bg-brand-secondary text-white',
}
```

#### Server vs Client Components

```typescript
// ✅ Server Component (default)
// app/page.tsx
export default async function HomePage() {
  const posts = await fetchPosts() // Fetch côté serveur
  return <div>...</div>
}

// ✅ Client Component (avec 'use client')
// components/forms/ContactForm.tsx
'use client'

import { useState } from 'react'

export const ContactForm = () => {
  const [name, setName] = useState('')
  // ...
}
```

### File Organization

#### Import order

```typescript
// 1. React imports
import { FC, useState, useEffect } from 'react'

// 2. Next.js imports
import Image from 'next/image'
import Link from 'next/link'

// 3. Third-party imports
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// 4. Internal imports - absolute paths
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { contactSchema } from '@/lib/validations'

// 5. Types
import type { ContactFormData } from '@/types/forms'

// 6. Styles
import './styles.css'
```

### Styling Guidelines

#### Tailwind CSS conventions

```typescript
// ✅ Utiliser cn() pour merge des classes conditionnelles
import { cn } from '@/lib/utils'

<button className={cn(
  'px-4 py-2 rounded-lg transition-colors',
  isActive && 'bg-brand-primary text-white',
  isDisabled && 'opacity-50 cursor-not-allowed'
)} />

// ✅ Extraire les styles répétés dans des constantes
const cardStyles = 'bg-white rounded-lg shadow-md p-6'

// ✅ Responsive avec breakpoints Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />

// ✅ Utiliser les couleurs de marque custom
<div className="bg-brand-primary text-brand-neutral" />
```

### TypeScript Patterns

#### Props avec children

```typescript
interface CardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ title, children, className }) => {
  // ...
}
```

#### Union types pour variants

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  // ...
}
```

#### Types pour API responses

```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}
```

---

## Liste complète des fichiers à créer

### Phase 1: Setup et Configuration (Task 1)

```bash
# Configuration files
✅ package.json
✅ tsconfig.json
✅ next.config.js
✅ tailwind.config.ts
✅ postcss.config.js
✅ .eslintrc.json
✅ .prettierrc
✅ .gitignore
✅ .env.example
✅ .env.local (local only)

# Documentation
✅ README.md
✅ ARCHITECTURE.md
```

### Phase 2: Design System (Task 2)

```bash
# Utilities
src/lib/utils.ts              # cn() function et helpers
src/lib/constants.ts          # Brand colors, contact info

# UI Components
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Input.tsx
src/components/ui/Textarea.tsx
src/components/ui/Badge.tsx
src/components/ui/Container.tsx
src/components/ui/Loading.tsx
```

### Phase 3: Layout Global (Task 3)

```bash
# App Layout
src/app/layout.tsx            # Root layout avec fonts
src/app/globals.css           # Styles Tailwind + custom
src/app/not-found.tsx         # Custom 404

# Layout Components
src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/layout/Navigation.tsx
src/components/layout/MobileMenu.tsx
```

### Phase 4: Homepage (Task 4)

```bash
# Page
src/app/page.tsx              # Homepage principal

# Sections
src/components/sections/Hero.tsx
src/components/sections/ServicesPreview.tsx
src/components/sections/PortfolioPreview.tsx
src/components/sections/AboutPreview.tsx
src/components/sections/Testimonials.tsx
src/components/sections/InterventionZone.tsx
src/components/sections/CTASection.tsx
```

### Phase 5: Pages Statiques (Task 5)

```bash
src/app/services/page.tsx
src/app/a-propos/page.tsx
src/app/contact/page.tsx
src/app/mentions-legales/page.tsx
src/app/politique-confidentialite/page.tsx
```

### Phase 6: Portfolio et MDX (Task 6)

```bash
# Pages Portfolio
src/app/portfolio/page.tsx
src/app/portfolio/[slug]/page.tsx

# MDX Utilities
src/lib/mdx.ts
src/types/content.ts

# MDX Components
src/components/mdx/Gallery.tsx
src/components/mdx/BeforeAfter.tsx
src/components/mdx/Callout.tsx
src/components/mdx/ServiceCard.tsx

# Content Files (exemples)
src/content/portfolio/projet-1-appartement-bordeaux.mdx
src/content/portfolio/projet-2-maison-bruges.mdx
src/content/portfolio/projet-3-local-commercial.mdx
src/content/services/peinture-interieure.mdx
src/content/services/peinture-boiseries.mdx
src/content/services/papier-peint.mdx
src/content/services/decors-muraux.mdx
```

### Phase 7: Formulaires (Task 7)

```bash
# Pages
src/app/devis/page.tsx

# Components
src/components/forms/ContactForm.tsx
src/components/forms/QuoteForm.tsx
src/components/forms/FormStep.tsx
src/components/forms/ProgressBar.tsx

# Validation et types
src/lib/validations.ts
src/types/forms.ts

# API
src/app/api/contact/route.ts
src/lib/email.ts
```

### Phase 8: SEO et Assets (Task 8)

```bash
# SEO Files
src/app/sitemap.ts
src/app/robots.ts

# Images (à ajouter)
public/images/logo.svg
public/images/og-image.jpg
public/images/hero/hero-1.jpg
public/images/services/peinture-interieure.jpg
public/images/services/boiseries.jpg
public/images/services/papier-peint.jpg
public/images/services/decors-muraux.jpg
public/images/portfolio/... (multiples)
public/favicon.ico
```

### Récapitulatif par nombre

```
Total fichiers à créer: ~60-70 fichiers

✅ Configuration: 10 fichiers
✅ Components UI: 7 fichiers
✅ Layout: 4 fichiers
✅ Sections: 7 fichiers
✅ Pages: 8 fichiers
✅ Forms: 4 fichiers
✅ MDX: 4 components + 7-10 content files
✅ API: 2 fichiers
✅ Utils: 5 fichiers
✅ Types: 3 fichiers
✅ Images: 15-20 images
```

---

## Configuration des outils

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // MDX support
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Optional: Analyze bundle
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false
  //   }
  //   return config
  // },
}

// MDX Configuration
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
})

module.exports = withMDX(nextConfig)
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
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
        },
        // Couleurs sémantiques
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### .eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "prefer-const": "warn",
    "no-unused-vars": "warn"
  }
}
```

### .prettierrc

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### .env.example

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Weena Decor"

# Contact Information (public)
NEXT_PUBLIC_CONTACT_EMAIL=contact@weena-decor.fr
NEXT_PUBLIC_CONTACT_PHONE="+33 6 26 55 22 75"
NEXT_PUBLIC_CONTACT_ADDRESS="45 Rue Fragonard, 33520 Bruges"

# Email Service (Resend recommandé - https://resend.com)
# Alternative: SMTP avec Nodemailer
EMAIL_SERVICE_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=noreply@weena-decor.fr
EMAIL_TO=contact@weena-decor.fr

# Google Maps (optionnel)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxxxx

# Analytics (optionnel)
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Ou Plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=weena-decor.fr
```

---

## Design System

### Palette de couleurs

#### Couleurs de marque

```typescript
// src/lib/constants.ts
export const BRAND_COLORS = {
  primary: {
    DEFAULT: '#8ec095',  // Vert sauge - nature, harmonie
    light: '#a8d1af',
    dark: '#74a67b',
  },
  secondary: {
    DEFAULT: '#d69775',  // Terracotta - chaleur, créativité
    light: '#e5b599',
    dark: '#c77d5b',
  },
  neutral: {
    DEFAULT: '#f3ede3',  // Beige clair - douceur, élégance
    light: '#f9f6f0',
    dark: '#e6dccf',
  },
  dark: '#2c2c2c',
  light: '#ffffff',
} as const
```

#### Utilisation dans les composants

```tsx
// Utilisation directe avec Tailwind
<div className="bg-brand-primary text-white" />
<div className="bg-brand-secondary hover:bg-brand-secondary-dark" />
<div className="bg-brand-neutral border border-brand-neutral-dark" />

// States
<button className="bg-brand-primary hover:bg-brand-primary-dark active:bg-brand-primary-dark/90" />
```

### Typographie

#### Configuration des fonts

```typescript
// src/app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

#### Scale typographique

```tsx
// Headings (font-serif)
<h1 className="text-5xl md:text-6xl font-serif font-bold">
<h2 className="text-4xl md:text-5xl font-serif font-bold">
<h3 className="text-3xl font-serif font-semibold">
<h4 className="text-2xl font-serif font-semibold">

// Body text (font-sans)
<p className="text-base leading-relaxed">
<p className="text-lg leading-relaxed"> // Large text
<p className="text-sm"> // Small text
```

### Spacing System

```typescript
// Padding sections
<section className="py-16 md:py-24"> // Section principale
<section className="py-12 md:py-16"> // Section secondaire

// Container
<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

// Grid gaps
<div className="grid gap-6 md:gap-8 lg:gap-12">
```

### Component Variants

#### Button

```tsx
// src/components/ui/Button.tsx
const buttonVariants = {
  variant: {
    primary: 'bg-brand-primary hover:bg-brand-primary-dark text-white',
    secondary: 'bg-brand-secondary hover:bg-brand-secondary-dark text-white',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    ghost: 'text-brand-primary hover:bg-brand-primary/10',
  },
  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  },
}
```

#### Card

```tsx
// src/components/ui/Card.tsx
const cardVariants = {
  variant: {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow',
    bordered: 'bg-white border-2 border-brand-neutral-dark',
  },
}
```

### Responsive Breakpoints

```typescript
// Tailwind default breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large

// Usage
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

---

## Gestion du contenu (MDX)

### Structure des fichiers MDX

#### Frontmatter standard

```yaml
---
title: "Titre du projet"
description: "Description SEO (150-160 caractères)"
image: "/images/portfolio/projet-1/main.jpg"
date: "2025-01-15"
category: "peinture" | "papier-peint" | "decor" | "boiseries"
featured: true
client: "Particulier" | "Professionnel"
location: "Bordeaux" | "Bruges" | "Mérignac"
duration: "3 jours"
surface: "80m²"
tags: ["peinture", "renovation", "moderne"]
---
```

#### Exemple de fichier portfolio MDX

```mdx
---
title: "Rénovation Appartement Bordeaux Centre"
description: "Peinture complète d'un appartement de 80m² avec effets décoratifs"
image: "/images/portfolio/appartement-bordeaux/main.jpg"
date: "2024-12-10"
category: "peinture"
featured: true
client: "Particulier"
location: "Bordeaux"
duration: "5 jours"
surface: "80m²"
tags: ["peinture", "renovation", "moderne", "effets-decoratifs"]
---

## Contexte du projet

Rénovation complète d'un appartement bordelais avec transformation des espaces grâce à la couleur et aux finitions.

### Objectifs du client
- Moderniser l'intérieur
- Créer une ambiance chaleureuse
- Mettre en valeur les volumes

## Réalisations

### Séjour
Peinture des murs en vert sauge (#8ec095) avec effet mat velouté. Plafond blanc lumineux.

### Chambre
Tête de lit avec papier peint tropical et murs en terracotta doux (#d69775).

### Cuisine
Peinture des meubles en blanc cassé avec finition satinée.

<Gallery images={[
  "/images/portfolio/appartement-bordeaux/sejour-1.jpg",
  "/images/portfolio/appartement-bordeaux/sejour-2.jpg",
  "/images/portfolio/appartement-bordeaux/chambre-1.jpg",
  "/images/portfolio/appartement-bordeaux/cuisine-1.jpg"
]} />

## Avant / Après

<BeforeAfter 
  before="/images/portfolio/appartement-bordeaux/before.jpg"
  after="/images/portfolio/appartement-bordeaux/after.jpg"
/>

## Témoignage client

<Callout type="success">
"Résultat magnifique ! L'appartement est méconnaissable. Travail soigné et à l'écoute de mes envies."  
**— Marie L., Bordeaux**
</Callout>

## Détails techniques

- **Préparation:** Rebouchage, ponçage, lessivage
- **Peinture:** 2 couches primaire + 2 couches finition
- **Finitions:** Angles parfaits, protection boiseries
- **Délai:** 5 jours ouvrés
```

### MDX Utilities (src/lib/mdx.ts)

```typescript
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
  [key: string]: any
}

/**
 * Get all MDX files from a directory
 */
export async function getAllMDXFiles(
  directory: 'portfolio' | 'services'
): Promise<MDXMeta[]> {
  const dirPath = path.join(contentDirectory, directory)
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
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get MDX content by slug
 */
export async function getMDXContent(
  slug: string,
  directory: 'portfolio' | 'services'
): Promise<{ meta: MDXMeta; content: string }> {
  const fullPath = path.join(contentDirectory, directory, `${slug}.mdx`)
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
 */
export async function getFeaturedProjects(): Promise<MDXMeta[]> {
  const allProjects = await getAllMDXFiles('portfolio')
  return allProjects.filter((project) => project.featured === true)
}
```

### Composants MDX Custom

#### Gallery Component

```tsx
// src/components/mdx/Gallery.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryProps {
  images: string[]
  alt?: string
}

export const Gallery = ({ images, alt = 'Project image' }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}
```

---

## API et Backend

### API Route: Contact/Devis

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'

const contactSchema = z.object({
  type: z.enum(['contact', 'quote']),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  // For quote
  projectType: z.string().optional(),
  surface: z.number().optional(),
  address: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    const validatedData = contactSchema.parse(body)
    
    // Send email
    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: validatedData.type === 'quote' 
        ? `Nouvelle demande de devis - ${validatedData.name}`
        : `Nouveau message - ${validatedData.name}`,
      html: generateEmailHTML(validatedData),
    })
    
    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès',
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
}

function generateEmailHTML(data: any): string {
  // Generate email template
  return `
    <h2>Nouveau message de ${data.name}</h2>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Téléphone:</strong> ${data.phone}</p>
    ${data.projectType ? `<p><strong>Type de projet:</strong> ${data.projectType}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `
}
```

### Email Service (Resend)

```typescript
// src/lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_SERVICE_API_KEY)

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject,
      html,
    })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}
```

### Validation Schemas (Zod)

```typescript
// src/lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .min(10, 'Téléphone invalide')
    .regex(/^[\d\s\+\(\)-]+$/, 'Format de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export const quoteFormSchema = z.object({
  // Step 1: Project type
  projectType: z.enum(['peinture', 'papier-peint', 'decor', 'autre'], {
    required_error: 'Veuillez sélectionner un type de projet',
  }),
  
  // Step 2: Project details
  surface: z.number().min(1, 'La surface doit être supérieure à 0').optional(),
  propertyType: z.enum(['maison', 'appartement', 'local-commercial']).optional(),
  rooms: z.number().min(1).optional(),
  condition: z.enum(['neuf', 'renovation']).optional(),
  
  // Step 3: Contact
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone invalide'),
  address: z.string().min(5, 'Adresse invalide'),
  timeline: z.enum(['urgent', '1-month', '3-months', 'flexible']),
  
  // Step 4: Description
  description: z.string().min(20, 'Veuillez décrire votre projet (min. 20 caractères)'),
  
  // RGPD
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type QuoteFormData = z.infer<typeof quoteFormSchema>
```

---

## SEO et Performance

### Metadata Configuration

```typescript
// src/app/layout.tsx - Root metadata
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Weena Decor - Peinture et Décoration Bordeaux',
    template: '%s | Weena Decor',
  },
  description: 'Artisan peintre à Bordeaux. Peinture intérieure, papier peint, décors muraux. Devis gratuit. Zone: Bordeaux et agglomération.',
  keywords: ['peinture bordeaux', 'décoration intérieure', 'artisan peintre', 'papier peint', 'décors muraux', 'bruges', 'gironde'],
  authors: [{ name: 'Weena Decor' }],
  creator: 'Weena Decor',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Weena Decor',
    title: 'Weena Decor - Peinture et Décoration Bordeaux',
    description: 'Artisan peintre à Bordeaux. Peinture intérieure, papier peint, décors muraux.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Weena Decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weena Decor',
    description: 'Artisan peintre à Bordeaux',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Page-specific Metadata

```typescript
// src/app/services/page.tsx
export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Découvrez nos services de peinture intérieure, boiseries, papier peint et décors muraux à Bordeaux.',
}

// src/app/portfolio/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getMDXContent(params.slug, 'portfolio')
  
  return {
    title: project.meta.title,
    description: project.meta.description,
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      images: [project.meta.image],
    },
  }
}
```

### Structured Data (JSON-LD)

```typescript
// src/components/StructuredData.tsx
export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://weena-decor.fr',
    name: 'Weena Decor',
    image: 'https://weena-decor.fr/images/logo.jpg',
    description: 'Artisan peintre à Bordeaux spécialisée en décoration intérieure',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '45 Rue Fragonard',
      addressLocality: 'Bruges',
      postalCode: '33520',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.8833,
      longitude: -0.5833,
    },
    telephone: '+33626552275',
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    areaServed: {
      '@type': 'City',
      name: 'Bordeaux',
    },
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Add to app/layout.tsx
<LocalBusinessSchema />
```

### Sitemap Generation

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllMDXFiles } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  // Static pages
  const staticPages = [
    '',
    '/services',
    '/portfolio',
    '/a-propos',
    '/devis',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
  
  // Portfolio projects
  const projects = await getAllMDXFiles('portfolio')
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...projectPages]
}
```

### Performance Optimizations

#### Image Optimization

```tsx
import Image from 'next/image'

// ✅ Always use Next.js Image component
<Image
  src="/images/portfolio/project-1.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg..." // Or import actual image
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// ✅ Priority for above-the-fold images
<Image src="/hero.jpg" alt="Hero" priority />

// ✅ Lazy loading for below-the-fold (default)
<Image src="/gallery-1.jpg" alt="Gallery" loading="lazy" />
```

#### Code Splitting

```tsx
// ✅ Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const QuoteForm = dynamic(() => import('@/components/forms/QuoteForm'), {
  loading: () => <Loading />,
  ssr: false, // Client-only if needed
})
```

#### Font Optimization

```tsx
// ✅ Already configured in layout.tsx with next/font
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // FOUT strategy
  preload: true,
})
```

---

## Déploiement

### Vercel (Recommandé)

#### Setup

1. **Connecter GitHub:**
   - Vercel détecte automatiquement Next.js
   - Build command: `npm run build` (auto)
   - Output directory: `.next` (auto)

2. **Variables d'environnement:**
   - Ajouter toutes les variables de `.env.local`
   - Marquer `NEXT_PUBLIC_*` comme "public"

3. **Domaine custom:**
   - Settings → Domains
   - Ajouter `weena-decor.fr` et `www.weena-decor.fr`
   - Configurer DNS (A record ou CNAME)

#### Deployment Workflow

```bash
# Push to main = automatic deployment
git push origin main

# Preview deployments on PRs
git checkout -b feature/new-feature
git push origin feature/new-feature
# Open PR → automatic preview URL
```

#### Vercel CLI (optionnel)

```bash
npm i -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```

### Netlify (Alternative)

#### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Self-hosted (VPS)

#### Docker Setup

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t weena-decor .
docker run -p 3000:3000 weena-decor
```

---

## Workflow de développement

### Git Workflow

```bash
# 1. Créer une branche pour chaque feature
git checkout -b feature/contact-form

# 2. Développer et commit régulièrement
git add .
git commit -m "feat: add contact form validation"

# 3. Push et créer PR
git push origin feature/contact-form

# 4. Review et merge
# Après review, merge dans main
```

### Commit Message Convention

```
feat: add new feature
fix: fix bug
docs: update documentation
style: formatting changes
refactor: code refactoring
test: add tests
chore: update dependencies

Examples:
feat: add portfolio filtering
fix: resolve email sending issue
docs: update README with deploy instructions
style: format code with prettier
```

### Development Checklist

Avant de créer une PR:

- [ ] Code fonctionne en local (`npm run dev`)
- [ ] Build de production réussit (`npm run build`)
- [ ] Linting pass (`npm run lint`)
- [ ] Formatting appliqué (`npm run format`)
- [ ] Pas de console.log oubliés
- [ ] Images optimisées
- [ ] Metadata SEO ajouté si nouvelle page
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Accessibilité vérifiée

### Testing Workflow

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

---

## 📋 Checklist d'implémentation

### Phase 1: Setup ✅

- [ ] Initialiser projet Next.js avec TypeScript
- [ ] Installer toutes les dépendances
- [ ] Configurer Tailwind avec palette custom
- [ ] Configurer MDX
- [ ] Setup ESLint/Prettier
- [ ] Créer structure de dossiers
- [ ] Configurer .env.local

### Phase 2: Design System ✅

- [ ] Créer utility functions (cn, formatters)
- [ ] Composants UI (Button, Card, Input, Textarea, Badge)
- [ ] Layout components (Header, Footer, Navigation)
- [ ] Configurer fonts (Inter + Playfair Display)

### Phase 3: Pages Principales ✅

- [ ] Homepage avec toutes les sections
- [ ] Page Services
- [ ] Page À Propos
- [ ] Page Contact
- [ ] Pages légales (mentions, RGPD)

### Phase 4: Portfolio ✅

- [ ] Système MDX configuré
- [ ] Page Portfolio (liste)
- [ ] Page projet individuel ([slug])
- [ ] Créer 3-5 projets exemple en MDX
- [ ] Composants MDX (Gallery, BeforeAfter)

### Phase 5: Formulaires ✅

- [ ] Formulaire contact simple
- [ ] Formulaire devis multi-étapes
- [ ] Validation Zod côté client et serveur
- [ ] API route `/api/contact`
- [ ] Intégration Resend pour envoi emails

### Phase 6: SEO et Performance ✅

- [ ] Metadata sur toutes les pages
- [ ] Structured Data (JSON-LD)
- [ ] Génération sitemap.xml
- [ ] robots.txt
- [ ] Optimisation images
- [ ] Lighthouse score > 90

### Phase 7: Déploiement ✅

- [ ] Setup Vercel
- [ ] Configuration domaine
- [ ] Tests en production
- [ ] Analytics (optionnel)

---

## 🔗 Ressources

### Documentation officielle

- [Next.js App Router](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [MDX](https://mdxjs.com)

### Tools

- [Vercel](https://vercel.com) - Déploiement
- [Resend](https://resend.com) - Email service
- [Lucide Icons](https://lucide.dev) - Icons
- [Google Fonts](https://fonts.google.com)

### Design

- [Tailwind UI](https://tailwindui.com) - Composants premium
- [Shadcn/ui](https://ui.shadcn.com) - Composants open-source
- [Coolors](https://coolors.co) - Palette de couleurs

---

## 📞 Support

Pour toute question sur l'architecture:

- **Repository:** GitHub
- **Documentation:** `.cursor/scratchpad.md`
- **Architecture:** `ARCHITECTURE.md` (ce document)

---

**Version:** 1.0  
**Date:** 2025-11-06  
**Status:** ✅ Document complet - Prêt pour implémentation

---

<div align="center">
  <p><strong>🎨 Architecture conçue pour Weena Decor</strong></p>
  <p>Créer des espaces qui vous ressemblent</p>
</div>

# Weena Decor - Site Web

> Amoureuse de belles finitions et ambiances harmonieuses, je vous accompagne dans vos projets de peinture, papier peint et décors muraux.

Site web professionnel pour Weena Decor, artisan peintre à Bordeaux spécialisée en décoration intérieure.

---

## 📋 Vue d'ensemble

### À propos
**Weena Decor** propose des services de peinture et décoration en bâtiment pour particuliers et professionnels dans la région bordelaise. L'objectif est de créer des espaces uniques avec des couleurs, textures et effets qui subliment chaque intérieur.

### Services
- 🎨 Peinture intérieure (murs, plafonds)
- 🚪 Peinture des boiseries (portes, fenêtres, escaliers)
- 📜 Pose de papier peint
- 🎭 Décors muraux (effets, trompe-l'œil, patines)
- 💡 Conseil en couleurs et matières

### Contact
- 📞 **Téléphone:** +33 6 26 55 22 75
- 📍 **Adresse:** 45 Rue Fragonard, 33520 Bruges, France
- 🌐 **Zone d'intervention:** Bordeaux et agglomération

---

## 🚀 Démarrage rapide

### Prérequis
- **Node.js** 18.17 ou supérieur
- **npm** ou **pnpm** (gestionnaire de paquets)
- **Git**

### Installation

1. **Cloner le repository:**
```bash
git clone https://github.com/votre-org/weena-decor.git
cd weena-decor
```

2. **Installer les dépendances:**
```bash
npm install
# ou
pnpm install
```

3. **Configurer les variables d'environnement:**

Créer un fichier `.env.local` à la racine du projet :
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Weena Decor"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=contact@weena-decor.fr
NEXT_PUBLIC_CONTACT_PHONE="+33 6 26 55 22 75"
NEXT_PUBLIC_CONTACT_ADDRESS="45 Rue Fragonard, 33520 Bruges"

# Email Service (Resend recommandé)
EMAIL_SERVICE_API_KEY=your_api_key_here
EMAIL_FROM=noreply@weena-decor.fr
EMAIL_TO=contact@weena-decor.fr

# Google Maps (optionnel)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. **Lancer le serveur de développement:**
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Architecture technique

### Stack technologique

#### Core
- **Framework:** Next.js 14+ (App Router) - Server Components, streaming, optimisations
- **Language:** TypeScript - Type safety et meilleure DX
- **Styling:** Tailwind CSS - Système de design cohérent et responsive
- **Content Management:** MDX (Markdown + JSX) - Contenu enrichi avec composants React
- **Forms:** React Hook Form + Zod - Validation robuste côté client et serveur
- **Icons:** Lucide React - Icons modernes et optimisés
- **Image Optimization:** Next.js Image - Formats WebP/AVIF automatiques

#### Development & Quality
- **Package Manager:** npm ou pnpm
- **Linting:** ESLint + Prettier - Code style cohérent
- **Git Hooks:** Husky - Pre-commit checks
- **Testing:** Jest + React Testing Library (à venir)

### Identité visuelle

**Palette de couleurs:**
```css
/* Couleurs de marque */
--brand-primary: #8ec095;    /* Vert sauge - nature, harmonie */
--brand-secondary: #d69775;  /* Terracotta - chaleur, créativité */
--brand-neutral: #f3ede3;    /* Beige clair - douceur, élégance */
--brand-dark: #2c2c2c;       /* Texte principal */
--brand-light: #ffffff;      /* Fond clair */
```

**Typographie:**
- **Headings:** Playfair Display (Serif) - Élégance artistique
- **Body:** Inter (Sans-serif) - Lisibilité professionnelle

---

## 📁 Structure du projet

```
/workspace
├── .cursor/                    # Configuration Cursor
│   └── scratchpad.md          # Plan d'architecture et tasks
├── .next/                      # Build output (gitignored)
├── public/                     # Assets statiques
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/              # Images hero section
│   │   ├── services/          # Images services
│   │   └── portfolio/         # Photos réalisations
│   └── favicon.ico
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout racine avec Header/Footer
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── globals.css        # Styles Tailwind globaux
│   │   ├── services/          # Page liste des services
│   │   ├── portfolio/         # Galerie réalisations
│   │   │   └── [slug]/        # Pages projets individuels
│   │   ├── a-propos/          # Page à propos
│   │   ├── devis/             # Formulaire devis
│   │   ├── contact/           # Page contact
│   │   └── api/
│   │       └── contact/       # API route pour formulaires
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/                # Composants UI réutilisables
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/          # Sections de pages
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   └── ...
│   │   └── forms/             # Formulaires
│   │       ├── ContactForm.tsx
│   │       └── QuoteForm.tsx
│   ├── content/               # Contenu Markdown
│   │   ├── services/          # Fichiers MDX services
│   │   ├── portfolio/         # Fichiers MDX projets
│   │   └── about.mdx
│   ├── lib/                   # Utilities
│   │   ├── mdx.ts            # MDX parsing utilities
│   │   ├── constants.ts      # Constantes (couleurs, contact)
│   │   ├── utils.ts          # Helpers (cn, formatters)
│   │   └── validations.ts    # Schemas Zod
│   └── types/                # TypeScript types
│       ├── content.ts
│       └── forms.ts
├── .env.local                 # Variables d'environnement (non versionné)
├── .gitignore
├── next.config.js            # Configuration Next.js + MDX
├── tailwind.config.ts        # Configuration Tailwind + palette custom
├── tsconfig.json             # Configuration TypeScript
├── package.json
└── README.md
```

---

## 🎨 Pages et fonctionnalités

### Page d'accueil (`/`)
- **Hero Section:** Titre accrocheur, image de réalisation, CTAs vers devis et portfolio
- **Services (aperçu):** 4 services principaux en cards
- **Portfolio (sélection):** Grille de 6-8 réalisations phares
- **À Propos (résumé):** Présentation courte avec photo
- **Témoignages:** Carousel de retours clients
- **Zone d'intervention:** Bordeaux et agglomération
- **CTA Final:** Encouragement à demander un devis

### Page Services (`/services`)
Détails complets de chaque service :
- Peinture intérieure
- Peinture des boiseries
- Pose de papier peint
- Décors muraux
- Conseil en couleurs

Chaque service inclut : description, prestations, processus, exemples.

### Page Portfolio (`/portfolio`)
- **Galerie interactive:** Grille responsive de réalisations
- **Filtrage dynamique:** Par type (peinture, papier peint, décor)
- **Lightbox:** Agrandissement des images
- **Pages projets individuels:** Galerie complète, description, avant/après

### Page À Propos (`/a-propos`)
- Présentation personnelle avec photo
- Parcours et expérience
- Valeurs et approche
- Certifications et formations

### Page Devis (`/devis`)
**Formulaire multi-étapes intelligent:**
1. Type de projet (radio buttons)
2. Détails (surface, type de bien, nombre de pièces)
3. Coordonnées (nom, email, téléphone, adresse)
4. Description détaillée + upload photos (optionnel)
5. Validation et envoi

**Features:**
- Progress bar
- Validation temps réel (Zod)
- Sauvegarde localStorage
- Messages d'erreur clairs

### Page Contact (`/contact`)
- Formulaire simple
- Coordonnées complètes
- Carte Google Maps
- Liens réseaux sociaux

---

## 🛠️ Développement

### Commandes disponibles

```bash
# Développement
npm run dev          # Lancer le serveur de développement (port 3000)

# Build
npm run build        # Créer le build de production
npm run start        # Lancer le serveur de production

# Qualité
npm run lint         # Exécuter ESLint
npm run lint:fix     # Corriger automatiquement les erreurs lint
npm run format       # Formater le code avec Prettier

# Tests (à venir)
npm run test         # Exécuter les tests
npm run test:watch   # Mode watch
npm run test:coverage # Rapport de couverture
```

### Configuration Tailwind

Le fichier `tailwind.config.ts` inclut les couleurs de marque personnalisées :

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#8ec095',
        secondary: '#d69775',
        neutral: '#f3ede3',
        // Variations light/dark automatiques
      },
    },
  },
}
```

Utilisation dans les composants :
```tsx
<button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
  Demander un devis
</button>
```

### Système MDX

#### Créer un nouveau projet portfolio

1. Créer un fichier dans `src/content/portfolio/` :

```mdx
---
title: "Rénovation Appartement Bordeaux Centre"
description: "Peinture complète d'un appartement de 80m²"
image: "/images/portfolio/projet-1.jpg"
date: "2025-01-15"
category: "peinture"
featured: true
---

## Contexte du projet

Description détaillée du projet...

## Réalisations

- Peinture des murs et plafonds
- Peinture des boiseries
- Effets décoratifs dans le salon

<Gallery images={[
  "/images/portfolio/projet-1-1.jpg",
  "/images/portfolio/projet-1-2.jpg"
]} />
```

2. Les images dans `public/images/portfolio/`
3. Le projet apparaîtra automatiquement sur `/portfolio`

#### Composants MDX disponibles

```tsx
// Galerie d'images
<Gallery images={["/path1.jpg", "/path2.jpg"]} />

// Comparaison avant/après
<BeforeAfter before="/before.jpg" after="/after.jpg" />

// Encart d'information
<Callout type="info">
  Information importante ici
</Callout>

// Card de service
<ServiceCard 
  title="Peinture Intérieure" 
  icon="paintbrush"
/>
```

---

## 🔌 API et Intégrations

### API Contact/Devis

**Endpoint:** `POST /api/contact`

**Request Body:**
```typescript
{
  type: 'contact' | 'quote',
  name: string,
  email: string,
  phone: string,
  message: string,
  // Pour devis uniquement:
  projectType?: string,
  surface?: number,
  address?: string,
  photos?: File[]
}
```

**Response:**
```typescript
{
  success: boolean,
  message: string,
  error?: string
}
```

**Validation:** Tous les champs sont validés avec Zod côté client et serveur.

**Envoi d'emails:** 
- Service recommandé : [Resend](https://resend.com) (free tier : 3000 emails/mois)
- Alternative : Nodemailer avec SMTP

### Intégrations futures possibles
- Google Analytics / Plausible Analytics
- Google Maps API (carte interactive)
- Calendly (prise de rendez-vous)
- Stripe (acomptes en ligne)

---

## 📊 SEO et Performance

### Optimisations SEO

**Metadata configuré sur chaque page:**
- Title, description, keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Structured Data (JSON-LD) : LocalBusiness, Service

**Fichiers générés automatiquement:**
- `sitemap.xml` - Liste de toutes les pages
- `robots.txt` - Instructions pour les crawlers

**Exemple de metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Weena Decor - Peinture et Décoration Bordeaux',
  description: 'Artisan peintre à Bordeaux. Peinture intérieure, papier peint, décors muraux. Devis gratuit.',
  keywords: ['peinture bordeaux', 'décoration', 'artisan peintre'],
  openGraph: {
    title: 'Weena Decor',
    images: ['/images/og-image.jpg'],
  },
}
```

### Optimisations Performance

**Stratégies Next.js:**
- ✅ **Static Site Generation (SSG):** Build-time generation pour performance maximale
- ✅ **Image Optimization:** Formats WebP/AVIF, lazy loading, responsive images
- ✅ **Font Optimization:** `next/font` pour chargement optimal
- ✅ **Code Splitting:** Automatique par Next.js
- ✅ **Server Components:** Réduction du JavaScript côté client

**Objectifs Lighthouse:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

---

## ♿ Accessibilité

Le site est conçu pour être accessible à tous :

- ✅ **Semantic HTML:** Utilisation correcte des balises HTML5
- ✅ **ARIA Labels:** Où nécessaire pour les lecteurs d'écran
- ✅ **Contraste de couleurs:** Conforme WCAG AA minimum
- ✅ **Navigation au clavier:** Tous les éléments interactifs accessibles
- ✅ **Focus visible:** Indicateurs de focus clairs
- ✅ **Alt text:** Toutes les images incluent des descriptions
- ✅ **Labels de formulaires:** Explicites et associés aux champs

---

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Connecter le repository GitHub:**
   - Import Project
   - Sélectionner le repo
   - Next.js détecté automatiquement

3. **Configurer les variables d'environnement:**
   - Ajouter toutes les variables de `.env.local`
   - Email API keys, etc.

4. **Déployer:**
   - Push sur `main` = déploiement automatique
   - Preview deployments sur les PRs

**Avantages Vercel:**
- Intégration native Next.js
- Déploiement en < 1 minute
- SSL automatique
- CDN global
- Free tier généreux

### Netlify (Alternative)

Configuration similaire à Vercel.

**Build settings:**
- Build command: `npm run build`
- Publish directory: `.next`

### Self-hosted

Pour un VPS personnel :

```bash
# Build production
npm run build

# Lancer avec PM2
pm2 start npm --name "weena-decor" -- start

# Nginx reverse proxy
server {
  listen 80;
  server_name weena-decor.fr;
  location / {
    proxy_pass http://localhost:3000;
  }
}
```

---

## 🧪 Tests (À venir)

### Stack de tests prévu
- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Playwright
- **Objectif de couverture:** 80%+

### Tests à implémenter
```bash
# Tests unitaires
src/lib/__tests__/mdx.test.ts        # Utilities MDX
src/lib/__tests__/validations.test.ts # Schemas Zod

# Tests d'intégration
src/app/api/contact/__tests__/route.test.ts # API routes

# Tests E2E
tests/e2e/contact-form.spec.ts      # Formulaire contact
tests/e2e/quote-form.spec.ts        # Formulaire devis
tests/e2e/navigation.spec.ts        # Navigation complète
```

---

## 📖 Documentation complémentaire

### Ressources techniques
- [Next.js App Router](https://nextjs.org/docs) - Documentation officielle
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility classes
- [MDX](https://mdxjs.com/) - Markdown enhanced
- [React Hook Form](https://react-hook-form.com/) - Forms
- [Zod](https://zod.dev/) - Validation

### Plan d'architecture complet
Le plan détaillé avec toutes les décisions techniques se trouve dans `.cursor/scratchpad.md`

---

## 🤝 Contribution

### Workflow Git

```bash
# Créer une branche pour chaque feature
git checkout -b feature/nom-feature

# Commit avec messages clairs
git commit -m "feat: add contact form validation"

# Push et créer une PR
git push origin feature/nom-feature
```

### Standards de code
- **ESLint + Prettier** appliqués automatiquement
- **TypeScript strict mode** activé
- **Composants fonctionnels** avec hooks
- **Commentaires en anglais** dans le code
- **Commits conventionnels** (feat, fix, docs, style, refactor, test)

---

## 📝 Roadmap

### Phase 1: MVP (En cours)
- [x] Plan d'architecture complet
- [ ] Initialisation projet Next.js
- [ ] Design system et composants UI
- [ ] Pages principales (Home, Services, À Propos)
- [ ] Portfolio avec système MDX
- [ ] Formulaires Contact et Devis
- [ ] Déploiement initial

### Phase 2: Améliorations
- [ ] Tests unitaires et E2E
- [ ] Animations au scroll
- [ ] Blog/Actualités
- [ ] Multi-langue (Anglais)
- [ ] Espace client

### Phase 3: Fonctionnalités avancées
- [ ] Paiement en ligne (acomptes)
- [ ] Prise de rendez-vous en ligne
- [ ] Configurateur de projet 3D
- [ ] Application mobile (PWA)

---

## 📞 Support et Contact

### Projet
- **Repository:** [GitHub](https://github.com/votre-org/weena-decor)
- **Issues:** [GitHub Issues](https://github.com/votre-org/weena-decor/issues)
- **Documentation:** `.cursor/scratchpad.md`

### Weena Decor
- **Téléphone:** +33 6 26 55 22 75
- **Email:** contact@weena-decor.fr
- **Adresse:** 45 Rue Fragonard, 33520 Bruges, France

---

## 📄 Licence

© 2025 Weena Decor. Tous droits réservés.

---

## ⚡ Quick Start Recap

```bash
# 1. Clone
git clone https://github.com/votre-org/weena-decor.git

# 2. Install
npm install

# 3. Configure
cp .env.example .env.local
# Éditer .env.local avec vos clés

# 4. Run
npm run dev

# 5. Build
npm run build
npm run start
```

**🎉 Le site sera accessible sur http://localhost:3000**

---

<div align="center">
  <p>Fait avec ❤️ pour Weena Decor</p>
  <p><strong>Créer des espaces qui vous ressemblent</strong></p>
</div>

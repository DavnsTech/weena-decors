# 🧪 Guide de Tests - Weena Decor

## Framework de Test

- **Framework:** Vitest 4.0.7
- **Testing Library:** @testing-library/react
- **Coverage Provider:** v8
- **Environment:** jsdom

## Commandes Disponibles

```bash
# Lancer tous les tests une fois
npm test

# Mode watch (re-exécute les tests automatiquement)
npm run test:watch

# Rapport de couverture détaillé
npm run test:coverage
```

## Structure des Tests

```
src/
└── lib/
    ├── __tests__/
    │   ├── utils.test.ts          # Tests des fonctions utilitaires
    │   └── validations.test.ts    # Tests des schemas Zod
    ├── utils.ts
    └── validations.ts
```

## Couverture Actuelle

| Fichier          | Statements | Branches | Functions | Lines |
|------------------|------------|----------|-----------|-------|
| **utils.ts**     | 100%       | 100%     | 100%      | 100%  |
| **validations.ts** | 85.71%   | 100%     | 50%       | 85.71% |
| **TOTAL**        | **94.73%** | **100%** | **85.71%** | **94.44%** |

✅ **Objectif atteint:** 94.73% (objectif: 80%+)

## Tests Implémentés

### utils.test.ts (21 tests)

#### `cn()` - Merge de classes CSS
- ✅ Merge de classes simples
- ✅ Classes conditionnelles
- ✅ Résolution de conflits Tailwind
- ✅ Entrées vides

#### `formatPhoneNumber()`
- ✅ Format français avec +33
- ✅ Format sans préfixe +
- ✅ Retour original si format incorrect
- ✅ Gestion des espaces

#### `formatDate()`
- ✅ Format date string en français
- ✅ Format objet Date
- ✅ Différents mois

#### `truncate()`
- ✅ Troncature de texte long
- ✅ Texte court non tronqué
- ✅ Longueur exacte
- ✅ String vide

#### `slugify()`
- ✅ Conversion en slug
- ✅ Suppression des accents
- ✅ Caractères spéciaux
- ✅ Suppression tirets début/fin
- ✅ Espaces multiples
- ✅ Majuscules

### validations.test.ts (11 tests)

#### `contactFormSchema`
- ✅ Données valides
- ✅ Nom trop court
- ✅ Email invalide
- ✅ Téléphone trop court
- ✅ Message trop court

#### `quoteFormSchema`
- ✅ Données valides complètes
- ✅ Type de projet invalide
- ✅ Surface zéro ou négative
- ✅ Description trop courte
- ✅ Consentement RGPD manquant
- ✅ Champs optionnels acceptés

## Ajouter de Nouveaux Tests

### 1. Créer un fichier de test

```typescript
// src/components/__tests__/Button.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('should render button text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

### 2. Lancer les tests

```bash
npm run test:watch
```

### 3. Vérifier la couverture

```bash
npm run test:coverage
```

## Configuration

### vitest.config.ts

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'vitest.config.ts',
        '**/*.config.*',
        '**/types/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Best Practices

### ✅ DO

- Tester les cas normaux et les edge cases
- Tester les messages d'erreur
- Utiliser des noms de tests descriptifs
- Maintenir la couverture > 80%
- Tester les fonctions pures en priorité

### ❌ DON'T

- Ne pas tester les détails d'implémentation
- Éviter les tests fragiles (qui cassent facilement)
- Ne pas mocker excessivement

## Prochains Tests à Implémenter

### Phase 2 - Composants UI
- [ ] `Button.test.tsx` - Variants, sizes, disabled
- [ ] `Card.test.tsx` - Rendering, props
- [ ] `Input.test.tsx` - Validation, états
- [ ] `Textarea.test.tsx` - Props, validation

### Phase 3 - Layout
- [ ] `Header.test.tsx` - Navigation, responsive
- [ ] `Footer.test.tsx` - Links, contact info
- [ ] `Navigation.test.tsx` - Active links

### Phase 4 - Formulaires
- [ ] `ContactForm.test.tsx` - Soumission, validation
- [ ] `QuoteForm.test.tsx` - Multi-steps, localStorage

### Phase 6 - MDX
- [ ] `mdx.test.ts` - Parsing, fetching (nécessite mock fs)

## Ressources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

**Status:** ✅ Phase 1 Complete - 32 tests, 94.73% coverage  
**Dernière mise à jour:** 2025-11-06

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-neutral px-4">
      <main className="container mx-auto max-w-4xl text-center">
        {/* Temporary homepage - will be replaced with actual sections */}
        <h1 className="mb-6 font-serif text-5xl font-bold text-brand-dark md:text-6xl">
          Weena Decor
        </h1>
        <p className="mb-8 text-xl text-brand-dark/80">
          Créer des espaces qui vous ressemblent
        </p>
        <p className="mb-12 text-lg leading-relaxed text-brand-dark/70">
          Amoureuse de belles finitions et ambiances harmonieuses, je vous accompagne dans vos
          projets de peinture, papier peint et décors muraux.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/devis"
            className="rounded-lg bg-brand-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-primary-dark"
          >
            Demander un devis
          </a>
          <a
            href="/portfolio"
            className="rounded-lg border-2 border-brand-primary px-8 py-4 font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
          >
            Voir nos réalisations
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-2 font-serif text-xl font-semibold text-brand-dark">
              Peinture Intérieure
            </h3>
            <p className="text-brand-dark/70">Murs, plafonds, finitions soignées</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-2 font-serif text-xl font-semibold text-brand-dark">
              Papier Peint
            </h3>
            <p className="text-brand-dark/70">Tous types de revêtements muraux</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-2 font-serif text-xl font-semibold text-brand-dark">
              Décors Muraux
            </h3>
            <p className="text-brand-dark/70">Effets, trompe-l&apos;œil, patines</p>
          </div>
        </div>

        <div className="mt-16 text-brand-dark/60">
          <p className="text-sm">
            📞 +33 6 26 55 22 75 | 📍 45 Rue Fragonard, 33520 Bruges
          </p>
          <p className="mt-2 text-sm">Zone d&apos;intervention: Bordeaux et agglomération</p>
        </div>
      </main>
    </div>
  )
}

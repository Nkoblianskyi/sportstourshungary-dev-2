import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CatalogClient } from '@/components/catalog-client'

export const metadata = {
  title: 'Túrák – Sports Tours Hungary',
  description: 'Böngésszen kerékpáros, gyalogtúra, futó és felfedező programjaink között.',
}

export default function CatalogPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        {/* Page header */}
        <section className="relative bg-foreground text-background py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/tour-exploration.jpg')" }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Összes program
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
              Túrák katalógusa
            </h1>
            <p className="mt-4 text-background/70 text-lg max-w-xl mx-auto leading-relaxed">
              Kerékpározás, gyalogtúra, futótúra és felfedező kalandok – válassza ki a hozzá illő
              természeti élményt.
            </p>
          </div>
        </section>

        {/* Catalog */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <CatalogClient />
        </section>
      </div>
      <Footer />
    </main>
  )
}

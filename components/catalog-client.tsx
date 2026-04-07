'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { tours, type TourCategory, type TourDifficulty, categoryLabels, difficultyLabels } from '@/lib/tours-data'
import { TourCard } from '@/components/tour-card'
import { cn } from '@/lib/utils'

const categories: TourCategory[] = ['kerékpár', 'gyalogtúra', 'futás', 'felfedezés']
const difficulties: TourDifficulty[] = ['kezdő', 'közép', 'haladó']

export function CatalogClient() {
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<TourCategory[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<TourDifficulty[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleCategory = (cat: TourCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const toggleDifficulty = (diff: TourDifficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(diff) ? prev.filter((d) => d !== diff) : [...prev, diff]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedDifficulties([])
    setSearch('')
  }

  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const matchSearch =
        search === '' ||
        tour.title.toLowerCase().includes(search.toLowerCase()) ||
        tour.region.toLowerCase().includes(search.toLowerCase())
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(tour.category)
      const matchDifficulty =
        selectedDifficulties.length === 0 || selectedDifficulties.includes(tour.difficulty)
      return matchSearch && matchCategory && matchDifficulty
    })
  }, [search, selectedCategories, selectedDifficulties])

  const hasFilters = selectedCategories.length > 0 || selectedDifficulties.length > 0 || search !== ''

  return (
    <div>
      {/* Search & filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Keresés cím vagy régió szerint..."
            className="w-full pl-10 pr-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Túrák keresése"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            'flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-colors',
            showFilters || hasFilters
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-card border-border text-foreground hover:border-primary/50'
          )}
          aria-expanded={showFilters}
          aria-label="Szűrők megjelenítése"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Szűrők
          {hasFilters && (
            <span className="w-5 h-5 rounded-full bg-primary-foreground text-primary text-xs flex items-center justify-center font-bold">
              {selectedCategories.length + selectedDifficulties.length + (search ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Filter panel */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 mb-6',
          showFilters ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="bg-card border border-border rounded-2xl p-5">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Categories */}
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Kategória
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={cn(
                      'text-xs font-medium px-3 py-1.5 rounded-full border transition-colors',
                      selectedCategories.includes(cat)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border text-foreground hover:border-primary/50'
                    )}
                    aria-pressed={selectedCategories.includes(cat)}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulties */}
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Nehézség
              </p>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => toggleDifficulty(diff)}
                    className={cn(
                      'text-xs font-medium px-3 py-1.5 rounded-full border transition-colors',
                      selectedDifficulties.includes(diff)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border text-foreground hover:border-primary/50'
                    )}
                    aria-pressed={selectedDifficulties.includes(diff)}
                  >
                    {difficultyLabels[diff]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="mt-4 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3 h-3" /> Szűrők törlése
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6">
        {filtered.length} túra {filtered.length !== tours.length && `(összesen ${tours.length}-ből)`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="font-serif text-lg font-semibold text-foreground mb-2">
            Nem találtunk ilyen túrát
          </p>
          <p className="text-muted-foreground text-sm mb-6">Próbáljon más szűrési feltételeket.</p>
          <button
            onClick={clearFilters}
            className="bg-primary text-primary-foreground text-sm font-medium px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
          >
            Szűrők törlése
          </button>
        </div>
      )}
    </div>
  )
}

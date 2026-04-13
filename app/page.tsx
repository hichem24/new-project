import { MapPlaceholder } from '@/components/map-placeholder';
import { SearchPanel } from '@/components/search-panel';

export default function HomePage() {
  return (
    <main className="container" style={{ display: 'grid', gap: '1rem', paddingBlock: '1.25rem' }}>
      <header className="card" style={{ display: 'grid', gap: 8 }}>
        <h1>🏥 DocDZ – Algeria Healthcare Finder</h1>
        <p className="small">
          Discover verified doctors, clinics, and hospitals across Algeria with fast location-based filtering.
        </p>
      </header>

      <section className="grid grid-2" style={{ alignItems: 'start' }}>
        <SearchPanel />
        <MapPlaceholder />
      </section>
    </main>
  );
}

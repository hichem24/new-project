import { hospitals } from '@/lib/data';

export function MapPlaceholder() {
  return (
    <section className="card">
      <h2 style={{ marginBottom: 8 }}>Nearby facilities (Map-ready)</h2>
      <p className="small" style={{ marginBottom: 16 }}>
        Integrate Mapbox/Google Maps for live GPS and “Doctors Near Me”.
      </p>
      <div className="grid">
        {hospitals.map((hospital) => (
          <div key={hospital.id} style={{ border: '1px solid var(--border)', borderRadius: 10, padding: '0.65rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{hospital.name}</strong>
              <span className="badge">{hospital.type}</span>
            </div>
            <p className="small" style={{ marginTop: 8 }}>
              {hospital.location.city}, {hospital.location.wilaya} · Emergency: {hospital.emergency ? 'Yes' : 'No'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

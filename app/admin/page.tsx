import { doctors, hospitals } from '@/lib/data';

export default function AdminPage() {
  return (
    <main className="container" style={{ display: 'grid', gap: '1rem', paddingBlock: '1.25rem' }}>
      <h1>DocDZ Admin Dashboard</h1>
      <section className="card">
        <h2 style={{ marginBottom: 12 }}>Doctors ({doctors.length})</h2>
        <div className="grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
              <strong>{doctor.fullName}</strong> — {doctor.specialty} · {doctor.location.wilaya}
            </div>
          ))}
        </div>
      </section>
      <section className="card">
        <h2 style={{ marginBottom: 12 }}>Hospitals ({hospitals.length})</h2>
        <div className="grid">
          {hospitals.map((hospital) => (
            <div key={hospital.id} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
              <strong>{hospital.name}</strong> — {hospital.type} · Emergency: {hospital.emergency ? 'Yes' : 'No'}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

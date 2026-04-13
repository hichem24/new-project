'use client';

import { useMemo, useState } from 'react';
import { doctors, WILAYAS, searchDoctors } from '@/lib/data';
import type { Doctor } from '@/types';

const specialties = Array.from(new Set(doctors.map((d) => d.specialty))).sort();

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <h3>{doctor.fullName}</h3>
        <span className="badge">{doctor.specialty}</span>
      </div>
      <p className="small" style={{ marginTop: 6 }}>
        {doctor.yearsExperience} years · {doctor.affiliation}
      </p>
      <p>{doctor.address}</p>
      <p className="small">
        {doctor.phone}
        {doctor.whatsapp ? ` · WhatsApp: ${doctor.whatsapp}` : ''}
      </p>
      <p className="small">Hours: {doctor.hours}</p>
    </article>
  );
}

export function SearchPanel() {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [city, setCity] = useState('');

  const cityOptions = useMemo(() => {
    const scoped = wilaya ? doctors.filter((d) => d.location.wilaya === wilaya) : doctors;
    return Array.from(new Set(scoped.map((d) => d.location.city))).sort();
  }, [wilaya]);

  const filtered = useMemo(
    () => searchDoctors({ query, specialty: specialty || undefined, wilaya: wilaya || undefined, city: city || undefined }),
    [query, specialty, wilaya, city]
  );

  return (
    <section className="grid" style={{ gap: '1rem' }}>
      <div className="card grid grid-3">
        <div>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            placeholder="Doctor, specialty, clinic..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="specialty">Specialty</label>
          <select id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
            <option value="">All specialties</option>
            {specialties.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="wilaya">Wilaya</label>
          <select id="wilaya" value={wilaya} onChange={(e) => setWilaya(e.target.value)}>
            <option value="">All wilayas</option>
            {WILAYAS.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city">City / Commune</label>
          <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All cities</option>
            {cityOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-3">
        {filtered.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}

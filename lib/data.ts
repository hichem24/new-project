import type { Doctor, Hospital, SearchFilters } from '@/types';

export const WILAYAS = [
  'Alger', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Tizi Ouzou', 'Sétif', 'Batna', 'Tlemcen', 'Mostaganem'
];

export const doctors: Doctor[] = [
  {
    id: 'd-001',
    fullName: 'Dr. Amel Benyoucef',
    specialty: 'Cardiology',
    yearsExperience: 14,
    affiliation: 'Clinique El Amal',
    location: { wilaya: 'Alger', city: 'Alger Centre', area: 'Didouche Mourad' },
    address: '15 Rue Didouche Mourad, Alger',
    phone: '+213-21-555-001',
    whatsapp: '+213-550-110-001',
    hours: '08:30 - 16:30',
    lat: 36.7538,
    lng: 3.0588
  },
  {
    id: 'd-002',
    fullName: 'Dr. Yassine Kherfi',
    specialty: 'Dermatology',
    yearsExperience: 9,
    affiliation: 'Oran Medical Center',
    location: { wilaya: 'Oran', city: 'Bir El Djir', area: 'Hai Sabah' },
    address: '12 Avenue Hai Sabah, Oran',
    phone: '+213-41-555-002',
    hours: '09:00 - 18:00',
    lat: 35.7264,
    lng: -0.545
  },
  {
    id: 'd-003',
    fullName: 'Dr. Samira Belkacem',
    specialty: 'Pediatrics',
    yearsExperience: 11,
    affiliation: 'CHU Constantine',
    location: { wilaya: 'Constantine', city: 'El Khroub', area: 'Nouvelle Ville' },
    address: 'Route El Khroub, Constantine',
    phone: '+213-31-555-003',
    hours: '08:00 - 15:00',
    lat: 36.365,
    lng: 6.6147
  }
];

export const hospitals: Hospital[] = [
  {
    id: 'h-001',
    name: 'CHU Mustapha Pacha',
    type: 'Public',
    emergency: true,
    services: ['Emergency', 'Cardiology', 'Oncology'],
    location: { wilaya: 'Alger', city: 'Sidi M\'Hamed', area: 'Mustapha' },
    address: 'Place du 1er Mai, Alger',
    lat: 36.7485,
    lng: 3.0576
  },
  {
    id: 'h-002',
    name: 'Clinique Ibn Sina',
    type: 'Private',
    emergency: false,
    services: ['Dermatology', 'Orthopedics', 'Laboratory'],
    location: { wilaya: 'Oran', city: 'Es Senia', area: 'Centre Ville' },
    address: 'Rue Ahmed Zabana, Oran',
    lat: 35.623,
    lng: -0.621
  }
];

export function searchDoctors(filters: SearchFilters): Doctor[] {
  const q = (filters.query ?? '').toLowerCase().trim();
  return doctors.filter((doctor) => {
    const queryMatch =
      !q ||
      doctor.fullName.toLowerCase().includes(q) ||
      doctor.specialty.toLowerCase().includes(q) ||
      doctor.affiliation.toLowerCase().includes(q);

    const specialtyMatch = !filters.specialty || doctor.specialty === filters.specialty;
    const wilayaMatch = !filters.wilaya || doctor.location.wilaya === filters.wilaya;
    const cityMatch = !filters.city || doctor.location.city === filters.city;

    return queryMatch && specialtyMatch && wilayaMatch && cityMatch;
  });
}

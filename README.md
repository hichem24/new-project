# DocDZ – Algeria Healthcare Finder

DocDZ is a healthcare directory MVP built with Next.js to help users in Algeria find doctors, clinics, and hospitals quickly.

## Current MVP Includes

- Smart search by doctor name, specialty, and clinic/hospital affiliation.
- Filters for wilaya and city/commune.
- Doctor profile cards with specialty, affiliation, contact details, and working hours.
- Hospitals and clinics listing with emergency availability flags.
- API endpoint for search queries.
- Starter admin dashboard for managing and reviewing listings.

## Tech Stack

- **Frontend / Backend**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Data layer**: In-memory seed data (upgrade-ready for Supabase/Firebase/PostgreSQL)

## Run Locally

```bash
npm install
npm run dev
```

Open:
- User app: `http://localhost:3000`
- Admin dashboard: `http://localhost:3000/admin`

## API

### `GET /api/search`

Query params:
- `q` (name/specialty/affiliation)
- `specialty`
- `wilaya`
- `city`

Example:

```bash
curl "http://localhost:3000/api/search?q=cardio&wilaya=Alger"
```

## Suggested Next Enhancements

- Persist data in Supabase with full Wilaya → City → Area hierarchy (58 wilayas).
- Add authentication + role-based admin management.
- Plug map provider (Mapbox/Google Maps) with geolocation + distance sorting.
- Add i18n (Arabic/French/English).
- Implement appointment booking and doctor verification workflows.

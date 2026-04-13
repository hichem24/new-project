import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DocDZ - Algeria Healthcare Finder',
  description: 'Find verified doctors, clinics, and hospitals across all Algerian wilayas.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

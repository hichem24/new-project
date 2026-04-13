import { NextRequest, NextResponse } from 'next/server';
import { searchDoctors } from '@/lib/data';

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') ?? undefined;
  const specialty = searchParams.get('specialty') ?? undefined;
  const wilaya = searchParams.get('wilaya') ?? undefined;
  const city = searchParams.get('city') ?? undefined;

  const results = searchDoctors({ query, specialty, wilaya, city });

  return NextResponse.json({ total: results.length, results });
}

import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Obra } from '@/types';

export async function GET() {
  try {
    const dataDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(
      path.join(dataDirectory, 'obras.json'),
      'utf8'
    );
    const data = JSON.parse(fileContents);
    const obras: Obra[] = data.obras;

    if (!Array.isArray(obras)) {
      throw new Error('Formato de datos inválido');
    }

    return NextResponse.json(obras);
  } catch (error) {
    console.error('Error loading obras:', error);
    return NextResponse.json(
      { error: 'Error loading obras' },
      { status: 500 }
    );
  }
}

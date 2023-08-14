import { Player } from '@/entities/dto';
import { NextResponse } from 'next/server';


export async function GET (): Promise<NextResponse<Player[]>> {
    const response = await fetch('http://localhost:8000');
    const players: Player[] = await response.json();
    return NextResponse.json(players);
};
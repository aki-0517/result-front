import { Player } from "@/entities/dto";

// GETリクエスト
export const getPlayers = async (): Promise<Player[]> => {
    const response = await fetch('http://localhost:8080');
    const players: Player[] = await response.json();
    return players
};



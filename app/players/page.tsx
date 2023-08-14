import React, { useEffect, useState } from 'react';
import NavigationBar from '../_components/NavigationBar';
import { Player } from '@/entities/dto';

export default async function Top() {


  const response = await fetch('http://localhost:3000/api');
  if (!response.ok) throw new Error('Failed to fetch data');
  const players: Player[] = await response.json();

  return (
    <div>
      <NavigationBar />
      <div className="p-8 bg-blue-100 text-center">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6">プレイヤー一覧</h1>
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-blue-200">
                <th className="w-3/4 py-2 text-blue-600 text-center">ユーザー名</th>
                <th className="w-3/4 py-2 text-blue-600 text-center">セイルナンバー</th>
                <th className="w-3/4 py-2 text-blue-600 text-center">ポイント</th>
                <th className="w-3/4 py-2 text-blue-600 text-center">性別</th>
              </tr>
            </thead>
            <tbody>
              {players.map((user) => (
                <tr key={user.sail_no} className="bg-blue-50">
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.sail_no}</td>
                  <td className="py-2">{user.point}</td>
                  <td className="py-2">{user.sex === "man" ? "♦︎" : "♦️"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

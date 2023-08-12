import React from 'react';
import NavigationBar from '../_components/NavigationBar';

export default function Login() {
  const rankings = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <div>
        <NavigationBar />
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl mb-4">ランキング入力</h2>
      <label className="block mt-4">
        日付
        <input
          type="date"
          className="p-2 border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 w-full mt-1"
        />
      </label>
      <label className="block mt-4">
        備考
        <textarea
          className="p-2 border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 w-full mt-1"
          rows={3}
          placeholder="ここに備考を入力してください。"
        ></textarea>
      </label>
        <ul>
          {rankings.map((rank) => (
            <li key={rank} className="flex items-center justify-between mb-2">
              <span className="text-gray-700">{rank} 位</span>
              <input
                type="number"
                className="p-2 border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 w-20"
                placeholder="番号"
              />
            </li>
          ))}
        </ul>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          送信
        </button>
      </div>
    </div>
    </div>
  );
}

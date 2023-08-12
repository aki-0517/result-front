import React from 'react';
import NavigationBar from '../_components/NavigationBar';

export default function Login() {
  return (
    <div>
        <NavigationBar />
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl mb-4">ログイン</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            ユーザー名
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          ログイン
        </button>
      </div>
    </div>
    </div>
  );
}

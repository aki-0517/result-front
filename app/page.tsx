import React from 'react';
import NavigationBar from './_components/NavigationBar';

export default function Top() {
  const rankings = [
    { id:"1", name: 'ユーザー1', point: 100, sail_no: 17, sex: "man" },
    { id:"2", name: 'ユーザー2', point: 90, sail_no: 17, sex: "woman" },
    { id:"3", name: 'ユーザー3', point: 85, sail_no: 17, sex: "man" },
    // 他のランキングデータも追加
  ];

  return (
    <div>
      <NavigationBar />
    <div className="p-8 bg-blue-100 text-center">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6">リザルトランキング</h1>
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-blue-200">
              <th className="w-1/4 py-2 text-left pl-4 text-blue-600 text-center">順位</th>
              <th className="w-3/4 py-2 text-blue-600 text-center">ユーザー名</th>
              <th className="w-3/4 py-2 text-blue-600 text-center">セイルナンバー</th>
              <th className="w-3/4 py-2 text-blue-600 text-center">ポイント</th>
              <th className="w-3/4 py-2 text-blue-600 text-center">性別</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : ''}>
                <td className="py-2 pl-4">{index + 1}</td>
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

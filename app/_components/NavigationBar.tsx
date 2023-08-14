import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white sticky top-0">
      <ul className="flex space-x-4">
        <li><Link href="/">トップ</Link></li>
        <li><Link href="/resultInput">リザルト入力</Link></li>
        <li><Link href="/edit">リザルト編集</Link></li>
        <li><Link href="/auth/email">ログイン</Link></li>
      </ul>
    </nav>
  );
}

import { DateTime } from 'luxon';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>2022 FIFAワールドカップ</title>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="container mx-auto ">
        <nav className="py-3 border-b-2">
          <div className="flex justify-between px-5 lg:px-32">
            <Link href="/">
              <h1 className="text-3xl font-black text-red-600">2022 FIFA</h1>
              <p className="text-center text-red-400">リアルタイム情報</p>
            </Link>
            <p className="my-auto font-semibold text-sm">
              {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
            </p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

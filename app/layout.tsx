// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400','500','700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'フルリモート総務・労務サポート',
  description: '総務・労務・経理・マニュアル化／DXをフルリモートで伴走支援。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

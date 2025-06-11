import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claude Code講座 - AIプログラミングを学ぼう',
  description: 'Claude Codeを使った効率的なプログラミング学習講座。AIを活用したコーディング技術を習得し、開発生産性を向上させましょう。',
  keywords: 'Claude Code, AI, プログラミング, 講座, コーディング, 開発, 学習',
  openGraph: {
    title: 'Claude Code講座 - AIプログラミングを学ぼう',
    description: 'Claude Codeを使った効率的なプログラミング学習講座',
    url: 'https://claude-code-course.com',
    siteName: 'Claude Code Course',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code講座 - AIプログラミングを学ぼう',
    description: 'Claude Codeを使った効率的なプログラミング学習講座',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  )
}
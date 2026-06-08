import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Taurus Futebol Training | Academia de Futebol Premium em Albufeira',
  description: 'Treinos técnicos de futebol, alta performance e acompanhamento individualizado em Albufeira, Algarve. Transforme o sonho do atleta em realidade.',
  keywords: ['futebol', 'treino', 'Albufeira', 'Algarve', 'academia', 'formação', 'atleta'],
  authors: [{ name: 'Taurus Futebol Training' }],
  openGraph: {
    title: 'Taurus Futebol Training | Academia de Futebol Premium',
    description: 'Treinos técnicos de futebol, alta performance e acompanhamento individualizado em Albufeira, Algarve.',
    type: 'website',
    locale: 'pt_PT',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Sports Tours Hungary – Aktív természetjárás Magyarországon',
  description:
    'Fedezze fel Magyarország természeti kincseit kerékpáros, gyalogtúra, futó és kalandtúra programjainkkal. Egyedi útvonalak, szakértő vezetők, felejthetetlen élmények.',
  keywords: 'kerékpáros túra, gyalogtúra, futótúra, természetjárás, Magyarország, aktív turizmus',
  authors: [{ name: 'Sports Tours Hungary Kft.' }],
  metadataBase: new URL('https://sportstourshungary.com'),
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://sportstourshungary.com',
    siteName: 'Sports Tours Hungary',
    title: 'Sports Tours Hungary – Aktív természetjárás',
    description: 'Fedezze fel Magyarország természeti szépségeit aktív túraprogramjainkkal.',
  },
}

export const viewport: Viewport = {
  themeColor: '#4a7c59',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' })

export const metadata: Metadata = {
  title: 'Clinique El Hikma | Chlef',
  description: 'Clinique El Hikma — Votre santé, notre priorité. Établissement hospitalier privé à Chlef, ouvert 24h/24 et 7j/7.',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#073b4c' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${inter.variable} ${playfair.variable} ${arabic.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

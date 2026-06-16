import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cosmiclean Nettoyage - Nettoyage de vitres à Vieux-Condé',
  description:
    'Service professionnel de nettoyage de vitres pour maisons, vitrines et bureaux dans le secteur de Valenciennes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-white text-[#333] antialiased leading-[1.7]`}
      >
        {children}
      </body>
    </html>
  )
}

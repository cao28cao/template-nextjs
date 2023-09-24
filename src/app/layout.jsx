
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import {Providers} from './providers'
const font = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next.js App',
  description: 'My Next.js App',
  keywords: 'next.js, nextjs, next, javascript, typescript, react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

import './globals.css';

import {Montserrat} from "next/font/google";

const montSerrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin-ext']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montSerrat.className}`}>{children}</body>
    </html>
  )
}

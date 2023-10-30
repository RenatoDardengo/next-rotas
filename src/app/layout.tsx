//è o arquivo usado para renderizar to as paginas
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto Next',
  description: 'Esse é meu projeto',
  //o campo 'description' não aparace no navegadores, mas sim quando compartilhamos o link nosso site
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

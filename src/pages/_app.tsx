import AppNavbar from '@/components/AppNavbar/AppNavbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Layout } from '@/components/Layout/Layout';
import Navbar from '@/components/AppNavbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (<main className={inter.className}>
    {/* <AppNavbar/> */}
    <Navbar/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
  )
}

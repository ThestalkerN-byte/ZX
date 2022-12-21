
import { Inter } from '@next/font/google'
import HomePage from '../src/components/home/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}

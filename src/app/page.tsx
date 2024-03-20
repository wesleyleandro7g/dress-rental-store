import { CategoriesBubbles } from '@/components/others/categories-bubbles'
import { Header } from '@/components/others/header'
import { HomeCarousel } from '@/components/others/home-carousel'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <HomeCarousel />
      <CategoriesBubbles />
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className='flex justify-center items-center w-full h-16 bg-white'>
      <div className='flex w-full justify-between items-center max-w-screen-xl'>
        <div className='flex items-center gap-8'>
          <Image
            src='/images/tuany-logo.png'
            alt=''
            width={100}
            height={100}
            className='w-24 h-auto'
          />
          <div className='flex items-center gap-4'>
            <Link href='/'>
              <h2>Home</h2>
            </Link>
            <Link href='/products?category=vestidos'>
              <h2>Vestidos</h2>
            </Link>
            <Link href='/products?category=noivas'>
              <h2>Noivas</h2>
            </Link>
            <Link href='/products?category=debutantes'>
              <h2>Debutantes</h2>
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <button>
            <Search className='size-6' />
          </button>
          <button className=''>
            <User className='size-6' />
          </button>
        </div>
      </div>
    </header>
  )
}

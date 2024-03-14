import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function HomeCarousel() {
  return (
    <div className='flex flex-1 flex-col h-screen relative'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full h-screen'
      >
        <CarouselContent className=''>
          <CarouselItem className=''>
            <Image
              src='/images/banner1.png'
              alt=''
              width={3000}
              height={3000}
              className='w-full object-cover'
            />
          </CarouselItem>
          <CarouselItem className=''>
            <Image
              src='/images/banner2.png'
              alt=''
              width={3000}
              height={3000}
              className='w-full object-cover'
            />
          </CarouselItem>
          <CarouselItem className=''>
            <Image
              src='/images/banner3.png'
              alt=''
              width={3000}
              height={3000}
              className='w-full object-cover'
            />
          </CarouselItem>
          <CarouselItem className=''>
            <Image
              src='/images/banner4.png'
              alt=''
              width={3000}
              height={3000}
              className='w-full object-cover'
            />
          </CarouselItem>
        </CarouselContent>

        <div className='absolute bottom-20 right-20 space-x-3'>
          <CarouselPrevious className='w-14 h-14 bg-transparent border-2 border-black hover:bg-transparent relative inset-0 -translate-y-0' />
          <CarouselNext className='w-14 h-14 bg-transparent border-2 border-black hover:bg-transparent relative inset-0 -translate-y-0' />
        </div>
      </Carousel>
    </div>
  )
}

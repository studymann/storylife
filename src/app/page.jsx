import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-color-primary min-h-[88.5vh] relative w-full flex items-center'>
      <div className="absolute inset-0">
        <Image src="/v_primary.png" fill className='py-10' />
      </div>
      <div className="absolute inset-1 top-20 left-[475px]">
        <div class="flex justify-center items-center box-border h-[478px] w-[413px] p-4 bg-color-light text-center rounded-t-[110px]">
          <Image src="/img1.jpg" alt='Image' width="413" height="478" className='flex h-[478px] w-[413px] justify-center items-center box-border py-4 bg-color-light text-center rounded-t-[110px] object-cover' />
        </div>
      </div>
      <div className="relative z-10 flex flex-row px-20">
        <div className="grid grid-cols-3 gap-4 pt-16">
          <div className="col-span-2">
            <h1 className="text-7xl text-color-light font-medium">STORY</h1>
            <h1 className="text-7xl text-color-light font-medium">LIFE</h1>
            <h1 className="text-7xl text-color-accent font-medium">PHOTOGRAPHER</h1>
            <Image src="/line.png" height={25} width={25} alt='Line' className='mt-24 mb-1' />
            <p className='text-3xl text-color-light font-bold'>Pro Photographer</p>
          </div>
          <div className="col-span-1 ps-10 pt-24">
            <p className="text-xl text-color-light text-center">“ Berbicara tentang sebuah moment penting dalam hidup yang takan pernah terlupakan, Maka kami akan membantu kamu untuk mengabadikannya. “</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Play, StarFour } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <div className='bg-color-primary min-h-[600px] md:min-h-screen relative w-full flex md:items-center'>
        <div className="absolute inset-0">
          <Image src="/v_primary.png" fill className='py-24' />
        </div>
        <div className="absolute inset-1 top-[30%] md:top-[10%] left-[13%] md:left-[35%]">
          <div className="flex justify-center items-center box-border h-[280px] md:h-[478px] w-[280px] md:w-[413px] p-4 bg-color-light text-center rounded-t-[80px] md:rounded-t-[110px]">
            <Image src="/img1.jpg" alt='Image' width="413" height="478" className='flex h-[280px] md:h-[478px] w-auto md:w-[413px] justify-center items-center box-border py-4 bg-color-light text-center rounded-t-[80px] md:rounded-t-[110px] object-cover' />
          </div>
        </div>
        <div className="absolute inset-2 top-[28%] md:top-20 left-[13%] md:left-[480px]">
          <div className="flex justify-center items-center box-border h-12 w-12 p-2 bg-color-accent text-center rounded-full">
            <StarFour size={18} weight="fill" className="text-color-light" />
          </div>
        </div>
        <div className="absolute inset-2 top-[67%] md:top-[480px] left-[72%] md:left-[835px]">
          <div className="flex justify-center items-center box-border h-20 md:h-28 w-20 md:w-28 p-2 text-center rounded-full bg-gradient-to-r from-color-grad via-color-accent to-color-grad rotate-45">
            <Play size={32} weight="fill" className="text-color-light -rotate-45" />
          </div>
        </div>
        <div className="relative z-10 flex flex-row px-4 md:px-20">
          <div className="grid grid-flow-row md:grid-cols-3 pt-10 md:gap-4 md:pt-0">
            <div className="col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl text-color-light font-bold drop-shadow-md flex flex-row md:flex-col gap-2 md:gap-0 justify-center md:justify-start">
                <span>STORY</span>
                <span>LIFE</span>
              </h1>
              <h1 className="text-4xl md:text-7xl text-color-accent font-bold drop-shadow-md">PHOTOGRAPHER</h1>
              <Image src="/line.png" height={25} width={25} alt='Line' className='mt-3 md:mt-24 mb-1 mx-auto md:mx-0' />
              <p className='text-lg md:text-3xl text-color-light font-medium md:font-bold'>Pro Photographer</p>
            </div>
            <div className="col-span-2 md:col-span-1 md:ps-10 md:pt-24 mt-72 md:mt-0">
              <p className="text-sm md:text-xl text-color-light text-center">“ Berbicara tentang sebuah moment penting dalam hidup yang takan pernah terlupakan, Maka kami akan membantu kamu untuk mengabadikannya. “</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
import { Play, StarFour } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const Profile = () => {
    return (
        <>
        <div className='bg-color-secondary min-h-[97vh] relative w-full flex items-center'>
          <div className="absolute inset-1 top-20 left-[285px]">
            <div className="flex justify-center items-center box-border h-[478px] w-[980px] p-3 bg-color-light text-center rounded-l-full">
              <Image src="/img1.jpg" alt='Image' width="413" height="478" className='flex h-[478px] w-full justify-center items-center box-border py-3 bg-color-light text-center rounded-l-full object-cover' />
            </div>
          </div>
          <div className="absolute inset-2 top-14 left-[1240px]">
            <div className="flex justify-center items-center box-border h-12 w-12 p-2 bg-color-accent text-center rounded-full">
              <StarFour size={18} weight="fill" className="text-color-light" />
            </div>
          </div>
          <div className="absolute inset-2 top-[480px] left-[385px]">
            <div className="flex justify-center items-center box-border h-28 w-28 p-2 text-center rounded-full bg-gradient-to-r from-color-grad via-color-accent to-color-grad rotate-45">
              <Play size={32} weight="fill" className="text-color-light -rotate-45" />
            </div>
          </div>
          <div className="relative z-10 flex flex-row px-20 pb-24">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <h1 className="text-7xl text-color-accent font-medium drop-shadow-md">PROFESSIONAL</h1>
                <h1 className="text-7xl text-color-light font-medium drop-shadow-md">WEDDING</h1>
                <p className='text-2xl text-color-light font-bold drop-shadow-md w-1/2 pt-5'>Berbicara tentang sebuah moment penting dalam hidup yang takan pernah terlupakan, Maka kami akan membantu kamu untuk mengabadikannya.</p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Profile
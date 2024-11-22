import Image from "next/image"
import teeth from '@/public/vector.png'
function Teeth({ className }) {
  return (
    <>
      <div style={{ borderRadius: '50%' }} className={`w-[50px] h-[50px] bg-skyBlue flex justify-center items-center ${className}`}>
        <Image src={teeth} />
      </div>
    </>
  )
}

export default Teeth
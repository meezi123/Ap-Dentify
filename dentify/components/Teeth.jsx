import Image from "next/image"

function Teeth({ className, img }) {
  return (
    <>
      <div style={{ borderRadius: '50%' }} className={`w-[50px] h-[50px] bg-skyBlue flex justify-center items-center ${className}`}>
        <Image src={img} />
      </div>
    </>
  )
}

export default Teeth
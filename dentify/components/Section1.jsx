import Button from "./Button";
import Image from "next/image";
import outerc from '@/public/outercircle.png'
import innerc from '@/public/innercircle.png'
import mainImage from '@/public/mainimg.png'
import Teeth from "./Teeth";
function Section1() {
  const booking = () => {
    alert("Thankyou for booking an Appointment")
  }
  return (
    <>
      <div className="w-full h-[680px]  pt-14 flex ">
        <div className="w-[50%] h-full  flex flex-col space-y-14 pt-14">
          <h1 style={{ lineHeight: '73px' }} className="text-[62px] font-semibold text-darkBlue">Get Ready For Your Best Ever Dental Experience!</h1>
          <p style={{ lineHeight: '31px' }} className="text-[20px] font-light text-black">Bringing you closer to better dental health with smart tools and expert care.</p>
          <div className="relative top-5">
            <Button text="Book an appointment" onClick={booking} />
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="flex relative flex-col">
            <Image
              src={outerc}

            />
            <Image
              className="absolute top-16 left-14"
              src={innerc}

            />
            <Image
              className="absolute  right-14"
              src={mainImage}
              width={680}
              height={680}
              style={{ filter: "drop-shadow(2px 2px 20px  rgba(0, 0, 0, 0.08))" }}
            />
            <Teeth className="absolute top-2 right-36" />

            <Teeth className='absolute top-48 right-14' />
            <Teeth className='absolute bottom-36 right-6' />
            <Teeth className="absolute top-40 left-16" />
            <Teeth className="absolute bottom-56 -left-4" />




          </div>

        </div>
      </div>
    </>
  )
}

export default Section1;
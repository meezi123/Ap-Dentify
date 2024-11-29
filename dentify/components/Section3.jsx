import SpecialistList from "./SpecialistList"
import dr1 from '@/public/image6.png'
import dr2 from '@/public/image7.png'
import dr3 from '@/public/image8.png'
import dr4 from '@/public/image9.png'
import rarrow from '@/public/RArrow.png';
import larrow from '@/public/LArrow.png';
import Image from "next/image"
function Section3() {
  const specialistArray = [{
    img: dr1,
    name: "Jim Carry",
    designation: "Orthodontist"
  },
  {
    img: dr2,
    name: "Wade Warren",
    designation: "Endodontist."
  },
  {
    img: dr3,
    name: "Jenny Wilson",
    designation: "Periodontist."
  },
  {
    img: dr4,
    name: "Jacob Jones",
    designation: "Pediatric Dentist."
  },
  {
    img: dr2,
    name: "Wade Warren",
    designation: "Endodontist."
  },
  ]
  return (
    <>
      <div className="w-full h-[760px]">
        <div className="w-full h-full  flex bg-lightBlue  p-10 pr-0 flex-col items-center space-y-20">
          <div className="flex flex-col space-y-6">
            <h1 className="text-darkBlue" style={{
              fontSize: "42px",
              fontWeight: "600",
              lineHeight: "52.5px",
              textAlign: "center",
              textUnderlinePosition: "from-font",

            }}>Meet Our Specialists</h1>
            <div className="w-[480px] flex h-[auto] justify-center items-center "><p className="text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p></div>
          </div>

          <SpecialistList arr={specialistArray} />
          <div className="flex space-x-2">
            <div className=" bg-secondaryColor w-[100px] h-[50px] flex justify-center items-center " >
              <Image src={rarrow} alt='arrow' />

            </div>
            <div className=" bg-secondaryColor w-[100px] h-[50px] flex justify-center items-center " >
              <Image src={larrow} alt='arrow' />
            </div>


          </div>

        </div>


      </div>
    </>
  )
}

export default Section3
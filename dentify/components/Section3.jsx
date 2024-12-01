import SpecialistList from "./SpecialistList"
import {returnArr} from '@/dummy-data/data'

function Section3() {
  const specialistArray = returnArr();
  return (
    <>
      <div className="w-full h-[760px]">
        <div className="w-full h-full  flex bg-lightBlue  p-10 flex-col items-center space-y-20">
          <div className="flex flex-col space-y-6">
            <h1 className="text-darkBlue" style={{//styleName: H2/Semibold;
              // font- family: General Sans;
              fontSize: "42px",
              fontWeight: "600",
              lineHeight: "52.5px",
              textAlign: "center",
              textUnderlinePosition: "from-font",

            }}>Meet Our Specialists</h1>
            <div className="w-[480px] flex h-[auto] justify-center items-center "><p className="text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p></div>
          </div>

          <SpecialistList arr={specialistArray} />
          {/* <div className="flex space-x-2">
            <div className=" bg-secondaryColor w-[100px] h-[50px] flex justify-center items-center " >
              <Image src={rarrow} />

            </div>
            <div className=" bg-secondaryColor w-[100px] h-[50px] flex justify-center items-center " >
              <Image src={larrow} />
            </div>


          </div> */}

        </div>


      </div>
    </>
  )
}

export default Section3
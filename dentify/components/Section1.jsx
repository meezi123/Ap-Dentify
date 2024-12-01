import Button from "./Button";
import Image from "next/image";
import outerc from "@/public/outercircle.png";
import innerc from "@/public/innercircle.png";
import mainImage from "@/public/mainimg.png";
import Teeth from "./Teeth";
import teeth2 from "@/public/teeth2.png";
import rightarrow from "@/public/rightarrow.png";
import teeth from "@/public/vector.png";
import { useRouter } from "next/router";
function Section1() {

  const router = useRouter();
  const booking = () => {
    alert("Thankyou for booking an Appointment");
  };
  return (
    <>
      <div className="w-full space-y-10">
        <div className="w-full h-[680px]  pt-14 flex ">
          <div className="w-[50%] h-full  flex flex-col space-y-14 pt-14">
            <h1
              style={{ lineHeight: "73px" }}
              className="text-[62px] font-semibold text-darkBlue"
            >
              Get Ready For Your Best Ever Dental Experience!
            </h1>
            <p
              style={{ lineHeight: "31px" }}
              className="text-[20px] font-light text-black text-center"
            >
              Bringing you closer to better dental health with smart tools and
              expert care.
            </p>
            <div className="relative top-5">
              <Button text="Book an appointment" onClick={booking} />
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="flex relative flex-col">
              <Image src={outerc} className="-z-20" alt='circle' />
              <Image className="absolute top-16 left-14 -z-20" src={innerc} alt='circle' />
              <Image
                className="absolute  right-14 -z-10"
                src={mainImage}
                width={680}
                height={680}
                alt='circle'
                style={{
                  filter: "drop-shadow(2px 2px 20px  rgba(0, 0, 0, 0.08))",
                }}
              />
              <Teeth img={teeth} className="absolute top-2 right-36" />
              <Teeth img={teeth} className="absolute top-48 right-14" />
              <Teeth img={teeth} className="absolute bottom-36 right-6" />
              <Teeth img={teeth} className="absolute top-40 left-16" />
              <Teeth img={teeth} className="absolute bottom-56 -left-4" />
            </div>
          </div>
        </div>
        <div
          style={{ borderRadius: "10px" }}
          className="w-full h-[400px] bg-lightBlue z-20 flex justify-center items-center"
        >
          <div
            style={{ borderRadius: "10px" }}
            className="w-[365px]  bg-secondaryColor flex flex-col space-y-5 p-5 cursor-pointer"
            onClick={() => {router.push('/caries')}}
          >
            <div className="flex flex-col  items-center">
              <Teeth className="h-[70px] w-[70px] i " img={teeth2} />
              <p className="text-[24px] font-medium">Caries</p>
            </div>
            <p
              className="text-[15px] font-medium flex justify-center items-center w-full text-center"
              style={{
                lineHeight: "23.25px",
                color: "rgba(0, 0, 0, 0.69)",
                letterSpacing: "1.5%",
              }}
            >
              Caries treatment involves removing the decayed portion of the
              tooth and restoring it with a filling, crown, or other restorative
              material to prevent further damage and restore function.
            </p>
            <div className="w-full flex justify-center space-x-1 items-center">
              <p
                style={{ textDecoration: "underline" }}
                className="text-[16px] font-medium  text-darkBlue"
              >
                Learn more
              </p>
              <span>
                <Image src={rightarrow} alt="arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;

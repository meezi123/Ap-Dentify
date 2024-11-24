import Image from "next/image";
import Phone from "@/public/phone.png";
import rect from "@/public/Rectangle.png";
import Button from "./Button";
import { useState } from "react";

function Section2() {
  const [phone, setPhone] = useState("");
  const submit = () => {
    console.log(phone);
    setPhone("")

  }
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <div className="w-[1400px] h-[400px]  flex  space-x-5">
        <div className="w-[50%] h-full flex flex-col justify-around space-y-5">
          <h1
            className="text-[42px] font-semibold text-darkBlue"
            style={{ lineHeight: "52.5px" }}
          >
            We’re Welcoming New Patients And Can’t Wait To Meet You.
          </h1>
          <p
            className="text-[18px] font-normal text-center text-textBody"
            style={{ lineHeight: "28px" }}
          >
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <div className="relative w-[460px] flex items-center -space-x-1 ">

            <input
              type="text"
              placeholder="Enter your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              className="w-[340px] h-full pl-14 py-[15px] border  focus:outline-none"
              style={{
                color: "rgba(0, 0, 0, 1)",
                "::placeholder": { color: "rgba(207, 207, 207, 1)" },
                border: '1px solid rgba(206,206,206,1)',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              }}
            />

            <Image
              src={Phone}
              alt="Phone"

              className="absolute top-1/2 left-4 transform -translate-y-1/2"
            />
            <div>
              <Button text='Submit' onClick={submit}
                style={{
                  borderTopLeftRadius: '0px',
                  borderBottomLeftRadius: '0px'

                }} />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex  items-center justify-center  relative">
          <div className="w-full h-full flex flex-col items-center justify-end ">
            <div className="z-10">
              <Image src={rect} alt="rect" />
            </div>
            <div className="w-[415px] h-[362px] absolute top-0 right-24 rounded-[10px] " style={{
              background:
                "linear-gradient(52.56deg, rgba(37, 180, 248, 0) 0%, rgba(37, 180, 248, 0.473958) 64.42%, #25B4F8 126.21%)",
            }}>


            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Section2;

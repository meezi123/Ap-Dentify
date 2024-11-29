import Image from "next/image";
import linkedIn from '@/public/LinkedIn.png'
function Specialist({ arr }) {

  return (
    <div
      className="w-[310px] h-[350px] bg-lightBlue rounded-[10px] relative flex flex-col justify-between py-5 items-center"
    >

      <Image
        src={arr.img}
        className="absolute rounded-[10px] z-0"
        layout="fill"
        objectFit="cover"
        alt="img"
      />

      {/* Gradient Overlay */}
      <div className="w-full  z-10 flex justify-end items-center px-6">
        <Image src={linkedIn} alt='linkdin' />


      </div>
      <div
        className="w-[275px] h-[90px]  rounded-[10px] z-10 flex flex-col  justify-center px-6"
        style={{
          backdropFilter: "blur(200px)",
          background: "linear-gradient(96.2deg, rgba(37, 180, 248, 0.3) 0%, rgba(37, 180, 248, 0) 100%)",
        }}
      >
        <h1 className="text-[24px] font-medium text-secondaryColor">{arr.name}</h1>
        <p className="text-[16px] text-secondaryColor font-medium">{arr.designation}</p>

      </div>



    </div>
  );
}

export default Specialist;

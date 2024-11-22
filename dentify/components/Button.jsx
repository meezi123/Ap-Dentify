// import { Children } from "react";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button style={{ borderRadius: '10px' }} className="py-[15px] px-[30px] bg-midBlue text-secondaryColor text-[16px]  font-semibold outline-none border-none " onClick={onClick}>
        {text}

      </button>

    </>
  )

}
export default Button;
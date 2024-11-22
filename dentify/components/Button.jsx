const Button = ({ text = "Click Me", onClick = () => { }, className = "", style = {} }) => {
  return (
    <button
      className={`py-[15px] px-[30px] bg-midBlue text-secondaryColor text-[16px] font-semibold outline-none border-none rounded-[10px] ${className}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

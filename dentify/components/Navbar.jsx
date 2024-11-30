import Image from 'next/image'; // Import the Image component
import Button from "./Button";
import logo from '@/public/logo.png';
import user from '@/public/user.png';
const Navbar = () => {
  const booking = () => {
    alert("Thankyou For booking !")

  }
  return (
    <>
      <nav style={{ borderRadius: '8px' }} className="w-full h-[90px] bg-lightBlue flex space-x-0 items-center justify-between ">
        <div style={{ borderRadius: '8px' }} className="h-full w-[162px] items-center justify-center px-1 ">
          {/* Use the Next.js Image component */}
          <Image
            src={logo}
            alt="Logo"
            className="object-contain"
            width={162} // Explicitly set the width
            height={90} // Explicitly set the height
            priority={true} // Optional: ensures the image is loaded ASAP
          />
        </div>
        <ul className='flex space-x-3 text-darkBlue font-sans'>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
        <div className='flex items-center space-x-6 w-[280px] '>
          <div className="h-full  items-center justify-center ">
            <Image
              src={user}
              alt="Logo"
              className="object-contain"
              // width={162} // Explicitly set the width
              // height={90} // Explicitly set the height
              priority={true} // Optional: ensures the image is loaded ASAP
            />
          </div>
          <Button text="Book Now" onClick={booking} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

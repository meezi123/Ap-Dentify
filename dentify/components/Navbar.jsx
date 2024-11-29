import Image from 'next/image'; // Import the Image component
import Button from "./Button";
import logo from '@/public/logo.png';
import Link from 'next/link';
import user from '@/public/user.png';
const Navbar = () => {
  const booking = () => {
    alert("Thankyou For booking !")

  }
  return (
    <>
      <nav style={{ borderRadius: '8px' }} className="w-full h-[90px] bg-lightBlue flex space-x-0 items-center justify-between ">
        <div style={{ borderRadius: '8px' }} className="h-full w-[162px] items-center justify-center px-1 ">

          <Image
            src={logo}
            alt="Logo"
            className="object-contain"
            width={162}
            height={90}
            priority={true}
          />
        </div>
        <ul className='flex space-x-3 text-darkBlue font-sans'>
          <Link href='/' className='text-[16px] font-medium'>Home</Link>
          <Link href='/x-ray' className='text-[16px] font-medium'>X-Ray</Link>
          <Link href='/about' className='text-[16px] font-medium'>About</Link>
        </ul>
        <div className='flex items-center space-x-6 w-[280px] '>
          <div className="h-full  items-center justify-center ">
            <Image
              src={user}
              alt="Logo"
              className="object-contain"

              priority={true}
            />
          </div>
          <Button text="Book Now" onClick={booking} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

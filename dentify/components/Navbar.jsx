import Image from 'next/image'; 
import Button from "./Button";
import logo from '@/public/logo.png';
import Link from 'next/link';
import userImage from '@/public/user.png';
import { getSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';


const Navbar = () => {
  const { user } = useUser();
  const [showLogOut, setLogOut] = useState(false)
  const router = useRouter();

  

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        setLogOut(true)
      }
    };
    checkSession();
  }, []);

  useEffect(() => {
    console.log("Navbar detected user context change:", user);
  }, [user]);

  const logoutHandler= () => {
    signOut()
    alert("Successful LogOut !")
  }
  const loginHandler = () =>{
    setLogOut(false)
    router.push('/Login')
  }
  return (
    <>
      <nav style={{ borderRadius: '8px' }} className="w-full h-[90px] bg-lightBlue flex space-x-0 items-center justify-between ">
      <div className="h-full w-[162px] flex items-center justify-center cursor-pointer">
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
          <Link href={`/User/${user || "default"}`}>
            <Image
              src={userImage}
              alt="user"
              className="object-contain"
              priority={true}
            />
            </Link>
          </div>
          {showLogOut ? <Button text="Logout" onClick={logoutHandler}/> : <Button text='Log In' onClick={loginHandler}/>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

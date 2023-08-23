'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { IoMenu, IoClose} from "react-icons/io5";
import { MdMenuBook, MdLogout } from "react-icons/md";

const Header = () => {
  const { data:session } = useSession();

  const [providers, setProviders] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    fetchProviders();
  }, [])

  const toggleDropdown = () => {
    setMobileNav((prev) => !prev); 
  }

  return (
    <header className='flex justify-between items-center h-auto py-4'>

      <Link href='/' className="flex gap-4 text-center items-center mx-8">
        <Image src='/assets/icons/logo_icon.svg' height={30} width={30} alt='MyRecipeFridge Logo' className='text-[color:var(--primary-color)]'/>
        <p className="hidden sm:flex font-bold text-lg">MyRecipeFridge</p>
      </Link>

      <div className='sm:flex hidden mx-8'>
          {session?.user ? (
            <div className="flex flex-row gap-4">
              <Link href='/create-recipe' className='primary-btn'>
                Share Recipe
              </Link>

              <button type='button' onClick={signOut} className='secondary-btn'>
                Sign Out
              </button>

              <Link href='/profile' className='items-center m-auto'>
                <Image src={session?.user.image} width={38} height={38} className='rounded-full' alt='Profile'/>
              </Link>
            </div>
          ): (
            <>
              {providers && Object.values(providers).map((provider) => (
                <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='primary-btn'>
                  Sign In
                </button>
              ))}
            </>
          )}
      </div>

      <div className='sm:hidden flex relative mx-8'>
        {session?.user ? (
          <div className='flex items-center'>
            <button type='button' onClick={toggleDropdown()} className='z-100 cursor-pointer'>
              {mobileNav ? (
                <div className='flex'>
                  <IoMenu size={32}/>
                </div>
              ): (
                <IoClose size={32}/>
              )}
            </button>

            {mobileNav ? (
              <div>
                <div className='dropdown'>
                  <Link href='/profile' className='dropdown-item' onClick={() => setMobileNav(false)}>
                    <Image src={session?.user.image} width={36} height={36} 
                      className='rounded-full' 
                      alt='Profile'
                    />
                    <div>My Profile</div>
                  </Link>

                  <Link href='/profile' className='dropdown-item' onClick={() => setMobileNav(false)}>
                    <MdMenuBook size={36}/>
                    <div>Share Recipe</div>
                  </Link>

                  <button type='button' className='dropdown-item' onClick={() => {setMobileNav(flase); signOut();}}>
                    <MdLogout size={36}/>
                    <div>Sign Out</div>
                  </button>
                </div>
              </div>
            ): (
              <></>
            )}
          </div>
        ): (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='primary-btn'>
                Sign In
              </button>
            ))}
          </>
        )}
      </div>

    </header>
  )
}

export default Header
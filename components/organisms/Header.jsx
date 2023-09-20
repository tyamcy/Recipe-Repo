'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { IoMenu, IoClose } from "react-icons/io5";
import { MdMenuBook, MdLogout } from "react-icons/md";

const Header = () => {
  const { data:session, status } = useSession();

  const [providers, setProviders] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);

  const goToHomePage = () => {
    window.location.href = '/';
  }

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    fetchProviders();
  }, []);


  return (
    <header className='flex justify-between items-center h-auto py-4 z-20'>

      <Link href='/' className="flex gap-4 text-center items-center mx-8">
        <Image src='/assets/icons/recipe_repo.svg' height={50} width={50} alt='MyRecipeFridge Logo' className='text-[color:var(--primary-color)]'/>
        <p className="hidden sm:flex font-bold text-xl text-[color:var(--primary-color)]">Recipe Repo</p>
      </Link>

      <div className='sm:flex hidden mx-8'>
          {session?.user ? (
            <div className="flex flex-row gap-4">
              <Link href='/share-recipe' className='primary-btn'>
                Share Recipe
              </Link>

              <button type='button' onClick={() => {signOut(); goToHomePage();}} className='secondary-btn'>
                Sign Out
              </button>

              
              <Link href={`/profile/${session?.user.id}`} className='items-center m-auto'>
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

      <div className='sm:hidden flex mx-8'>
        {session?.user ? (
          <div className='flex items-center'>

            <button type='button' onClick={() => setMobileNav(!mobileNav)} className='z-50 cursor-pointer'>
              {mobileNav ? (
                <div className='flex icon-btn'>
                  <IoClose size={32}/>
                </div>
              ): (
                <div className='flex icon-btn'>
                  <IoMenu size={32}/>
                </div>
              )}
            </button>


            {mobileNav ? (
              <div className='absolute top-0 left-0'>
                <div className='dropdown'>
                  <Link href={`/profile/${session?.user.id}`} className='dropdown-item' onClick={() => setMobileNav(false)}>
                    <Image src={session?.user.image} width={36} height={36} 
                      className='rounded-full' 
                      alt='Profile'
                    />
                    <div>My Profile</div>
                  </Link>

                  <Link href='/share-recipe' className='dropdown-item' onClick={() => setMobileNav(false)}>
                    <MdMenuBook size={36}/>
                    <div>Share Recipe</div>
                  </Link>

                  <button type='button' className='dropdown-item' onClick={() => {setMobileNav(false); signOut(); goToHomePage();}}>
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
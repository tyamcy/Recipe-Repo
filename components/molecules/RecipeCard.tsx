'use client';

import Image from "next/image"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

interface cardProps {
  title: string,
}

const RecipeCard = ({title}: cardProps) => {
  return (
    <div className='recipe-card w-96 bg-white shadow-lg p-3 cursor-pointer'>
      <div className='image flex items-center justify-center'>
        <div className='w-full h-48 bg-red-300'></div>
      </div>
      <h3 className='text-center italic font-semibold pt-2'>
        {title}
      </h3>
    </div>
  )
}

export default RecipeCard;
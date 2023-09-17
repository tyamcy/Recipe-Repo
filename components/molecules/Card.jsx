'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const Card = ({ post, handleClick, handleEdit, handleDelete}) => {
    const {data:session} = useSession();

    return (
        <div 
            className='recipe-card w-96 bg-white shadow-lg p-3 cursor-pointer'
            onClick={() => {alert('clicked');}}
        >
            <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                    <Image src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />      

                    <div className='flex flex-col'>
                        <h3 className='font-semibold text-gray-800'>
                            {post.creator.username}
                        </h3>
                    </div>   
                </div>
            </div>

            <div className='image flex items-center justify-center'>
                <div className='w-full h-48 bg-red-300'></div>
            </div>

            <div className='mx-2'>
                <h3 className='mt-2 mb-1 text-md text-[color:var(--text-primary)] text-left font-semibold'>
                    {post.recipe}
                </h3>
                <p 
                    className='text-sm cursor-pointer text-[color:var(--text-secondary)]' 
                    onClick={() => handleClick && handleClick(post.cuisine)}
                >
                    {post.cuisine}
                </p>
            </div>


        </div>
    )
}

export default Card
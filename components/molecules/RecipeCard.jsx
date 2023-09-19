'use client';

import { MdEdit, MdDelete } from 'react-icons/md';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const RecipeCard = ({ post, handleClick, handleEdit, handleDelete}) => {
    const {data:session} = useSession();
    const pathName = usePathname();

    return (
        <div className='recipe-card w-96 bg-white shadow-lg p-3'>
            <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start items-center gap-3'>
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

            <div className='mx-2 mt-2 flex flex-row justify-between'>
                <div className='left'>
                    <h3 className='mb-1 text-md text-[color:var(--text-primary)] text-left font-semibold'>
                        {post.recipe}
                    </h3>
                    <p 
                        className='text-sm cursor-pointer text-[color:var(--text-secondary)]' 
                        onClick={() => handleClick && handleClick(post.cuisine)}
                    >
                        {post.cuisine}
                    </p>
                </div>

                <div className='right'>
                    {session?.user.id === post.creator._id && pathName === `/profile/${session?.user.id}` && (
                        <div className='flex flex-row gap-1.5'>
                            <p 
                                className='icon-btn'
                                onClick={handleEdit}
                            >
                                <MdEdit size={24}></MdEdit>
                            </p>
                            <p 
                                className='icon-btn'
                                onClick={handleDelete}
                            >
                                <MdDelete size={24}></MdDelete>
                            </p>
                        </div>
                    )}  
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
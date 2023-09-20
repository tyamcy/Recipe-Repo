'use client';

import { MdEdit, MdDelete } from 'react-icons/md';
import { IoClose } from "react-icons/io5";

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const RecipeCard = ({ post, handleEdit, handleDelete}) => {
    const {data:session} = useSession();
    const pathName = usePathname();

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setTimeout(() => {
            setModalOpen(true);
            document.body.style.overflow = 'hidden';
        }, 200);
    }

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    }

    return (
        <div>
            {/* Modal */}
            {modalOpen && (
                <div className='recipe-modal'>
                    <div className='recipe-modal__content'>
                        <div className='pb-3 relative'>
                            <div 
                                className='recipe-modal-close-btn icon-btn'
                                onClick={closeModal}
                            >
                                <IoClose size={36}/>
                            </div>

                            <h2 className='text-4xl font-bold mb-1'>{post.recipe}</h2>

                            <p className='text-md mb-1 text-[color:var(--text-secondary)]'>Cuisine: {post.cuisine}</p>

                            <p className='text-md mb-1 text-[color:var(--text-secondary)]'>{post.description}</p>
                        </div>

                        <div className='my-2 flex justify-between items-start gap-5'>
                            <div className='flex-1 flex justify-start items-center gap-3'>
                                <Image src={post.creator.image}
                                    alt='user_image'
                                    width={36}
                                    height={36}
                                    className='rounded-full object-contain'
                                />      

                                <div className='flex flex-col'>
                                    <h3 className='font-semibold text-gray-800'>
                                        {post.creator.username}
                                    </h3>
                                </div>   
                            </div>
                        </div>

                        <h4 className='font-semibold text-lg pb-2 pt-6'>Steps:</h4>
                        <div className='instructions px-6'>
                            <ol className='list-decimal'>
                                {post.instructions.map((step, index) => (
                                    <li key={index} className='pb-2'>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            )}

            {/* Card */}
            <div className='recipe-card w-72 md:w-96 bg-white shadow-lg p-5'>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-row justify-between'>
                        <h3 
                            className='left mb-1 text-xl text-[color:var(--text-primary)] text-left font-semibold cursor-pointer'
                            onClick={openModal}
                        >
                            {post.recipe}
                        </h3>

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

                    <p 
                        className='text-md text-[color:var(--text-secondary)] my-2 cursor-pointer'
                        onClick={openModal}
                    >
                        {post.description}
                    </p>

                    <p className='text-sm text-gray-500'>
                        {post.cuisine}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;
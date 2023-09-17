'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Profile } from '@/components/templates'; 

const MyProfile = ({params}) => {
    const {data:session} = useSession();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            console.log(data);
            
            setPosts(data);
        }

        if (session?.user.id) {
            fetchPosts();
        }
    },[]);

    
    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <div>
        <div className='page__header'>
            <h1 className='page__title'>My Repo</h1>
            <p className='page__description text-center'>
                View the recipies that you shared here
            </p>
        </div>

        <Profile
            description=''
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    </div>
  )
}

export default MyProfile
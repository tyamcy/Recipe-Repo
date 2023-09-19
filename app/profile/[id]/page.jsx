'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Profile } from '@/components/templates'; 

const MyProfile = () => {
    const {data:session} = useSession();
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            
            setPosts(data);
        }

        if (session?.user.id) {
            fetchPosts();
        }
    },[]);

    
    const handleEdit = (post) => {
        router.push(`/update-recipe?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const confirmation = confirm('Are you sure you want to permanently delete this recipe?');
        if (confirmation) {
            try {
                await fetch(`/api/recipe/${post._id.toString()}`, {
                    method: 'DELETE'
                });

                const filtered = posts.filter((a) => a._id !== post._id);

                setPosts(filtered);
            } catch(error) {
                console.log(error);
            }
        }
    }

  return (
    <div>
        <div className='page__header'>
            <h1 className='page__title'>My Repo</h1>
            <p className='page__description text-center'>
                View, edit or delete the recipies that you shared here
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

export default MyProfile;
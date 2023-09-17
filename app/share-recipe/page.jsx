'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { RecipeForm } from '@/components/organisms';

const ShareRecipe = () => {
    const router = useRouter();
    const {data:session} = useSession();

    const [submit, setSubmit] = useState(false);
    const [post, setPost] = useState({
        recipe: '',
        cuisine: '',
    });

    const shareRecipe = async (e) => {
        e.preventDefault();
        setSubmit(true);

        try {
            const response = await fetch('/api/recipe/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    recipe: post.recipe,
                    userId: session?.user.id,
                    cuisine: post.cuisine,
                })

            })

            if(response.ok) {
                router.push('/');
            }

        } catch(error) {
            console.log(error);
        } finally {
            setSubmit(false);
        }
    };

    return (
        <div>
            <div className='page__header'>
                <h1 className='page__title'>Share Recipe</h1>
                <p className='page__description text-center'>
                    Share your recipe here by filling out the form
                </p>
            </div>

            <RecipeForm
                action='Share'
                post={post}
                setPost={setPost}
                submit={submit}
                handleSubmit={shareRecipe}
            />
        </div>
  )
}

export default ShareRecipe
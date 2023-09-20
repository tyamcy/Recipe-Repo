'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { RecipeForm } from '@/components/organisms';

const UpdateRecipe = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const recipeId = searchParams.get('id');

    const [submit, setSubmit] = useState(false);
    const [post, setPost] = useState({
        recipe: '',
        cuisine: '',
        description: '',
        instructions: [''],
    });

    useEffect(() => {
      const getRecipeInfo = async () => {
        const response = await fetch(`/api/recipe/${recipeId}`);
        const data = await response.json();

        setPost({
          recipe: data.recipe,
          cuisine: data.cuisine,
          description: data.description,
          instructions: data.instructions,
        })
      }

      if (recipeId) {
        getRecipeInfo();
      }

    }, [recipeId])

    const updateRecipe = async (event) => {
        event.preventDefault();
        setSubmit(true);

        if(!recipeId) {
          return alert('Recipe not found')
        }

        try {
            const response = await fetch(`/api/recipe/${recipeId}`, 
            {
                method: 'PATCH',
                body: JSON.stringify({
                    recipe: post.recipe,
                    cuisine: post.cuisine,
                    description: post.description,
                    instructions: post.instructions,
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
          <h1 className='page__title'>Update Recipe</h1>
          <p className='page__description text-center'>
              Edit and update your recipe here by modifying the form
          </p>
        </div>

        <RecipeForm
          action='Update'
          post={post}
          setPost={setPost}
          submit={submit}
          handleSubmit={updateRecipe}
        />
      </div>
  )
}

export default UpdateRecipe;
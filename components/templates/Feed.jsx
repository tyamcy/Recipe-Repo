'use client';

import { useEffect, useState } from 'react';

import { RecipeCard } from '@/components/molecules';

const RecipeCardList = ({data, handleClick}) => {
  return (
    <div className='mt-16 recipe-list-layout'>
      {data.map((post) => (
        <RecipeCard
          key={post._id}
          post={post}
          handleClick={handleClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearch = (event) => {
    const {value} = event.target;
    setSearchText(value); 

    if (value.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => {
        const postTitle = post.recipe.toLowerCase();
        const postCuisine = post.cuisine.toLowerCase();
        const search = value.toLowerCase();
  
        return postTitle.includes(search) || postCuisine.includes(search);
      })

      setFilteredPosts(filtered);
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/recipe');
      const data = await response.json();

      setPosts(data);
      setFilteredPosts(data);
    }

    fetchPosts();
  },[]);

  return (
    <section className='feed'>
      <form className='relative w-full sm:w-[80%] mx-auto flex flex-center justify-center'>
        <input
          type='text'
          placeholder='Search for a recipe or cuisine'
          value={searchText}
          onChange={handleSearch}
          required
          className='searchbar peer'
          id='searchbar-input'
          maxLength={100}
        >
        </input>
      </form>

      <RecipeCardList
        data={filteredPosts}
        handleClick={() => {}}
      />

    </section>
  )
}

export default Feed;
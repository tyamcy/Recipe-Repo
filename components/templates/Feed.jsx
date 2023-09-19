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

  const handleSearch = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/recipe');
      const data = await response.json();

      setPosts(data);
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
        >
        </input>
      </form>

      <RecipeCardList
        data={posts}
        handleClick={() => {}}
      />

    </section>
  )
}

export default Feed;
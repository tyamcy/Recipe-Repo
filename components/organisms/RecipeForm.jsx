'use client';

import Link from "next/link";

import { useState } from "react";

import { MdAdd, MdRemove } from "react-icons/md";

const RecipeForm = ({action, post, setPost, submit, handleSubmit}) => {
  const [instructions, setInstructions] = useState(post.instructions || ['']);

  const handleInstructionsChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
    setPost({...post, instructions: newInstructions});
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const removeInstruction = (index) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
    setPost({...post, instructions: newInstructions});
  };


  return (
    <section className='w-[80%] md:w-full max-w-full flex flex-col justify-center items-center mx-auto'>
      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7'
      >
        <label>
          <span className='font-semibold text-[color:var(--text-secondary)]'>
            Recipe Name
          </span>

          <textarea
            value={post.recipe}
            onChange={(event) => setPost({...post, recipe: event.target.value})}
            placeholder='Write here'
            className='form__textarea-sm'
            required 
            maxLength={60}
          />
        </label>

        <label>
          <span className='font-semibold text-[color:var(--text-secondary)]'>
            Cuisine (American, Chinese, Italian...)
          </span>

          <textarea
            value={post.cuisine}
            onChange={(event) => setPost({...post, cuisine: event.target.value})}
            placeholder='American, Chinese, Italian...'
            className='form__textarea-sm'
            required
            maxLength={30}
          />
        </label>

        <label>
          <span className='font-semibold text-[color:var(--text-secondary)]'>
            Instructions
          </span>

          {instructions.map((instruction, index) => (
            <div key={`instruction-${index}`} className='flex gap-2 items-center'>
              <textarea
                value={instruction}
                onChange={(event) => handleInstructionsChange(index, event.target.value)}
                placeholder={`Step ${index + 1}`}
                className='form__textarea-lg'
                required
                maxLength={320}
              />
            </div>
          ))}

          <div className='mt-2 ml-auto flex gap-2 justify-end'>
            <button 
              type='button'
              onClick={addInstruction}
              className='icon-btn'
            >
              <MdAdd size={30}/>
            </button>
            {instructions.length > 1 && (
              <button 
                type='button'
                onClick={() => removeInstruction(instructions.length - 1)}
                className='icon-btn'
              > 
                <MdRemove size={30}/>
              </button>
            )}
          </div>

        </label>

        <div className='flex flex-row justify-center mx-3 mb-5 gap-4'>
          <button
            type='submit'
            disabled={submit}
            className='primary-btn'
          >
            {submit? `${action}...` : action}
          </button>

          <Link href='/' className='tertiary-btn'>
            Cancel
          </Link>
        </div>
      </form>
    </section>
  )
}

export default RecipeForm;
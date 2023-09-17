import Link from "next/link"

const RecipeForm = ({action, post, setPost, submit, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex flex-col justify-center items-center mx-auto'>
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
            onChange={(e) => setPost({...post, recipe: e.target.value})}
            placeholder='Write here'
            className='form__textarea'
            required 
          />
        </label>

        <label>
          <span className='font-semibold text-[color:var(--text-secondary)]'>
            Cuisine {` `}
          </span>

          <textarea
            value={post.cuisine}
            onChange={(e) => setPost({...post, cuisine: e.target.value})}
            placeholder='American, Chinese, Italian...'
            className='form__textarea'
            required
          />
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

export default RecipeForm
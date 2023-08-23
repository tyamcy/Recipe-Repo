import Feed from "@/components/Feed"
import RecipeCard from "@/components/molecules/cards/RecipeCard"
import { CTA } from "@/components/templates"

const Home = () => {
  return (
    <section className='w-11/12 m-auto flex-center flex-col'>
      <div className='mb-12'>
        <h1 className='home__title text-center'>
          Discover and Share 
          <br></br>
          <span className='text-gradient'>Amazing Recipes</span>
        </h1>
        <p className='my-2 text-lg text-center mx-auto w-10/12 md:w-8/12'>
          Welcome to MyRecipeFridge - a place for you to explore, create and share your favourite recipes. 
          Dive into a virtual fridge filled with exciting culinary treasures, or pin your own recipes for other to savor!
        </p>
      </div>

      <Feed/>
      <div className='demo-recipies flex flex-wrap gap-3 justify-center'>
        <RecipeCard image={''} title={'Pan fried salmon'} link={'/'}/>
        <RecipeCard image={''} title={'Cabonara'} link={'/'}/>
        <RecipeCard image={''} title={'Pad thai'} link={'/'}/>
        <RecipeCard image={''} title={'Chinese dumplings'} link={'/'}/>
        <RecipeCard image={''} title={'Roasted chicken'} link={'/'}/>
        <RecipeCard image={''} title={'Tiramisu'} link={'/'}/>
      </div>
      

      <CTA/>
    </section>
  )
}

export default Home
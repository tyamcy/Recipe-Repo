import Feed from "@/components/templates/Feed"
//import RecipeCard from "@/components/molecules/RecipeCard"
import { Hero, CTA } from "@/components/templates"

const Home = () => {
  return (
    <section className='w-11/12 m-auto flex-center flex-col'>
      <Hero/>

      <Feed/>
      {/*
      <div className='demo-recipies flex flex-wrap gap-3 justify-center'>
        <RecipeCard image={''} title={'Pan fried salmon'} link={'/'}/>
        <RecipeCard image={''} title={'Cabonara'} link={'/'}/>
        <RecipeCard image={''} title={'Pad thai'} link={'/'}/>
        <RecipeCard image={''} title={'Chinese dumplings'} link={'/'}/>
        <RecipeCard image={''} title={'Roasted chicken'} link={'/'}/>
        <RecipeCard image={''} title={'Why is it not cursive'} link={'/'}/>
      </div>

      <CTA/>
      */}
    </section>
  )
}

export default Home
import Feed from "@/components/templates/Feed"
import { Hero } from "@/components/templates"

const Home = () => {
  return (
    <section className='w-11/12 m-auto flex-center flex-col'>
      <Hero/>
      <Feed/>
    </section>
  )
}

export default Home
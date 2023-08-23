import Image from "next/image"

interface RecipeCardProps {
  image: string,
  title: string,
  link: string
}

const RecipeCard = ({image, title, link}: RecipeCardProps) => {
  return (
    <div className='recipe-card w-96 bg-white shadow-md p-3 cursor-pointer'>
      <div className='flex items-center justify-center pb-2'>
        <div className='magnet w-5 h-5 rounded-full'></div>
      </div>
      <div className='image flex items-center justify-center'>
        <div className='w-full h-48 bg-red-300'></div>
      </div>
      
      <h3 className='pt-2'>{title}</h3>
    </div>
  )
}

export default RecipeCard
import { RecipeCard } from "@/components/molecules";
import { RiChatSmile2Fill } from "react-icons/ri";


const Profile = ({data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      {!data || data.length === 0 && (
        <div className='h-[36vh] flex justify-center items-center m-auto flex-col gap-4 text-gray-400'>
          <RiChatSmile2Fill size={48}/>
          <p className='font-semibold text-xl'>No recipes in your repo. Start posting!</p>
        </div>
      )}

      <div className='mt-10 recipe-list-layout'>
        {data.map((post) => (
          <RecipeCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>  
    </section>
  )
}

export default Profile;
import { RecipeCard } from "@/components/molecules";

const Profile = ({description, data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
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

export default Profile
import Card from "../molecules/Card";

const Profile = ({description, data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      <div className='mt-10 recipe-list-layout'>
        {data.map((post) => (
          <Card
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
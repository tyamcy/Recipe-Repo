const Footer = () => {
  return (
    <div className='footer flex justify-center bg-[color:var(--primary-color)]'>
        <div className='flex flex-col gap-2 justify-center text-center text-white py-8'>
            <p className='text-lg font-semibold'>MyRecipeFridge</p>
            <div>
              <p>A place for you to find and share recipes</p>
            </div>
            <p>&copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer
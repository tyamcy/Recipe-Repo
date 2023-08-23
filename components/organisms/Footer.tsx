import { BsHeartFill } from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer flex justify-center bg-[color:var(--primary-color)]'>
        <div className='flex flex-col gap-2 justify-center text-center text-white py-8'>
            <p className='text-lg font-semibold'>MyRecipeFridge</p>
            <div className='flex flex-row items-center gap-1'>
              <p>A place for you to find and share recipes</p>
              <BsHeartFill size={16}/>
            </div>
            <p>&copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer
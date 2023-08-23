import { LinkButton } from '@/components/atoms'

const CTA = () => {
  return (
    <div className='cta flex justify-center px-8 py-12'>
      <div className="flex flex-col bg-white w-11/12 md:w-8/12 m-auto px-6 py-8 shadow-lg">
        <p className='text-xl font-semibold text-center'>
          Want to find more recipes or share your own?
        </p>
        <div className='pt-4 flex justify-center'>
          <LinkButton link='' styling='primary-btn' text='Sign in'/>
        </div>
      </div>
    </div>
  )
}

export default CTA
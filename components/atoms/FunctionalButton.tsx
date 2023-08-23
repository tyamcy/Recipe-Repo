import Link from 'next/link'

interface ButtonParams {
  link: string,
  styling: string,
  text: string
}

const FunctionalButton = ({link, styling, text}: ButtonParams) => {
  return (
    <button type='button' className='primary-btn'>
        Sign In
    </button>
  )
}

export default FunctionalButton
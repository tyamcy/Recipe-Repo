import Link from 'next/link'

interface ButtonParams {
  link: string,
  styling: string,
  text: string
}

const LinkButton = ({link, styling, text}: ButtonParams) => {
  return (
    <Link href={link} className={styling}>
      {text}
    </Link>
  )
}

export default LinkButton
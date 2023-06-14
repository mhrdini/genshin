import React from 'react'

interface ButtonProps {
  large?: boolean
  icon?: string
  title: string
}

const Button = ({ large, title }: ButtonProps): JSX.Element => {
  const smallStyles = 'px-4 pb-0.5 pt-2 text-base'
  const largeStyles = 'px-5 pb-1 pt-3 text-lg'
  const generalStyles =
    'appearance-none rounded-full font-bold uppercase text-black bg-white ring-2 ring-black transition-colors duration-200 ease-in-out hover:bg-black hover:text-white focus:bg-black focus:text-white active:bg-black active:text-white focus:outline-none'

  return (
    <button className={`${large ? largeStyles : smallStyles} ${generalStyles}`}>
      {title}
    </button>
  )
}

export default Button

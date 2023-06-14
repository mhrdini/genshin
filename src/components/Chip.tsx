import React from 'react'

interface ChipProps {
  content: string
}

const Chip = ({ content }: ChipProps): JSX.Element => {
  return (
    <div className="cursor-default appearance-none rounded-full px-2 pt-1.5 font-sans text-sm font-normal text-black ring-2 ring-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none">
      {content}
    </div>
  )
}

export default Chip

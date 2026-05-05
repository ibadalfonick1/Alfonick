import React from 'react'

const Title = ({span, title}) => {
  return (
    <div>

    <div className="mt-10 max-w-236 m-auto text-center [&>span]:border [&>span]:border-[#FFFFFF26] [&>span]:text-white [&>span]:w-fit [&>span]:m-auto [&>span]:block [&>span]:shadow-[0_1px_7px_1px_#FFFFFF1A] [&>span]:rounded-full [&>span]:px-10 [&>span]:py-3 [&>span]:text-sm [&>h2]:text-[28px] sm:[&>h2]:text-[36px] md:[&>h2]:text-[42px] lg:[&>h2]:text-[56px] [&>h2]:text-white [&>h2]:mb-4 [&>h2]:mt-6 sm:[&>h2]:mt-4">
        <span>{span}</span>
        <h2>{title}</h2>
      </div>

    </div>
  )
}

export default Title
import React from 'react'

function Slide({item} : {item:Music}) {
  return (
    <div className=' relative w-full'>
        <img src={item.image} alt="" className='h-52 w-full object-cover rounded-4xl' />
        <div className='flex p-8 justify-start items-end absolute left-0 top-0 w-full h-full cursor-pointer rounded-br-4xl bg-black/10'>
          <div>
            <h2>
              {item.name}
            </h2>
            <p>
              {item.singer}
            </p>
          </div>
        </div>
        <div className=' absolute left-0 top-0 w-16 h-16 rounded-br-4xl bg-[#151515]'></div>
        <div className=' absolute right-0 bottom-0 w-16 h-16 rounded-tl-4xl bg-[#151515]'></div>
    </div>
  )
}

export default Slide
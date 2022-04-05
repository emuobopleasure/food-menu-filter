import React from 'react'

const Categories = ({categories, filterMenuItems, activeMenu}) => {
    console.log('active', activeMenu)
  return (
    <div className='buttons-container flex justify-around md:justify-center md:gap-10 mt-6'>
        {
            categories.map((category, index) => (
                <button className={activeMenu[index]? 'menu-button bg-[#c59d5f] text-white rounded' :
                    'text-[#c59d5f] px-2 font-bold '}
                    onClick={() => filterMenuItems (category, index)}
                    key={index}
                >
                    {category}
                </button>
            ))
        }
    </div>
  )
}

export default Categories
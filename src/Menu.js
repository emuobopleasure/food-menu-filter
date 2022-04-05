import React from 'react'

const Menu = ({menuItems}) => {
    // console.log(menuItems)
  return (
    <section className='menu-section mt-12 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12'>
        {
            menuItems.map((item) => {
                return ( 
                <article className='menu-article flex flex-col gap-5 mb-6 md:max-w-[40rem] md:flex-row'
                key={item.id}
                >
                    <img src={item.img} alt='food-menu'
                        className='h-[200px] w-full object-cover border-[0.25rem] border-[#c59d5f] rounded md:h-[150px] md:w-[15rem] md:basis-[40%] transform transition duration-300 hover:scale-110'
                    />
                    <div className='item-info md:basis-[60%]'>
                        <div className='item-name/price flex justify-between border-b-[1px] border-dotted border-[#617d98]'>
                            <h1 className='title text-[1rem] font-bold text-[#102a42]'>{item.title}</h1>
                            <h1 className='price text-[#c59d5f] font-bold'>${item.price}</h1>
                        </div>
                        <div className='item-desc'>
                            <p className='text-[#617d98] text-md pt-[1rem]'>{item.desc}</p>
                        </div>
                    </div>
                </article>
                )
            })
        }
    </section>
  )
}

export default Menu
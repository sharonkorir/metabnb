import hero from '../assets/hero/hero.png'

export function Hero(){
  return(
    
    <div className='pt-10 py-4 lg:py-[3rem] px-6 lg:px-40 mx-auto flex flex-col lg:flex-row items-center justify-between w-full'>
    <div className='md:w-[70%] lg:w-[45%] text-center lg:text-left mx-auto'>
      <h1 className='text-[2rem] lg:text-[3.5rem] mb-8'>
        Rent a{" "}
        <span className='capitalize text-[#A02279] font-bold'>place</span>{" "}
        away from{" "}
        <span className='capitalize text-[#A02279] font-bold'>home</span> in
        the{" "}
        <span className='capitalize text-[#A02279] font-bold'>
          metaverse
        </span>
      </h1>
      <p className="py-6 sm:py-2 leading-7 mb-4 text-lg">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
      <div>
        <form className='flex'>
          <input
            type='text'
            placeholder='Search for location'
            className='p-3 lg:p-4 w-[60%] outline-none border rounded-tl-[10px] rounded-bl-[10px] border-[#A3A3A3] text-xs'
          />
          <button className='px-6 lg:py-3 w-[40%] rounded-tr-[10px] rounded-br-[10px] bg-[#A02279] text-white font-normal text-xs lg:text-sm'>
            Search
          </button>
        </form>
      </div>
    </div>
    <div className='lg:w-[45%] mt-10 lg:mt-0'>
      <img src={hero} alt='hero section banner' />
    </div>
  </div>
  )
}
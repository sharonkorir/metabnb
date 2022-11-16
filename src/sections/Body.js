import metamask from '../assets/bridge/metamask.png';
import opensea from '../assets/bridge/open-sea.png';
import mbt from '../assets/bridge/mbt-token.png';
import nfts from '../assets/home/nfts.png';
import { Inspirations } from './Inspiration';

export function Body(){
  return(
    <div>
      <div className='flex bg-[#A02279] p-2'>
        <div className="lg:w-[80%] w-full mx-auto flex justify-between items-center max-w-[1200px]">
          <img src={mbt} alt='metamask' className="h-[24px] md:h-[20px] lg:h-[30px]" />
          <img src={metamask} alt='metamask' className="h-[24px] md:h-[20px] lg:h-[30px]" />
          <img src={opensea} alt='opensea' className="h-[24px] md:h-[20px] lg:h-[30px]" />
        </div>
      </div>
      {/* home display section */}
      <div>
        <Inspirations/>
      </div>
      <div className='bg-[#A02279] text-white px-10 py-[3rem] lg:px-[5rem] lg:py-[5rem]'>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto w-full">
          <div className='lg:w-[40%] mb-[5rem] md:mb-[3rem]'>
            <h2 className='capitalize text-[2rem] mb-5 lg:mb-10 font-bold'>
              Metabnb NFTs
            </h2>
            <p className='text-sm mb-5 lg:mb-10 leading-[1.8]'>
              Discover our NFT gift cards collection. Loyal customers gets amazing
              gift cards which are traded as NFTs. These NFTs gives our cutomer
              access to loads of our exclusive services.
            </p>
            <button className='px-6 py-3 rounded-[10px] text-[#A02279] bg-white font-normal text-sm'>
              Learn more
            </button>
          </div>
          <div className='md:w-[70%] hidden mx-auto lg:block lg:w-[50%]'>
            <img src={nfts} alt='nfts' />
          </div>
			  </div>
		  </div>
    </div>
  )
}
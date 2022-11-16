import metamask from '../assets/bridge/metamask.png';
import opensea from '../assets/bridge/open-sea.png';
import mbt from '../assets/bridge/mbt-token.png';
import nfts from '../assets/home/nfts.png';

export function Body(){
  return(
    <div>
      <div className='flex bg-[#A02279] my-2 p-2'>
        <div className="lg:w-[80%] w-full mx-auto flex justify-between items-center max-w-[1200px]">
          <img src={mbt} alt='metamask' className="h-[12px] md:h-[20px] lg:h-[30px]" />
          <img src={metamask} alt='metamask' className="h-[12px] md:h-[20px] lg:h-[30px]" />
          <img src={opensea} alt='opensea' className="h-[12px] md:h-[20px] lg:h-[30px]" />
        </div>
      </div>
      {/* home display section */}
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
    
    // <div>
    //   <div className='flex bg-[#A02279] my-2 p-2'>
    //     <div className="lg:w-[80%] w-full mx-auto flex justify-between items-center max-w-[1200px]">
    //       <img src={mbt} alt='mbt token logo'className="h-[12px] md:h-[20px] lg:h-[30px]"/>
    //       <img src={metamask} alt='mbt token logo'className="h-[12px] md:h-[20px] lg:h-[30px]"/>
    //       <img src={opensea} alt='mbt token logo'className="h-[12px] md:h-[20px] lg:h-[30px]"/>
    //     </div>
    //   </div>
    //   <div className="px-40 py-10"> Main content here</div>
    //   <div className='w-full' id='cta'>
    //     <div className="flex px-40 py-10">
    //       <div className='w-1/2'>
    //         <h1 className="text-3xl font-bold text-white leading-7 mb-4">Metabnb NFTs</h1>
    //         <p className='text-white leading-7 mb-4'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
    //       </div>
    //       <div className='w-1/2'>Images here</div>
    //     </div>
    //   </div>
    // </div>
  )
}
import metamask from '../assets/bridge/metamask.png';
import opensea from '../assets/bridge/open-sea.png';
import mbt from '../assets/bridge/mbt-token.png';


export function Body(){
  return(
    <div>
      <div className='flex items-center justify-around' id='bridge'>
        <div className='h-10'>
          <img src={mbt} alt='mbt token logo'/>
        </div>
        <div className='h-10 '>
          <img src={metamask} alt='mbt token logo'/>
        </div>
        <div className='h-10 '>
          <img src={opensea} alt='mbt token logo'/>
        </div>
      </div>
      <div className="px-40 py-10"> Main content here</div>
      <div className='w-full' id='cta'>
        <div className="flex px-40 py-10">
          <div className='w-1/2'>
            <h1 className="text-3xl font-bold text-white leading-7 mb-4">Metabnb NFTs</h1>
            <p className='text-white leading-7 mb-4'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          </div>
          <div className='w-1/2'>Images here</div>
        </div>
      </div>
    </div>
  )
}
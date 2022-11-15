import heroOne from '../assets/hero/hero 1.png';
import heroTwo from '../assets/hero/hero 2.png';
import heroThree from '../assets/hero/hero 3.png';
import heroFour from '../assets/hero/hero 4.png';


export function Hero(){
  return(
    <div className="px-40 py-40">
      <div className="flex">
        <div className="w-1/2 py-8 pr-28">
          <h1 className="text-5xl font-bold">Rent a <span className="text-pink-700">Place</span> away from <span className="text-pink-700">Home</span> in the <span className="text-pink-700">Metavarse</span></h1>
          <p className="py-6 sm:py-2 leading-7 mb-4">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search for location" className="input input-bordered w-96 h-14" />
              <button className="btn btn-primary normal-case h-14 w-56" id="search">Search</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-3/4">
            <div className="flex">
              <div className='w-1/2 mt-12'>
                <div className="flex">
                  <div className='w-full'>
                    <img src={heroOne} alt='hero one' className='p-1'/>
                  </div>
                </div>
                <div className="flex">
                  <div className='w-full'>
                    <img src={heroThree} alt='hero one' className='p-1'/>
                  </div>
                </div>
              </div>
              <div className='w-1/2'>
                <div className="flex">
                  <div className='w-full'>
                    <img src={heroTwo} alt='hero one' className='p-1'/>
                  </div>
                </div>
                <div className="flex">
                  <div className='w-full'>
                    <img src={heroFour} alt='hero one' className='p-1'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
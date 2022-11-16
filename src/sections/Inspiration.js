import home1 from '../assets/home/one.png';
import home2 from '../assets/home/two.png';
import home3 from '../assets/home/three.png';
import home4 from '../assets/home/four.png';
import home5 from '../assets/home/five.png';
import home6 from '../assets/home/six.png';
import home7 from '../assets/home/seven.png';
import home8 from '../assets/home/eight.png';

export function Inspirations(){
  return(
    <div className="py-8 px-2 lg:px-8 max-w-[1200px] mx-auto">
      <h1 className='text-center text-[1.4rem] lg:text-[2rem] font-bold mb-8'>
				Inspiration for your next adventure
			</h1>

      <div className="flex items-center justify-around gap-[10px] lg:gap-[15px] pb-15px">
        <div className="w-full lg:w-1/4">
          <img src={home1} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
        <div className="w-full lg:w-1/4">
          <img src={home2} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
        <div className="w-full lg:w-1/4">
          <img src={home3} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
        <div className="w-full lg:w-1/4">
          <img src={home4} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
      </div>
      <div className="flex items-center justify-around gap-[10px] lg:gap-[15px] pb-15">
        <div className="sm:w-full lg:w-1/4">
          <img src={home5} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
        <div className="sm:w-full lg:w-1/4">
          <img src={home6} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
        <div className="sm:w-full lg:w-1/4">
          <img src={home7} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
        <div className="sm:w-full lg:w-1/4">
          <img src={home8} alt='imspiration'className='lg:h-[372px] mx-auto mb-4'/>
        </div>
      </div>
    </div>
  )
}
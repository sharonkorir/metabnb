import footerLogo from '../assets/Group.svg';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

export function Footer(){
  return(
    <div className='bg-[#1D1D1E] text-white'>
      <footer className="footer py-10 px-10 lg:px-40">
        <div>
          <img src={footerLogo} alt='metabnb logo'/>
        <div>
          <div className="grid grid-flow-col gap-10 py-10">
            <a href='https://www.facebook.com'><img alt='facebook logo'src={facebook}/></a> 
            <a href='https://www.instagram.com'><img alt='facebook logo'src={instagram}/></a>
            <a href='https://www.twitter.com'><img alt='facebook logo'src={twitter}/></a>  
          </div>
        </div> 
        <div>
          <p className='text-sm'>© 2022 Metabnb</p>
        </div>
        </div> 
        <div>
          <span className="footer-title normal-case">Community</span> 
          <a className="link link-hover" href="#footer">NFT</a> 
          <a className="link link-hover" href="#footer">Tokens</a> 
          <a className="link link-hover" href="#footer">Landlords</a> 
          <a className="link link-hover" href="#footer">Discord</a>
        </div> 
        <div>
          <span className="footer-title normal-case">Places</span> 
          <a className="link link-hover" href="#footer">Castle</a> 
          <a className="link link-hover" href="#footer">Farms</a> 
          <a className="link link-hover" href="#footer">Beach</a> 
          <a className="link link-hover" href="#footer">Learn more</a>
        </div> 
        <div>
          <span className="footer-title normal-case">About us</span> 
          <a className="link link-hover" href="#footer">Roadmap</a> 
          <a className="link link-hover" href="#footer">Creators</a> 
          <a className="link link-hover" href="#footer">Career</a> 
          <a className="link link-hover" href="#footer">Contact us</a>
        </div>
      </footer>
    </div>
  )
}
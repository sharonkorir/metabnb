import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Body } from '../components/Body';

function Homepage(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Homepage;
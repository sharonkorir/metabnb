import  Navbar  from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { Body } from '../sections/Body';

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
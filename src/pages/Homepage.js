import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

function Homepage(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Homepage;
import NavBar from "./components/Navbar/NavBar";
import Dawa from "./components/Dawa/Dawa";
import Cards from "./components/fundamental/Cards";
import Offering from "./components/offering/Offering";
import Partner from "./components/partner/Partner";
import Contact from "./components/contact/Contact";
import  Curosel from "./components/curosel/Curosel";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <NavBar />  
      <Dawa />
      <Cards/>
      <Offering />
      <Partner /> 
      <Curosel />
      <Contact />
      <Footer/>   
    </div>
  )
}

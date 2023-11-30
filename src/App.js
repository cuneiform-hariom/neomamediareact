import './App.css';
import './style.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Casestudy from './components/Casestudy';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Services from './components/Services';
import Scroll from './components/Scroll';
import Sankalp from './components/Sankalp';
import Floraison from './components/Floraison';
import Arena from './components/Arena';
import Sams from './components/Sams';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Scroll/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/casestudy" element={<Casestudy />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/services" element={<Services/>} />          
          <Route  path="/sankalp" element={<Sankalp/>} />   
          <Route  path="/sams" element={<Sams/>} />   
          <Route  path="/arena" element={<Arena/>} />   
          <Route  path="/floraison" element={<Floraison/>} />   
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;

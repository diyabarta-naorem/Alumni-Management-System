import { Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Contact from './common/contact';
import Home from './common/home';
import AboutUs from './common/aboutUs'
import Services from './common/services';


function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      
    </div>
  );
}

export default App;

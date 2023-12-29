import { Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Contact from './pages/contact';
import Home from './pages/home';
import AboutUs from './pages/aboutUs'
import Services from './pages/services';
import LogIn from './pages/authen/login';
import Footer from './common/footer';



function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/logIn" element={<LogIn />} />
        
        
        
      </Routes>
        <Footer />
      
    </div>
  );
}

export default App;

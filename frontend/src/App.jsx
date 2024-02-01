import { Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Contact from './pages/contact';
import Home from './pages/home';
import AboutUs from './pages/about_us'
// import Event from './pages/event';
import Gallery from './pages/gallery';
import Members from './pages/members';
import Services from './pages/services';
import LogIn from './pages/authen/login';
import Register from './pages/authen/register';
import ForgotPass from './pages/authen/forgot_pass';
import Footer from './common/footer';




function App() {
  
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        {/*<Route path="/event" element={<Event/>} />*/}
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        
        
        
      </Routes>
        <Footer />
      
    </div>
  );
}

export default App;

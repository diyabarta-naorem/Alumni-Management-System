import logo from '../assets/logos/Logo.png';
import { NavLink } from 'react-router-dom';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    const currentTime = new Date().getUTCFullYear();
    return (
        <div className="mb-0 p-8 pb-0 bg-Bluee font-poppins md:px-0">
            <div className="text-white flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-96">
                <div className='flex flex-col space-y-1 '>
                    <img src={logo} className="w-16 md:w-20" alt="MTU Logo" />
                    <p>Manipur Technical University</p>
                    <p>Takyelpat</p>
                    <p>Imphal, Manipur 795004</p>
                </div>
                <div className='flex flex-col space-y-1'>
                    <h3 className='font-semibold text-2xl'>Quick Links</h3>
                    <NavLink to="/aboutus" className="hover:text-orange-400 hover:underline" >About</NavLink>
                    <NavLink to="/gallery" className="hover:text-orange-400 hover:underline" >Gallery</NavLink>
                    <NavLink to="/members" className="hover:text-orange-400 hover:underline" >Members</NavLink>
                    <NavLink to="/services" className="hover:text-orange-400 hover:underline" >Services</NavLink>
                    <NavLink to="/contact" className="hover:text-orange-400 hover:underline" >Contact</NavLink>
                </div>
                <div className='flex flex-col space-y-1'>
                    <h3 className='font-semibold text-2xl'>Contact</h3>
                    <div className='flex space-x-1'>
                        <FontAwesomeIcon icon={faPhone} className='hover:text-orange-400 p-1'/>
                        <p>(+91)1234567890</p>
                    </div>
                    <div className='flex space-x-1'>
                        <FontAwesomeIcon icon={faEnvelope} className='hover:text-orange-400 p-1'/>
                        <p>support@dummyEmail.org</p>
                    </div>
                </div>
            </div>
            <div className='flex space-x-3  mt-5 md:px-16'>
                <NavLink to="https://www.facebook.com/manipurtechnicaluniversity">
                    <FontAwesomeIcon icon={faFacebook} className='text-white text-2xl hover:text-orange-400' />
                </NavLink>
                <NavLink to="https://www.linkedin.com/groups/13854259/">
                    <FontAwesomeIcon icon={faLinkedin} className='text-white text-2xl hover:text-orange-400' />
                </NavLink>
            </div>
            <div className="p-3 border-t-2 mt-3 border-white">
                <p className="font-poppins text-sm text-center text-whitee">©{currentTime} Manipur Technical University. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    )
}
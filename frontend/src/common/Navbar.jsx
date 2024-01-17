import React, { useState } from 'react';
import mtuLogo from '../assets/logos/Logo.png';
import { NavLink,useNavigate } from "react-router-dom";


export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
	};
	
	const navigate = useNavigate();
	const goToRegister = () => {
		navigate("/register");
	}

  	return (
    	<nav className="bg-whitee font-poppins fixed w-full top-0 start-0 border-b border-gray-200 z-40">
      		<div className="w-full flex flex-row items-center justify-between mx-auto p-4">
        		<NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          			<img src={mtuLogo} className="h-8 md:h-12" alt="MTU Logo" />
          			<span className="self-center text-base md:text-lg font-semibold whitespace-nowrap text-black">MTU Alumni</span>
        		</NavLink>
        
				<ul className="md:flex hidden p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-whitee ">
					<li>
						<NavLink
						to="/"
						className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
							aria-current="page"
							onClick={toggleMenu}
						>
						Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/aboutUs'
							onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
						>
						About
						</NavLink>
					</li>
					{/*<li>
						<NavLink
							to='/event'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
						>
						Events
						</NavLink>
					</li>*/}
					<li>
						<NavLink
							to='/gallery'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
						>
						Gallery
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/members'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
						>
						Members
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/services'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
						>
						Services
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/contact'
							onClick={toggleMenu}
						className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent py-2 px-3 text-black hover:text-blue-700 block"}
						>
						Contact
						</NavLink>
					</li>
				</ul>
				<div className="flex flex-wrap items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<button onClick={goToRegister} type="button"
							className="text-white px-3 py-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-4 md:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							REGISTER
						</button>
					{/* hamburger */}
					<button
						onClick={toggleMenu}
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 shadow-lg border border-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-40"
						aria-expanded={isMenuOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				</div>
					
			</div>
				{
				//Phone version
				isMenuOpen ?
				<div className={`md:hidden items-center justify-between w-full md:w-auto md:order-1`} id="navbar-sticky">
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-whitee md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
						<li>
							<NavLink
							to="/"
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
								aria-current="page"
								onClick={toggleMenu}
							>
							Home
							</NavLink>
						</li>	
						<li>
							<NavLink
								to='/aboutUs'
								onClick={toggleMenu}
								className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
							>
							About
							</NavLink>
						</li>
						{/*<li>
							<NavLink
								to='/event'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
							>
							Events
							</NavLink>
						</li>*/}
						<li>
							<NavLink
								to='/gallery'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
							>
							Gallery
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/members'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
							>
							Members
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/services'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
							>
							Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact'
								onClick={toggleMenu}
							className={({isActive}) => isActive ? "bg-blue-700 rounded-lg py-2 px-3 text-white block": "bg-transparent rounded-lg py-2 px-3 text-black border border-gray-400 mt-1 block"}
							>
							Contact
							</NavLink>
								</li>

					</ul>
				</div> : null
			}
		</nav>
  	);
}

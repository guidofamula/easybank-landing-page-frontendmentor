import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import IconHamburger from "../../assets/images/icon-hamburger.svg";
import IconClose from "../../assets/images/icon-close.svg";

import Button from "../elements/Button";
import { navmenu } from "../../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	return (
		<section id='home'>
			<nav className='relative sm:fixed sm:max-md:w-full md:w-[1440px] flex items-center py-2 justify-between  shadow-md bg-netral-white md:z-30'>
				<div className='p-4'>
					<a href='/'>
						<img
							className='md:ml-[100px]'
							src={Logo}
							alt='Logo Icon Easybank'
						/>
					</a>
				</div>
				<div>
					<img
						className='sm:max-md:z-[9999] sm:max-md:ml-[320px] sm:max-md:mt-[28px] sm:max-md:absolute sm:max-md:top-0 sm:max-md:bottom-0 sm:max-md:left-0 sm:max-md:right-0 md:hidden sm:max-md:cursor-pointer'
						src={toggle ? IconClose : IconHamburger}
						alt='Logo Hamburger Icon'
						onClick={() => setToggle((prev: any) => !prev)}
					/>
				</div>
				<div
					className={`${
						toggle
							? "sm:max-md:absolute sm:max-md:top-0 sm:max-md:bottom-0 sm:max-md:left-0 sm:max-md:right-0 transition duration-300 ease-in-out"
							: "sm:max-md:hidden "
					}`}
				>
					<ul className='  flex sm:max-md:flex-col md:mr-[80px] sm:max-md:text-center sm:max-md:mt-[100px] sm:max-md:px-9 sm:max-md:py-5 sm:max-md:bg-netral-white sm:max-md:m-8 sm:max-md:rounded-md'>
						{navmenu.map((menu) => (
							<li key={menu.key} className='p-3'>
								<a
									className='md:py-5 md:text-netral-gray-blue hover:text-primary-dark-blue md:hover:border-b-4 md:hover:border-primary-lime-green transition duration-300 ease-in-out'
									href={menu.link}
								>
									{menu.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='sm:max-md:hidden md:mr-[240px]'>
					<Button />
				</div>
			</nav>
		</section>
	);
};

export default Navbar;

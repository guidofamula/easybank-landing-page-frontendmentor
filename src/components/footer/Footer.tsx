import Button from "../elements/Button";
import LogoIconFooter from "./LogoIconFooter";
import FooterChallenge from "./FooterChallenge";
import { navfooters1, navfooters2 } from "../../constants";

const Footer = () => {
	return (
		<footer>
			<div className='flex sm:max-md:flex-col md:justify-between bg-primary-dark-blue md:mt-16'>
				<LogoIconFooter />
				<div className='md:mt-11 md:my-auto md:-ml-[150px]'>
					<ul className='flex flex-col md:content-between text-netral-white sm:max-md:text-center'>
						{navfooters1.map((nav1) => (
							<li key={nav1.key} className='pt-1'>
								<a
									className='hover:text-primary-lime-green transition duration-300 ease-in-out'
									href={nav1.link}
								>
									{nav1.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='md:mt-11 md:my-auto md:-ml-[120px] sm:max-md:text-center'>
					<ul className='text-netral-white'>
						{navfooters2.map((nav2) => (
							<li key={nav2.key} className='pt-1'>
								<a
									className='hover:text-primary-lime-green transition duration-300 ease-in-out'
									href={nav2.link}
								>
									{nav2.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='sm:mt-5 md:mt-14 md:my-auto flex flex-col sm:max-md:mx-auto'>
					<div
						id='careers'
						className='md:pl-[100px] sm:max-md:mb-5 sm:max-md:mx-auto'
					>
						<Button classH1='sm:max-md:text-[12px] sm:max-md:px-4 md:px-2' />
					</div>
					<p className='md:pr-24 md:mt-5 text-netral-gray-blue sm:max-md:text-[13px] sm:max-md:mb-10'>
						© Easybank. All Rights Reserved
					</p>
				</div>
			</div>
			<FooterChallenge mentor='Frontend Mentor' name='Guido Famula' />
		</footer>
	);
};

export default Footer;

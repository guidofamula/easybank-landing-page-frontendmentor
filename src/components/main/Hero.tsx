import BgIntroDesktop from "../../assets/images/bg-intro-desktop.svg";
import BgIntroMobile from "../../assets/images/bg-intro-mobile.svg";
import ImageMockup from "../../assets/images/image-mockups.png";
import Button from "../elements/Button";

const Hero = () => {
	return (
		<section id='hero'>
			<div className='flex items-center md:-mt-10 justify-between bg-netral-v-light-gray sm:max-md:flex sm:max-md:flex-col-reverse'>
				<div className='md:ml-[115px] md:w-[50%]  md:-mt-[100px] '>
					<h1 className='text-[44px] sm:max-md:text-center -tracking-wide leading-tight text-primary-dark-blue font-normal-custom md:mt-16 sm:mt-12 md:mb-4'>
						Next generation digital banking
					</h1>
					<p className='text-netral-gray-blue text-paragraph md:mb-5 sm:max-md:text-center sm:max-md:text-[14px] sm:max-md:p-5 sm:max-md:leading-normal'>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<div className='sm:max-md:flex sm:max-md:justify-center sm:max-md:mb-20'>
						<Button classButton='sm:max-md:px-5' classH1='sm:max-md:px-3' />
					</div>
				</div>
				<div className='md:overflow-x-hidden'>
					<img
						className='sm:max-md:hidden md:ml-[150px] md:-mt-[140px] md:z-20'
						src={BgIntroDesktop}
						alt='Background for desktop'
					/>
					<img
						className='md:hidden'
						src={BgIntroMobile}
						alt='Background for mobile'
					/>
					<img
						className='md:-mt-[590px] sm:-mt-[530px] md:w-[540px] md:h-[680px] md:z-30 md:mx-[350px]'
						src={ImageMockup}
						alt='Image for mockup'
					/>
				</div>
			</div>
			<div className='bg-netral-l-gray-blue md:p-20 md:z-10 md:-mt-36'></div>
		</section>
	);
};

export default Hero;

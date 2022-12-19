import IconBudgeting from "../../assets/images/icon-budgeting.svg";
import IconOnline from "../../assets/images/icon-online.svg";
import IconApi from "../../assets/images/icon-api.svg";
import IconOnBoarding from "../../assets/images/icon-onboarding.svg";

import { services } from "../../constants";

const About = () => {
	return (
		<section id='about'>
			<div className=' flex flex-col bg-netral-l-gray-blue sm:max-md:mt-16 md:-mt-16'>
				<div className='md:ml-[110px] flex flex-col md:mb-5'>
					<h1 className='text-[28px] -tracking-wide sm:max-md:text-center sm:max-md:px-10 leading-tight text-primary-dark-blue font-normal-custom'>
						Why choose Easybank?
					</h1>
					<p className='text-netral-gray-blue text-paragraph md:mb-5 md:w-[52%] sm:max-md:text-[14px] sm:max-md:text-center sm:max-md:p-5 sm:max-md:leading-normal'>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
				<div className='md:ml-[110px] flex sm:max-md:flex-col md:flex-row md:mr-10 sm:max-md:text-center sm:max-md:px-10'>
					{services.map((service) => (
						<div key={service.key} className='md:pr-4'>
							<img
								className='sm:max-md:mx-auto sm:max-md:my-5'
								src={service.icon}
								alt={service.title}
							/>
							<h1 className='md:mt-4'>{service.title}</h1>
							<p className='md:mt-3 text-netral-gray-blue text-[14px] sm:max-md:my-4'>
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;

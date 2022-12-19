const FooterChallenge = (props: any) => {
	const { mentor, name } = props;
	return (
		<div
			id='contact'
			className='attribution bg-primary-dark-blue bg-opacity-90 py-4'
		>
			<span className='text-netral-white'>Challenge by</span>{" "}
			<a
				className='text-primary-bright-cyan font-bold text-opacity-70 hover:text-netral-white transition duration-300 ease-in-out'
				href='https://www.frontendmentor.io?ref=challenge'
				target='_blank'
			>
				{mentor}
			</a>
			<span className='text-netral-white'> Coded by</span>{" "}
			<a
				className='text-primary-bright-cyan font-bold text-opacity-70 hover:text-netral-white transition duration-300 ease-in-out'
				href='https://guidofamula.com'
			>
				{name}
			</a>
			.
		</div>
	);
};

export default FooterChallenge;

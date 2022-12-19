const Button = (props: any) => {
	const { children = "Request Invite", classButton, classH1 } = props;
	return (
		<button
			className={`${classButton} bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan rounded-3xl p-2 px-4 hover:opacity-70 transition duration-300 ease-in-out`}
		>
			<p
				className={`${classH1} text-netral-white font-normal-custom text-[14px] px-2`}
			>
				{children}
			</p>
		</button>
	);
};

export default Button;

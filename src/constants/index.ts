import IconApi from "../assets/images/icon-api.svg";
import IconBudgeting from "../assets/images/icon-budgeting.svg";
import IconFacebook from "../assets/images/icon-facebook.svg";
import IconInstagram from "../assets/images/icon-instagram.svg";
import IconOnBoarding from "../assets/images/icon-onboarding.svg";
import IconOnline from "../assets/images/icon-online.svg";
import IconPinterest from "../assets/images/icon-pinterest.svg";
import IconTwitter from "../assets/images/icon-twitter.svg";
import IconYoutube from "../assets/images/icon-youtube.svg";
import ImageConfetti from "../assets/images/image-confetti.jpg";
import ImageCurrency from "../assets/images/image-currency.jpg";
import ImageMockup from "../assets/images/image-mockups.jpg";
import ImagePlane from "../assets/images/image-plane.jpg";
import ImageRestaurant from "../assets/images/image-restaurant.jpg";

export const navmenu = [
	{
		key: "1",
		title: "Home",
		link: "#home",
	},
	{
		key: "2",
		title: "About",
		link: "#about",
	},
	{
		key: "3",
		title: "Contact",
		link: "#contact",
	},
	{
		key: "4",
		title: "Blog",
		link: "#blog",
	},
	{
		key: "5",
		title: "Careers",
		link: "#careers",
	},
];

export const navfooters1 = [
	{
		key: "about-us",
		title: "About Us",
		link: "#about",
	},
	{
		key: "contact",
		title: "Contact",
		link: "#contact",
	},
	{
		key: "blog",
		title: "Blog",
		link: "#blog",
	},
];

export const navfooters2 = [
	{
		key: "careers",
		title: "Careers",
		link: "#careers",
	},
	{
		key: "support",
		title: "Support",
		link: "#support",
	},
	{
		key: "privacy-policy",
		title: "Privacy Policy",
		link: "#privacy",
	},
];

export const services = [
	{
		key: "online-banking",
		title: "Online Banking",
		desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
		icon: IconOnline,
	},
	{
		key: "simple-budgeting",
		title: "Simple Budgeting",
		desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
		icon: IconBudgeting,
	},
	{
		key: "fast-onboarding",
		title: "Fast Onboarding",
		desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
		icon: IconOnBoarding,
	},
	{
		key: "open-api",
		title: "Open API",
		desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
		icon: IconApi,
	},
];

export const articles = [
	{
		key: "1",
		title: "Receive money in any currency with no fees",
		author: "Claire Robinson",
		excerpt:
			"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
		image: ImageCurrency,
		classContainer:
			"md:w-1/2 md:h-1/2 bg-netral-white shadow-md rounded-t-lg sm:max-md:my-4",
	},
	{
		key: "2",
		title: "Treat yourself without worrying about money",
		author: "Wilson Hutton",
		excerpt:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
		image: ImageRestaurant,
		classContainer:
			"md:w-1/2 md:h-1/2 bg-netral-white shadow-md rounded-t-lg mx-2 sm:max-md:mb-5",
	},
	{
		key: "3",
		title: "Take your Easybank card wherever you go",
		author: "Wilson Hutton",
		excerpt:
			"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
		image: ImagePlane,
		classContainer:
			"md:w-1/2 md:h-1/2 bg-netral-white shadow-md rounded-t-lg mx-2 sm:max-md:mb-5",
	},
	{
		key: "4",
		title: "Our invite-only Beta accounts are now live!",
		author: "Claire Robinson",
		excerpt:
			"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
		image: ImageConfetti,
		classContainer:
			"md:w-1/2 md:h-1/2 bg-netral-white shadow-md rounded-t-lg mx-2 sm:max-md:mb-10",
	},
];

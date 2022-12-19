import ImageConfetti from "../../assets/images/image-confetti.jpg";
import ImageCurrency from "../../assets/images/image-currency.jpg";
import ImagePlane from "../../assets/images/image-plane.jpg";
import ImageRestaurant from "../../assets/images/image-restaurant.jpg";

import { articles } from "../../constants";

const Blog = () => {
	return (
		<section id='blog'>
			<div className='bg-netral-v-light-gray md:mt-10'>
				<div className='flex flex-col md:ml-[110px] pt-16'>
					<h1 className='text-[32px] text-primary-dark-blue sm:max-md:text-center'>
						Latest Articles
					</h1>
					<div className='flex md:flex-row sm:max-md:flex-col mt-6 md:pr-20 sm:max-md:px-4'>
						{articles.map((article) => (
							<article key={article.key} className={article.classContainer}>
								<img
									className='rounded-t-lg object-cover h-[198px] w-full'
									src={article.image}
									alt={article.title}
								/>
								<div className='p-5 sm:max-md:p-9 sm:max-md:pr-2'>
									<p className='text-[12px] text-netral-gray-blue sm:max-md:mb-2'>
										By {article.author}
									</p>
									<h1 className='text-[20px] sm:max-md:text-[16px] sm:max-md:pr-5 text-primary-dark-blue leading-snug font-normal hover:text-primary-bright-cyan transition duration-300 ease-in-out cursor-pointer'>
										{article.title}
									</h1>
									<p className='text-[14px] text-netral-gray-blue mt-2 pr-6 md:pr-5 leading-snug tracking-tight text-justify'>
										{article.excerpt}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;

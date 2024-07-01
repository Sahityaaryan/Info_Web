import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import { SiGooglescholar, SiOrcid } from "react-icons/si";

const socialLinks = [
	{
		id: 1,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/dr-shailesh-m-pandey-34961820/?originalSubdomain=in',
	},
	{
		id: 2,
		icon: <SiGooglescholar />,
		url: 'https://scholar.google.co.in/citations?user=NquFNIsAAAAJ&hl=en',
	},
	{
		id: 3,
		icon: <SiOrcid />,
		url: 'https://orcid.org/0000-0002-9942-4238',
	},
];

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src={'/images/shal1.jpeg'}
					width={300}
					height={300}
					className="rounded-lg border-white w-[30rem]"
					alt="Profile Image"
				/>
				<div className='mt-4  text-center'>
					<p>
						<h1 className='font-semibold text-2xl'>Dr. Shailesh Mani Pandey</h1>
						<h1 className='font-semibold text-xl pt-2'>Assistant Professor</h1>
						<h1 className='pt-1'>Department of Mechanical Engineering</h1>
						<h1 className='pt-3'><span className='font-bold'>ph: </span> +91-8750111166</h1>

						<h1 className='pt-2'><span className='font-bold'>email: </span> smp.me@nitp.ac.in</h1>
						<div className='flex flex-col md:flex-row gap-x-4 w-full  gap-y-4'>

							{/* Social Links */}
							<div className="p-7 mx-auto">

								<ul className="flex gap-4 sm:gap-8">
									{socialLinks.map((link) => (
										<a
											href={link.url}
											target="__blank"
											key={link.id}
											className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 lg:p-3 duration-300"
										>
											<i className="text-xl sm:text-2xl md:text-3xl">
												{link.icon}
											</i>
										</a>
									))}
								</ul>
							</div>
						</div>


					</p>
				</div>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;

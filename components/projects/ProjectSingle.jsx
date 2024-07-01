import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const ProjectSingle = (props) => {

	const aboutResearchOriginalContent = (props.ProjectInfo.ProjectDetails[0]).details

	const aboutResearchContent = aboutResearchOriginalContent.substr(0,aboutResearchOriginalContent.length / 2);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href="/research/[id]"
				as={'/research/' + props.id}
				aria-label="Single Research"
				passHref
			>
				<div className="flex flex-col md:flex-row m-8 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900">
			<Image src={props.img} alt={"Research Picture"} width={800} height={800}  className="p-5 w-full md:w-1/2  mb-4 md:mb-0 md:mr-4" />
			<div className="md:w-3/4 flex flex-col p-3  place-content-center">
				<h4 className="text-lg font-semibold">{props.title}</h4>
				<p className='text-lg '>{aboutResearchContent}</p>
			
			</div>
		</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;

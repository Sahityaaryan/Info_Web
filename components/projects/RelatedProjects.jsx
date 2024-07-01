import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { projectData } from '../../data/researchData';

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Other Research
			</p>

			<div
                style={{ width: '70rem', height: '5rem',backgroundColor:'blue',display:'flex',flexDirection:'column',justifyContent: 'center'}}

                className="my-12"
            >
            <p className="text-white font-bold text-[2rem] text-center tracking-wide">Carausel should be used here to show the other projects</p>
                {/* Group photo */}
            </div>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{projectData.map((project, index) => {

					return (
						<>
							<Link
								href="/research/[id]"
								as={'/research/' + project.id}
								aria-label="Single Research"
								passHref
							>
								<Image
									src={project.img}
									className="rounded-xl cursor-pointer"
									width="400"
									height="400"
									alt={project.title}
									key={project.id}
								/>
							</Link>
						</>
					)
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;



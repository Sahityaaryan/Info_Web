import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectData } from '../../data/researchData';
import ProjectsFilter from './ProjectsFilter';

export default function ProjectsFlex() {
	const [searchProject, setSearchProject] = useState("");
	const [selectProject, setSelectProject] = useState();

	// @todo - To be fixed
	const searchProjectsByTitle = projectData.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject == ''
			? item
			: '';
		return result;
	});

	// const selectProjectsByCategory = projectData.filter((item) => {
	// 	let category =
	// 		item.category.charAt(0).toUpperCase() + item.category.slice(1);
	// 	return category.includes(selectProject);
	// });

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Research
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				{/* <h3
					className="
                        font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3> */}
				<div
					className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
					<div className="flex justify-between gap-2">
						<span
							className=" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className=" ont-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects" aria-label="Name"
						/>
					</div>

					{/* <ProjectsFilter setSelectProject={setSelectProject} /> */}
				</div>
			</div>

			<div className="mx-auto">
				{searchProject?searchProjectsByTitle.map((project,index)=>{
					
							return <ProjectSingle key={index} {...project}/>
						}): projectData.map((project, index) => {
							return (<ProjectSingle key={index} {...project} />)
						})}
					{/* <ProjectSingle key={1} /> */}
			</div>
		</section>
	);
}


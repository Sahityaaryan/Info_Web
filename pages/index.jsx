import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Journals from '../components/journals/JournalPreview';
import AppBanner from '../components/shared/AppBanner';
import Conference from '../components/conferences/Conference';
import Carousel from '../components/Carousel'

export default function Home() {
	return (
		<>
		<Carousel />
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />
{/* 
			<AppBanner /> */}
			
			
		<Conference
		showMoreConferences={true}
		/>

<Journals
	showMoreJournals={true}
	/>

			{/* <ProjectsGrid /> */}

			
		</div>
		</>
	);
}

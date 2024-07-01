import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsFlex from '../../components/projects/ProjectsGrid';

export default function Research() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Projects" />

			<ProjectsFlex />
		</div>
	);
}


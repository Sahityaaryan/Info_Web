import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsFlex from '../../components/projects/ProjectsGrid';

function index() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Projects" />

			<ProjectsFlex />
		</div>
	);
}

export default index;

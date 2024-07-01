import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';
import NewAppHeader from '../shared/NewAppHeader';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<PagesMetaHead />
			{/* <AppHeader /> */}
			<NewAppHeader/>
			<div>{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;

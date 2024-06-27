import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter(props) {


	const {firstTitle, secondTitle, thirdTitle, fourthTitle} = props;
	useCountUp({ ref: 'experienceCounter', end: firstTitle.value, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: secondTitle.value, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: thirdTitle.value, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: fourthTitle.value, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title={firstTitle.desc}
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title={secondTitle.desc}
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title={thirdTitle.desc}
					counter={<span id="feedbackCounter" />}
					measurement="Cr+"
				/>

				<CounterItem
					title={fourthTitle.desc}
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;

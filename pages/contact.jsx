import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import PagesMetaHead from '../components/PagesMetaHead';

function contact() {
	return (
		<div>
			<PagesMetaHead title="Contact" />
			<div className="h-72 bg-cyan-600 flex flex-col align-bottom justify-end p-6">
          	  <h1 className='text-2xl font-medium'>CONTACT US</h1>
        	</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<ContactForm />

				<ContactDetails />
			</motion.div>
		</div>
	);
}

export default contact;

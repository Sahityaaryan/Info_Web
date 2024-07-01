import { motion } from 'framer-motion';
import ContactDetails from '../../components/contact/ContactDetails';
import ContactForm from '../../components/contact/ContactForm';
import PagesMetaHead from '../../components/PagesMetaHead';

export default function Contact() {
	return (
		<section className="py-2 sm:py-5 mt-1 sm:mt-4">
			<PagesMetaHead title="Contact" />
			
                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 m-4 p-5 pb-12  text-ternary-dark dark:text-ternary-light">
                        Contact
                    </p>
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
		</section>
	);
}



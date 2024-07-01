import Link from "next/link"
import Button from "../reusable/Button"
import ConferenceData from "../../data/ConferenceData"
import ShowDataPoints from "../showDataPoints/ShowDataPoints"
export default function Conference({showMoreConferences}){



	return (
		<>
			<section className="py-2 sm:py-5 mt-1 sm:mt-4">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						Conferences
					</p>
				</div>

				<ShowDataPoints
					data={ConferenceData}
				/>

				{showMoreConferences &&(
					<>
					<div className="mt-10 sm:mt-15 flex justify-center">
					<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-800 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
						<Link href="/conferences" aria-label="More Conferences" passHref>
							<Button title="More Conferences" />
						</Link>
					</div>
				</div>
					</>
				)}
			</section>
		</>
	)

}
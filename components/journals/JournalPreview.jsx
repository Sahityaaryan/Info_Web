import Link from "next/link";
import JournalData from "../../data/journalData"
import Button from '../reusable/Button';
export default function Journals(){


    return(
        <>
        <section className="py-2 sm:py-5 mt-1 sm:mt-4">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Journals
				</p>
			</div>


                  <div>
					{
						JournalData.map(function(journal){
							let id = journal.id;
							return (
								id <= 4 ? (
									<div key={id}>
								<div
								className="font-general-medium flex justify-center items-center w-full mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
							>
								<div className="flex ">
								<span className="mx-2">&#9679;</span>
								<span className="text-sm sm:text-lg duration-100">
								{journal.text}
								</span>
								</div>
							</div>
								</div>
								):null
							)
						})
					}
				  </div>

			<div className="mt-10 sm:mt-15 flex justify-center">
				<div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
					<Link href="/journals" aria-label="More Journals" passHref>
						<Button title="More Journals" />
					</Link>
				</div>
			</div>
		</section>
        </>
    )
}
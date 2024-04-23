import React from 'react'
import Conference from '../conferences/Conference'
import Link from 'next/link'
import Button from '../reusable/Button'
import ShowDataPoints from '../showDataPoints/ShowDataPoints'

import { patentInReviewData , patentFiledData } from '../../data/patentData'

export default function Patents() {
    return (
		<>
        <section className="py-2 sm:py-5 mt-1 sm:mt-4">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    PATENTS FILED
					</p>
				</div>

                <div>
					{
						patentFiledData.map(function(payload){

							
							return (
								payload.id <= 4 ? (
									<div key={payload.id}>
									<div
									className="font-general-medium flex justify-center mx-auto items-center w-[90%] mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-red-800 text-gray-500 hover:text-white duration-500"
								>
									<div className="flex ">
									<span className="mx-2">&#9679;</span>
                                    
									<span className="text-sm sm:text-lg w-[90%] duration-100">
									<u>{payload.by}</u> {" :-  "}{payload.text}
									</span>
									</div>
								</div>
									</div>
								):null
							)
						})
					}
				</div>

				
			</section>
			<section className="py-2 sm:py-5 mt-1 sm:mt-4">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    PAPERS IN PEER-REVIEWED INTERNATIONAL JOURNALS
					</p>
				</div>

				<ShowDataPoints
					data={patentInReviewData}
				/>

				
			</section>
		</>
	)

}

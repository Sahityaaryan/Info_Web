import React from 'react'

import Journals from '../../components/journals/JournalPreview'
import Patents from '../patents/Patents';
import Conference from '../../components/conferences/Conference';

export default function Publications() {
  const [showConferences , setShowConferences] = React.useState(true);
  const [showJournals , setShowJournals] = React.useState(false);
  const [showPatents , setShowPatents] = React.useState(false);
   const selectedNavStyle = "font-general-medium bg-red-800 p-3 text-white rounded-md" 

   const toggleAppearance = ()=>{
       setShowConferences(!showConferences)
       setShowJournals(!showJournals)
       setShowPatents(!showPatents)
   }

   React.useEffect(()=>{

   },[showConferences,showJournals,showPatents])
  return (
    <>
      {/* carausel */}
    <div>
      
    </div>

    <div className=' w-3/4 mx-auto'>
    <nav>
        <ol className='flex'>
            <li className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
                <button onClick={()=>{setShowConferences(true); setShowJournals(false); setShowPatents(false)}} className={`p-3 transition ease-in-out delay-[50ms] hover:border-2 hover:rounded-md hover:border-red-600 ${showConferences ? selectedNavStyle : ''}`}>Conferences</button>
            </li>

            <li className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
                <button onClick={()=>{setShowConferences(false); setShowJournals(true); setShowPatents(false)}} className={`p-3 transition ease-in-out delay-[50ms] hover:border-2 hover:rounded-md hover:border-red-600 ${showJournals ? selectedNavStyle : ''}`}>Journals</button>
            </li>

            {/* <li className="bg-red-400"><a href="#">Journals</a></li> */}
            <li className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
                <button onClick={()=>{setShowConferences(false); setShowJournals(false); setShowPatents(true)}} className={`p-3 transition ease-in-out delay-[50ms] hover:border-2 hover:rounded-md hover:border-red-600 ${showPatents ? selectedNavStyle : ''}`}>Patents</button>
            </li>

        </ol>
    </nav>

    <div>
        {showJournals ? <Journals /> : null}
        {showConferences ? <Conference /> : null}
        {showPatents ? <Patents /> : null}
    </div>
</div>
    </>
  )
}



import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { rowData, columnData } from '../../data/sponsorsData';
import Image from 'next/image';

import { useState } from 'react';

export default function Sponsors() {
    const CustomButtonComponent = (props) => {
        return <button onClick={() => window.alert('clicked') }>Push Me!</button>;
    };

    const RowStyle = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': '1rem',
    }

    // const getRowStyle = params => {
    //     if (params.node.rowIndex % 2 === 0) {
    //         return { background: 'red' };
    //     }
    // };
    
    function getRowHeight(params) {
        // Assuming the server sends the row height as part of the row data
        return params.data.rowHeight;
    }


    const autoSizeStrategy = {
        type: 'fitGridWidth',
       

    };

    return (
        <>

            {/* main banner */}
            <div
                style={{ width: '100vw', height: '20rem', backgroundColor: 'blue', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}

                className="my-12"
            >
                <p className="text-white font-bold text-[2rem] text-center tracking-wide">Research</p>
                {/* Group photo */}
            </div>


            {/* Actual Grid */}

            <div className='container mx-auto'>

                   
                    {/* <AgGridReact
                        autoSizeStrategy={autoSizeStrategy}
                        rowData={rowData}
                        columnDefs={columnData}
                        domLayout='normal'
                        rowHeight={80}
                        rowStyle={RowStyle}
                        getRowHeight={getRowHeight}
                        rowSelection='multiple'
                        headerClass="my-header-class"
                        className='w-full'
                        defaultColDef={{ sortable: true, filter: true }}
                    /> */}
                    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">Advance wear and corrosion resistance coating development and commercialization In India
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">Development of Robust and Super Hydrophobic Plasma Sprayed Graphene reinforced TiAl Intermetallic membranes with improved Desalination in Membrane Distillation
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">FIST
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">Low cost gram scale high quality and defect free Graphene by scalable Plasma spraying
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">An investigation on Activated-TIG dissimilar welded joint of creep strength enhanced ferritic/martensitic P91 steel and Inconel 617 superalloy for Advanced Ultra-Supercritical (A-USC) power plant application.
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">Empowering Communities through Surface Engineering Excellence: Skill Development and Sustainable Growth in Tribology and Coatings
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">Development of Graphene and HfO2 doped Nd2Ce2O7 as a Novel Thermal Barrier Coating Material for Ultra-Critical High-Temperature Applications
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6 px-4">
      
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-red-800">Assessment of E-waste Management Practices in select areas of Bihar under Swachh Bharat Abhiyan
		  </h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
      <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
    </div>
    
    
    
                
        </div>
        </>
    )
}
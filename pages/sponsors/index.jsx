

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { rowData, columnData } from '../../data/sponsorsData';

import { useState } from 'react';
import MyAgGridTable from '../../components/sponsor/MyAgGridTable';

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
            <section className="py-2 sm:py-5 mt-1 sm:mt-4 flex flex-col items-center ">
                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 m-4 p-5 pb-12  text-ternary-dark dark:text-ternary-light">
                        Sponsors
                    </p>
                </div>


            {/* Actual Grid */}

            <div className='w-full md:w-2/3' ><MyAgGridTable rowData={rowData} columnData={columnData} /></div>

            </section>
        </>
    )
}
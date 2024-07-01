

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { rowData, columnData } from '../../data/sponsorsData';

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
            <section className="py-2 sm:py-5 mt-1 sm:mt-4">
                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 m-4 p-5 pb-12  text-ternary-dark dark:text-ternary-light">
                        Sponsors
                    </p>
                </div>


            {/* Actual Grid */}

            <div>

                <div
                    className="ag-theme-quartz, w-[90vw] md-[99vw] xl:w-[78rem] mx-auto border-4 rounded-2xl h-[43rem]" // applying the grid theme
                     // the grid will fill the size of the parent container
                >   
                    <AgGridReact
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
                    />
                </div>
            </div>

            </section>
        </>
    )
}


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
        // backgroundColor:'red'
        // paddingTop:'1rem'
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
        // defaultMinWidth: 100,
        columnLimits: [
            {
                colId: 'country',
                minWidth: 900
            }
        ]
    };

    return (
        <>

            {/* main banner */}
            <div
                style={{ width: '100vw', height: '20rem', backgroundColor: 'blue', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}

                className="my-12"
            >
                <p className="text-white font-bold text-[2rem] text-center tracking-wide">Sponsors</p>
                {/* Group photo */}
            </div>


            {/* Actual Grid */}

            <div>

                <div
                    className="ag-theme-quartz, w-[69.3rem] mx-auto border-4 rounded-2xl" // applying the grid theme
                    style={{ height: 300, }} // the grid will fill the size of the parent container
                >   
                    <AgGridReact
                        autoSizeStrategy={autoSizeStrategy}
                        rowData={rowData}
                        columnDefs={columnData}
                        domLayout='normal'
                        rowHeight={60}
                        rowStyle={RowStyle}
                        // getRowStyle={getRowStyle}
                        getRowHeight={getRowHeight}
                        rowSelection='multiple'
                        headerClass="my-header-class"
                        className='w-full'
                        defaultColDef={{ sortable: true, filter: true }}
                    />
                </div>
            </div>``
        </>
    )
}
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyAgGridTable = (props) => {
  const columnDefs = props.columnData;
  const rowData = props.rowData;

  

  return (
    <div className='ag-theme-alpine w-full h-screen '>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout="autoHeight" // Ensures the grid adjusts height automatically
        defaultColDef={{
          resizable: true,
          sortable: true,
        }}
        containerStyle={{ overflowX: 'auto' }} // Allows horizontal scrolling
      />
    </div>
  );
};

export default MyAgGridTable;

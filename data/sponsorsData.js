import { CustomButtonComponent } from "../components/button/sponsorButton";




const rowData = [
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology ",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" },
]

const columnData = [
    {field:'Projects', wrapText: true, // Enable text wrapping for this column
    autoHeight: true,},
    {field:'Sponsor',},
    {field:'Funded Amount', valueFormatter: p => { 
        console.log("p: ",p)
        return '₹' + p.value} },
    {field:'Current Status',cellRenderer: CustomButtonComponent  }
]


export  {rowData, columnData};
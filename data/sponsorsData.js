import { CustomButtonComponent } from "../components/button/sponsorButton";

import SponsorLogo from "../components/sponsor/SponsorLogo";


const rowData = [
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology ",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology ",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },

    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
]

const columnData = [
{ field: 'Projects',autoHeight:true, wrapText: true,flex: 1,
minWidth: 400, field: 'Projects', headerClass:'my-header-class' },
{ headerName: 'Sponsor',autoHeight:true, field: 'col2',headerClass:'my-header-class' , cellRenderer: SponsorLogo },
{field:'Funded Amount', valueFormatter: p => { 
    return '₹' + p.value} ,  headerClass:'my-header-class'},
{ headerName: 'Current Status', field: 'col3',cellRenderer: CustomButtonComponent, headerClass:'my-header-class' },
// Add as many columns as needed
];


export  {rowData, columnData};
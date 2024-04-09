import { CustomButtonComponent } from "../components/button/sponsorButton";

import SponsorLogo from "../components/sponsor/SponsorLogo";


const rowData = [
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology ",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology ",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },

    {Projects:"Center of Excellence in 'Wear and Corrosion Resistant Coating Technology",Sponsor:"sponsors", "Funded Amount":"578.0 lakhs", currentStatus: "Ongoing" ,  imageSource:'https://www.iitp.ac.in/~anup/assets/images/events/5c.png' },
]

const columnData = [
    {field:'Projects', wrapText: true, // Enable text wrapping for this column
    autoHeight: true, width:800 , headerClass:'my-header-class',flex:2},
    {field:'Sponsor',width:100 , headerClass:'my-header-class' , cellRenderer: SponsorLogo},
    {field:'Funded Amount', valueFormatter: p => { 
        return '₹' + p.value} ,  headerClass:'my-header-class'},
    {field:'Current Status',cellRenderer: CustomButtonComponent,  headerClass:'my-header-class', flex:1  }
]


export  {rowData, columnData};
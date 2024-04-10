import React from 'react'

export default function SponsorLogo(props) {

    const [img, setImg] = React.useState('https://www.iitp.ac.in/~anup/assets/images/events/5c.png')

    // console.log("props: ",props.data)
    return (
    
    <>

    <div 
    className='h-[4rem]'
    style={{backgroundColor:'red' , backgroundImage:`url(${img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
}}
    >
      
    </div>
    
    {/* <img src={'https://www.iitp.ac.in/~anup/assets/images/events/5c.png'} alt="Custom" style={{ objectFit:'contain', height: 'auto' }} /> */}
    </>
    )
}




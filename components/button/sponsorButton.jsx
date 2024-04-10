import { useEffect, useState } from "react";

const CustomButtonComponent = (props) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const handleChange = (e) => {
       setIsCompleted(!isCompleted)
    }

    const style = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer'
    }

    // useEffect(() => {console.log("color: ",currentColor);}, [currentColor])



    // console.log("props: ", props)
    return (
        <>

            {/* <p   className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm'>hi brow</p> */}
       

            <select className={`bg-[#${isCompleted ? "70e000":"e5383b"}] border-1 border-${isCompleted ? "70e000":"e5383b"}-50 rounded-3xl `} onChange={handleChange}>
                <option className="bg-white" value="on-going" selected>Ongoing</option>
                <option className="bg-white"  value="completed" >Completed</option>
            </select>
        </>
    );
};


export { CustomButtonComponent }


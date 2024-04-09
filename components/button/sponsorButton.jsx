import { useEffect, useState } from "react";

const CustomButtonComponent = (props) => {
    const [currentColor, setCurrentColor] = useState('red')

    const handleChange = (e) => {
        if (e.target.value == "on-going") {
            setCurrentColor('red')
        } else {
            setCurrentColor('green')
        }
    }
    const style = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer'
    }

    useEffect(() => { }, [currentColor])



    console.log("props: ", props)
    return (
        <>

            {/* <p className="bg-green-300">hi brow</p> */}

            <select className={`bg-${currentColor}-300 border-1 border-${currentColor}-50 rounded-3xl`} onChange={handleChange}>
                <option className={'bg-white border-1 border-green-50 rounded-3xl'} value="on-going" selected>Ongoing</option>
                <option value="completed" >Completed</option>
            </select>
        </>
    );
};


export { CustomButtonComponent }


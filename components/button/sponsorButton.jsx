import { useEffect, useState } from "react";

const CustomButtonComponent = (props) => {

    console.log("props(sponsorButton): ", props.data.currentStatus)

    const style = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer'
    }


    const [selectedValue, setSelectedValue] = useState(props.data.currentStatus);
    // const options = [
    //     { value: "ongoing", label: "Ongoing" },
    //     { value: "completed", label: "Completed" },
    // ];

    const ongoingClass = "bg-[#A5D6A7] border-1 border-[#A5D6A7]-50 rounded-3xl text-green-500";
    const completedClass = "bg-[#063970] border-1 border-[#063970]-50 rounded-3xl text-white";

    useEffect(() => {
        console.log("selectedValue: ", selectedValue);
    }, [selectedValue])

    return (
        <>

            <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className={selectedValue === "completed" ? completedClass : ongoingClass}
            >

                    <option className="bg-white" key={selectedValue} value={selectedValue}>
                        {selectedValue}
                    </option>

            </select>

            {/* Note: This should not be removed, This is here for future reference when this site has authorization facility */}
            {/* <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className={selectedValue === "completed"? completedClass : ongoingClass}
            >
                {options.map((option) => (
                    <option className="bg-white" key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select> */}
        </>
    );
};


// Note: that how the change the classNames dynamically? 


export { CustomButtonComponent }


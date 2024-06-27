import React from 'react';

function LabButtons({ labs, activeLab, setActiveLab }) {
    return (
        <ul className="lab-list flex flex-wrap justify-center space-x-4">
            {labs.map(lab => (
                <li
                    key={lab}
                    className={`lab-item cursor-pointer px-4 py-2 rounded-md 
                      ${activeLab === lab ? 'bg-black text-white' : 'bg-gray text-black'}
                      hover:bg-black hover:text-white transition duration-200 ease-in-out`}
                    onClick={() => setActiveLab(lab)}
                >
                    {lab}
                </li>
            ))}
        </ul>
    );
}

export default LabButtons;

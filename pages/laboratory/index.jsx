import React, { useState } from 'react';
import LabContent from '../../components/laboratory/LabContent';
function index() {
    const [activeLab, setActiveLab] = useState('Plasma Spray Coating Lab');

    return (
        <>
            <LabContent activeLab={activeLab} />
        </>

    );
}

export default index;

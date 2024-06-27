'use client'

import React, { useState } from 'react';
import LabContent from '../../components/laboratory/LabContent';
export default function Laboratory() {
    const [activeLab, setActiveLab] = useState('Plasma Spray Coating Lab');

    return (
        <>
            <LabContent activeLab={activeLab} />
        </>

    );
}



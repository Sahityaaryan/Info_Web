
'use-client'

import React, { useState } from 'react'
import Publications from '../../components/publications/Publications'
import Link from 'next/link'



export default function index() {


    return (
        <div>
            <div>
                {/* new carausel */}
                <div
                    style={{ width: '100vw', height: '20rem', backgroundColor: 'blue', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}

                    className="my-12"
                >
                    <p className="text-white font-bold text-[2rem] text-center tracking-wide">New Carausel will be here</p>
                    {/* Group photo */}
                </div>
                {/* <Outlet/> */}
                {/* false useState */}
                <div>

                <Publications/>
                </div>
            </div>
        </div>
    )
}

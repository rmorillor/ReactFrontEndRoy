import React from 'react';
import { SampleCrud } from '../crud/SampleCrud';
import { NavBar } from '../ui/NavBar';

export const SampleScreen = () => {
    return (
        <div>
            <NavBar />            

            <div className="container">

                <SampleCrud />

            </div>

        </div>
    )
}

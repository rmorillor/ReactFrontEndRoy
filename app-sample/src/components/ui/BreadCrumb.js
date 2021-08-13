import React from 'react';
import './BreadCrumb.css';

export const BreadCrumb = () => {
    return (
        <div className="mb-5 mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page"><span className="letterColor">Home</span></li>
                </ol>
            </nav>
        </div>
    )
}

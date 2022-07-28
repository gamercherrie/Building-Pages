import React from 'react'
import { 
    Navbar,
    RentalList
} 
from './components';

import oneB from './assets/1B.png';
import twoC from './assets/2C.jpg';
import threeE from './assets/3E.png'; 
import fourA from './assets/4A.png';
import fiveD from './assets/5D.png';
import sixF from './assets/6F.png';
import Cover from './assets/ES_Cover.jpg';

import './Singular.css';

const Singular = () => {
    return (
    <div className="singular__container">
        <Navbar address="115 East 90th Street New York, NY 10128 Co-Op"/>
        <div className="container-image">
            <img src={Cover} alt="East Street Cover Header" />
            <p>115 East 90th Street | a pre-war cooperative building built in 1929, then converted in 1987. The building 
                has 13 floors with 88 units.</p>
        </div>
        <div className="container-line"></div>
        <div className="container-rental">
            <div className="rental-header">
                <h1>Apartments for Rent</h1>
                <p>Please note that apartment availability is always changing. Some of these apartments may no longer be available,
                    while others may have been vacated recently.
                </p>
            </div>
            <RentalList image01={sixF} building01Text="6F" building01sub="$1,800 MONTHLY 1 BEDS/1 BATH" buttonLabel="Schedule a Visit"
            image02={oneB} building02Text="1B" building02sub="$1,675 MONTHLY STUDIO"/>
             <RentalList image01={fourA} building01Text="4A" building01sub="$2,200 MONTHLY 1 BEDS/1 BATH" buttonLabel="Schedule a Visit"
            image02={threeE} building02Text="3E" building02sub="$1,800 1 BEDS / 1 BATH"/>
             <RentalList image01={twoC} building01Text="2C" building01sub="$2,125 MONTHLY 1.5 BEDS/1 BATH" buttonLabel="Schedule a Visit"
            image02={fiveD} building02Text="5D" building02sub="$2,400 1 BEDS / 1.5 BATH"/>
            <div className="container-line"></div>
            <div className="container-footer">
                <div className="footer-header">
                    <h1>Building Policies</h1>
                </div>
                <div className="footer-content">
                    <div className="content-policy">
                        <div className="policy-header">
                            <h1>General Policies</h1>
                            <div className="content-line"></div>
                        </div>
                        <div className="policy-list">
                            <div className="list">
                                <h2>Pets Allowed</h2>
                                <p>Only owners may have dogs</p>
                            </div>
                           <div className="list">
                            <h2>Subletting Allowed</h2>
                            <p>Shareholders can sublet immediately; 30-day minimum</p>
                           </div>
                            <div className="list">
                                <h2>Parents Buying for Employed Children Allowed</h2>
                            </div>
                            <div className="list">
                                <h2>In-Unit Washer/Dryer Allowed</h2>
                            </div>
                            <div className="list">
                                <h2>No Smoking</h2>
                            </div>
                            <div className="list">
                                <h2>Parents Buying for Student Children Allowed</h2>
                            </div>
                        </div>

                    </div>
                    <div className="content-info">
                        <div className="info-header">
                            <h1>Additional Building Info</h1>
                            <div className="content-line"></div>
                        </div>  
                        <div className="info-list">
                            <h2>::Storage Available for free</h2>
                            <h2>::Applications reviewed by Building Counsel</h2>
                        </div>
                    </div>
                </div>
                <div className="container-line"></div>
                <div className="footer-list">
                    <h3>PROPERTY MANAGEMENT COMPANY</h3>
                    <h3>123 MAIN STREET</h3>
                    <h3>NEW YORK, NEW YORK 10000</h3>
                    <h3>215.555.2121</h3>
                    <h3>WWW.PROPERTYMANAGEMENTCO.COM</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Singular
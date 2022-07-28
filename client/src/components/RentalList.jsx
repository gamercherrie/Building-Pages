import React from 'react'
import { useNavigate } from "react-router-dom";

const RentalList = ({image01, image02, building01Text, building01sub, buttonLabel, building02Text, building02sub}) => {
    let navigate = useNavigate();
    const routeChange = event => {
        let path = event.currentTarget.id;
        navigate(path);
    } 
  return (
    <div className="rental__container">
        <div className="container_list">
            <div className="list-one">
                <div className="list-one_building">
                    <img src={image01} alt="" />
                    <div className="building-one_text">
                        <h1>{building01Text}</h1>
                        <h2>{building01sub}</h2>
                        <button id={building01Text} onClick={routeChange}>{buttonLabel}</button>
                    </div>
                </div>
            </div>
            <div className="list-two">
                <div className="list-two_building">
                    <img src={image02} alt="" />
                    <div className="building-two_text">
                        <h1>{building02Text}</h1>
                        <h2>{building02sub}</h2>
                        <button id={building02Text} onClick={routeChange}>{buttonLabel}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RentalList;
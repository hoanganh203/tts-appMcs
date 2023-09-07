import React from 'react'
import { AiOutlineStar } from "react-icons/ai"

const ItemApp = ({ img, name, content, button1, button2 }) => {
    return (<div className="app_component">
        <div className="app_component-header">
            <div className="app_component-header--img">
                <img src={img} />
            </div>
            <div className="app_component-header--name">
                <h2>{name}<span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path d="M4.64728 0.146379C4.84268 -0.0489476 5.15946 -0.0487703 5.35464 0.146775C6.5947 1.38913 7.96892 2 9.5 2C9.77614 2 10 2.22386 10 2.5V3.59971C9.68321 3.43777 9.34864 3.30564 9 3.20703V2.98121C7.51949 2.86895 6.18521 2.25528 5.00042 1.18917C3.81393 2.25491 2.47941 2.86879 1 2.98118V5.50126C1 6.93206 1.36125 8.06105 2.01735 8.9401C2.06968 9.60102 2.23884 10.229 2.50418 10.8035C0.844805 9.58881 0 7.81023 0 5.50126V2.5C0 2.22386 0.223858 2 0.5 2C2.02923 2 3.40416 1.38902 4.64728 0.146379ZM12 8.5C12 10.9853 9.98528 13 7.5 13C5.01472 13 3 10.9853 3 8.5C3 6.01472 5.01472 4 7.5 4C9.98528 4 12 6.01472 12 8.5ZM9.85355 6.64645C9.65829 6.45118 9.34171 6.45118 9.14645 6.64645L6.5 9.29289L5.85355 8.64645C5.65829 8.45118 5.34171 8.45118 5.14645 8.64645C4.95118 8.84171 4.95118 9.15829 5.14645 9.35355L6.14645 10.3536C6.34171 10.5488 6.65829 10.5488 6.85355 10.3536L9.85355 7.35355C10.0488 7.15829 10.0488 6.84171 9.85355 6.64645Z" fill="#5B5FC7" />
                </svg></span></h2>
                <p>Publisher</p>
            </div>
        </div>
        <div className="app_component-content">
            <p>{content}</p>
        </div>
        <div className="app_component-star">
            <span><AiOutlineStar /></span>
            <span><AiOutlineStar /></span>
            <span><AiOutlineStar /></span>
            <span><AiOutlineStar /></span>
            <span><AiOutlineStar /></span>
            <div className="app_component-star--text">
                <p>5.0 (14)</p>
            </div>
        </div>
        <div className="app_component-button">
            <button>{button1}</button>
            <button>{button2}</button>
        </div>
    </div>)
}

export default ItemApp

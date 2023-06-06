import React from "react";
import "./style.css";
import { GrClose } from "react-icons/gr";

const Model = ({handleModelClose, children}) =>{
    const handleCloseModel = () =>{
        handleModelClose();
    }
    return(
        <div className="model_container">
            <div className="modal_content">
                <span className="close_icon" onClick={handleCloseModel}>
                    <GrClose/>
                </span>
                {children}
            </div>
        </div>
    )
}

export default Model;
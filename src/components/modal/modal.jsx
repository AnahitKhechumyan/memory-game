import React from "react";
import PropTypes from  "prop-types";

export const Modal = ({open, children, title}) => {
    if(!open){
        return null;
    }

    return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                </div>
                <div className="modal-body">
                    <p>{children}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    children: PropTypes.node
}
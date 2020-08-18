import React from "react";
import PropTypes from "prop-types";
import './style.less';
import Footer from "../../Footer/Footer";
import PageName from "../PageName/PageName";

function ModalDialog (props) {

    function reset() {

    }

    return (
        <div className="modal-dialog-container">
            <PageName/>
            <div className="modal-dialog-box-sm">
                <div className = "modal-title">
                    <h1 className="modal-close" onClick={props.onCloseClicked}>x</h1>
                    <h1>{props.title}</h1>
                </div>
                <div className="modal-content">
                    {props.children}
                </div>
                <div className="modal-footer clearfix">
                    <button className="btn btn-md btn-main right-align">{props.okText}</button>
                    <button className="btn btn-md btn-transparent right-align" onClick={() => reset()}>{props.resetText}</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

ModalDialog.propTypes = {
    title: PropTypes.string,
    okText: PropTypes.string,
    resetText: PropTypes.string,
    onSubmit: PropTypes.func,
    onCloseClicked: PropTypes.func,
}

export default ModalDialog;
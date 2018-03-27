import React from "react";

import "./button.css"

export class FileUploadButton extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="upload-btn-wrapper">
                <button className="upload-btn shadow">Create Report</button>
                <input type="file" accept="image/*"/>
            </div>
        );
    }
}

export class ServiceRequestButton extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button>My Service Requests</button>
        );
    }
}
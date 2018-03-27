import React from "react";

import {FileUploadButton} from "../button/Button";

import "./Menu.css";

export default class Menu extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrapper">
                <h1 className="children" id="title">SnapHole</h1>
                <FileUploadButton className="children" id="file_upload"/>
            </div>
        );
    }
}